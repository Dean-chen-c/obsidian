## animation

### 关键帧的定义

```css
语法:@keyframes animation-name {
       keyframes-selector {css-styles;}
      }
    通过@keyframes规则，能够创建动画。创建动画的原理是，将一套CSS样式逐渐变化为另一套样式，在动画过程中，能够多次改变这套CSS样式。
    以百分比来规定改变发生的时间，或者通过关键词 “from” 和 “to”。

    @keyframes mymove{
     from{初始状态属性}
     to{结束状态属性}
    }
    或
    @keyframes mymove{
     0%{初始状态属性}
        ...
     50%（中间再可以添加关键帧）
        ...
     100%{结束状态属性}
    }
```

### animation属性

```css
1. animation-name：检索或设置对象所应用的动画名称，必须与规则@keyframes配合使用；
   
2. animation-duration：检索或设置对象动画的持续时间（s/ms）
 
3. animation-timing-function：检索或设置对象动画的过渡类型
    属性值：
    linear：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
    ease：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
    ease-in：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
    ease-out：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
    ease-in-out：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0);
    cubic-bezier(num, num, num, num)：特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
    
    timing-function的以上属性值，效果上，关键帧之间会插入补间动画，所以动画效果是连贯性的，是线性动画的效果。
    
    steps()函数/step-start/step-end：实现的动画是没有过渡效果的，而是一帧帧的变化；
    语法：
    steps(次数，start/end)
        第一个参数指定了时间函数中的间隔数量（必须是正整数）;
        第二个参数可选，有start和end两个值，指定在每个间隔的起点或是终点发生阶跃变化，默认为 end；
    step-start等同于steps(1,start)，动画分成1步，动画执行时为开始端点的部分为开始；
    step-end等同于steps(1,end)：动画分成1步，动画执行时以结尾端点为开始，默认值为end。
    
4. animation-delay：检索或设置对象动画延迟的时间(s/ms)
      属性值：+ - 
 
5. animation-iteration-count：检索或设置对象动画的循环次数（默认执行1次）
    属性值：
      infinite：无限循环     number: 循环的次数
      
6. animation-direction ：检索或设置对象动画在循环中是否反向运动
     属性值：
      normal：正常方向
      reverse：反方向运行
      alternate：动画先正常运行再反方向运行，并持续交替运行
      alternate-reverse：动画先反运行再正方向运行，并持续交替运行
      
7. animation-fill-mode：规定对象动画时间之外的状态;
     属性值：
     none：不改变默认行为。
     forwards：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义），固定动画。
     backwards：在animation-delay所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
     both：向前和向后填充模式都被应用。

8. animation-play-state：检索或设置对象动画的状态
    属性值：
      running:运动 - 默认值
      paused: 暂停

简写：animation 
  (1) 此属性是所有动画属性的简写属性，除了animation-play-state属性 
  (2) 一个动画多个属性值中间空格隔开；想要设置多个动画时，动画之间用逗号分隔；
  (3) 必须定义动画的名称和时长,如果忽略时长,则动画不会执行，因为默认值是 0;
```

## transition

```css
1. transition-property：规定设置过渡效果的CSS属性的名称
   属性值：
     none：没有属性会获得过渡效果
     all:所有属性都将获得过渡效果
     property：定义应用过渡效果的css属性名称列表，列表以逗号分隔
   
2. transition-duration : 规定完成过渡效果需要花费的时间（以秒或毫秒计）;其默认值是0，也就是变换时是即时的；

3. transition-timing-function: 规定过渡效果的速度曲线 （https://cubic-bezier.com/）
    属性值：
    ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)，默认值。
    linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
    ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
    ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
    ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
    cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
    http://cubic-bezier.com/

4. transition-delay：定义在过渡效果开始之前需要等待的时间，以s或ms计，默认值为0。作用于所有元素，包括:before和:after伪元素。

5. 简写属性
   transition: property duration timing-function delay; 设置多个属性的过渡效果时，中间用逗号分隔；

注意：transition-delay与 transition-duration的值都是时间，所以要区分它们在连写中的位置，一般浏览器会根据先后顺序决定，
第一个时间为 transition-duration 第二个为transition-delay。

实现过渡效果：
（1）指定要添加效果的CSS属性;
（2）指定效果的持续时间；
注意：如果时长未规定，则不会有过渡效果，因为默认值是 0。CSS 属性改变的典型事件是鼠标指针位于元素上时.

在转换概念当中：是没有display这么一说的，通过改变元素的透明度去实现从无到有；
```