# Grid布局

### 块级容器

```css
display: grid;
```

### 行内容器（宽度随内容自适应）时

```css
display: inline-grid;
```

### 划分列

```css
grid-template-columns: 100px 1fr 1fr;                // fr 是fraction 的缩写，意为"片段"，可以与绝对长度的单位结合使用
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);               // repeat()接受两个参数，第一个参数是重复的次数，第二个参数是要重复的值。
grid-template-columns: 1fr 1fr minmax(100px, 1fr);   // minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
grid-template-columns: repeat(auto-fill, 100px);     // 空白匿名网格
grid-template-columns: repeat(auto-fit, 100px);      // 空白匿名网格折叠合并
grid-template-columns: fit-content(100px) fit-content(100px) 40px auto;  // 让尺寸适应于内容，但不超过设定的尺寸,只支持数值和百分比值
```

### 划分行

```css
grid-template-rows  //  使用方法与列相同
```

### 设置行/列的间距

```css
row-gap: 20px;       // 行间距
column-gap: 30px;    // 列间距
gap: 20px;           // 行列间距

```

### 设置单元格内的对齐方式

```css
justify-items 指定单元格内容的水平对齐方式，属性值有：
stretch：【默认值】拉伸，占满单元格的整个宽度。
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。

align-items 指定单元格内容的垂直对齐方式，属性值有：
normal：【默认值】会根据使用场景的不同表现为stretch或者start。
stretch：拉伸，占满单元格的整个宽度。
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。
baseline：基线对齐（align-items属性特有属性值）

place-items 是align-items属性和justify-items属性的合并简写形式：
place-items: start end;
```

### 单个项目的对齐方式

```css
justify-self 跟justify-items属性的用法完全一致，但只作用于单个项目。

align-self 跟align-items属性的用法完全一致，也是只作用于单个项目。

place-self 是align-self属性和justify-self属性的合并简写形式。
```