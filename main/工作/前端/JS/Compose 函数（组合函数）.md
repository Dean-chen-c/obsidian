## 介绍

compose 是函数式编程中很重要的函数之一， 因为其巧妙的设计而被广泛使用。

compose 函数的作用就是组合函数的，将函数串联起来执行，将多个函数组合起来，`一个函数的输出结果是另一个函数的输入参数`，一旦第一个函数开始执行，就会像多米诺骨牌一样推导执行了。

概括来说，就是接收若干个函数作为参数，返回一个新函数。新函数执行时，按照`由右向左`的顺序依次执行传入中的函数，每个函数的执行结果作为为下一个函数的输入，直至最后一个函数的输出作为最终的输出结果。

## 模式

```js
function compose(...fns) {
 // ...
}
// compose(f,g)(x) === f(g(x))
// compose(f,g,m)(x) === f(g(m(x)))
// compose(f,g,m,n)(x) === f(g(m(n(x))))
```

## 实现

```js
function compose(...fns) {
	return function(x) {
		return fns.reduceRight(function(acc,cur) {
			return cur(acc);
		},x)
	}
}
```

## 扩展

### 管道函数

`管道(pipeline)`的实现同`compose`的实现方式很类似，因为二者的区别仅仅是数据流的方向不同而已。

```js
function compose(...fns) {
	return function(x) {
		return fns.reduce(function(acc,cur) {
			return cur(acc);
		},x)
	}
}
```
