BFC即Block Formatting Contexts (块级格式化上下文)， 是 W3C CSS2.1 规范中的一个概念。

它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。 CSS2.1 中只有BFC和IFC, CSS3中还增加了GFC和FFC。 不同类型的Box，会参与不同的Formatting Context；

•block-level box参与block fomatting context；

•inline-level box参与inline formatting context；

•grid-level box参与grid formatting context；

•flex-level box参与flex formatting context；

## BFC布局规则

```
一、内部的Box会在垂直方向，一个接一个地放置。
二、Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠（按照最大margin值设置）
三、每个元素的margin box的左边，与包含块border box的左边相接触
四、BFC的区域不会与float box重叠。
五、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
六、计算BFC的高度时，浮动元素也参与计算
```

## 哪些元素或属性能触发BFC

```
根元素(<html>)
浮动元素（float不是none）
overflow 值不为visible的块元素
定位元素（元素的position为absolute或fixed）
行内块元素（元素的display为 inline-block）
表格单元格（元素的display为 table-cell(td th)，HTML表格单元格默认为该值）
表格标题（元素的display 为 table-caption(caption)，HTML表格标题默认为该值）
表格其他元素（元素的 display为 table、table-row(tr)、 table-row-group(tbody)、table-header-group(thead)、table-footer-group(tfoot)或 inline-table
display 值为flow-root、flex的元素
contain 值为layout、content或paint的元素
弹性元素（display为flex或inline-flex元素的直接子元素）
网格元素（display为grid或inline-grid元素的直接子元素）
多列容器（元素的column-count或column-width不为auto，包括column-count为1）
column-span为all的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
```

### 浮动元素父元素高度自适应（高度塌陷）

```css
当子元素有浮动并且父元素没有高度的情况下父元素高度为0，会称为高度塌陷
解决方法：
（1）给父元素添加声明overflow:hidden;(触发一个BFC)
（2）在浮动元素下方添加空div,并给该元素添加声明
        div{clear:both; height:0; overflow:hidden;}
（3）万能清除浮动法
   选择符:after{
    content:"";
    display:block;
    clear:both;  
    height:0;
    overflow:hidden;
    visibility:hidden;
   }
clear: 属性规定元素的哪一侧不允许其他浮动元素。
  属性值：
    left	在左侧不允许浮动元素。
    right	在右侧不允许浮动元素。
    both	在左右两侧均不允许浮动元素。
    none	默认值。允许浮动元素出现在两侧。
```