## 文本的属性

```css
1. font-size：可设置字体的尺寸说明：
	1） 属性值为数值型时，必须给属性值加单位，属性值为0时除外。
	2）为了减小系统间的字体显示差异，IE Netscape Mozilla的浏览器制作商于1999年召开会议，
       共同确定16px/ppi为标准字体大小默认值,即1em.默认情况下，1em=16px, 0.75em=12px; 
	3）使用绝对大小关键字
         xx-small =9px
         x-small =11px
         small =13px
         medium =16px
         large =19px
         x-large =23px
         xx-large =27px
2. color：规定文本的颜色。
    属性值：colorname  hex rgb 
3. font-family：规定元素的字体系列
    (1)此属性设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，将尝试下一种字体，都不支持按系统默认字体显示。
    (2) 如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体","Times New Roman"
    (3) 多个字体系列是用一个逗号分隔指明;
4. font-weight：设置显示元素的文本中所用的字体加粗
    属性值：bolder 更粗的
           bold 加粗
           normal 常规
           lighter 更细
           100—900 100对应最轻的字体变形
                   900对应最重的字体变形，
                   100-400 一般显示 
                   500常规字体 
                   600-900加粗字体
5. font-style：设置文本倾斜
     属性值：
          italic   倾斜 
          oblique  更倾斜
          normal   取消倾斜，常规显示     
6.line-height： 属性设置行间的距离（行高）
     属性值：
       normal	默认。设置合理的行间距。
       number	设置数字，此数字会与当前的字体尺寸相乘来设置行间距(em)。
       length	设置固定的行间距。
           %	基于当前字体尺寸的百分比行间距。
   A:行高指的是文本行的基线间的距离，而基线（Base line），指的是一行字横排时下沿的基础线，基线并不是汉字的下端沿，而是英文字母x的下端沿
   B:行高有一个特性，叫做垂直居中性（文本在行高垂直居中的位置显示）
    说明：
    当单行文本的行高等于容器高时，可实现单行文本在容器中垂直方向居中对齐(重要)；
    当单行文本的行高小于容器高时，可实现单行文本在容器中垂直中齐以上显示；
    当单行文本的行高大于容器高时，可实现单行文本在容器中垂直中齐以下（IE6及以下版本存在浏览器兼容问题）
7. font:文字属性简写
   font:font-style | font-variant(小体大写字母) | font-weight | font-size / line-height | font-family  
   (1)简写时 , font-size和line-height只能通过斜杠/组成一个值，不能分开写。

   (2) 顺序不能改变 ,这种简写法只有在同时指定font-size和font-family属性时才起作用,而且,你没有设定font-weight , font-style , 以及font-varient , 他们会使用缺省值(normal)。

  (3)font:font-size/line-height  font-family
  
8. text-align：设置文本水平对齐方式   
   属性值：
        left	把文本排列到左边。默认值：由浏览器决定。
        right	把文本排列到右边。
        center	把文本排列到中间。
        justify	实现两端对齐文本效果。
        
9. text-decoration：规定添加到文本的修饰
  属性值：
        none:没有修饰
	    underline:添加下划线
	    overline:添加上划线
	    line-through:添加删除线
	    
10. text-indent：属性规定文本块中首行文本的缩进（2em）（属性值可以为负值）
	属性值： 
	    length	定义固定的缩进。默认值：0。
           %	定义基于元素宽度的百分比的缩进。 
     
11. text-transform：设置文本大小写
    属性值：
        none	默认。定义带有小写字母和大写字母的标准的文本。
        capitalize	文本中的每个单词以大写字母开头。
        uppercase	定义仅有大写字母。
        lowercase	定义无大写字母，仅有小写字母。

12. letter-spacing：属性增加或减少字符间的空白（字符间距）。
    属性值：
	    normal	默认。规定字符间没有额外的空间。
       length	定义字符间的固定空间（允许使用负值）。

13. word-spacing：属性增加或减少单词间的空白（即字间隔）。
    属性值：
    	normal	默认。定义单词间的标准空间。
    	length	定义单词间的固定空间。   
```

