## border

```css
border-width：简写属性为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。
  属性值：
        thin	定义细的边框。
        medium	默认。定义中等的边框。
        thick	定义粗的边框。
        length	允许您自定义边框的宽度。
    
border-color：设置边框颜色
  属性值：
        color_name	
        hex_number	
        rgb_number	
        transparent	默认值。边框颜色为透明。

border-style：设置边框类型
  属性值：
    none	定义无边框。
    hidden	与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。
    dotted	定义点状边框。在大多数浏览器中呈现为实线。
    dashed	定义虚线。在大多数浏览器中呈现为实线。
    solid	定义实线。
    double	定义双线。双线的宽度等于 border-width 的值。
    groove	定义 3D 凹槽边框。其效果取决于 border-color 的值。
    ridge	定义 3D 垄状边框。其效果取决于 border-color 的值。
    inset	定义 3D inset 边框。其效果取决于 border-color 的值。
    outset	定义 3D outset 边框。其效果取决于 border-color 的值。

border-width/color/style:A B C D;上  右 下 左
border-width/color/style:A B C;上 左右 下
border-width/color/style:A B;上下 左右
border-width/color/style:A;上下左右

border:边框宽度 边框风格 边框颜色（简写）;
	例如：border:5px solid #ff0000

可单独设置一方向边框:
    border-bottom:边框宽度 边框风格 边框颜色;底边框
    border-left:边框宽度 边框风格 边框颜色;左边框
    border-right:边框宽度 边框风格 边框颜色;右边框
    border-top:边框宽度 边框风格 边框颜色;上边框

分别设置某一个方向上边框的颜色/类型/宽度:    
    border-top/right/bottom/left-color
    border-top/right/bottom/left-width
    border-top/right/bottom/left-style

width:100% : 子元素的 content 撑满父元素的content，如果子元素还有 padding、border等属性，或者是在父元素上设置了边距和填充，都有可能会造成子元素区域溢出显示;
width:auto : 是子元素的 content+padding+border+margin 等撑满父元素的 content 区域。

border-image: 图片边框
    border-image-source:路径
    border-image-slice:切割距离（ 上下左右 )
    border-image-repeat:重复方式（ stretch-拉伸 repeat-重复 round-拉伸重复)
```

## background

```css
1. background-color：属性设置元素的背景颜色。
属性值：colorname：规定颜色名称为背景
hex：规定十六进制的背景颜色
rgb：规定rgb的背景颜色
transparent：默认，背景颜色为透明

2.background-image：属性为元素设置背景图像。
属性值：url（）：指向图像路径
none：默认值，不显示背景图像

背景图片的显示原则：
1）容器尺寸等于图片尺寸，背景图片正好显示在容器中;
2）容器尺寸大于图片尺寸，背景图片将默认平铺，直至铺满元素；
3）容器尺寸小于图片尺寸，只显示元素范围以内的背景图。

网页上有两种图片形式：插入图片、背景图；
*插入图片：*属于网页内容，也就是结构。
*背景图：*属于网页的表现，背景图上可以显示文字、插入图片、表格等。

3. background-repeat：设置是否及如何重复背景图像。
属性值：no-repeat：背景图像仅显示一次，不平铺
repeat：默认。背景图像将在垂直方向和水平方向重复
repeat-x：背景图像将在水平方向重复。
repeat-y：背景图像将在垂直方向重复。

4. background-position：属性设置背景图像的起始位置。 
属性值：xpos/%/ left right center
ypos/%/ top bottom center
第一个值是水平位置，第二个值是垂直位置。
如果仅规定了一个值，另一个值将是50% / center

5. background-attachment：设置背景图像是否固定或者随着页面的其余部分滚动。
属性值： scroll:默认值。背景图像会随着页面其余部分的滚动而移动。
fixed：当页面的其余部分滚动时，背景图像不会移动。

6. background：简写属性，在一个声明中设置所有的背景属性
background:color image repeat position attachment
background:image repeat position attachment color
background:image repeat attachment position color
background:image;其他的属性值不写，但是有默认值；
background:color
```

### 线性渐变

