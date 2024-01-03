
#from  #Array 

**`Array.from()`** 静态方法从[可迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE)或[类数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#%E4%BD%BF%E7%94%A8%E7%B1%BB%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1)对象创建一个新的浅拷贝的数组实例

## 常做用途

### 字符串构建数组

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### 数组切割成指定长度的小块数组

```js
// 使用`Array.from()`方法将伪数组和可迭代对象转化数组，该方法返回一个处理好的数组实例。  
// 对于处理伪数组来说`Array.from()`可接受两个参数，第一个为属性为`length`的对象，第二个可选参数是一个回调函数，用来处理被传进新数组的每个元素。  
// 第二个参数——回调函数里的`Array.protype.slice()`可以把原数组切割成指定的长度。

const chunk = (arr,size) => 
   Array.from({length: Math.ceil(arr.length / size)},(val,index) => arr.slice(index * size, index * size + size));

chunk([1,2,3,4,5],2) // [[1,2],[3,4],[5]]
```

### Set Map 转为数组

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]
```

