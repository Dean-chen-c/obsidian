## 基础标签

```html
<h1></h1>    <h6></h6>                     标题标签
<p></p>                                    段落标签
<i></i>     <em></em>                      斜体显示
<b></b>     <strong></strong>              加粗显示
<br>                                       换行显示
<hr>                                       画下划线
<span></span>                              短文本标签
<del></del>                                给文字增加删除线
<ins></ins>                                给文字增加下划线
<sup></sup>                               将文字变成上标
<sub></sub>                               将文字变成下标
<u></u>                                   给文字加下划线
<center></center>                         将文字居中 
<a href="   ">超链接</a>                   超链接
<a href="   " target="_blank" title="">超链接</a>    在新的窗口打开超链接
<img src="  " width="" height="" >         插入图片,设置宽高，单位px（像素）或者百分比
<img src="  " title="鼠标划上去的提示" alt="图片加载失败后文字提示" >
<ul type="disc"(实心圆) type="circle"(空心圆) type="square"(实心方框)>
  <li>
  </li>
</ul>                                     #无序列表
<ol type="1"(数字) type="a"(小写字母) type="i"(罗马数字)>
  <li>
  </li>
</ol>                                     #有序列表
<dl>                                      #自定义列表
  <dt>标题</dt>
  <dd>描述</dd>
</dl>      
```

## 表格table

```html
<table border="1px" cellspacing="0">                 #border为边框，cellspacing为单元格空隙
     <col width="200px">                             #定义1列的宽
     <tr height="100px" align="center">              #行居中
         <td width="10px" align="center">  列 </td>  #列宽10px，文字对齐方式居中
     </tr>
 </table> 

在列中采用colspan属性合并横向单元格：<td colspan="7" align="center">个人简历</td>
在列中采用rowspan属性合并竖向单元格：<td rowspan="7" align="center">个人简历</td>

1) 表格标题
   <caption>标题内容</caption>定义表格的标题。caption标签必须直接放置到table标签之后，只能对每个表格定义一个标题。
   
2) 表头单元格
   <th>标签定义HTML表格中的表头单元格
 说明：
    HTML表格有两种单元格类型：
    表头单元格 - 包含头部信息（由<th>元素创建）
    标准单元格 - 包含数据（由<td>元素创建）
    <th> 元素中的文本通常呈现为粗体并且居中。
    <td> 元素中的文本通常是普通的左对齐文本。

3) 列分组
   <col> 标签为表格中一个或多个列定义属性值。
  	span属性: 规定col元素应该横跨的列数, 默认为1，默认时仅定义一列为一组。只能在table或colgroup元素中使用col标签。
   <colgroup> 标签用于对表格中的列进行组合，以便对其进行格式化。
 	span属性：规定列组应该横跨的列数, 默认为1，默认时仅定义一列为一组。

4) 数据行分组
    <thead> 标签用于组合 HTML 表格的表头内容。
    <tbody> 标签用于组合 HTML 表格的主体内容。
    <tfoot> 标签用于组合 HTML 表格的页脚内容。
说明：
(1) tfoot,tbody,thead元素内部必须包含一个或者多个 <tr> 标签。
(2) thead, tbody,  tfoot 元素结合起来使用，用来规定表格的各个部分-表头、主体、页脚
(3)它们的出现次序是： caption、colgroup、 thead、 tbody， tfoot

5) rules属性：规定内侧边框的哪个部分是可见的。(html的属性)
   属性值：
    rows:位于行之间的线条
    cols:位于列之间的线条
    all:位于行和列之间的线条
    none:没有线条
    groups:位于行组或者列组之间的线条 

6) border-collapse 属性设置表格的边框是否被合并为一个单一的边框，还是像在标准的HTML中那样分开显示。
   属性值：
     separate：默认值。边框会被分开。不会忽略border-spacing和 empty-cells属性。
     collapse：如果可能，边框会合并为一个单一的边框。会忽略border-spacing和empty-cells属性。
     
7) border-spacing 属性设置相邻单元格的边框间的距离（仅用于"边框分离"模式）。
    属性值：length length	
    规定相邻单元的边框之间的距离。使用 px、cm 等单位。不允许使用负值。
    如果定义一个length参数，那么定义的是水平和垂直间距。
    如果定义两个length参数，那么第一个设置水平间距，而第二个设置垂直间距。
     
8) empty-cells 属性设置是否显示表格中的空单元格（仅用于"边框分离"模式）。
   属性值：
        hide 不在空单元格周围绘制边框。
        show 在空单元格周围绘制边框。默认。
        
9) table-layout属性设置表格布局算法。
   属性值：
         automatic	默认。列宽度由单元格内容设定。
         fixed	列宽由表格宽度和列宽度设定。
```