```css
语法：
background-image:linear-gradient(direction, color-stop1, color-stop2, ...);

说明：
direction：定义渐变的角度方向。
    angle:从0deg到360deg，默认为180deg。
  to side-or-corner:由两个关键字组成,第一个为指定水平位置(left或 right)，
                    第二个为指定垂直位置（top或bottom），顺序是随意的，每个关键字都是可选的。
  
color-stop1, color-stop2,...：指定渐变的起止颜色，由颜色值、停止位置（可选，使用百分比指定）组成。

注意：角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。
但是，请注意很多浏览器(Chrome,Safari,fiefox等)的使用了旧的标准，即 0deg将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。
```

### 重复线性渐变

```css
语法:
background-image: repeating-linear-gradient(direction, color-stop1, color-stop2, ...);用于创建重复的线性渐变 "图像"；
注意：每个颜色后边必须设置%或者px；
```

### 径向渐变

```css
语法：
A:
background-image: radial-gradient(position, shape size, start-color, ..., last-color) 需要处理兼容;

B:
background-image: radial-gradient(shape(图形) size(尺寸) at position(径变起点), start-color, ..., last-color) 高版本不需要处理兼容;
说明： 
shape: ellipse (默认)：指定椭圆形的径向渐变。
       circle ：指定圆形的径向渐变
       
size：定义渐变的大小：
    farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角
    farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边
    closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角
    closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边
    
position：定义渐变的位置
   length：用长度值指定径向渐变圆心的横坐标或纵坐标。可以为负值。
    percentage：用百分比指定径向渐变圆心的横坐标或纵坐标。可以为负值。
    left：设置左边为径向渐变圆心的横坐标值。
    center：设置中间为径向渐变圆心的横坐标值。
    right：设置右边为径向渐变圆心的横坐标值。
    center（默认）：设置中间为径向渐变圆心的纵坐标值。
    top：设置顶部为径向渐变圆心的纵坐标值。
    bottom：设置底部为径向渐变圆心的纵坐标值。
    
start-color, ..., last-color：用于指定渐变的起止颜色
```

### 重复径向渐变

```css
语法：
background-image:repeating-radial-gradient(shape size at position, start-color, ..., last-color);
注意：每个颜色后边必须设置%或者px；
```

### 新增背景属性

```css
background-origin:规定背景图片的定位区域，规定background-position属性相对于什么位置来定位。
	属性值：
		padding-box:背景图像相对于内边距框来定位
		border-box:背景图像相对于边框盒来定位
		content-box:背景图像相对于内容框来定位     
		
background-clip:属性规定背景的绘制区域
	属性值:
		border-box:背景被裁剪到边框盒。
		padding-box:背景被裁剪到内边距框。
		content-box:背景被裁剪到内容框。    

background-size：规定背景图片的尺寸；
    属性值：
       length:设置背景图像的宽度,高度。第一个值设置宽度，第二个值设置高度,如果只设置一个值，则第二个值会被设置为 "auto"。
       percentage:以父元素的百分比来设置背景图像的宽度和高度。第一个值设置宽度，第二个值设置高度。如果只设置一个值，则第二个值会被设置为 "auto"。
       cover: 会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。背景图像的某些部分也许无法显示在背景定位区域中。
       contain:会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小，背景图像也许无法覆盖背景区域。
 
简写： 
background:url() repeat scroll position/size;  

背景新增功能：同一个元素多重背景设置，先写的显示在上面；
例如A：
   background-image:url(test1.jpg),url(test2.jpg)...;
   background-repeat:no-repeat,no-repeat...; 
   background-attachment:scroll,scroll...; 
   background-position:10px 20px,50px 60px...;
   B：
   background:url(test1.jpg) no-repeat scroll 10px 20px,
             url(test2.jpg) no-repeat scroll 50px 60px,
             url(test3.jpg) no-repeat scroll 90px 100px;
```

## box-shadow

```css
box-shadow：设置盒子阴影，设置多个阴影时，用逗号隔开；
属性值(依次往后)：
    h-shadow:必需的。水平阴影的位置。允许负值
    v-shadow:必需的。垂直阴影的位置。允许负值
    blur:可选。模糊距离
    spread:可选。阴影的大小
    color:可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表
    inset:可选。从外层的阴影（开始时）改变为内侧阴影；
    默认是外阴影   
    外阴影：
    x + 右  -左
    y + 下  -上
    内阴影：
    x + 左  -右
    y + 上  -下
```