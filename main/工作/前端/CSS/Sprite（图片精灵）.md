- [[#CSS Sprite|CSS Sprite]]
- [[#Img object-position|Img object-position]]
- [[#Icon Font|Icon Font]]
	- [[#Icon Font#优点|优点]]
	- [[#Icon Font#缺点|缺点]]


## CSS Sprite

将很多小块图片，放入到一个文件中，通过设置backgoud-position 来显示对应图片。

==why？==

- 浏览器限制站点可以发出的并发请求数量
- 并且 HTTP 请求需要一些握手

和成一个文件，就只用通过单个 HTTP 请求加载。

## Img object-position

通过img标签加载图片，设置position位置

## Icon Font

生成字体文件

### 优点

- 可以方便地将任何 CSS 效果应用于它们。
- 因为它们是矢量图形，所以它们是可伸缩的。这意味着我们可以在不降低质量的情况下伸缩它们。
- 我们只需要发送一个或少量 HTTP 请求来加载它们，而不是像图片，可能需要多个 HTTP 请求。
- 由于尺寸小，它们加载速度快。
### 缺点
- 不能用来显示复杂图像
- 通常只限于一种颜色，除非应用一些 CSS 技巧
- 字体图标通常是根据特定的网格设计的，例如 16x16, 32×32, 48×48等。如果由于某种原因将网格系统改为25×25，可能不会得到清晰的结果
-  受到`line-height`, `vertical-align`, `letter-spacing`, `word-spacing`影响，可能显示不正确

## SVG

`<symbol>` 内定义的元素仅在被 `<use>` 元素引用或调用时才会呈现。
```markup
<svg style="display:none;">
  <symbol id="twitter-icon" viewBox="0 0 32 32">
    <path d="M32 6.076c-1.177 …" fill="#000000"></path>
  </symbol>

 <!-- remaining icons here -->
  <symbol id="instagram-icon" viewBox="0 0 32 32">
   <!-- icon contents -->
  </symbol>

  <!-- etc. -->
</svg>
```

```markup
<svg class="twitter-icon">
  <use xlink:href="#twitter-icon"></use>
<svg>
```