## 表单标签

```html
form标签：用于为用户输入创建 HTML 表单，表单用于向服务器传输数据（<form ></form>）。display:block

name 属性：规定表单的名称，form元素的name属性提供了一种在脚本中引用表单的方法
action属性：规定当提交表单时，向何处发送表单数据（返回用户页面）。
method属性：规定如何发送表单数据（表单数据发送到 action 属性所规定的页面，共有两种方法：POST 方法和 GET 方法。）
              浏览器使用method属性设置的方法将表单中的数据传送给服务器进行处理。
```

## 表单控件: input

```html
<input>
属性：
type = '控件类型'
name：属性标识表单域的名称(name 属性用于对提交到服务器后的表单数据进行标识)；
Value：属性定义表单域的默认值，其他属性根据type的不同而有所变化。
maxlength：控制最多输入的字符数，
Size：控制框的宽度（以字符为单位）
说明：
value属性：在checkbox,radio, hidden的标签上表示定义与输入相关联的值  

disabled属性：规定应该禁用input元素。
disabled = ”disabled”

checked属性：规定在页面加载时应该被预先选定的input元素(默认被选中)。     
   checked=“checked”

1）文本输入框 <input type="text" />
        type属性： 规定 input 元素的类型；。
        value属性：为 input 元素设定值；
        name属性：规定 input 元素的名称。
            name 属性用于对提交到服务器后的表单数据进行标识，或者在客户端通过 JavaScript 引用表单数据，
            只有设置了name属性的表单元素才能在提交表单时传递它们的值。
        placeholder属性：规定帮助用户填写输入字段的提示
        maxlength属性：规定输入字段中的字符的最大长度
        size属性：定义输入字段显的宽度（扩展）
2)密码框
	<input type="password" />
3)提交按钮
	<input type="submit" value="按钮内容" />
4)重置按钮
	<input type="reset" value="按钮内容" />
5)空按钮
	<input type="button" value="按钮内容" />
	value属性在type= "button ", "reset”, "submit " 的标签上，表示定义按钮上的显示的文本

button和submit的区别：
submit是提交按钮起到提交信息的作用，button只是一个按钮；
```

## 表单控件（元素）：input/非input

