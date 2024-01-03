#reduce  #Array

数组中的每个元素按序执行一个提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

## 常做用途

### 求值的总和

```js
const arr = [1, 2, 3, 4];
arr.reduce((acc, cur) => acc + cur);
```

### 最大公约数

```js
const arrayGCD = arr => {
    const gcd = (x,y) => !y ? x : gcd(y, x % y);
    return arr.reduce(gcd);
}

arrayGCD([6,36,12]) // 6
arrayGCD([1,2,3,4,5]) // 1
```

### 最小公倍数

```js
const arrayLCM = arr => {
    const gcd = (x,y) => !y ? x : gcd(y, x % y);
    const lcm = (x,y) =>(x*y)/gcd(x,y);
    return arr.reduce(lcm);
}

arrayLCM([1,2,3,4,5]) // 60
arrayLCM([9,36,3]) // 36

```