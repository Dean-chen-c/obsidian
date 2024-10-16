
## transform2D功能函数属性

```
1. translate(x,y) ：元素从其当前位置，根据给定的 x 坐标和 y 坐标位置参数进行移动，如果第二个参数未提供，则默认为0；
   translateX(n)：定义 2D 转换，沿着 X 轴移动元素。 +  右  - 左 
   translateY(n)：定义 2D 转换，沿着 Y 轴移动元素。  + 下   - 上
   说明： 单位为%，参照的自身的大小
 
2. rotate(n deg)：定义2D旋转，在参数中规定角度;
      正值+： 是顺时针旋转       
      负值-： 为逆时针旋转
注意：rotate和translate同时使用，当书写顺序不同时，会影响显示效果

3. scale(number,number)：指定对象的2D缩放，第一个参数对应X轴，第二个参数对应Y轴，如果第二个参数未提供，则默认取第一个参数的值
   scaleX(number)：指定对象X轴的（水平方向）缩放
   scaleY(number)：指定对象Y轴的（垂直方向）缩放
	0： 缩小不可见   <1: 缩小    =1: 大小不变
    >1: 放大       负值：翻转 再放大或者缩小
    
4. skew(angle ,angle)：指定对象skew transformation（斜切扭曲）, 第一个参数对应X轴，第二个参数对应Y轴。
                       如果第二个参数未提供，则默认值为0
    skewX(angle)：指定对象X轴的（水平方向）扭曲
    skewY(angle)：指定对象Y轴的（垂直方向）扭曲
注意：rotate和skew同时使用，当书写顺序不同时，会影响显示效果

5. matrix(n,n,n,n,n,n) 函数
   matrix() 方法把所有 2D 转换方法组合在一起。
   matrix() 方法需要六个参数，包含数学函数，允许：旋转、缩放、移动以及倾斜元素。
```

### 变形原点

```css
transform-origin: x-axis  y-axis  z-axis；属性允许改变被转换元素原点的位置，2D转换元素能够改变元素 x 和 y 轴,
                                          3D转换元素还能改变其Z轴
说明：
该属性只有在设置了transform属性的时候起作用；
x：left center right/length/%
y：top center bottom/length/%
z：length
```


## (max min fit )-content

### max-content

尺寸关键字代表了内容的最大宽度或最大高度。对于文本内容而言，这意味着内容即便溢出也不会被换行。(文本多宽，就多宽)

### min-content

尺寸关键字代表了单个单词的最大宽度或最大高度。(单个单词最大多宽，就多宽)

### fit-content

尺寸关键字代表了容器的最大宽度或最大高度。(容器多宽，就多宽)

## calc()动态计算方法详解

```css
calc是英文单词calculate(计算)的缩写，是css3的一个新增的功能，用来指定元素的长度。

 calc() 函数用于动态计算长度值。
     ● calc(必须，一个数学表达式，结果将采用运算后的返回值。)
     ● 运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；
     ● 任何长度值都可以使用calc()函数进行计算；
     ● calc()函数支持 "+", "-", "*", "/" 运算；
     ● calc()函数使用标准的数学运算优先级规则；

语法：
	.elm {
  		width: calc(expression);
  		width: calc(50% + 2em)
	}
	
兼容：
 .elm {
	/*Firefox*/
	width:-moz-calc(expression);
	/*chrome safari*/
	width:-webkit-calc(expression);
	/*Standard */
	width:calc();
 }
 
优点：
 calc()最大的好处就是用在流体布局上，可以通过calc()计算得到元素的宽度。
 复杂的数据运算由浏览器去计算。
```

## 列表属性

```css
list-style-type：设置列表项标记的类型
  属性值：
    none	无标记。
    disc	默认。标记是实心圆。
    circle	标记是空心圆。
    square	标记是实心方块。
    decimal	标记是数字。
    decimal-leading-zero	0开头的数字标记。(01, 02, 03, 等。)
    lower-roman	小写罗马数字(i, ii, iii, iv, v, 等。)
    upper-roman	大写罗马数字(I, II, III, IV, V, 等。)
    lower-alpha	小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)
    upper-alpha	大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)
    lower-greek	小写希腊字母(alpha, beta, gamma, 等。)
    lower-latin	小写拉丁字母(a, b, c, d, e, 等。)
    upper-latin	大写拉丁字母(A, B, C, D, E, 等。)
    
list-style-position：定义列表符号的位置
  属性值：
        inside	列表项目标记放置在文本以内，且环绕文本根据标记对齐。
        outside	默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。
    
list-style-image：设置图片作为列表符号；
  属性值：
         URL	图像的路径。
        none	默认。无图形被显示。
        
list-style：简写属性，在一个声明中设置所有的列表属性。
例如：list-style:circle inside
     list-style:url() inside
     list-style：none;去掉列表符号
```

## filter

```css
filter: brightness(0.5);

brightness:亮度变化；
grayscale:灰度变化；
blur:模糊变化（如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值）；
contrast:对比度变化；
```