```html
1) fieldset 表单字段集,分组（块状display: block;非input）
   可将表单内的相关元素分组,会在相关表单元素周围绘制边框,fieldset元素可以嵌套，在其内部可以在设置多个fieldset对象。

2) legend 字段集标题，分组标题（块状display: block；非input ）
   legend元素为fieldset元素定义标题，legend元素必须是fieldset内的第一个元素

3）radio 定义单选框/单选按钮(display:inline-block)
   <input type="radio" name="ral" value="" />

4）checkbox 定义复选框
   <input type="checkbox" name="like" value="" />

5) hidden 定义隐藏输入字段。
   <input type= "hidden" name= "country" value="Norway" />隐藏字段对于用户是不可见的，
   隐藏字段通常会存储一个默认值，它们的值也可以由 JavaScript 进行修改。

6）file 文件框
  <input type= "file" name="like" value="" />定义输入字段和 "浏览"按钮，供文件上传。


7) label 提示信息标签(display:inline；非input)
   <label for="绑定控件id名"></label>
此标签为input元素定义标注（标记）；此标签的for属性可把label绑定到另外一个元素上，
将for属性设置为与该控件的id属性值相同。
写法：
（1） <label for="czm">姓名:</label>
     <input type="text" name="name" id="czm" />

（2）<label for="czm"> 姓名: <input type="text" name="name" id="czm" /></label>

8) select 菜单列表 下拉列表(display:inline-block;非input)
    size 属性：规定下拉列表中可见选项的数目，如果size属性的值大于1，但是小于列表中选项的总数目，
    浏览器会显示出滚动条，表示可以查看更多选项。
    <select  name="name" id="czm">
       <option value="" name=""></option>
    </select>

9) option 标签定义下拉列表中的一个选项（一个条目;display:block;非input）
    浏览器将option标签中的内容作为select标签的菜单或是滚动列表中的一个元素显示。
     属性：
       value：定义送往服务器的选项值。
       selected：规定选项(在首次显示在列表中时)表现为选中状态。
       label：下拉列表中会显示出所规定的更短版本。
       
10) optgroup 标签定义选项组。(display:block;非input)
     optgroup元素用于组合option选项。当使用一个长的选项列表时，对相关的选项进行组合会使处理更加容易。
      label：为选项组规定描述-标题-不能被选中。


11）textarea 多行文本框（文本域）(display:inline-block;非input)
     <textarea rows="10" cols="30"></textarea>标签定义一个多行的文本输入控件。
   cols：规定文本区域内可见的宽度
   rows ：规定文本区域内可见的行数。

12）image 图像域提交按钮
   <input type="image" src="submit.gif" alt="Submit" />定义图像形式的提交按钮。
   必须把src 属性和 alt 属性与 <input type="image"> 结合使用。


13）button标签定义一个按钮  display:inline-block 
    <button type=""></button>
   属性：
    type：规定按钮的类型。
    属性值：button  reset submit
    说明：要为button元素规定type属性，不同的浏览器对button元素的type属性使用不同的默任值； 
```

## 表单css属性(resize、outline)

```css
resize: 属性规定是否可由用户调整元素的大小;
  属性值：
  none	      用户无法调整元素的尺寸。
  both	      用户可调整元素的高度和宽度(默认值)。
  horizontal  用户可调整元素的宽度。
  vertical	  用户可调整元素的高度。
  
outline：（轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用，轮廓线不会占据空间，也不一定是矩形。
  outline-width：规定边框宽度
 outline-style：规定边框样式
 outline-color：规定边框颜色
 outline:width style(solid dashed dotted) color简写
 说明：
 border跟outline的区别：
   border可应用于几乎所有有形的html元素，而outline是针对链接、表单控件和ImageMap等元素设计
   border占据空间，outline不占据空间
 cursor 属性规定要显示的光标的类型（形状）
  属性值：
    url            需使用的自定义光标的 URL。
    default	默认光标（通常是一个箭头）
    pointer	光标呈现为指示链接的指针（一只手）
    auto     	默认。浏览器设置的光标。
    crosshair	光标呈现为十字线。
    move	        此光标指示某对象可被移动。
    e-resize	此光标指示矩形框的边缘可被向右（东）移动。
    ne-resize	此光标指示矩形框的边缘可被向上及向右移动（北/东）。
    nw-resize	此光标指示矩形框的边缘可被向上及向左移动（北/西）。
    n-resize	此光标指示矩形框的边缘可被向上（北）移动。
    se-resize	此光标指示矩形框的边缘可被向下及向右移动（南/东）。
    sw-resize	此光标指示矩形框的边缘可被向下及向左移动（南/西）。
    s-resize	此光标指示矩形框的边缘可被向下移动（南）。
    w-resize	此光标指示矩形框的边缘可被向左移动（西）。
    text	此光标指示文本。
    wait	此光标指示程序正忙（通常是一只表或沙漏）。
    help	此光标指示可用的帮助（通常是一个问号或一个气球）。
    
ie低版本浏览器设置鼠标指针形状为手型
  cursor：hand

iframe：会创建包含另外一个文档的内联框架
   可以把需要的文本放置在<iframe>和</iframe>之间，这样就可以应对无法理解iframe的浏览器；
   属性：src：URL规定在iframe中显示的文档的URL。
        scrolling：规定是否在 iframe 中显示滚动条。
        	yes:有滚动条
        	no：不显示滚动条
        frameborder：规定iframe是否显示边框
            0：不显示
            1：显示 
```

