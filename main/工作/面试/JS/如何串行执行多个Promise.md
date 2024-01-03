
## delay函数

一个封装的延迟函数，然后一个装有3,4,5的数组，需求就是在开始执行时依次等待3, 4, 5秒，并在之后打印对应输出

```js
function delay(time) {
  return new Promise((resolve, reject) => {
    console.log(`wait ${time}s`)
    setTimeout(() => {
      console.log('execute');
      resolve()
    }, time * 1000)
  })
}

const arr = [3, 4, 5];
```

## 结果

```js
wait 3s // 等待3s

execute
wait 4s // 等待4s

execute
wait 5s // 等待5s

execute
```

## 方法

### reduce

```js
const arr = [3, 4, 5];

arr.reduce((s, v) => {
  return s.then(() => delay(v))
}, Promise.resolve())

```

### async + 循环 + await

```js
(
  async function () {
    for (const v of arr) {
      await delay(v)
    }
  }
)()
```

### 普通循环

```js
let p = Promise.resolve()
for (const i of arr) {
  p = p.then(() => delay(i))
}
```

### while

```js
let p = Promise.resolve();
while (arr.length) {
  let s = arr.shift();
  p = p.then(() => delay(s));
}
```

### 递归

```js
function dispatch(i, p = Promise.resolve()) {
  if (!arr[i]) return Promise.resolve()
  return p.then(() => dispatch(i + 1, delay(arr[i])))
}
dispatch(0)
```

### for await of

```js
function createAsyncIterable(arr) {
  return {
    [Symbol.asyncIterator]() {
      return {
        i: 0,
        next() {
          if (this.i < arr.length) {
            return delay(arr[this.i]).then(() => ({ value: this.i++, done: false }));
          }

          return Promise.resolve({ done: true });
        }
      };
    }
  }
}

(async function () {
  for await (i of createAsyncIterable(arr)) { }
})();
```

### generator

```js
function* gen() {
  for (const v of arr) {
    yield delay(v)
  }
}

function run(gen) {
  const g = gen()

  function next(data) {
    const result = g.next(data)
    if (result.done) return result.value
    result.value.then(function(data) {
      next(data)
    })
  }

  next()
}

run(gen)

```