
## isComposing

`isComposing` 属性是一个布尔值，用于指示当前是否处于输入法组合状态。在输入法输入过程中，有时候用户可能会输入多个字符构成一个词语，此时 `isComposing` 属性会被设置为 `true`。一旦用户输入完成，输入法状态结束，`isComposing` 属性将变为 `false`。

这个属性通常用于处理输入法输入时的特殊情况，比如实时搜索功能等。当用户正在输入时，可能不希望立即触发搜索，而是等待用户输入完成后再触发搜索。这时可以利用 `isComposing` 属性来判断是否处于输入法组合状态，以便延迟触发搜索。


## code

`code` 属性表示按下的实际物理按键的键码值。这个值是标准化的，不受键盘布局的影响。

## key

`key` 属性表示按下的键所对应的字符值。它会根据当前的键盘布局返回相应的字符值。


## Demo

```html
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Document</title>

</head>

<body>

<input id="textarea" />

<ul id="result"></ul>

<script>

const result = [];

const dom = document.getElementById("textarea");

const resultDom = document.getElementById("result");

dom.addEventListener("keydown", (event) => {

if (event.
	=== false && event.code === "Enter") {

result.push(event.target.value);

event.target.value='';

console.log(result)

resultDom.innerHTML = result.map((r) => {return `<li>${r}</li>`}).join('');

}

});

</script>

</body>

</html>
```