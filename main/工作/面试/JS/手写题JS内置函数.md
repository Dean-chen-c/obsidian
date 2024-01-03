
[原文](https://juejin.cn/post/7033275515880341512)

- [[#🌟 promise|🌟 promise]]
	- [[#🌟 promise#实现[[Promise]]|实现[[Promise]]]]
	- [[#🌟 promise#实现promise.all|实现promise.all]]
	- [[#🌟 promise#实现 promise.finally|实现 promise.finally]]
	- [[#🌟 promise#实现promise.allSettled|实现promise.allSettled]]
	- [[#🌟 promise#实现promise.race|实现promise.race]]
	- [[#🌟 promise#promise.any|promise.any]]
	- [[#🌟 promise#resolve|resolve]]
	- [[#🌟 promise#reject|reject]]
- [[#🐳 Array篇|🐳 Array篇]]
	- [[#🐳 Array篇#数组去重|数组去重]]
		- [[#数组去重#使用双重 `for` 和 `splice`|使用双重 `for` 和 `splice`]]
		- [[#数组去重#使用 `indexOf` 或 `includes` 加新数组|使用 `indexOf` 或 `includes` 加新数组]]
		- [[#数组去重#`sort` 排序后，使用快慢指针的思想|`sort` 排序后，使用快慢指针的思想]]
		- [[#数组去重#`ES6` 提供的 `Set` 去重|`ES6` 提供的 `Set` 去重]]
		- [[#数组去重#使用哈希表存储元素是否出现(`ES6` 提供的 `map`)|使用哈希表存储元素是否出现(`ES6` 提供的 `map`)]]
		- [[#数组去重#`filter` 配合 `indexOf`|`filter` 配合 `indexOf`]]
		- [[#数组去重#`reduce` 配合 `includes`|`reduce` 配合 `includes`]]
	- [[#🐳 Array篇#数组扁平化|数组扁平化]]
		- [[#数组扁平化#用 `reduce` 实现 `flat` 函数|用 `reduce` 实现 `flat` 函数]]
		- [[#数组扁平化#使用栈的思想实现 `flat` 函数|使用栈的思想实现 `flat` 函数]]
		- [[#数组扁平化#使用 `Generator` 实现 `flat` 函数|使用 `Generator` 实现 `flat` 函数]]
		- [[#数组扁平化#实现在原型链上重写 `flat` 函数|实现在原型链上重写 `flat` 函数]]
	- [[#🐳 Array篇#forEach|forEach]]
	- [[#🐳 Array篇#reduce|reduce]]
	- [[#🐳 Array篇#map|map]]
	- [[#🐳 Array篇#every|every]]
	- [[#🐳 Array篇#some|some]]
	- [[#🐳 Array篇#find/findIndex|find/findIndex]]
	- [[#🐳 Array篇#indexOf|indexOf]]
- [[#实现sort [能不能实现数组sort方法](https://juejin.cn/post/6844903986479251464#heading-33)|实现sort [能不能实现数组sort方法](https://juejin.cn/post/6844903986479251464#heading-33)]]
- [[#🌊 防抖节流|🌊 防抖节流]]
	- [[#🌊 防抖节流#实现防抖函数debounce|实现防抖函数debounce]]
	- [[#🌊 防抖节流#实现节流函数throttle|实现节流函数throttle]]
- [[#⛲ Object篇|⛲ Object篇]]
	- [[#⛲ Object篇#能不能写一个完整的深拷贝[文章](https://juejin.cn/post/6844903986479251464#heading-56)|能不能写一个完整的深拷贝[文章](https://juejin.cn/post/6844903986479251464#heading-56)]]
	- [[#⛲ Object篇#实现new|实现new]]
	- [[#⛲ Object篇#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)|继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)]]
		- [[#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)#原型链继承|原型链继承]]
		- [[#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)#借用构造函数(经典继承)|借用构造函数(经典继承)]]
		- [[#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)#组合继承|组合继承]]
		- [[#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)#原型式继承|原型式继承]]
		- [[#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)#寄生式继承|寄生式继承]]
		- [[#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)#寄生组合式继承|寄生组合式继承]]
		- [[#继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)#Class实现继承(补充一下)|Class实现继承(补充一下)]]
	- [[#⛲ Object篇#实现object.create|实现object.create]]
- [[#🚂 Function篇|🚂 Function篇]]
	- [[#🚂 Function篇#call|call]]
	- [[#🚂 Function篇#bind|bind]]
	- [[#🚂 Function篇#apply|apply]]
	- [[#🚂 Function篇#实现柯里化[JavaScript 专题之函数柯里化](https://juejin.cn/post/6844903490771222542#heading-5)|实现柯里化[JavaScript 专题之函数柯里化](https://juejin.cn/post/6844903490771222542#heading-5)]]
	- [[#🚂 Function篇#实现链式调用[文章](https://github.com/zcxiaobao/everyday-insist/blob/master/21interview/imitate/chainFunc.md)|实现链式调用[文章](https://github.com/zcxiaobao/everyday-insist/blob/master/21interview/imitate/chainFunc.md)]]
	- [[#🚂 Function篇#偏函数(文章)[https://juejin.cn/post/6946022649768181774#heading-17]|偏函数(文章)[https://juejin.cn/post/6946022649768181774#heading-17]]]
- [[#🌍 ajax 与 jsonp|🌍 ajax 与 jsonp]]
	- [[#🌍 ajax 与 jsonp#实现ajax|实现ajax]]
	- [[#🌍 ajax 与 jsonp#实现jsonp|实现jsonp]]
- [[#🛫 ES6篇|🛫 ES6篇]]
	- [[#🛫 ES6篇#实现set|实现set]]
	- [[#🛫 ES6篇#实现 map|实现 map]]
- [[#🦉 其他|🦉 其他]]
	- [[#🦉 其他#instanceof|instanceof]]
	- [[#🦉 其他#实现千分位分隔符|实现千分位分隔符]]
	- [[#🦉 其他#把一个JSON对象的key从下划线形式（Pascal）转换到小驼峰形式（Camel）[文章](https://github.com/zcxiaobao/everyday-insist/blob/master/21interview/baseJS/_tocamel.md)|把一个JSON对象的key从下划线形式（Pascal）转换到小驼峰形式（Camel）[文章](https://github.com/zcxiaobao/everyday-insist/blob/master/21interview/baseJS/_tocamel.md)]]
	- [[#🦉 其他#实现数据类型判断函数typeof|实现数据类型判断函数typeof]]
	- [[#🦉 其他#实现数组转树[文章](https://github.com/lgwebdream/FE-Interview/issues/35)|实现数组转树[文章](https://github.com/lgwebdream/FE-Interview/issues/35)]]
	- [[#🦉 其他#实现sleep函数|实现sleep函数]]
	- [[#🦉 其他#实现发布订阅模式|实现发布订阅模式]]


## 🌟 promise

### 实现[[Promise]]

考察频率: (⭐⭐⭐⭐⭐)

```js
// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 新建 MyPromise 类
class MyPromise {
  constructor(executor){
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  // 储存状态的变量，初始值是 pending
  status = PENDING;

  // resolve和reject为什么要用箭头函数？
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // 存储成功回调函数
  onFulfilledCallbacks = [];
  // 存储失败回调函数
  onRejectedCallbacks = [];

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
      // resolve里面将所有成功的回调拿出来执行
      while (this.onFulfilledCallbacks.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }

  // 更改失败后的状态
  reject = (reason) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
      // resolve里面将所有失败的回调拿出来执行
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};

    // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
    const promise2 = new MyPromise((resolve, reject) => {

      const fulfilledMicrotask = () =>  {
        // 创建一个微任务等待 promise2 完成初始化
        queueMicrotask(() => {
          try {
            // 获取成功回调函数的执行结果
            const x = realOnFulfilled(this.value);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          } 
        })  
      }

      const rejectedMicrotask = () => { 
        // 创建一个微任务等待 promise2 完成初始化
        queueMicrotask(() => {
          try {
            // 调用失败回调，并且把原因返回
            const x = realOnRejected(this.reason);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          } 
        }) 
      }
      // 判断状态
      if (this.status === FULFILLED) {
        fulfilledMicrotask() 
      } else if (this.status === REJECTED) { 
        rejectedMicrotask()
      } else if (this.status === PENDING) {
        // 等待
        // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
        // 等到执行成功失败函数的时候再传递
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    }) 
    
    return promise2;
  }

  catch (onRejected) {
    // 只需要进行错误处理
    this.then(undefined, onRejected);
  }

  finally (fn) {
    return this.then((value) => {
      return MyPromise.resolve(fn()).then(() => {
        return value;
      });
    }, (error) => {
      return MyPromise.resolve(fn()).then(() => {
        throw error
      });
    });
  }

  // resolve 静态方法
  static resolve (parameter) {
    // 如果传入 MyPromise 就直接返回
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    // 转成常规方式
    return new MyPromise(resolve =>  {
      resolve(parameter);
    });
  }

  // reject 静态方法
  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  static all (promiseList) {
    return new MyPromise((resolve, reject) => {
      const result = [];
      const length = promiseList.length;
      let count = 0;

      if (length === 0) {
        return resolve(result);
      }

      promiseList.forEach((promise, index) => {
        MyPromise.resolve(promise).then((value) => {
          count++;
          result[index] = value;
          if (count === length) {
            resolve(result);
          }
        }, (reason) => {
          reject(reason);
        });
      });
    });

  }

  static allSettled = (promiseList) => {
    return new MyPromise((resolve) => {
      const length = promiseList.length;
      const result = [];
      let count = 0;

      if (length === 0) {
        return resolve(result);
      } else {
        for (let i = 0; i < length; i++) {
            const currentPromise = MyPromise.resolve(promiseList[i]);
            currentPromise.then((value) => {
              count++;
              result[i] = {
                status: 'fulfilled',
                value: value
              }
              if (count === length) {
                return resolve(result);
              }
            }, (reason) => {
              count++;
              result[i] = {
                status: 'rejected',
                reason: reason
              }
              if (count === length) {
                return resolve(result);
              }
            });
        }
      }
    });
  }

  static race (promiseList) {
    return new MyPromise((resolve, reject) => {
      const length = promiseList.length;

      if (length === 0) {
        return resolve();
      } else {
        for (let i = 0; i < length; i++) {
          MyPromise.resolve(promiseList[i]).then((value) => {
            return resolve(value);
          }, (reason) => {
            return reject(reason);
          });
        }
      }
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
  // 这是为了防止死循环
  if (promise === x) {
    return reject(new TypeError('The promise and the return value are the same'));
  }

  if (typeof x === 'object' || typeof x === 'function') {
    // 这个坑是跑测试的时候发现的，如果x是null，应该直接resolve
    if (x === null) {
      return resolve(x);
    }

    let then;
    try {
      // 把 x.then 赋值给 then 
      then = x.then;
    } catch (error) {
      // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
      return reject(error);
    }

    // 如果 then 是函数
    if (typeof then === 'function') {
      let called = false;
      // 将 x 作为函数的作用域 this 调用之
      // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
      // 名字重名了，我直接用匿名函数了
      try {
        then.call(
          x,
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          y => {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量called
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          r => {
            if (called) return;
            called = true;
            reject(r);
          });
      } catch (error) {
        // 如果调用 then 方法抛出了异常 e：
        // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
        if (called) return;

        // 否则以 e 为据因拒绝 promise
        reject(error);
      }
    } else {
      // 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x);
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x);
  }
}

MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}


module.exports = MyPromise
```

### 实现promise.all

考察频率: (⭐⭐⭐⭐⭐)

```js
function PromiseAll(promises){  
    return new Promise((resolve, reject)=>{  
        if(!Array.isArray(promises)){  
            throw new TypeError("promises must be an array")  
        }  
        let result = []   
        let count = 0   
        promises.forEach((promise, index) => {  
            promise.then((res)=>{  
                result[index] = res  
                count++  
                count === promises.length && resolve(result)   
            }, (err)=>{  
                reject(err)  
            })  
        })  
    })  
}
```

### 实现 promise.finally

考察频率: (⭐⭐⭐⭐⭐)

```js
Promise.prototype.finally = function (cb) {  
  return this.then(function (value) {  
    return Promise.resolve(cb()).then(function () {  
      return value  
    })  
  }, function (err) {  
    return Promise.resolve(cb()).then(function () {  
      throw err  
    })  
  })  
}
```

### 实现promise.allSettled

考察频率: (⭐⭐⭐⭐)

```js
function allSettled(promises) {  
  if (promises.length === 0) return Promise.resolve([])  
    
  const _promises = promises.map(  
    item => item instanceof Promise ? item : Promise.resolve(item)  
    )  
    
  return new Promise((resolve, reject) => {  
    const result = []  
    let unSettledPromiseCount = _promises.length  
      
    _promises.forEach((promise, index) => {  
      promise.then((value) => {  
        result[index] = {  
          status: 'fulfilled',  
          value  
        }  
          
        unSettledPromiseCount -= 1  
        // resolve after all are settled  
        if (unSettledPromiseCount === 0) {  
          resolve(result)  
        }  
      }, (reason) => {  
        result[index] = {  
          status: 'rejected',  
          reason  
        }  
          
        unSettledPromiseCount -= 1  
        // resolve after all are settled  
        if (unSettledPromiseCount === 0) {  
          resolve(result)  
        }  
      })  
    })  
  })  
}
```

### 实现promise.race

考察频率: (⭐⭐⭐)

```js
Promise.race = function(promiseArr) {  
    return new Promise((resolve, reject) => {  
        promiseArr.forEach(p => {  
            Promise.resolve(p).then(val => {  
                resolve(val)  
            }, err => {  
                rejecte(err)  
            })  
        })  
    })  
}
```

### promise.any

考察频率: (⭐⭐⭐)

```js
Promise.any = function(promiseArr) {  
    let index = 0  
    return new Promise((resolve, reject) => {  
        if (promiseArr.length === 0) return   
        promiseArr.forEach((p, i) => {  
            Promise.resolve(p).then(val => {  
                resolve(val)  
                  
            }, err => {  
                index++  
                if (index === promiseArr.length) {  
                  reject(new AggregateError('All promises were rejected'))  
                }  
            })  
        })  
    })  
}
```

### resolve

```js
Promise.resolve = function(value) {  
    if(value instanceof Promise){  
        return value  
    }  
    return new Promise(resolve => resolve(value))  
}
```

### reject

```js
Promise.reject = function(reason) {  
    return new Promise((resolve, reject) => reject(reason))  
}
```


## 🐳 Array篇

### 数组去重

考察频率: (⭐⭐⭐⭐⭐)

#### 使用双重 `for` 和 `splice`

```js
function unique(arr){              
    for(var i=0; i<arr.length; i++){  
        for(var j=i+1; j<arr.length; j++){  
            if(arr[i]==arr[j]){           
            //第一个等同于第二个，splice方法删除第二个  
                arr.splice(j,1);  
                // 删除后注意回调j  
                j--;  
            }  
        }  
    }  
return arr;  
}
```

#### 使用 `indexOf` 或 `includes` 加新数组

```js
//使用indexof  
function unique(arr) {  
    var uniqueArr = []; // 新数组  
    for (let i = 0; i < arr.length; i++) {  
        if (uniqueArr.indexOf(arr[i]) === -1) {  
            //indexof返回-1表示在新数组中不存在该元素  
            uniqueArr.push(arr[i])//是新数组里没有的元素就push入  
        }  
    }  
    return uniqueArr;  
}  
// 使用includes  
function unique(arr) {  
    var uniqueArr = [];   
    for (let i = 0; i < arr.length; i++) {  
        //includes 检测数组是否有某个值  
        if (!uniqueArr.includes(arr[i])) {  
            uniqueArr.push(arr[i])//  
        }  
    }  
    return uniqueArr;  
}
```

#### `sort` 排序后，使用快慢指针的思想

```js
function unique(arr) {  
    arr.sort((a, b) => a - b);  
    var slow = 1,  
        fast = 1;  
    while (fast < arr.length) {  
        if (arr[fast] != arr[fast - 1]) {  
            arr[slow ++] = arr[fast];  
        }  
        ++ fast;  
    }  
    arr.length = slow;  
    return arr;  
}
```

`sort` 方法用于从小到大排序(返回一个新数组)，其参数中不带以上回调函数就会在两位数及以上时出现排序错误(如果省略，元素按照转换为的字符串的各个字符的 `Unicode` 位点进行排序。两位数会变为长度为二的字符串来计算)。

#### `ES6` 提供的 `Set` 去重

```js
function unique(arr) {  
    const result = new Set(arr);  
    return [...result];  
    //使用扩展运算符将Set数据结构转为数组  
}
```

`Set` 中的元素只会出现一次，即 `Set` 中的元素是唯一的。

#### 使用哈希表存储元素是否出现(`ES6` 提供的 `map`)

```js
function unique(arr) {  
    let map = new Map();  
    let uniqueArr = new Array();  // 数组用于返回结果  
    for (let i = 0; i < arr.length; i++) {  
      if(map.has(arr[i])) {  // 如果有该key值  
        map.set(arr[i], true);   
      } else {   
        map.set(arr[i], false);   // 如果没有该key值  
        uniqueArr.push(arr[i]);  
      }  
    }   
    return uniqueArr ;  
}
```

`   map` 对象保存键值对，与对象类似。但 `map` 的键可以是任意类型，对象的键只能是字符串类型。

如果数组中只有数字也可以使用普通对象作为哈希表。

#### `filter` 配合 `indexOf`

```js
function unique(arr) {  
    return arr.filter(function (item, index, arr) {  
        //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素  
        //不是那么就证明是重复项，就舍弃  
        return arr.indexOf(item) === index;  
    })  
}
```

```js
// 如何检查之前出现过同样数字

const arr = [1,1,2,1,3]  
arr.indexOf(arr[0]) === 0 // 1 的第一次出现  
arr.indexOf(arr[1]) !== 1 // 说明前面曾经出现过1
```

#### `reduce` 配合 `includes`

```js
function unique(arr){  
    let uniqueArr = arr.reduce((acc,cur)=>{  
        if(!acc.includes(cur)){  
            acc.push(cur);  
        }  
        return acc;  
    },[]) // []作为回调函数的第一个参数的初始值  
    return uniqueArr  
}
```

### 数组扁平化

考察频率: (⭐⭐⭐)

#### 用 `reduce` 实现 `flat` 函数

```js
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

// 首先使用 reduce 展开一层
arr.reduce((pre, cur) => pre.concat(cur), []);
// [1, 2, 3, 4, 1, 2, 3, [1, 2, 3, [1, 2, 3]], 5, "string", { name: "弹铁蛋同学" }];

// 用 reduce 展开一层 + 递归
const flat = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];

```

#### 使用栈的思想实现 `flat` 函数

```js
// 栈思想
function flat(arr) {
  const result = []; 
  const stack = [].concat(arr);  // 将数组元素拷贝至栈，直接赋值会改变原数组
  //如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop(); 
    if (Array.isArray(val)) {
      stack.push(...val); //如果是数组再次入栈，并且展开了一层
    } else {
      result.unshift(val); //如果不是数组就将其取出来放入结果数组中
    }
  }
  return result;
}
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
flat(arr)
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
```

#### 使用 `Generator` 实现 `flat` 函数

```js
function* flat(arr, num) {
  if (num === undefined) num = 1;
  for (const item of arr) {
    if (Array.isArray(item) && num > 0) {   // num > 0
      yield* flat(item, num - 1);
    } else {
      yield item;
    }
  }
}
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。
// 也就是遍历器对象（Iterator Object）。所以我们要用一次扩展运算符得到结果
[...flat(arr, Infinity)]    
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];

```

#### 实现在原型链上重写 `flat` 函数

```js
Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = this.concat();    // 获得调用 fakeFlat 函数的数组
  while (num > 0) {           
    if (arr.some(x => Array.isArray(x))) {
      arr = [].concat.apply([], arr);	// 数组中还有数组元素的话并且 num > 0，继续展开一层数组 
    } else {
      break; // 数组中没有数组元素并且不管 num 是否依旧大于 0，停止循环。
    }
    num--;
  }
  return arr;
};
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
arr.fakeFlat(Infinity)
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
```

### forEach

考察频率: (⭐⭐⭐)

```js
Array.prototype.myForEach = function (callbackFn) {  
    // 判断this是否合法  
    if (this === null || this === undefined) {  
        throw new TypeError("Cannot read property 'myForEach' of null");  
    }  
    // 判断callbackFn是否合法  
    if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {  
        throw new TypeError(callbackFn + ' is not a function')  
    }  
    // 取到执行方法的数组对象和传入的this对象  
    var _arr = this, thisArg = arguments[1] || window;  
    for (var i = 0; i < _arr.length; i++) {  
        // 执行回调函数  
        callbackFn.call(thisArg, _arr[i], i, _arr);  
    }  
}
```

### reduce [[reduce]]

考察频率: (⭐⭐⭐)

```js
Array.prototype.myReduce = function(callbackFn) {  
    var _arr = this, accumulator = arguments[1];  
    var i = 0;  
    // 判断是否传入初始值  
    if (accumulator === undefined) {  
        // 没有初始值的空数组调用reduce会报错  
        if (_arr.length === 0) {  
            throw new Error('initVal and Array.length>0 need one')  
        }  
        // 初始值赋值为数组第一个元素  
        accumulator = _arr[i];  
        i++;  
    }  
    for (; i<_arr.length; i++) {  
        // 计算结果赋值给初始值  
        accumulator = callbackFn(accumulator,  _arr[i], i, _arr)  
    }  
    return accumulator;  
}
```

### map

```js
Array.prototype.myMap = function(callbackFn) {  
    var _arr = this, thisArg = arguments[1] || window, res = [];  
    for (var i = 0; i<_arr.length; i++) {  
        // 存储运算结果  
        res.push(callbackFn.call(thisArg, _arr[i], i, _arr));  
    }  
    return res;  
}
```

### every

```js
Array.prototype.myEvery = function(callbackFn) {  
    var _arr = this, thisArg = arguments[1] || window;  
    // 开始标识值为true  
    // 遇到回调返回false，直接返回false  
    // 如果循环执行完毕，意味着所有回调返回值为true，最终结果为true  
    var flag = true;  
    for (var i = 0; i<_arr.length; i++) {  
        // 回调函数执行为false，函数中断  
        if (!callbackFn.call(thisArg, _arr[i], i, _arr)) {  
            return false;  
        }  
    }  
    return flag;  
}
```

### some

```js
Array.prototype.mySome = function(callbackFn) {  
    var _arr = this, thisArg = arguments[1] || window;  
    // 开始标识值为false  
    // 遇到回调返回true，直接返回true  
    // 如果循环执行完毕，意味着所有回调返回值为false，最终结果为false  
    var flag = false;  
    for (var i = 0; i<_arr.length; i++) {  
        // 回调函数执行为false，函数中断  
        if (callbackFn.call(thisArg, _arr[i], i, _arr)) {  
            return true;  
        }  
    }  
    return flag;  
}
```

### find/findIndex

```js
Array.prototype.myFind = function(callbackFn) {  
    var _arr = this, thisArg = arguments[1] || window;  
    // 遇到回调返回true，直接返回该数组元素  
    // 如果循环执行完毕，意味着所有回调返回值为false，最终结果为undefined  
    for (var i = 0; i<_arr.length; i++) {  
        // 回调函数执行为false，函数中断  
        if (callbackFn.call(thisArg, _arr[i], i, _arr)) {  
            return _arr[i];  
        }  
    }  
    return undefined;  
}
```

### indexOf

```js
function indexOf(findVal, beginIndex = 0) {  
    if (this.length < 1 || beginIndex > findVal.length) {  
        return -1;  
    }  
    if (!findVal) {  
        return 0;  
    }  
    beginIndex = beginIndex <= 0 ? 0 : beginIndex;  
    for (let i = beginIndex; i < this.length; i++) {  
        if (this[i] == findVal) return i;  
    }  
    return -1;  
}
```

## 实现sort [能不能实现数组sort方法](https://juejin.cn/post/6844903986479251464#heading-33)

```js
const sort = (arr, comparefn) => {
  let array = Object(arr);
  let length = array.length >>> 0;
  return InnerArraySort(array, length, comparefn);
}

const InnerArraySort = (array, length, comparefn) => {
  // 比较函数未传入
  if (Object.prototype.toString.call(comparefn) !== "[object Function]") {
    comparefn = function (x, y) {
      if (x === y) return 0;
      x = x.toString();
      y = y.toString();
      if (x == y) return 0;
      else return x < y ? -1 : 1;
    };
  }
  const insertSort = (arr, start = 0, end) => {
    end = end || arr.length;
    for (let i = start; i < end; i++) {
      let e = arr[i];
      let j;
      for (j = i; j > start && comparefn(arr[j - 1], e) > 0; j--)
        arr[j] = arr[j - 1];
      arr[j] = e;
    }
    return;
  }
  const getThirdIndex = (a, from, to) => {
    let tmpArr = [];
    // 递增量，200~215 之间，因为任何正数和15做与操作，不会超过15，当然是大于0的
    let increment = 200 + ((to - from) & 15);
    let j = 0;
    from += 1;
    to -= 1;
    for (let i = from; i < to; i += increment) {
      tmpArr[j] = [i, a[i]];
      j++;
    }
    // 把临时数组排序，取中间的值，确保哨兵的值接近平均位置
    tmpArr.sort(function (a, b) {
      return comparefn(a[1], b[1]);
    });
    let thirdIndex = tmpArr[tmpArr.length >> 1][0];
    return thirdIndex;
  };

  const _sort = (a, b, c) => {
    let arr = [];
    arr.push(a, b, c);
    insertSort(arr, 0, 3);
    return arr;
  }

  const quickSort = (a, from, to) => {
    //哨兵位置
    let thirdIndex = 0;
    while (true) {
      if (to - from <= 10) {
        insertSort(a, from, to);
        return;
      }
      if (to - from > 1000) {
        thirdIndex = getThirdIndex(a, from, to);
      } else {
        // 小于1000 直接取中点
        thirdIndex = from + ((to - from) >> 2);
      }
      let tmpArr = _sort(a[from], a[thirdIndex], a[to - 1]);
      a[from] = tmpArr[0]; a[thirdIndex] = tmpArr[1]; a[to - 1] = tmpArr[2];
      // 现在正式把 thirdIndex 作为哨兵
      let pivot = a[thirdIndex];
      [a[from], a[thirdIndex]] = [a[thirdIndex], a[from]];
      // 正式进入快排
      let lowEnd = from + 1;
      let highStart = to - 1;
      a[thirdIndex] = a[lowEnd];
      a[lowEnd] = pivot;
      // [lowEnd, i)的元素是和pivot相等的
      // [i, highStart) 的元素是需要处理的
      for (let i = lowEnd + 1; i < highStart; i++) {
        let element = a[i];
        let order = comparefn(element, pivot);
        if (order < 0) {
          a[i] = a[lowEnd];
          a[lowEnd] = element;
          lowEnd++;
        } else if (order > 0) {
          do{
            highStart--;
            if (highStart === i) break;
            order = comparefn(a[highStart], pivot);
          }while (order > 0) ;
          // 现在 a[highStart] <= pivot
          // a[i] > pivot
          // 两者交换
          a[i] = a[highStart];
          a[highStart] = element;
          if (order < 0) {
            // a[i] 和 a[lowEnd] 交换
            element = a[i];
            a[i] = a[lowEnd];
            a[lowEnd] = element;
            lowEnd++;
          }
        }
      }
      // 永远切分大区间
      if (lowEnd - from > to - highStart) {
        // 单独处理小区间
        quickSort(a, highStart, to);
        // 继续切分lowEnd ~ from 这个区间
        to = lowEnd;
      } else if (lowEnd - from <= to - highStart) {
        quickSort(a, from, lowEnd);
        from = highStart;
      }
    }
  }
  quickSort(array, 0, length);
}

```

## 🌊 防抖节流

### 实现防抖函数debounce

```js
function debounce(func, wait, immediate) {  
  
    var timeout, result;  
  
    var debounced = function () {  
        var context = this;  
        var args = arguments;  
  
        if (timeout) clearTimeout(timeout);  
        if (immediate) {  
            // 如果已经执行过，不再执行  
            var callNow = !timeout;  
            timeout = setTimeout(function(){  
                timeout = null;  
            }, wait)  
            if (callNow) result = func.apply(context, args)  
        }  
        else {  
            timeout = setTimeout(function(){  
                result = func.apply(context, args)  
            }, wait);  
        }  
        return result;  
    };  
  
    debounced.cancel = function() {  
        clearTimeout(timeout);  
        timeout = null;  
    };  
  
    return debounced;  
}
```

### 实现节流函数throttle

考察频率: (⭐⭐⭐⭐⭐)

```js
// 第四版  
function throttle(func, wait, options) {  
    var timeout, context, args, result;  
    var previous = 0;  
    if (!options) options = {};  
  
    var later = function() {  
        previous = options.leading === false ? 0 : new Date().getTime();  
        timeout = null;  
        func.apply(context, args);  
        if (!timeout) context = args = null;  
    };  
  
    var throttled = function() {  
        var now = new Date().getTime();  
        if (!previous && options.leading === false) previous = now;  
        var remaining = wait - (now - previous);  
        context = this;  
        args = arguments;  
        if (remaining <= 0 || remaining > wait) {  
            if (timeout) {  
                clearTimeout(timeout);  
                timeout = null;  
            }  
            previous = now;  
            func.apply(context, args);  
            if (!timeout) context = args = null;  
        } else if (!timeout && options.trailing !== false) {  
            timeout = setTimeout(later, remaining);  
        }  
    };  
    return throttled;  
}
```


## ⛲ Object篇

### 能不能写一个完整的深拷贝[文章](https://juejin.cn/post/6844903986479251464#heading-56)

考察频率: (⭐⭐⭐⭐⭐)

```js
const getType = obj => Object.prototype.toString.call(obj);  
  
const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;  
  
const canTraverse = {  
  '[object Map]': true,  
  '[object Set]': true,  
  '[object Array]': true,  
  '[object Object]': true,  
  '[object Arguments]': true,  
};  
const mapTag = '[object Map]';  
const setTag = '[object Set]';  
const boolTag = '[object Boolean]';  
const numberTag = '[object Number]';  
const stringTag = '[object String]';  
const symbolTag = '[object Symbol]';  
const dateTag = '[object Date]';  
const errorTag = '[object Error]';  
const regexpTag = '[object RegExp]';  
const funcTag = '[object Function]';  
  
const handleRegExp = (target) => {  
  const { source, flags } = target;  
  return new target.constructor(source, flags);  
}  
  
const handleFunc = (func) => {  
  // 箭头函数直接返回自身  
  if(!func.prototype) return func;  
  const bodyReg = /(?<={)(.|\n)+(?=})/m;  
  const paramReg = /(?<=().+(?=)\s+{)/;  
  const funcString = func.toString();  
  // 分别匹配 函数参数 和 函数体  
  const param = paramReg.exec(funcString);  
  const body = bodyReg.exec(funcString);  
  if(!body) return null;  
  if (param) {  
    const paramArr = param[0].split(',');  
    return new Function(...paramArr, body[0]);  
  } else {  
    return new Function(body[0]);  
  }  
}  
  
const handleNotTraverse = (target, tag) => {  
  const Ctor = target.constructor;  
  switch(tag) {  
    case boolTag:  
      return new Object(Boolean.prototype.valueOf.call(target));  
    case numberTag:  
      return new Object(Number.prototype.valueOf.call(target));  
    case stringTag:  
      return new Object(String.prototype.valueOf.call(target));  
    case symbolTag:  
      return new Object(Symbol.prototype.valueOf.call(target));  
    case errorTag:   
    case dateTag:  
      return new Ctor(target);  
    case regexpTag:  
      return handleRegExp(target);  
    case funcTag:  
      return handleFunc(target);  
    default:  
      return new Ctor(target);  
  }  
}  
  
const deepClone = (target, map = new WeakMap()) => {  
  if(!isObject(target))   
    return target;  
  let type = getType(target);  
  let cloneTarget;  
  if(!canTraverse[type]) {  
    // 处理不能遍历的对象  
    return handleNotTraverse(target, type);  
  }else {  
    // 这波操作相当关键，可以保证对象的原型不丢失！  
    let ctor = target.constructor;  
    cloneTarget = new ctor();  
  }  
  
  if(map.get(target))   
    return target;  
  map.set(target, true);  
  
  if(type === mapTag) {  
    //处理Map  
    target.forEach((item, key) => {  
      cloneTarget.set(deepClone(key, map), deepClone(item, map));  
    })  
  }  
    
  if(type === setTag) {  
    //处理Set  
    target.forEach(item => {  
      cloneTarget.add(deepClone(item, map));  
    })  
  }  
  
  // 处理数组和对象  
  for (let prop in target) {  
    if (target.hasOwnProperty(prop)) {  
        cloneTarget[prop] = deepClone(target[prop], map);  
    }  
  }  
  return cloneTarget;  
}
```

### 实现new

考察频率: (⭐⭐⭐⭐)

```js
function createObject(Con) {  
    // 创建新对象obj  
    // var obj = {};也可以  
    var obj = Object.create(null);  
  
    // 将obj.__proto__ -> 构造函数原型  
    // (不推荐)obj.__proto__ = Con.prototype  
    Object.setPrototypeOf(obj, Con.prototype);  
  
    // 执行构造函数，并接受构造函数返回值  
    const ret = Con.apply(obj, [].slice.call(arguments, 1));  
  
    // 若构造函数返回值为对象，直接返回该对象  
    // 否则返回obj  
    return typeof(ret) === 'object' ? ret: obj;  
}
```

### 继承[JavaScript深入之继承的多种方式和优缺点](https://juejin.cn/post/6844903477819211784)

考察频率: (⭐⭐⭐⭐)

#### 原型链继承

#### 借用构造函数(经典继承)

```js
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

```

#### 组合继承

```js
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);

    this.age = age;

}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]

```

#### 原型式继承

```js
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
```

#### 寄生式继承

```js
function createObj (o) {
    var clone = object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
```

#### 寄生组合式继承

```js
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

console.log(child1)

```

#### Class实现继承(补充一下)

```js
class Animal {  
    constructor(name) {  
        this.name = name  
    }   
    getName() {  
        return this.name  
    }  
}  
class Dog extends Animal {  
    constructor(name, age) {  
        super(name)  
        this.age = age  
    }  
}
```

### 实现object.create

```js
function newCreate(proto, propertiesObject) {  
    if (typeof proto !== 'object' && typeof proto !== 'function') {  
        throw TypeError('Object prototype may only be an Object: ' + proto)  
    }  
    function F() { }  
    F.prototype = proto  
    const o = new F()  
  
    if (propertiesObject !== undefined) {  
        Object.keys(propertiesObject).forEach(prop => {  
            let desc = propertiesObject[prop]  
            if (typeof desc !== 'object' || desc === null) {  
                throw TypeError('Object prorotype may only be an Object: ' + desc)  
            } else {  
                Object.defineProperty(o, prop, desc)  
            }  
        })  
    }  
  
    return o  
}
```

## 🚂 Function篇

### call

考察频率: (⭐⭐⭐⭐)

```js
Function.prototype.myCall = function (thisArg) {  
    thisArg = thisArg || window;  
    thisArg.func = this;  
    const args = []  
    for (let i = 1; i<arguments.length; i++) {  
        args.push('arguments['+ i + ']')  
    }  
    const result = eval('thisArg.func(' + args +')')  
    delete thisArg.func;  
    return result;  
}
```

### bind

考察频率: (⭐⭐⭐⭐)

```js
Function.prototype.sx_bind = function (obj, ...args) {  
    obj = obj || window  
  
    const fn = Symbol()  
    obj[fn] = this  
    const _this = this  
  
    const res = function (...innerArgs) {  
        console.log(this, _this)  
        if (this instanceof _this) {  
            this[fn] = _this  
            this[fn](...[...args, ...innerArgs])  
            delete this[fn]  
        } else {  
            obj[fn](...[...args, ...innerArgs])  
            delete obj[fn]  
        }  
    }  
    res.prototype = Object.create(this.prototype)  
    return res  
}
```

### apply

考察频率: (⭐⭐⭐⭐)

```js
Function.prototype.myApply = function (thisArg, arr) {  
    thisArg = thisArg || window;  
    thisArg.func = this;  
    const args = []  
    for (let i = 0; i<arr.length; i++) {  
        args.push('arr['+ i + ']')  
    }  
    const result = eval('thisArg.func(' + args +')')  
    delete thisArg.func;  
    return result;  
}
```

### 实现柯里化[JavaScript 专题之函数柯里化](https://juejin.cn/post/6844903490771222542#heading-5)

考察频率: (⭐⭐⭐)

```js
// 第三版
function curry(fn, args, holes) {
    length = fn.length;

    args = args || [];

    holes = holes || [];

    return function() {

        var _args = args.slice(0),
            _holes = holes.slice(0),
            argsLen = args.length,
            holesLen = holes.length,
            arg, i, index = 0;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
            if (arg === _ && holesLen) {
                index++
                if (index > holesLen) {
                    _args.push(arg);
                    _holes.push(argsLen - 1 + index - holesLen)
                }
            }
            // 处理类似 fn(1)(_) 这种情况
            else if (arg === _) {
                _args.push(arg);
                _holes.push(argsLen + i);
            }
            // 处理类似 fn(_, 2)(1) 这种情况
            else if (holesLen) {
                // fn(_, 2)(_, 3)
                if (index >= holesLen) {
                    _args.push(arg);
                }
                // fn(_, 2)(1) 用参数 1 替换占位符
                else {
                    _args.splice(_holes[index], 1, arg);
                    _holes.splice(index, 1)
                }
            }
            else {
                _args.push(arg);
            }

        }
        if (_holes.length || _args.length < length) {
            return curry.call(this, fn, _args, _holes);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}

var _ = {};

var fn = curry(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
});

// 验证 输出全部都是 [1, 2, 3, 4, 5]
fn(1, 2, 3, 4, 5);
fn(_, 2, 3, 4, 5)(1);
fn(1, _, 3, 4, 5)(2);
fn(1, _, 3)(_, 4)(2)(5);
fn(1, _, _, 4)(_, 3)(2)(5);
fn(_, 2)(_, _, 4)(1)(3)(5)

```

### 实现链式调用[文章](https://github.com/zcxiaobao/everyday-insist/blob/master/21interview/imitate/chainFunc.md)

```js

function Class1() {
    console.log('初始化')
}
Class1.prototype.method = function(param) {
    console.log(param)
    return this
}
let cl = new Class1()
//由于new 在实例化的时候this会指向创建的对象， 所以this.method这个方法会在原型链中找到。
cl.method('第一次调用').method('第二次链式调用').method('第三次链式调用')
```

### 偏函数(文章)[https://juejin.cn/post/6946022649768181774#heading-17]

```js
function partial(fn, ...args) {
    return (...arg) => {
        args[index] = 
        return fn(...args, ...arg)
    }
}

```

## 🌍 ajax 与 jsonp

考察频率: (⭐⭐⭐)

### 实现ajax

```js
function ajax({  
    url= null,  
 method = 'GET',  
 dataType = 'JSON',  
 async = true}){  
 return new Promise((resolve, reject) => {  
  let xhr = new XMLHttpRequest()  
  xhr.open(method, url, async)  
  xhr.responseType = dataType  
  xhr.onreadystatechange = () => {  
   if(!/^[23]\d{2}$/.test(xhr.status)) return;  
   if(xhr.readyState === 4) {  
    let result = xhr.responseText  
    resolve(result)  
   }  
  }  
  xhr.onerror = (err) => {  
   reject(err)  
  }  
  xhr.send()  
 })  
}
```

### 实现jsonp

```js
const jsonp = ({ url, params, callbackName }) => {  
    const generateUrl = () => {  
        let dataSrc = ''  
        for (let key in params) {  
            if (params.hasOwnProperty(key)) {  
                dataSrc += `${key}=${params[key]}&`  
            }  
        }  
        dataSrc += `callback=${callbackName}`  
        return `${url}?${dataSrc}`  
    }  
    return new Promise((resolve, reject) => {  
        const scriptEle = document.createElement('script')  
        scriptEle.src = generateUrl()  
        document.body.appendChild(scriptEle)  
        window[callbackName] = data => {  
            resolve(data)  
            document.removeChild(scriptEle)  
        }  
    })  
}
```

## 🛫 ES6篇

### 实现set

```js
class Set {  
  constructor() {  
    this.items = {};  
    this.size = 0;  
  }  
  
  has(element) {  
    return element in this.items;  
  }  
  
  add(element) {  
    if(! this.has(element)) {  
      this.items[element] = element;  
      this.size++;  
    }  
    return this;  
  }  
  
  delete(element) {  
    if (this.has(element)) {  
      delete this.items[element];  
      this.size--;  
    }  
    return this;  
  }  
  
  clear() {  
    this.items = {}  
    this.size = 0;  
  }  
  
  values() {  
    let values = [];  
    for(let key in this.items) {  
      if(this.items.hasOwnProperty(key)) {  
        values.push(key);  
      }  
    }  
    return values;  
  }  
}
```

### 实现 map

```js
function defaultToString(key) {  
  if(key === null) {  
    return 'NULL';  
  } else if (key === undefined) {  
    return 'UNDEFINED'  
  } else if (Object.prototype.toString.call(key) === '[object Object]' || Object.prototype.toString.call(key) === '[object Array]') {  
    return JSON.stringify(key);  
  }  
  return key.toString();  
}  
  
class Map {  
  constructor() {  
    this.items = {};  
    this.size = 0;  
  }  
  
  set(key, value) {  
    if(!this.has(key)) {  
      this.items[defaultToString(key)] = value;  
      this.size++;  
    }  
    return this;  
  }  
  
  get(key) {  
    return this.items[defaultToString(key)];  
  }  
  
  has(key) {  
    return this.items[defaultToString(key)] !== undefined;  
  }  
  
  delete(key) {  
    if (this.has(key)) {  
      delete this.items[key];  
      this.size--;  
    }  
    return this;  
  }  
  
  clear() {  
    this.items = {}  
    this.size = 0;  
  }  
  
  keys() {  
    let keys = [];  
    for(let key in this.items) {  
      if(this.has(key)) {  
        keys.push(key)  
      }  
    }  
    return keys;  
  }  
  
  values() {  
    let values = [];  
    for(let key in this.items) {  
      if(this.has(key)) {  
        values.push(this.items[key]);  
      }  
    }  
    return values;  
  }  
}
```

## 🦉 其他

### instanceof

考察频率: (⭐⭐⭐⭐)

```js
function instance_of(Case, Constructor) {  
    // 基本数据类型返回false  
    // 兼容一下函数对象  
    if ((typeof(Case) != 'object' && typeof(Case) != 'function') || Case == 'null') return false;  
    let CaseProto = Object.getPrototypeOf(Case);  
    while (true) {  
        // 查到原型链顶端，仍未查到，返回false  
        if (CaseProto == null) return false;  
        // 找到相同的原型  
        if (CaseProto === Constructor.prototype) return true;  
        CaseProto = Object.getPrototypeOf(CaseProto);  
    }  
}
```

### 实现千分位分隔符

考察频率: (⭐⭐⭐)

```js
var str = "100000000000",  
    reg = /(?=(\B\d{3})+$)/g;  
str.replace(reg, ",")
```

### 把一个JSON对象的key从下划线形式（Pascal）转换到小驼峰形式（Camel）[文章](https://github.com/zcxiaobao/everyday-insist/blob/master/21interview/baseJS/_tocamel.md)

考察频率: (⭐⭐⭐)

```js
function getCamelCase(str) {
    return str.replace(/_([a-z])/g, function(all, i) {
        return i.toLowerCase();
    })
}
```

### 实现数据类型判断函数typeof[[typeof]]

```js
function myTypeof(obj) {  
   return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()   
}
```

### 实现数组转树[文章](https://github.com/lgwebdream/FE-Interview/issues/35)

```js
function convert(list) {
  const map = list.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
  const result = []
  for (const key in map) {
    const item = map[key]
    if (item.parentId === 0) {
      result.push(item)
    } else {
      const parent = map[item.parentId]
      if (parent) {
        parent.children = parent.children || []
        parent.children.push(item)
      }
    }
  }
  return result
}
```

### 实现sleep函数

```js
// promise  
const sleep = time => {  
  return new Promise(resolve => setTimeout(resolve,time))  
}  
sleep(1000).then(()=>{  
  console.log(1)  
})  
// ES5  
function sleep(callback,time) {  
  if(typeof callback === 'function')  
    setTimeout(callback,time)  
}  
  
function output(){  
  console.log(1);  
}  
sleep(output,1000);
```

### 实现发布订阅模式

```js
class EventEmitter {  
    constructor() {  
        this.cache = {}  
    }  
    on(name, fn) {  
        if (this.cache[name]) {  
            this.cache[name].push(fn)  
        } else {  
            this.cache[name] = [fn]  
        }  
    }  
    off(name, fn) {  
        let tasks = this.cache[name]  
        if (tasks) {  
            const index = tasks.findIndex(f => f === fn || f.callback === fn)  
            if (index >= 0) {  
                tasks.splice(index, 1)  
            }  
        }  
    }  
    emit(name, once = false, ...args) {  
        if (this.cache[name]) {  
            // 创建副本，如果回调函数内继续注册相同事件，会造成死循环  
            let tasks = this.cache[name].slice()  
            for (let fn of tasks) {  
                fn(...args)  
            }  
            if (once) {  
                delete this.cache[name]  
            }  
        }  
    }  
}
```