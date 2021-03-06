---
id: htmltext
title: 文本
---


写HTML代码的时候，你写的都是**文本**，在浏览器里显示的内容也基本都是**文本**内容。

虽然图片、视频、音乐越来越流行，大多数网站仍然以文本为主要内容，比如下面这个段落

### 段落

**段落** `<p>`是经常被用的HTML元素，他是最常用的块级元素而且非常容易写。

{% highlight html %}
<p>
Rank grass, waist high, grows upon the plain of Phutra—the gorgeous flowering grass of the inner world, each particular blade of which is tipped with a tiny, five-pointed blossom—brilliant little stars of varying colors that twinkle in the green foliage to add still another charm to the weird, yet lovely, landscape.
</p>
{% endhighlight %}

### 列表

**列表** 被分为三类

* `<ul>` 无序列表
* `<ol>` 有序列表 (他的每项会被自动编号)
* `<dl>` 定义列表

HTML 列表有特殊的结构

* `<ul>` and `<ol>` must include and be direct **parents** of `<li>` which stands for **list items**.
* consequently, `<li>` elements can not be used on their own, and must be direct **children** of either a `<ul>` or a `<ol>`.

* `<ul>` 和 `<ol>` 必须直接包含 `<li>` 为他的子元素作为它列表项。

#### 无序列表

这是比较常用的列表类型。他的目的是将一组单独的**项目**以特定的顺序组合成一个列表。

{% highlight html %}
<p>我的购物清单:</p>
<ul>
<li>牛奶</li>
<li>面包</li>
<li>巧克力</li>
<li>更多的巧克力</li>
</ul>
{% endhighlight %}

列表项被放在 · 的后面。

<div class="result">
  <p>我的购物清单:</p>
  <ul>
    <li>牛奶</li>
    <li>面包</li>
    <li>巧克力</li>
    <li>更多的巧克力</li>
  </ul>
</div>

#### 有序列表

有序列表被用在列表项目有关系并且需要排毒的情况下

{% highlight html %}
<ol>
<li>第一步</li>
<li>第二部</li>
<li>。。。</li>
<li>完成!!!</li>
</ol>
{% endhighlight %}

浏览器在渲染有序列表的时候，会在每个列表项前面会**自动**添加数字，你不需要将数字写在HTML文档中。

#### 定义列表

定义列表的列表项是两个的。你必须直接包含`<dt>`和`<dd>`两个标签，`<dt>`来定义项目，`<dd>`来定义项目的介绍。

{% highlight html %}
<dl>
<dt>Web</dt>
<dd>The part of the Internet that contains websites and webpages</dd>
<dt>HTML</dt>
<dd>A markup language for creating webpages</dd>
<dt>CSS</dt>
<dd>A technology to make HTML look better</dd>
</dl>
{% endhighlight %}

<div class="result">
<dl>
  <dt>Web</dt>
  <dd>The part of the Internet that contains websites and webpages</dd>
  <dt>HTML</dt>
  <dd>A markup language for creating webpages</dd>
  <dt>CSS</dt>
  <dd>A technology to make HTML look better</dd>
</dl>
</div>


"定义列表"不经常被用到，他的使用案例非常特殊。使用两列的表格来代替它是比较好的选择。

### Blockquotes

Blockquotes 用来定义一个引用。



{% highlight html %}
<p>Sir Tim Berners-Lee said:</p>
<blockquote>
“The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.”
</blockquote>
{% endhighlight %}

<div class="result">
<p>Sir Tim Berners-Lee said:</p>
<blockquote>
  “The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.”
</blockquote>
</div>

### 标题

HTML有六个等级的标题可供使用，从<h1>到<h6>,h1是等级最高的，依次递减。

标题定义一块单独的段落或者列表，为你的文档提供一个自然的结构。标题字体比普通字体粗，小心使用标题保持重要内容与普通内容的平衡。

不要将标题当作一个展示字体样式的工具：比如感觉重要的就设置标题。你需要更在意文档内容的意义，根据内容的含义来使用标签。



