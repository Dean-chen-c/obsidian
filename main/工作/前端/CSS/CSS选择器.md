
```css
一、CSS+CSS3 选择器
类选择器： .name{}
ID选择器： #id{}
元素选择器： div{}
通配符选择器： *{}
后代选择器： div p{}
子选择器： div>p{} 和后代不一样的是，只筛选div下所有第一层p标签
兄弟选择器： div+p{} 筛选div后面一个p元素
交集选择器: div,p,.name{} 选择的元素共享一个样式

二、属性选择器
属性选择器： a[target=_blank] 筛选所有a标签中属性target是_blank的
属性包含选择器： div[title~=name] 筛选div属性title中包裹带有name的
属性开头选择器： img[src^=‘https’] 筛选img属性src以htttps开头的所有img标签
属性结尾选择器： img[src$=’.png’] 筛选img属性src以 .png 结尾的img标签
定义属性选择器时的括号 *[target] {color:red;}  包含标题（target）的所有元素变为红色 
span[class='test']    这样写是：匹配所有带有class类名test的span标签
span[class *='test'] 这样写是：匹配所有包含了test字符串的class类名的span标签
span[class]             这样写是：匹配所有带有class属性的span标签
[class='all']              这样写是：匹配页面上所有带有class='all'的标签
[class *='as']           这样写是：匹配页面上所有class类且类名带有as字符串的类的标签

三、伪类选择器
焦点伪类： :focus
悬浮伪类： :hover
前置伪类：p ::after 往p元素前面追加内容
后置伪类：p ::before 往p元素后面追加内容
光棍伪类：p :empty 选择没有子元素的p标签
取反伪类：div: not(p) 选择div下所有不是p标签的元素
首个选择器： div p:first-of-type 或:first-child 选择div下面第一个p标签
末尾选择器： ul li:last-child 或 last-of-type 选择ul下最后一个li
正序筛选伪类： :nth-child(2n) 正序第一个开始自由筛选第2的倍数（2、4、6、8）个元素
倒序筛选伪类： :nth-last-child(2) 倒序最末尾开始自由筛选第 2 个元素
注意点 nth-child(2) 和 nth-of-type(2) 区别：
p:nth-child(2) 找位置是2的p元素，如果位置2不是p元素不生效
p:nth-of-type(2) 找下面p元素中排在第二的，及时前面有很多其他元素，类似兄弟选择
```