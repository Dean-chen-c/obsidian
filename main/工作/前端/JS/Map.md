
序列化

```js
function replacer(key, value) {
  if(value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

function reviver(key, value) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

const originalValue = [
  new Map([['a', {
    b: {
      c: new Map([['d', 'text']])
    }
  }]])
];
const str = JSON.stringify(originalValue, replacer);
const newValue = JSON.parse(str, reviver);
console.log(originalValue, newValue);
```