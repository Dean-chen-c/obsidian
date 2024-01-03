
>本文将从CJS实现原理，ESM实现原理以及二者在处理循环加载差异对二者进行分析

- [[#从实现CommonJS的require方法开始|从实现CommonJS的require方法开始]]
- [[#从代码角度看CJS中的循环加载的处理方式|从代码角度看CJS中的循环加载的处理方式]]
- [[#CJS总结|CJS总结]]
- [[#ES Module是如何工作的|ES Module是如何工作的]]
- [[#ESM阶段|ESM阶段]]
	- [[#ESM阶段#构建阶段|构建阶段]]
	- [[#ESM阶段#实例化阶段|实例化阶段]]
	- [[#ESM阶段#赋值阶段|赋值阶段]]
- [[#关于ESM的总结|关于ESM的总结]]


# 关于CommonJS

## 从实现CommonJS的require方法开始

```javascript
const { resolve, extname } = require('path')
const fs = require('fs')
const { runInThisContext } = require('vm')
// 1，Module类负责创建CJS中的module对象
class Module {
    constructor() { this.exports = {} }
}
// 2，Module.cache用来缓存已经require的模块结果
Module.cache = []
// 3，Module.extnames保存当前require可处理的两种文件类型，这里目前仅处理JS文件与JSON文件
Module.extnames = ['.js', '.json']
// 4，实现我们的require方法
function require_(path) {
    // 5，将文件路径处理成绝对路径
    path = resolve(path)
    // 6，如果文件不是JS文件或者JSON文件，那么不对其进行处理
    if (!Module.extnames.includes(extname(path))) return
    // 7，如果不存再当前文件，那么不对其进行处理
    try {
        fs.accessSync(path)
    } catch (error) {
        return
    }
    // 8，如果缓存中有当前当前模块的缓存结果，那么直接返回缓存结果
    if (Module.cache[path]) return Module.cache[path].exports
    // 9，创建CommonJS中的module对象
    const module = new Module()
    // 10，提前将module放在缓存中，应对CJS中循环引用
    Module.cache[path] = module
    // 11，如果是JSON文件，直接读JSON内容，添加到module.exports中，返回
    if (extname(path) === '.json') {
        const content = fs.readFileSync(path, 'utf8')
        module.exports = content
        return module.exports
    } 
    // 12，如果是JS文件
    else {
        // 13，读取JS文件内容，使用(function (require,module,exports){ })对模块内容进行包裹，生成JS函数字符串
        const script = `(function (require,module,exports){${fs.readFileSync(path, 'utf8')}})`
        // 14，将处理后的JS函数字符串再node全局上下文中运行获取该函数，全局上下文中运行的意义在于防止污染局部作用域
        const fn = runInThisContext(script)
        // 15，执行该模块函数，并注入CJS中的require，module以及exports
        fn.call(this, require_, module, module.exports)
        // 16，返回该模块最终导出的内容
        return module.exports
    }
}
```

## 从代码角度看CJS中的循环加载的处理方式

这是一个来自阮一峰ES6中的例子，例子很简单，我们有两个模块，分别是a模块（a.js）与b模块（b.js），模块内容如下，a模块与b模块发生了循环加载

```javascript
// a.js

// a1：导出一个done属性且为false
exports.done = false;
// a2：加载b模块
var b = require('./b.js');
// a3：打印b模块导出属性done的值
console.log('在 a.js 之中，b.done = ', b.done);
// a4：a模块的done属性重新赋值为ture
exports.done = true;
// a5：打印a.js执行完毕
console.log('a.js 执行完毕');
```

```js
// b.js

// b1：导出一个done属性且为false
exports.done = false;
// b2：加载a模块
var a = require('./a.js');
// b3：打印a模块导出属性done的值
console.log('在 b.js 之中，a.done = ', a.done);
// b4：b模块的done属性重新赋值为ture
exports.done = true;
// b5：打印b.js执行完毕
console.log('b.js 执行完毕');
```

现在，在index.js中，使用前面实现的require方法，开始对a模块进行加载

```js
// index.js

// ... require_ 实现代码省略（见上）

// 开始加载a模块
require_('./a.js')
```

执行node index.js的输出结果：

```js
// 控制台输出：
// 在 b.js 之中，a.done =  false
// b.js 执行完毕
// 在 a.js 之中，b.done =  true
// a.js 执行完毕
```

现在，从代码角度分析整个过程：

1. 首先执行index.js中的`require_('./a.js')`，回到我们的require方法中
2. 看require方法注释9-10，创建了一个简单的module对象`{ exports:{} }`，并将module对象放到缓存中，该module对象用于保存a模块导出的数据结果
3. 继续require方法注释13-14，我们对a模块使用函数壳子包裹成函数，包裹结果如下

```js
function fn(require, module, exports) {
    // a1：导出一个done属性且为false
    exports.done = false;
    // a2：加载b模块
    var b = require('./b.js');
    // a3：打印b模块导出属性done的值
    console.log('在 a.js 之中，b.done = ', b.done);
    // a4：a模块的done属性重新赋值为ture
    exports.done = true;
    // a5：打印a.js执行完毕
    console.log('a.js 执行完毕');
}

```

4. 继续require方法注释15，既执行fn
5. 执行fn，首先执行a模块注释a1，既向a模块的导出结果：module.exports中添加done属性，且done为false
6. 继续执行a模块注释a2，使用require方法加载b模块，过程如下
	1. 回到require方法注释9-10，创建了一个简单的module对象`{ exports:{} }`，并将module对象放到缓存中，该module对象用于保存b模块导出的数据结果
	2. 继续执行require方法注释13-14，我们对b模块使用函数壳子包裹成函数，包裹结果如下

```js
function fn(require,module,exports) {
    // b1：导出一个done属性且为false
    exports.done = false;
    // b2：加载a模块
    var a = require('./a.js');
    // b3：打印a模块导出属性done的值
    console.log('在 b.js 之中，a.done = ', a.done);
    // b4：b模块的done属性重新赋值为ture
    exports.done = true;
    // b5：打印b.js执行完毕
    console.log('b.js 执行完毕');
}
```

6.  1
	1. 2
	2. 3
	3. 继续require方法注释15，既执行fn
	4. 执行fn，首先执行b模块注释b1，既向b模块的导出结果：module.exports中添加done属性，且done为false
	5. 继续执行b模块注释b2，使用require方法加载a模块
	6. 回到require方法注释8，此时因为缓存（Module.cache）中已经有a模块的缓存，因此，b模块require拿到了a模块的部分导出，既`{ exports: { done: false } }`，所以回到b模块注释2，a拿到的结果既`{ done: false }`
	7. 继续执行b模块注释b3，因为拿到了a模块的部分导出结果，所以将打印输出`在 b.js 之中，a.done = false`
	8. 继续执行b模块注释b3，将b模块导出属性done值改为true
	9. 继续执行b模块注释b5，打印`'b.js 执行完毕`
	10. 回到require方法注释16，返回b模块的导出结果，既`{done:true}`
7. 此时a模块注释a2部分，使用require方法加载b模块整个过程完全执行完毕，且获取b模块导出结果`b:{done:true}`，控制台输出结果

```js
在 b.js 之中，a.done =  false
b.js 执行完毕
```

8. 继续a模块注释a3，输出`在 a.js 之中，b.done = true`
9. 继续a模块注释a4，a模块的done属性重新赋值为ture
10. 继续a模块注释a5，输出`a.js 执行完毕`，此时控制台输出最终结果为

```js
在 b.js 之中，a.done =  false
b.js 执行完毕
在 a.js 之中，b.done =  true
a.js 执行完毕
```

## CJS总结

1. CJS加载模块加载过程是在代码执行过程中，且是同步的，必须等到加载的模块以及加载的模块所有依赖模块加载执行完毕才会继续执行当前模块的代码
2. CJS中，模块导出值是对原始值的一个浅拷贝
3. CJS中，如果模块发生循环加载，由于CJS中对已经加载模块进行了缓存，所以不会发生死循环，而是直接访问已经存在的缓存，且缓存只能访问部分导出结果（基于代码执行位置）

# 关于ES Module

## ES Module是如何工作的

1. 首先在看这个问题之前，我们想想为什么CJS只用在node中，而不应用在浏览器环境中：  
	1. 对于CJS，我们加载过程是一个同步执行的过程，在node中，我们加载一个模块会先去读取该模块内容，既直接读取文件，之后需要做的是执行该模块的代码，如果该模块仍然有模块依赖，那么递归这些操作，直到把所有模块内容读取执行完毕。
	2. 但是如果位于浏览器中，我们就不是读取依赖模块内容就变成了网络下载该模块内容，之后执行模块代码，如果存在依赖继续下载模块内容，执行模块代码，很明显，这个过程如果依然保持同步，那么受限于网络状况这个过程将要持续很久，从而导致当前模块代码执行将被阻塞很久，很明显，这是不可行的，而在ESM中，这个问题就得到了很好的解决
2. ES Module工作流程的三个阶段
	1. 构建、实例化、赋值

## ESM阶段

三个阶段可以分别完成，所以你可以认为ESM是异步的，尽管这些阶段本身并不一定事异步的，它也可以以同步的方式完成。所以对于ESM与CJS一个主要的区别就是ESM是分阶段进行的，而CJS是一气呵成的。

### 构建阶段

1. 首先要搞清楚当前模块文件从哪里获得（如下图，在浏览器环境中，我们可以通过脚本指定的src直到模块文件从哪里获得）
2. 之后通过url下载文件或者是文件系统加载文件（如下图，既浏览器去下载main.js文件）
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1689231172000oym9jc.png)

3. 最后将下载的模块文件解析为模块记录，如下图，模块记录中包括了当前模块的代码信息，当前模块的依赖等所有该模块的信息
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1689231160000ffyjvl.png)

4. 那么对于当前模块所依赖的其他模块都执行构建阶段相同的操作，这意味着我们得一层一层遍历模块，解析模块找到依赖模块，继续这些操作，最后收集所有模块的模块记录，这些模块记录最后保存在 module map中
5. 上面提到了module map，module map的作用是用来管理所有模块的模块记录，像下面这样，所以遇到重复的模块依赖，只要在module map中存在，那么将从module map中直接获取，而不必重复创建（ESM解决循环加载的方式）
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1689231076000ptekq1.png)
```js
// 当浏览器需要加载a.js文件时，它会将a.js文件url放在 module map中
// 并注明正则获取a.js文件，然后将发起一个获取a.js文件的资源请求
// 然后继续去获取下一个文件

// module map:
// www.abc.com/a.js: fetching!
// www.abc.com/b.js: fetching!


// 同时 module map不仅仅是对文件进行跟踪，它还充当着模块的缓存，继续以a.js为例
// 当浏览器加载完成a.js资源，需要将a.js资源解析为模块记录，创建完毕a.js模块记录后
// 会将其放在module map中，这意味着，无论何时再请求a.js，都可以将a.js从module map中获取
// 而不是再去加载它，重新解析为模块记录

// module map:
// www.abc.com/a.js: a.js的模块记录
// www.abc.com/b.js: b.js的模块记录
// www.abc.com/c.js: fetching！

```

### 实例化阶段

简而言之，所有导出与导入指向将要导出的值（不过此时该值还未初始化，yes，像变量提升一样），既ESM是保持着对值的引用而不是CJS中的复制行为

为了更好了解这个阶段，我们看webpack中是如何处理ESM的

webpack入口index.js文件使用ESM引用了a.js文件

```js
// webpack入口index.js文件
import { a } from './js/a.js'
console.log(a);
a = 1
// a.js文件
export let a = 'a'
```

```js
{
    "./src/index.js":
    (function (module, exports, require) {
      // 1，启用严格模式
      "use strict";
      // 2，既加载a模块导出的数据，对应源码中 import { a } from './js/a.js'
      var data = require("./src/js/a.js");
      // 3，对应源码中 console.log(a);
      console.log(data.a);
      // 4，对应源码中 a=1
      data.a = 1
    }),

  "./src/js/a.js":
    (function (module, exports, require) {
      // 5，启用严格模式
      "use strict";
      // 6，既这里所说的实例化
      Object.defineProperty(exports, 'a', { get() { return a; } })
      // 7，对应源码中 let a = 'a'
      let a = 'a'
    })
}
```

1. 首先见注释6，ESM导出做的是在导出对象exports中添加了一个属性'a'，该属性仅有get方法且指向原模块(a.js)的导出属性a
2. 而在入口文件打包后的代码(index.js)则是以data.a既访问原模块(a.js)的导出属性a（注释2，3），从而实现ESM对导出值的引用
3. 对于注释1注释5，这也说明了ESM内部是开启了严格模式
4. 同时对于注释4注释6，这里只有a的get方法，没有set方法，也说明了ESM导出属性是只读

### 赋值阶段  

类比创建函数执行上下文阶段时，var声明初始化为undefined，函数声明直接初始化完毕， ESM在此阶段也是，为了验证这一点，我们继续看一个阮一峰ES6关于ESM循环引用的例子

```js
// a.mjs
import {bar} from './b';
console.log('a.mjs')
console.log(bar());
function foo() { return 'foo' }
export {foo};

// b.mjs
import {foo} from './a';
console.log('b.mjs');
console.log(foo());
function bar() { return 'bar' }
export {bar};
```

此时执行a.mjs：

1. a.js执行之前，其导出foo已经有值，且指向 function foo，既这里的ESM赋值阶段完成
2. b.js执行之前，其导出bar已经有值，且指向 function bar，既这里的ESM赋值阶段完成
3. 执行`import {bar} from './b';`，则加载b模块，且优先执行b.mjs
4. 进入b模块，执行`import {foo} from './a';`，因为对于a模块已经存在与module map中，所以不会循环加载，直接取模块记录中暴露出来的foo，此时由于foo前面说了，在赋值阶段给了 function foo，所以这里foo是有值的
5. 执行`console.log('b.mjs');`输出`b.mjs`
6. 执行`console.log(foo());`输出`foo`
7. 回到a.mjs，执行`console.log('a.mjs')`，输出`a.mjs`
8. 继续执行`console.log(bar());`，输出`bar`
9. 所以最终输出结果为：
```js
b.mjs
foo
a.mjs
bar
```
10. 这里因为function存在提升，如果这里使用函数表达式`let foo = () => { return 'foo' }` 则foo不会提升，或者说ESM阶段三就不会对foo其进行赋值，因此执行就会报错

## 关于ESM的总结

1. ESM模块加载经过构建，实例化，赋值三个阶段（该三个阶段都在ESM编译时完成），三个阶段可以分别完成，当然也可以说ESM是异步加载
2. ESM导入的是对原始值的引用，非值拷贝，webpack中使用get方法实现这一过
3. ESM导入的值只读，不可进行修改，webpack中通过不暴露set方法实现这一过
4. ESM内部为严格模式
5. ESM中发生循环引用时，不会出现死循环，因为ESM会加载其缓存在module map中的模块记录，但加载的结果中仅能获取到存在提升的数据类型，比如函数声明等