## HTML5新增表单属性

```html
placeholder:文本框处于未输入状态时文本框中显示的输入提示。
     
required:检测输入框是否为空，如果为空，则不允许提交（required="required"）。
    
autofocus:规定在页面加载时,输入域自动地获得焦点,一个页面只能有一个（autofocus="autofocus"）。
     
novalidate:规定在提交表单时不应该验证form或input域。即使form表单中的input添加了required，也将不进行验证（novalidate="novalidate"）;

multiple:规定输入域中可选择多个值，每个值之间用逗号分开；如果要获取其中的值在用split获取（multiple="multiple"）；
   
autocomplete:规定form或input域应该拥有自动完成功能。     
         on：默认；规定启用自动完成功能。
         off：规定禁用自动完成功能。
         
min、max、step:为包含数字或日期的input类型规定限定（约束）
         max规定输入域所允许的最大值。
         min规定输入域所允许的最小值。
         step为输入域规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）。

form:规定输入域所属的一个或多个表单，属性值必须引用所属表单的id，此属性适用于所有<input>标签的类型；

pattern:规定用于验证input域的模式（pattern是正则表达式）,在提交时会检查其内容是否符合给定格式。
          
list:list属性与datalist元素配合使用，用来规定输入域的选项列表，list的属性值写datalist的id值。
```

## HTML5多媒体标签

```html
1、video：定义视频，比如电影片段或其它视频流
语法：
<video src="movie.ogg">您的浏览器不支持video标签</video>
注：可以在开始标签和结束标签之间放置文本内容，这样老的浏览器就可以显示出不支持该标签的信息。
  
<video> 元素支持三种视频格式：MP4、WebM、Ogg。

2 、audio：定义音频，比如音乐或其它音频流
语法：
<audio src="someaudio.wav"> 您的浏览器不支持 audio 标签</audio>
注：可以在开始标签和结束标签之间放置文本内容，这样老的浏览器就可以显示出不支持该标签的信息
    
 <audio> 元素支持的3种文件格式：MP3、Wav、Ogg。
    
属性：
  controls属性：如果出现该属性，则向用户显示控件，比如播放按钮。
  autoplay属性：如果出现该属性，则视频在就绪后马上播放。
  muted属性：静音属性。
  loop属性：重复播放属性。
  poster属性：规定视频正在下载时显示的图像，直到用户点击播放按钮。
  src：要播放视频或者音频的路径

    
3、source：此标签为媒介元素（比如video和audio）定义媒介资源。此标签允许规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。
属性：
     src：规定媒体文件的路径
     type：规定媒体资源的类型
  			用于视频：video/ogg   video/mp4     video/webm
  			用于音频：audio/ogg   audio/mp3     audio/wav
   
     <audio controls>
           <!--哪个视频在上面先识别哪个视频-->
           <source src="horse.ogg" type="audio/ogg">
           <source src="horse.mp3" type="audio/mpeg"> 
          Your browser does not support the audio element.        
     </audio>

 说明：
     HTML5的多媒体标签的出现意味着富媒体的发展以及支持不使用插件的情况下即可操作媒体文件，极大地提升了用户体验 。
```