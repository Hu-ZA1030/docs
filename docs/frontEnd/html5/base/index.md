# HTML - 超文本标记语言

HTML（HyperText Markup Language）是一种用于创建网页和网页应用程序的标记语言。它通过使用一系列标签和属性来描述网页的结构和内容，使得网页可以在浏览器中正确显示和呈现。


## HTML 的基本结构

HTML 文档由一系列嵌套的 HTML 标签组成。一个基本的 HTML 文档通常包含以下结构：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>网页标题</title>
  </head>
  <body>
    <!-- 网页内容在这里 -->
  </body>
</html>
```

- `<!DOCTYPE html>`：文档类型声明，告诉浏览器文档使用的 HTML 版本是 HTML5。
- `<html>`：HTML 文档的根元素，包含整个网页的内容。
- `<head>`：头部部分，包含了与网页相关的配置和信息，如字符编码、标题、引入外部资源等。
- `<meta charset="UTF-8">`：定义文档使用的字符编码，通常使用 UTF-8 以支持多语言字符集。
- `<title>`：定义网页的标题，显示在浏览器的标题栏或标签页上。
- `<body>`：网页的主体部分，包含网页的实际内容，如文本、图像、链接等。

## HTML 标签和元素

HTML 标签用于定义网页的结构和内容，它们由尖括号包围。标签通常成对出现，包含开始标签和结束标签，例如`<tagname>内容</tagname>`。有些标签是空标签，没有结束标签，例如`<br>`用于插入换行。

HTML 标签可以包含属性，属性用于为标签提供额外的信息或设置。属性以键值对的形式出现，放在标签的开始标签中，例如`<tagname attribute="value">`。

以下是一些常用的 HTML 标签和元素：

- `<h1>` 到 `<h6>`：标题标签，用于定义标题，h1 为最高级别的标题，h6 为最低级别。
- `<p>`：段落标签，用于定义段落文本。
- `<a>`：锚链接标签，用于创建超链接到其他网页或文档。
- `<img>`：图像标签，用于插入图片到网页中。
- `<ul>` 和 `<li>`：无序列表和列表项标签，用于创建无序列表。
- `<ol>` 和 `<li>`：有序列表和列表项标签，用于创建有序列表。
- `<div>`：容器标签，用于组合多个元素为一个整体，方便样式和布局控制。
- `<span>`：内联容器标签，类似于`<div>`，但是它用于内联元素的包裹。

## HTML5 的新特性

HTML5 引入了许多新特性，如语义化标签（`<header>`、`<footer>`、`<nav>`、`<article>`等）、多媒体支持（`<video>`、`<audio>`）、Canvas 绘图、地理定位、本地存储等。这些新特性使得开发者可以更轻松地构建功能丰富、交互性强的现代网页应用程序。

## 实践和进阶

学习 HTML 最重要的是通过实践来加深理解。创建简单的网页、布局、添加样式和图像，然后逐渐增加复杂性，学习如何使用 CSS 和 JavaScript 与 HTML 结合，从而实现更丰富的用户体验。

在进阶阶段，可以学习响应式设计、Web Accessibility（无障碍性）、HTML 表单验证、CSS 框架等，进一步提高网页开发技能，创造出更加优秀的网页和网页应用程序。

::: tip 总结
HTML 是网页开发的基础，它通过一系列标签和元素来描述网页的结构和内容。HTML5 引入了许多新特性，使得网页开发更加强大和灵活。通过学习 HTML，你可以创建各种各样的网页，并为用户提供丰富的在线体验。
:::