### 文本溢出overflow

```css
overflow：设置溢出容器的内容如何显示（css2）
  属性值：
    visible: 默认值，内容不会被修剪，会呈现在元素框之外；
    hidden:  内容会被修剪，并且其余内容是不可见的；
    scroll:  内容会被修剪，但是浏览器会显示滚动条，以便查看其余的内容;
    auto:    如果内容被修剪，则浏览器会显示滚动条，以便查看其他的内容;
    inherit: 规定应该从父元素继承overflow属性的值。

white-space：设置如何处理元素内的空白
  属性值：    
    normal:   默认值，多余空白会被浏览器忽略只保留一个；
    pre:      空白会被浏览器保留（类似pre标签）；
    pre-wrap: 保留一部分空白符序列，但是正常的进行换行；
    pre-line: 合并空白符序列，但是保留换行符；
    nowrap:   文本不会换行，文本会在同一行上继续，直到遇到<br/>标签为止;
 
text-overflow：设置单行文本溢出是否显示省略号
  属性值：
    clip：不显示省略号（...），而是简单的裁切;
    ellipsis：当对象内文本溢出时，显示省略标记；
    
例：设置某段文字显示省略号css代码
  width：     ；        /*强制容器宽度*/
  white-space: nowrap; /*文字在一行显示*/
  overflow: hidden;    /*设置文字溢出*/
  text-overflow: ellipsis;  /*溢出文字显示省略号*/    

例：多行文本省略：
	display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
	text-overflow: ellipsis;
  white-space: nowrap;
```

## 新增文本属性

```css
text-shadow：h-shadow v-shadow blur color；
向文本添加一个或多个阴影，用逗号分隔的阴影列表，每个阴影有两个或三个长度值和一个可选的颜色值进行规定，省略的长度是0。
 属性值：
    h-shadow:水平阴影的位置。允许负值
    v-shadow:必需。垂直阴影的位置。允许负值
    blur:可选。模糊的距离。
    color:可选。阴影的颜色。
    
word-wrap:属性用来标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。
 属性值：
	normal:只在允许的断字点换行（浏览器保持默认处理）
	break-word:属性允许长单词或URL地址换行到下一行-会考虑尽量放在一行内，如果不行再换行
	
word-break:属性规定自动换行的处理方法
 属性值：
    normal:浏览器默认处理
	break-all:它断句的方式非常粗暴，它不会尝试把长单词挪到下一行，而是直接进行单词内的断句
	Keep-all:文本不会换行，只能在空格或连字符处换行

@font-face
@font-face是CSS3中的一个模块，主要是把自己定义的Web字体嵌入到你的网页中，随着@font-face模块的出现，
我们在Web的开发中使用字体不怕只能使用Web安全字体（@font-face这个功能早在IE4就支持）

@font-face的语法规则:
    @font-face { 
         font-family: <YourWebFontName>;
         src: <source> [<format>][, []]; 
    }
 .ttf .eot .woff
```

## vertical-align

```css
vertical-align： 该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐
                 应用于行内元素和单元格元素（inline-level and 'table-cell' elements）
 属性值：
    baseline 默认。元素放置在父元素的基线上。
    top	 把元素的顶端与行中最高元素的顶端对齐
    middle	 把此元素放置在父元素的中部。
    bottom	 把元素的顶端与行中最低的元素的顶端对齐
    sub	 垂直对齐文本的下标。
    super	 垂直对齐文本的上标
   	text-top 把元素的顶端与父元素字体的顶端对齐。
   	text-bottom	把元素的底端与父元素字体的底端对齐。
   	%	     使元素的基线对齐到父元素的基线之上的给定百分比，该百分比是line-height属性的百分比。可以是负数。
   	length  使元素的基线对齐到父元素的基线之上的给定长度。可以是负数
```