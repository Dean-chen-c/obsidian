
[[Element.getBoundingClientRect]]

```js
// 关键在于 getBoundingClientRect 获取相对位置

function isInViewport(dom){
	let viewPortHeight = window.innerHeight || document.documentElement.clientHeight;
	let viewPortWidth = window.innerWidth ||  document.documentElement.clientWidth;
	let { top,left,right,bottom } = dom.getBoundingClientRect();
	
	return ( 
	top >= 0 && 
	left >= 0 && 
	bottom <= viewPortHeight 
	&& right <= viewPortWidth 
	); 
	//这里还没写完面试官就让我停下了,哼~ 高手之间意念都是相同的。 
}
```