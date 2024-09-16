<template><div><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h1>
<h2 id="css概述" tabindex="-1"><a class="header-anchor" href="#css概述"><span>CSS概述</span></a></h2>
<p>CSS:Cascading Style Sheet 级联样式表</p>
<p>1995诞生，2010年左右开始陆续推出最新版本V3.0</p>
<p>样式：我们可以控制元素的颜色 背景  大小  位置  边框  阴影...</p>
<p>HTML—内容  CSS—样式层</p>
<p>我们要是有CSS来修饰HTML元素</p>
<h2 id="css编写的不同位置" tabindex="-1"><a class="header-anchor" href="#css编写的不同位置"><span>CSS编写的不同位置</span></a></h2>
<h3 id="_1行内样式-inline-style" tabindex="-1"><a class="header-anchor" href="#_1行内样式-inline-style"><span>1行内样式 inline style</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;标签 style="color:red;">&lt;/标签>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：
1.属性名与属性值之间用冒号连接，结束后记得写分号！！！
2.行内样式只属于当前元素，不能给其他元素分享
由于只渲染当前元素，优先级非常高，但不利于修改，复用性很差</p>
<h3 id="_2内部样式-inner-style" tabindex="-1"><a class="header-anchor" href="#_2内部样式-inner-style"><span>2内部样式 inner style</span></a></h3>
<p>在html文件中head标签里写style标签，style标签中的就是内部样式</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;style>
选择器 {
   CSS样式代码
}
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内部样式可以供页面中多个元素共享，不能共享给其他页面的元素</p>
<h3 id="_3外部样式-outer-style" tabindex="-1"><a class="header-anchor" href="#_3外部样式-outer-style"><span>3外部样式 outer style</span></a></h3>
<p>需要把样式写在一个独立的.css文件中</p>
<p>需要此样式的html页面在自己的head标签中使用link标签引入该外部样式即可</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;link rel="stylesheet" href="01.css">
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rel=&quot;stylesheet&quot; 表示当前引入的文件是一个样式表【必写】</p>
<p>href=&quot;01.css&quot; 被引入的CSS文件的url</p>
<p>外部样式的范围比较大，谁引入，谁生效，可以被多个页面共享</p>
<h3 id="_4三种样式的比较" tabindex="-1"><a class="header-anchor" href="#_4三种样式的比较"><span>4三种样式的比较</span></a></h3>
<p>生效的范围：</p>
<p>外部样式&gt;内部样式&gt;行内样式</p>
<p>样式的优先级：</p>
<p>行内样式&gt;（内部样式=外部样式）&gt;浏览器自带样式</p>
<h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器"><span>选择器</span></a></h2>
<p>CSS选择器用在内部或外部样式中，告诉浏览器，将选中哪些元素应用样式</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>选择器 {
  CSS样式
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1通用选择器" tabindex="-1"><a class="header-anchor" href="#_1通用选择器"><span>1通用选择器</span></a></h3>
<p>* 表示所有 *{ }表示当前页面上所有的标签都应用该样式</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>* {
	color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为选中的是所有元素，所以优先级非常低，性能低</p>
<h3 id="_2标签选择器" tabindex="-1"><a class="header-anchor" href="#_2标签选择器"><span>2标签选择器</span></a></h3>
<p>选中某类特定的HTML元素，选择器的名字就是标签的名字，注意标签名不加尖括号</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>div {
	background-color: yellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：快速为当前页面中同种类型的标签统一样式</p>
<p>缺点：会把当前页面所有的这类标签选中，选择太广泛，不能设计差异化样式</p>
<h3 id="_3id选择器-为元素设定样式时推荐少用" tabindex="-1"><a class="header-anchor" href="#_3id选择器-为元素设定样式时推荐少用"><span>3ID选择器（为元素设定样式时推荐少用）</span></a></h3>
<p>选中唯一一个指定的元素，注意：ID值与#号之间不允许有空格！</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>#d2 {
	color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：要先在标签中加入id属性，再在CSS中选中</p>
<p>优点：能够非常直观的找到该元素</p>
<p>但是ID选择器推荐少用，因为ID值经常用于为元素绑定JS脚本，较少用于样式</p>
<h3 id="_4类选择器" tabindex="-1"><a class="header-anchor" href="#_4类选择器"><span>4类选择器</span></a></h3>
<p>选中某一类指定的元素，这个类名是可以自定义的</p>
<p>一个class属性的值，可以写多个，值与值之间使用空格隔开</p>
<p>注意：使用选择器时点(<strong>.</strong>)与class值之间不能有空格！</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>.text-danger {background-color: red; color: white;}
.text-success {background-color: green; color: white;}

&lt;span class="text-danger">用户名不能为空&lt;/span>
&lt;span class="text-danger">密码不能为空&lt;/span>
&lt;span class="text-danger">两次密码输入不一致&lt;/span>

&lt;span class="text-success">用户名可以使用&lt;/span>
&lt;span class="text-success">密码可以使用&lt;/span>
&lt;span class="text-success">两次密码输入一致&lt;/span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：要先在标签中加入class属性，再在CSS中选中</p>
<p>优点：复用性很高，在项目中经常使用</p>
<h3 id="_5群组选择器" tabindex="-1"><a class="header-anchor" href="#_5群组选择器"><span>5群组选择器</span></a></h3>
<p>使用本选择器可以一次选中多个不同的元素，使用逗号分隔，可以有空格</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>h4, #p, .r {
	color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 群组选择器不限制选择器必须是同一种类型，可以使用不同的类型</p>
<p>只要满足其中任意一个选择器就可以应用该样式</p>
<h3 id="_6伪类选择器" tabindex="-1"><a class="header-anchor" href="#_6伪类选择器"><span>6伪类选择器</span></a></h3>
<p>“假的类”—伪类的名字不可以自定义，是固定的，表示选中某个时刻/状态</p>
<table>
<thead>
<tr>
<th>:hover{ } 选中”鼠标悬停在元素上方时”的状态</th>
</tr>
</thead>
<tbody>
<tr>
<td>:active{ } 选中”元素被激活时”的状态(鼠标按住元素不松开)</td>
</tr>
<tr>
<td>:link{ } 选中”超链接未被访问过”的状态</td>
</tr>
<tr>
<td>:visited{ }  选中”超链接已经被访问过”的状态</td>
</tr>
<tr>
<td>注意：超链接的4个伪类有顺序： :link -&gt; :visited -&gt; :hover -&gt; :active如果没有按照这个顺序，有的伪类会不生效</td>
</tr>
<tr>
<td>:focus{ } 选中”输入框获得焦点时”的状态</td>
</tr>
</tbody>
</table>
<h3 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展"><span>拓展</span></a></h3>
<p>CSS会在控制台报错，黄色叹号+删除线才是报错，常见错误：</p>
<p>Unknown property name 未知的属性名—属性名写错了</p>
<p>Invalid property value 无效的属性值—属性值写错了</p>
<p>注意：只有删除线的不是报错，是样式冲突了未生效</p>
<h2 id="css优先级" tabindex="-1"><a class="header-anchor" href="#css优先级"><span>CSS优先级</span></a></h2>
<h3 id="_1不同选择器不同样式" tabindex="-1"><a class="header-anchor" href="#_1不同选择器不同样式"><span>1不同选择器不同样式</span></a></h3>
<p>当多个不同的选择器选中同一个元素，发生冲突时，如果设置了不同的样式会叠加效果同时生效</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>p {color:red;}
.txt {background-color: yellow;}
&lt;div>
	&lt;p class="txt">测试文字&lt;/p>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2相同选择器相同样式" tabindex="-1"><a class="header-anchor" href="#_2相同选择器相同样式"><span>2相同选择器相同样式</span></a></h3>
<p>相同的选择器，会采用顺序读取的原则，后来的会覆盖之前的</p>
<p>但前提：要渲染的样式相同，值不同</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>.txt {background-color: yellow;}
.txt {background-color: green;}
&lt;div>
	&lt;p class="txt">测试文字&lt;/p>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3最近的祖先样式要比其他祖先样式优先级高" tabindex="-1"><a class="header-anchor" href="#_3最近的祖先样式要比其他祖先样式优先级高"><span>3最近的祖先样式要比其他祖先样式优先级高</span></a></h3>
<p>在CSS中，有一些属性是具有继承特性的，也就是父元素的CSS属性会传递到子元素上</p>
<p>使用的就是就近原则，哪个近，就应用哪个样式</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;div style="color: green;">
	&lt;div style="color: blue;">
		&lt;div>测试文字3&lt;/div>
	&lt;/div>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4指定样式大于继承样式" tabindex="-1"><a class="header-anchor" href="#_4指定样式大于继承样式"><span>4指定样式大于继承样式</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;div style="color: pink;">
	&lt;span style="color:gold">测试文字4&lt;/span>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5选择器不同的权值" tabindex="-1"><a class="header-anchor" href="#_5选择器不同的权值"><span>5选择器不同的权值</span></a></h3>
<table>
<thead>
<tr>
<th><em><strong>*选择器*</strong></em></th>
<th><em><strong>*权值*</strong></em></th>
</tr>
</thead>
<tbody>
<tr>
<td>!important</td>
<td>10000</td>
</tr>
<tr>
<td>style=“”行内样式</td>
<td>1000</td>
</tr>
<tr>
<td>id选择器</td>
<td>0100</td>
</tr>
<tr>
<td>类 伪类</td>
<td>0010</td>
</tr>
<tr>
<td>标签名 伪元素</td>
<td>0001</td>
</tr>
<tr>
<td>通用* 子选择器&gt; 相邻兄弟+</td>
<td>0000</td>
</tr>
<tr>
<td>继承样式</td>
<td>无</td>
</tr>
</tbody>
</table>
<h3 id="_6原则" tabindex="-1"><a class="header-anchor" href="#_6原则"><span>6原则</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>权值大的优先渲染
!important>行内样式>ID>(类选择器=伪类选择器)>标签名选择器>通用选择器>继承
权值会累加，但不会越级！
比如11个类选择器，值不是10*11=110,而是99.9不会越级到下一级
记忆诀窍：
选择器控制范围越大的，优先级越低
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择器-1" tabindex="-1"><a class="header-anchor" href="#选择器-1"><span>选择器</span></a></h2>
<h3 id="_1并列选择器" tabindex="-1"><a class="header-anchor" href="#_1并列选择器"><span>1并列选择器</span></a></h3>
<p>选中可以同时被多个选择器选中的元素</p>
<p>注意：多个选择器之间不能有空格，必须紧挨着写！</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 选中span元素且class值为danger*/
span.danger{color:red;}
/* 选中class值同时具有btn与succ的元素*/
.btn.succ {color: green;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2后代-包含-选择器" tabindex="-1"><a class="header-anchor" href="#_2后代-包含-选择器"><span>2后代(包含)选择器</span></a></h3>
<p>选中某个元素内的儿子、孙子、重孙子….元素</p>
<p>祖先选择器 后代选择器 { }</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>div span { }  选中div下的所有span
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>易错点：空格容易忘记写</p>
<p>使用场景：内部结构比较简单，没有那么多相同标签</p>
<h3 id="_3直接子代选择器" tabindex="-1"><a class="header-anchor" href="#_3直接子代选择器"><span>3直接子代选择器</span></a></h3>
<p>选中元素下面的直接儿子元素</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>div > span { }  选中div下的所有儿子span
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_4兄弟选择器"><span>4兄弟选择器</span></a></h3>
<p>选中元素后面的兄弟元素——不要前面的兄弟，也不要子代</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>p~span { }  选中p元素后面的span兄弟元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_5相邻兄弟选择器"><span>5相邻兄弟选择器</span></a></h3>
<p>选中元素后面紧挨着的相邻兄弟元素——不要前面的，也不要有间隔的，也就是最多选中1个</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>p+span { } 选中p元素后面紧挨着的那一个span兄弟元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6伪元素" tabindex="-1"><a class="header-anchor" href="#_6伪元素"><span>6伪元素</span></a></h3>
<p>我们可以给指定元素的前面/后面添加内容，还可以对添加的内容进行样式设置</p>
<p>::before  指的是在元素最开始的位置插入内容</p>
<p>::after 指的是在元素最末尾的位置插入内容</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>li::before {
	content:"子曰:";
}
li::after {
	content: "--摘自《论语》";
	color: gold;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:content属性必须写！如果暂时不确定生成的内容，可以写成content:&quot;&quot;;</p>
<h4 id="面包屑导航-breadcrumb" tabindex="-1"><a class="header-anchor" href="#面包屑导航-breadcrumb"><span>面包屑导航 breadcrumb</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>a+a::before {
	content: ">";
	color: red;
}
&lt;!-- 首页>学习用品>笔记本电脑>戴尔燃7000 -->
&lt;div class="nav">
	&lt;a href="#">首页&lt;/a>
	&lt;a href="#">学习用品&lt;/a>
	&lt;a href="#">笔记本电脑&lt;/a>
	&lt;a href="#">戴尔燃7000&lt;/a>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css中的值" tabindex="-1"><a class="header-anchor" href="#css中的值"><span>CSS中的值</span></a></h2>
<h3 id="_1css中的色值" tabindex="-1"><a class="header-anchor" href="#_1css中的色值"><span>1CSS中的色值</span></a></h3>
<table>
<thead>
<tr>
<th>颜色</th>
<th>单词表示法</th>
<th>RGB表示法(24位色)</th>
<th>RGBA表示法(32位色)</th>
<th>十六进制(哈希）表示法</th>
<th>十六进制缩写表示法</th>
</tr>
</thead>
<tbody>
<tr>
<td>红色</td>
<td>red</td>
<td>rgb(255,0,0)</td>
<td>rgba(255,0,0,1)</td>
<td>#FF0000</td>
<td>#F00</td>
</tr>
<tr>
<td>绿色</td>
<td>green</td>
<td>rgb(0,255,0)</td>
<td>rgba(0,255,0,1)</td>
<td>#00FF00</td>
<td>#0F0</td>
</tr>
<tr>
<td>蓝色</td>
<td>blue</td>
<td>rgb(0,0,255)</td>
<td>rgba(0,0,255,1)</td>
<td>#0000FF</td>
<td>#00F</td>
</tr>
<tr>
<td>青色</td>
<td>cyan</td>
<td>rgb(0,255,255)</td>
<td>rgba(0,255,255,1)</td>
<td>#00FFFF</td>
<td>#0FF</td>
</tr>
<tr>
<td>品红</td>
<td>magenta</td>
<td>rgb(255,0,255)</td>
<td>rgba(255,0,255,1)</td>
<td>#FF00FF</td>
<td>#F0F</td>
</tr>
<tr>
<td>黄色</td>
<td>yellow</td>
<td>rgb(255,255,0)</td>
<td>rgba(255,255,0,1)</td>
<td>#FFFF00</td>
<td>#FF0</td>
</tr>
<tr>
<td>白色</td>
<td>while</td>
<td>rgb(255,255,255)</td>
<td>rgba(255,255,255,1)</td>
<td>#FFFFFF</td>
<td>#FFF</td>
</tr>
<tr>
<td>黑色</td>
<td>black</td>
<td>rgb(0,0,0)什么颜色都没有</td>
<td>rgba(0,0,0,1)</td>
<td>#000000</td>
<td>#000</td>
</tr>
<tr>
<td>中灰</td>
<td>gray</td>
<td>rgb(128,128,128)256/2</td>
<td>rgba(128,128,128,1)</td>
<td>#808080</td>
<td>#808080</td>
</tr>
</tbody>
</table>
<h3 id="_2css中的尺寸" tabindex="-1"><a class="header-anchor" href="#_2css中的尺寸"><span>2CSS中的尺寸</span></a></h3>
<table>
<thead>
<tr>
<th>px像素(Pixel)屏幕中最小的一个发光点，网页种经常使用</th>
</tr>
</thead>
<tbody>
<tr>
<td>% 百分比，指的是占父级元素的尺寸占比，参考的是父级元素的大小</td>
</tr>
<tr>
<td>数字 没有任何单位，比如不透明度</td>
</tr>
<tr>
<td>角度值 deg 0~360,也可以有负数 比如270deg=-90deg</td>
</tr>
<tr>
<td>时间单位 1s=1000ms</td>
</tr>
<tr>
<td>vw / vh APP开发时会用到的视口单位</td>
</tr>
<tr>
<td>em倍率 / rem根倍率单位1em指的是1倍当前字体的大小1rem指的是1倍根元素(html)的字体大小</td>
</tr>
</tbody>
</table>
<h2 id="页面元素的显示模式" tabindex="-1"><a class="header-anchor" href="#页面元素的显示模式"><span>页面元素的显示模式</span></a></h2>
<p>一个HTML元素可以有多种显示模式</p>
<table>
<thead>
<tr>
<th><em><strong>*块级元素——*</strong></em>****display:block;****常见标签: div h1~h6 p from table ul ol li...排列方式：按照书写的顺序，从上往下依次排列独占一行(一行指的是父元素宽度的100%)，还可以自设宽高</th>
</tr>
</thead>
<tbody>
<tr>
<td><em><strong>*行内元素——*</strong></em>****dispaly:inline;****常见标签:span a i b mark...排列方式：按照书写顺序从左往右依次排列，可以和其他内容同行，一行放不下才显示在下一行无法设置宽度和高度，行内元素的大小是靠内容撑起来的img元素是特殊的行内元素，它有自己的宽高，还可以设置宽高</td>
</tr>
<tr>
<td><em><strong>*行内块元素——*</strong></em><em><strong>*display*</strong></em>****:inline-block;****常见标签：input button既有行内元素的特点，也有块级元素的特点既可以与其他元素共处一行(行内)，也可以设置宽高(块级)</td>
</tr>
</tbody>
</table>
<h2 id="流与文档流" tabindex="-1"><a class="header-anchor" href="#流与文档流"><span>流与文档流</span></a></h2>
<table>
<thead>
<tr>
<th><em><strong>*流(stream):*</strong></em> 车流 水流多个元素的有序排列称为流</th>
</tr>
</thead>
<tbody>
<tr>
<td>****文档流:*<em><strong>网页中多个元素按照自己的特性有序排列，形成了文档流比如:块级元素是从上到下依次排列，行内与行内块元素从左到右依次排列</strong></em>*文档流中元素的特点：****1） 依次紧密排列，中间没有大的空白，多个div/span在竖直/水平方向紧挨着2） 流中的元素不会出现一个元素叠摞在另一个元素上面的情况3） 如果项目中需要出现叠摞的现象，就只能脱离文档流</td>
</tr>
</tbody>
</table>
<h2 id="css盒子模型-box-model" tabindex="-1"><a class="header-anchor" href="#css盒子模型-box-model"><span>CSS盒子模型(Box Model)</span></a></h2>
<h3 id="_1默认的盒子模型" tabindex="-1"><a class="header-anchor" href="#_1默认的盒子模型"><span>1默认的盒子模型</span></a></h3>
<p><img src="@source/web/imageMD/css/盒子.png" alt=""></p>
<p>一个HTML元素，需要占用页面的空间。</p>
<p>内容、边框、内容与边框之间的距离、不同元素直接的距离都需要占用页面空间</p>
<p>所以我们需要了解具体的计算方式</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>content: 内容区域
padding: 内间距—元素内容与边框之间的距离
border: 元素的边框
margin: 外间距—元素与元素之间的距离
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>涉及到四个方向:left左 right右 top上 bottom下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>一个元素在水平方向上占用的总空间：
左外间距+左边框+左内间距+内容宽度+右内间距+右边框+右外间距
margin-left+border-left+padding-left+width+padding-right+border-right+margin-right
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>一个元素在垂直方向上占用的总空间：
上外间距+上边框+上内间距+内容高度+下内间距+下边框+下外间距
margin-top+border-top+padding-top+height+padding-bottom+border-bottom+margin-bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2边框盒子模型-怪异盒子" tabindex="-1"><a class="header-anchor" href="#_2边框盒子模型-怪异盒子"><span>2边框盒子模型(怪异盒子)</span></a></h3>
<p>之前我们学习的是内容盒子box-sizing:content-box;</p>
<p>内容盒子会把元素本身的大小 内间距 边框 外间距 都会增大元素在页面布局中所占据的总空间</p>
<p>如果想增加距离且不增加元素占据的页面布局空间，推荐使用边框盒子：</p>
<p>box-sizing:border-box;</p>
<p>注意：边框盒子需要指定width</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>一个元素在水平方向上占用的总空间：
左外间距 + 宽度(内容+内间距+边框) +右外间距
margin-left +width(content+padding+border) +margin-right
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>一个元素在垂直方向上占用的总空间：
上外间距 + 宽度(内容+内间距+边框) +下外间距
margin-top +width(content+padding+border) +margin-bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h2>
<h3 id="_1边框的不同写法" tabindex="-1"><a class="header-anchor" href="#_1边框的不同写法"><span>1边框的不同写法</span></a></h3>
<p>对边框进行综合设置(最常用)</p>
<p>border:1px solid #000; 粗细 线型 颜色</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>设置某一个方向的边框：
border-top: 1px solid #000; 设置上边框的粗细 线型 颜色
border-top-color:#0f0; 设置上边框的颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>设置所有边框的单独一个属性:
颜色: border-color：red;
宽度: border-width: 20px;
线型: border-style：solid;
(solid单实线 dashed虚线 dotted点状线 double双实线)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有的元素不需要设置边框，可以去掉
border:none; 或 border:0;</p>
<h3 id="边框的巧妙用法" tabindex="-1"><a class="header-anchor" href="#边框的巧妙用法"><span>边框的巧妙用法</span></a></h3>
<ul>
<li>
<p>需要一个没有内容，且宽高为0的div</p>
</li>
<li>
<p>给此div设置一个大大的四条边都为透明色的边框</p>
</li>
<li>
<p>给需要显示三角形的边设置颜色，作为要显示的三角形</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>.c1 {
	width: 0; /* 因为块级元素都是默认宽度父元素的100% 所以要给0*/
	border: 50px solid transparent; /* 四个边都设置为透明，边框宽度决定三角的大小 */
	border-bottom-color: red; /* 单独设置需要的边角有颜色即可显示 */
}
&lt;h4>向上三角&lt;/h4>
&lt;div class="c1">&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内间距" tabindex="-1"><a class="header-anchor" href="#内间距"><span>内间距</span></a></h2>
<p>元素内容与边框之间的距离，叫做内间距(padding)</p>
<h3 id="_1四个方向的内间距" tabindex="-1"><a class="header-anchor" href="#_1四个方向的内间距"><span>1四个方向的内间距</span></a></h3>
<p>上内间距padding-top: 10px;</p>
<p>右内间距padding-right: 10px;</p>
<p>下内间距padding-bottom: 10px;</p>
<p>左内间距padding-left: 10px;</p>
<h3 id="_2内间距的简写形式" tabindex="-1"><a class="header-anchor" href="#_2内间距的简写形式"><span>2内间距的简写形式</span></a></h3>
<p>padding:10px; 四个方向的内间距都是10</p>
<p>padding:10px 20px; 上下10 左右20</p>
<p>padding:10px 20px 30px; 上10 左右20 下30</p>
<p>padding:10px 20px 30px 40px; 上10 右20 下30 左40</p>
<p>记忆诀窍：永远都是上右下左</p>
<p>4个值，有值就顺时针赋值，没值就找对门</p>
<h3 id="_3不同显示模式下的内间距" tabindex="-1"><a class="header-anchor" href="#_3不同显示模式下的内间距"><span>3不同显示模式下的内间距</span></a></h3>
<ul>
<li>
<p>块级与行内块元素的四个方向的内间距均生效</p>
</li>
<li>
<p>行内元素的左右内间距正常生效，但上下内间距只会“视觉生效”并不占用布局空间，还可能会产生布局的堆叠，所以行内元素尽量不要使用上下内间距</p>
</li>
<li>
<p>img是特殊的行内元素，它的四个方向的内间距均生效</p>
</li>
</ul>
<h3 id="_4使用场景" tabindex="-1"><a class="header-anchor" href="#_4使用场景"><span>4使用场景</span></a></h3>
<p>让元素内部距离外层父级元素的边有点距离，显得好看，主要是为了美化</p>
<p>比如：输入框的文字不要贴边显示；文本卡片内容不要贴边显示</p>
<h2 id="外间距" tabindex="-1"><a class="header-anchor" href="#外间距"><span>外间距</span></a></h2>
<p>元素边框外部与另外的元素之间的距离称为外间距(margin)</p>
<p>外间距主要用于控制当前元素在四个方向上与其他元素的距离</p>
<p>外间距不属于元素本身的大小，我们还可以利用外间距让元素发生移动</p>
<h3 id="_1四个方向的外间距" tabindex="-1"><a class="header-anchor" href="#_1四个方向的外间距"><span>1四个方向的外间距</span></a></h3>
<p>margin-top:10px; 上外间距 元素顶部与其他元素的距离</p>
<p>margin-right:10px; 右外间距 元素右侧与其他元素的距离</p>
<p>margin-bottom:10px; 下外间距 元素底部与其他元素的距离</p>
<p>margin-left:10px; 左外间距，元素左侧与其他元素的距离</p>
<h3 id="_2外间距的简写形式" tabindex="-1"><a class="header-anchor" href="#_2外间距的简写形式"><span>2外间距的简写形式</span></a></h3>
<p>margin:10px;  上右下左四个方向都是10</p>
<p>margin:10px 20px; 上下:10 左右:20</p>
<p>margin:10px 20px 30px; 上:10 左右:20 下:30</p>
<p>margin:10px 20px 30px 40px;  上:10 右:20 下:30 左:40</p>
<p><strong>记忆诀窍</strong>:</p>
<p>永远是上右下左4个值，有值就顺时针赋值，没值就找对门</p>
<h3 id="_3外间距的特点" tabindex="-1"><a class="header-anchor" href="#_3外间距的特点"><span>3外间距的特点</span></a></h3>
<ul>
<li>
<p>外间距产生的四个方向上的空间并不在元素内部，而是在元素外部，不带任何背景颜色</p>
</li>
<li>
<p>块级与行内块元素四个方向上的外间距均生效</p>
</li>
<li>
<p>行内元素的左右外间距可以正常生效，上下外间距不生效</p>
</li>
</ul>
<h3 id="_4外间距的取值" tabindex="-1"><a class="header-anchor" href="#_4外间距的取值"><span>4外间距的取值</span></a></h3>
<p>正值：增加距离</p>
<p>0值: 去掉间距</p>
<p>负值：减少距离</p>
<p>auto:自动计算距离，流式布局中块级元素左右方向的外间距计算成等值，实现水平居中效果</p>
<p>注意：margin:0 auto;只针对块级元素中的块级子元素水平居中，文字和行内元素不生效</p>
<h3 id="_5外间距的重叠【重难点】" tabindex="-1"><a class="header-anchor" href="#_5外间距的重叠【重难点】"><span>5外间距的重叠【重难点】</span></a></h3>
<p>在文档流布局中：</p>
<ul>
<li>
<p>块级元素在垂直方向上相邻的外间距会发生合并现象，二者取最大值显示</p>
</li>
<li>
<p>父元素中的首/尾子元素都有和父元素“重叠的边”，首/尾子元素的上/下margin会超出父元素的范围,解决方案：</p>
</li>
</ul>
<p>方案1：给父元素加边框</p>
<p>方案2：给父元素加内间距</p>
<h2 id="背景颜色和背景图片" tabindex="-1"><a class="header-anchor" href="#背景颜色和背景图片"><span>背景颜色和背景图片</span></a></h2>
<h3 id="_1背景颜色" tabindex="-1"><a class="header-anchor" href="#_1背景颜色"><span>1背景颜色</span></a></h3>
<p>background-color:#fff;  背景颜色会在元素的最底层</p>
<p>颜色可以使用任何的色值(十六进制 rgb rgba 单词等)</p>
<h3 id="_2背景图片的插入" tabindex="-1"><a class="header-anchor" href="#_2背景图片的插入"><span>2背景图片的插入</span></a></h3>
<p>background-image:url(路径);</p>
<p><strong>注意背景图和img标签的图片插入是有区别的！</strong></p>
<ul>
<li>
<p>img标签插入的图片在默认情况下直接就是图片本身的大小</p>
</li>
<li>
<p>background-image:url(路径);方式并不能直接显示图片的，必须给当前元素设置宽度和高度才能显示出背景图片</p>
</li>
</ul>
<h3 id="_3背景图的重复-平铺" tabindex="-1"><a class="header-anchor" href="#_3背景图的重复-平铺"><span>3背景图的重复(平铺)</span></a></h3>
<p><strong>图片被平铺到元素中会出现两种情况：</strong></p>
<ul>
<li>
<p>图片范围大于元素范围，显示不全</p>
</li>
<li>
<p>图片范围小于元素范围，会出现重复，哪个方向有空余空间，就向哪个方向重复</p>
</li>
</ul>
<p><strong>属性与值：</strong></p>
<p>background-repeat: repeat;  默认值，X-Y轴都重复</p>
<p>background-repeat: repeat-x; 仅在X轴(水平方向)重复</p>
<p>background-repeat: repeat-y; 仅在Y轴(垂直方向)重复</p>
<p>background-repeat: no-repeat; 背景图仅显示一次，不重复</p>
<h3 id="_4背景图定位" tabindex="-1"><a class="header-anchor" href="#_4背景图定位"><span>4背景图定位</span></a></h3>
<p>background-position:left top; 左上，默认值，先写左右，再写上下</p>
<p>X轴(水平方向)的值：left左 center中 right右</p>
<p>Y轴(竖直方向)的值：top上 center中 bottom下</p>
<p>center center表示水平与竖直方向均居中，两个center可以简写成一个center</p>
<p>还可以写像素值，原点(0px 0px)就是左上角，正值向右/向下移动；负值向左/向上移动</p>
<h3 id="_5精灵图" tabindex="-1"><a class="header-anchor" href="#_5精灵图"><span>5精灵图</span></a></h3>
<p>CSS Sprite 直译为CSS精灵图，网页图片的一种处理方式</p>
<p>UI会把多个小图标整合到一张图片中，再利用背景图定位，选取到需要的小图标位置展示出来。</p>
<p>优点：减少了向服务器的请求次数，进行了CSS优化</p>
<p>阿里图标库：https://iconfont.cn/</p>
<p>里面有很多的矢量图，还可以自定义尺寸，免费使用</p>
<p>第一次 使用需要注册，手机号就可以注册</p>
<h3 id="_6背景渐变" tabindex="-1"><a class="header-anchor" href="#_6背景渐变"><span>6背景渐变</span></a></h3>
<p>背景颜色可以设置渐变的效果，使用最多的就是线性渐变</p>
<p><strong>1</strong> 颜色设定**（默认颜色从上向下排列）**</p>
<p>background-image: linear-gradient(颜色1，颜色2，颜色3…)</p>
<p><strong>2. 角度设定（角度单位deg）</strong></p>
<p>background-image: linear-gradient(角度值，颜色1，颜色2…)</p>
<p><strong>3. 渐变色范围设定：</strong></p>
<p>background-image: linear-gradient(角度，颜色1 起始位置 结束位置，颜色2 起始位置 结束位置，…)</p>
<p>范围的设定需要写在每个颜色色值的后面，值可以使用长度单位px或者百分比%</p>
<h3 id="_7背景图的尺寸" tabindex="-1"><a class="header-anchor" href="#_7背景图的尺寸"><span>7背景图的尺寸</span></a></h3>
<p>background-size 没有设置任何尺寸时，默认使用图片本身的大小</p>
<p>background-size: 600px 300px; 取值可以是像素值</p>
<p>background-size: 100% 100%; 取值可以是百分比，宽高都是100%注意图片的失真问题</p>
<p>background-size: 100% auto; 宽度正好,高度自适应,会牺牲高度</p>
<p>background-size: auto 100%; 高度正好,宽度自适应,会牺牲宽度</p>
<p>background-size: contain; 至少显示一张完整的图,多余的空间平铺</p>
<p>background-size: cover; 铺满整个屏幕,多余的部分裁掉</p>
<p>注意：能使用比例合适的图尽量使用比例合适的图</p>
<h2 id="版心" tabindex="-1"><a class="header-anchor" href="#版心"><span>版心</span></a></h2>
<p>在页面布局中，指定一个确定宽度的，用来显示主体内容的区域</p>
<p>注意：PC端页面一定要写版心，版心宽度是设计提供的</p>
<p><strong>常见的PC端分辨率:</strong></p>
<p>960px 1024px 1200px</p>
<p>PC端相对来说，内容较多，样式较复杂，需要设置一个固定的单位显示内容区域</p>
<h2 id="元素的隐藏与显示" tabindex="-1"><a class="header-anchor" href="#元素的隐藏与显示"><span>元素的隐藏与显示</span></a></h2>
<table>
<thead>
<tr>
<th><strong>方案1:修改颜色为透明色</strong>background-color: transparent;background-color: rgba(0,0,0,0);</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>方案2:修改元素的显示模式</strong>display:none;  none表示不显示且释放布局空间如果要显示回来就使用元素原有的display属性值，比如display:block;</td>
</tr>
<tr>
<td><strong>方案3:设置可见度为隐藏</strong>visibility: hidden; 隐藏visibility: visible; 默认值，显示</td>
</tr>
<tr>
<td><strong>方案4: 修改元素的不透明度</strong>opacity：0.3； 0完全透明 1完全不透明注意:这里的不透明度包含元素与元素中的所有内容</td>
</tr>
</tbody>
</table>
<h2 id="元素浮动" tabindex="-1"><a class="header-anchor" href="#元素浮动"><span>元素浮动</span></a></h2>
<h3 id="_1为什么要用浮动" tabindex="-1"><a class="header-anchor" href="#_1为什么要用浮动"><span>1为什么要用浮动</span></a></h3>
<p>布局中遇到的第一个困难就是块级元素的横向排列</p>
<p>行内元素虽然是横向排列，但设置宽高无效，且不能包裹更多标签</p>
<p>行内块元素虽然也是横向排列，但不建议做布局，因为行内块自带了很多不好去除的样式</p>
<p>所以，我们要使用浮动，可以让元素横向排列，方便排版</p>
<h3 id="_2float属性" tabindex="-1"><a class="header-anchor" href="#_2float属性"><span>2float属性</span></a></h3>
<p>float单词的含义是“浮动”，它最初的作用是为了制作“文本环绕效果”</p>
<p>float:left; 左浮动，是向父元素的左侧边界靠拢</p>
<p>float:right; 右浮动，是向父元素的右侧边界靠拢</p>
<p>注意：如果多个元素朝一个方向浮动，谁先浮动，谁就最靠近边界</p>
<h3 id="_3元素浮动后产生的效果" tabindex="-1"><a class="header-anchor" href="#_3元素浮动后产生的效果"><span>3元素浮动后产生的效果</span></a></h3>
<ul>
<li>
<p>一个父元素中的子元素浮动了，那么这个子元素就不再支撑父元素的高度</p>
</li>
<li>
<p>浮动会破坏原有的文档流布局，变成浮动布局，元素可以横向排列</p>
</li>
<li>
<p>如果一个父元素中所有的子元素都浮动了，父元素会高度坍塌/失高</p>
</li>
<li>
<p>浮动会让元素”块状化”【行内 行内块会变成块级】</p>
</li>
<li>
<p>子元素浮动后，外间距的重叠现象消失</p>
</li>
<li>
<p>兄弟间的垂直外间距相加显示 父子的贴边问题也会消失</p>
</li>
</ul>
<h2 id="解决高度坍塌" tabindex="-1"><a class="header-anchor" href="#解决高度坍塌"><span>解决高度坍塌</span></a></h2>
<p>当父元素中的所有子元素都浮动走，也就是所有的子元素都脱离文档流，释放布局空间后，不再支撑父元素的高度，父元素就会高度坍塌</p>
<h3 id="_1父元素自定义高度" tabindex="-1"><a class="header-anchor" href="#_1父元素自定义高度"><span>1父元素自定义高度</span></a></h3>
<p>父元素可以通过参考子元素的高度给自己设置一个高度</p>
<p><strong>应用场景：</strong></p>
<p>已知子元素的高度，并且子元素高度相同时，适合此方案，比如:导航条</p>
<p>注意:当子元素高度未知时，无法自定义父级高度</p>
<h3 id="_2给父元素设置bfc保护" tabindex="-1"><a class="header-anchor" href="#_2给父元素设置bfc保护"><span>2给父元素设置BFC保护</span></a></h3>
<p>任何设置了BFC的元素，和浮动的元素相遇时，都可以实现”自动填充”的适应布局</p>
<p>也就是说，当父元素设置了BFC结界后，子元素浮动浮动，父元素会根据子元素实际浮动后的高度自动填充自己的高度</p>
<p><strong>应用场景:</strong></p>
<p>子元素未知高度，且子元素不会超出父级范围</p>
<p>会触发BFC的代码:overflow:hidden/auto/scroll;</p>
<h3 id="_3父级元素称为同层元素" tabindex="-1"><a class="header-anchor" href="#_3父级元素称为同层元素"><span>3父级元素称为同层元素</span></a></h3>
<p>父级想要和浮动的子元素称为同一层元素，相当于父元素也要脱离文档流</p>
<p>父元素浮动脱离文档流，就可能会影响到父元素的父元素，导致上层元素依然需要解决高度坍塌问题</p>
<h3 id="_4clear属性清除浮动影响" tabindex="-1"><a class="header-anchor" href="#_4clear属性清除浮动影响"><span>4clear属性清除浮动影响</span></a></h3>
<p>clear属性是专门用于解决float带来的高度坍塌问题</p>
<ul>
<li>
<p>清除指的是清除前面“哥哥们”浮动对父元素产生的不支撑效果</p>
</li>
<li>
<p>clear会让前面的浮动元素与当前元素换行显示，对后面的浮动元素无法起到作用</p>
</li>
<li>
<p>使用clear属性的元素，自己不可以浮动，要保持在文档流中替前面的浮动元素清除影响</p>
</li>
<li>
<p>clear属性只对块级元素生效</p>
</li>
</ul>
<p>~~<strong>使用方法：</strong></p>
<p>在父元素的最后添加一个宽高都为0的块级子元素，清除浮动影响</p>
<p>但这样的方式会造成后续在父元素下多一个孩子~~</p>
<h3 id="_5使用伪元素" tabindex="-1"><a class="header-anchor" href="#_5使用伪元素"><span>5使用伪元素</span></a></h3>
<p>给父元素最后生成一个空白的“假孩子”，变块级，清影响</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>.clearfix::after{ /* 在指定元素的最后生成一个假孩子 */
	content: ''; /* 内容是空白的,宽高为0 */
	display: block; /* 块级元素才可以使用clear属性 */
	clear: both; /* 清除前面所有元素浮动造成的不支撑影响 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>哪个元素高度坍塌，就可以给哪个元素上加类名clearfix</p>
<p>我们使用::after模拟出来的假孩子，在父元素的最后，很方便的帮我们清除高度坍塌影响</p>
<h2 id="拓展-1" tabindex="-1"><a class="header-anchor" href="#拓展-1"><span>拓展</span></a></h2>
<h3 id="_1幽灵空白节点" tabindex="-1"><a class="header-anchor" href="#_1幽灵空白节点"><span>1幽灵空白节点</span></a></h3>
<p>内联元素(行内+行内块)自带一个叫“幽灵空白节点”的文字节点</p>
<p>如果需要去掉幽灵空白节点，可以把该内联元素变为块级元素</p>
<p>注意：幽灵空白节点不是必须要去除的，看实际需求有没有必要</p>
<h3 id="_2bfc" tabindex="-1"><a class="header-anchor" href="#_2bfc"><span>2BFC</span></a></h3>
<p>BFC的全称是Block Formatting Context(块级格式化上下文)</p>
<p>简单的来说，它是一个独立的渲染区域，这个区域和外部不相干了，相当于子元素在父元素内部折腾，但也不会超出父元素的范围</p>
<p>触发条件: 使用overflow的三个属性值auto/hidden/scroll都可以让父元素形成BFC结界</p>
<p>BFC结界一旦形成，就能让父元素重新计算内部浮动的子元素的实际高度，进行自动填充</p>
<p>BFC结界一旦形成，就能避免margin的父子贴边问题</p>
<h2 id="元素的美化和修饰" tabindex="-1"><a class="header-anchor" href="#元素的美化和修饰"><span>元素的美化和修饰</span></a></h2>
<h3 id="_1边框圆角的问题" tabindex="-1"><a class="header-anchor" href="#_1边框圆角的问题"><span>1边框圆角的问题</span></a></h3>
<p>圆角分别代表元素四个角的弧度半径，取值可以是长度单位，也可以是百分比%</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>border-radius: 边框圆切角半径
radius半径r,用圆来切角，可以把直角变为圆角
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>写法1：使用像素</strong></p>
<p>border-radius:5px; 四个角的弧度统一</p>
<p><strong>写法</strong>2：使用百分比</p>
<p>border-radius:50%;</p>
<p><strong>写法3：给不同的角分别设置角度(不常用)</strong></p>
<p>border-radius: 10px 30px; 左上右下 右上左下 对角线</p>
<p>border-radius: 10px 20px 30px; 左上 右上左下 右下</p>
<p>border-radius: 10px 20px 30px 40px;  从左上角开始顺时针给四个角设置</p>
<p>border-top-left-radius:5px; 给左上角设置角度 left/right/top/bottom关键字拼写即可【较少使用】</p>
<p><strong>特殊形状：</strong></p>
<p>***圆形：***需要div的宽高一致，边框圆角为50%</p>
<p>***椭圆形：***需要div是一个长方形，边框圆角为50%</p>
<p>***胶囊型：***需要div是一个横着的长方型，边框圆角为高度的一半</p>
<h3 id="_2元素的阴影效果" tabindex="-1"><a class="header-anchor" href="#_2元素的阴影效果"><span>2元素的阴影效果</span></a></h3>
<p>box-shadow  给元素添加阴影效果</p>
<p>值1：必写，阴影的X轴偏移量，数字越大越靠右，可以有负值</p>
<p>值2：必写，阴影的Y轴偏移量，数字越大越靠下，可以有负值、</p>
<p>值3：羽化值，默认值为0，羽化值越高阴影的虚化程度越高，不允许负值</p>
<p>值4：扩展半径，默认为0，数字越大，阴影范围越大，可以有负值(较少使用)</p>
<p>值5: 阴影的颜色，使用色值</p>
<p>值6：内、外阴影，默认outset外阴影，内阴影inset</p>
<h3 id="_3常见的光标样式" tabindex="-1"><a class="header-anchor" href="#_3常见的光标样式"><span>3常见的光标样式</span></a></h3>
<p>我们使用cursor属性改变光标样式，常用值:</p>
<p>default 默认值 箭头</p>
<p>pointer 小手</p>
<p>wait 等待 转圈或者沙漏</p>
<p>crosshair 十字光标 截图常见</p>
<p>move 拖拽 移动光标</p>
<p>text 文本输入光标(工字型)</p>
<h3 id="_4小技巧汇总" tabindex="-1"><a class="header-anchor" href="#_4小技巧汇总"><span>4小技巧汇总</span></a></h3>
<p>(1) 浏览器为所有列表提供了内外间距，记得去除</p>
<p>ul,ol { margin:0; padding:0; }</p>
<p>(2) 去掉列表的列表项前标识符</p>
<p>ul { list-style:none; }</p>
<p>(3) 当表单中的控件获得焦点时，外轮廓线会显示出来，可以去掉</p>
<p>outline:none;</p>
<h2 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理"><span>文本处理</span></a></h2>
<h3 id="_1字号-字体大小" tabindex="-1"><a class="header-anchor" href="#_1字号-字体大小"><span>1字号(字体大小)</span></a></h3>
<p>font-size:14px; 绝对尺寸，在任何终端尺寸都一样</p>
<p>font-size:1.5em；设置成父级字体大小的1.5倍</p>
<p>font-size:2rem; 设置成页面根元素html字体大小的2倍</p>
<p>注意：</p>
<ul>
<li>
<p>文字大小是可以被继承的</p>
</li>
<li>
<p>谷歌浏览器默认的字体大小是16px，最小显示的字号是12px，低于12px，也以12px显示</p>
</li>
</ul>
<p>一般门户常用的字体大小是12px 14px 16px</p>
<h3 id="_2字体颜色" tabindex="-1"><a class="header-anchor" href="#_2字体颜色"><span>2字体颜色</span></a></h3>
<p>color 文字的颜色，该属性可以被继承，值可以使用任何色值</p>
<h3 id="_3文本的修饰线" tabindex="-1"><a class="header-anchor" href="#_3文本的修饰线"><span>3文本的修饰线</span></a></h3>
<p>text-decoration: underline; 下划线</p>
<p>text-decoration: none; 去掉修饰线，不止是下划线</p>
<p>text-decoration: line-through; 给元素添加一条删除线</p>
<h3 id="_4文本的水平对齐方式" tabindex="-1"><a class="header-anchor" href="#_4文本的水平对齐方式"><span>4文本的水平对齐方式</span></a></h3>
<p>text-align定义行内内容(文本/内联元素)，相对于块级父元素对齐</p>
<p>注意！！！本属性并不是写给要对齐的元素，而是要写给它的块级父元素</p>
<p>text-align:center; 居中对齐</p>
<p>text-align:left; 左对齐</p>
<p>text-align-right; 右对齐</p>
<p>注意:本属性对行内元素无效，如果行内块元素宽度与内容等宽也无效</p>
<p>这里的居中指的是让块级或行内块元素中的文本、图片等内容居中</p>
<h3 id="_5行高" tabindex="-1"><a class="header-anchor" href="#_5行高"><span>5行高</span></a></h3>
<p>line-height 行高也称作行间距，指的是文本之间的距离</p>
<p>行高，值可以设置为像素值，也可以设置为数字，没有单位，表示倍数</p>
<p>如果需要单行文字在元素内垂直居中，可以使用line-height设置为元素的高度即可</p>
<h3 id="_6垂直对齐方式" tabindex="-1"><a class="header-anchor" href="#_6垂直对齐方式"><span>6垂直对齐方式</span></a></h3>
<p>vertical-align针对的是内联元素左右的文本和内联元素自己的垂直对齐方式，块级无效</p>
<p>取值：</p>
<p>baseline 基线对齐，默认值</p>
<p>top 顶线对齐</p>
<p>bottom 底部对齐</p>
<p>middle 居中对齐</p>
<h3 id="_7字体型号-家族" tabindex="-1"><a class="header-anchor" href="#_7字体型号-家族"><span>7字体型号(家族)</span></a></h3>
<p>font-family 字体系列允许通过指定多个字体名称来设置字体型号</p>
<p><strong>注意</strong>：</p>
<ul>
<li>
<p>执行顺序是从前向后执行</p>
</li>
<li>
<p>字体名称需要用引号包裹</p>
</li>
<li>
<p>一般情况，设置字体型号要放到HTML标签上</p>
</li>
</ul>
<p>注意商用字体要考虑版权问题，尽量少用奇怪的字体，因为客户端可能会没有</p>
<h3 id="_8字体字重" tabindex="-1"><a class="header-anchor" href="#_8字体字重"><span>8字体字重</span></a></h3>
<p>font-weight 字体字重也就是字体的粗细，浏览器不同，展示的效果也会不同</p>
<p><strong>取值</strong>：</p>
<p>normal; 默认值，正常体</p>
<p>lighter; 细体</p>
<p>bold; 粗体</p>
<p>还可以使用数值的方式，100的倍数 100~900</p>
<p>400 正常体 300细体  600粗体</p>
<h3 id="_9文本溢出效果" tabindex="-1"><a class="header-anchor" href="#_9文本溢出效果"><span>9文本溢出效果</span></a></h3>
<p>我们可以通过限制父级的宽度，并且强制文本内容不换行来实现文本的溢出效果</p>
<p>我们还可以把溢出的文本部分替换成省略号:</p>
<p>white-space:nowrap; 强制不换行</p>
<p>overflow:hidden; 溢出部分隐藏</p>
<p>text-overflow:ellipsis; 超出的文本替换成省略号</p>
<h3 id="_10首行缩进" tabindex="-1"><a class="header-anchor" href="#_10首行缩进"><span>10首行缩进</span></a></h3>
<p>text-indent:2em;</p>
<p>一般用于中文段落的首行，首行需要缩进两个中文字符</p>
<h2 id="元素的定位" tabindex="-1"><a class="header-anchor" href="#元素的定位"><span>元素的定位</span></a></h2>
<h3 id="_1定位的相关属性" tabindex="-1"><a class="header-anchor" href="#_1定位的相关属性"><span>1定位的相关属性</span></a></h3>
<p><strong>定位position的五种值：</strong></p>
<p>静态定位(默认)<strong>、相对定位、绝对定位、固定定位</strong>、粘性定位</p>
<ul>
<li>
<p>静态定位就是默认的文档流布局，块级元素竖向排列，内联元素横向排列</p>
</li>
<li>
<p>元素处于文档流中，只能依次排布，不能随意改变自己的位置</p>
</li>
<li>
<p>常用的三种定位：<strong>相对定位、绝对定位、固定定位</strong></p>
</li>
</ul>
<hr>
<p>在定位时，一定需要让元素移动，涉及到了4个移动属性：</p>
<p>top/bottom/left/right 值可以是长度值也可以是百分比</p>
<p>top: 正值向下移动，负值相反</p>
<p>bottom:正值向上移动，负值相反</p>
<p>left：正值向右移动，负值相反</p>
<p>right：正直向左移动，负值相反</p>
<p>注意：一定要先使用定位属性，才能使用以上四个值使元素移动!</p>
<hr>
<p><strong>层级</strong> <strong>z-index</strong></p>
<p>设定一个定位元素，当元素之间发生重叠时，z-index值大的元素会覆盖小的元素</p>
<ul>
<li>
<p>z-index的值越大，层级越高</p>
</li>
<li>
<p>值为整数值，没有任何单位</p>
</li>
<li>
<p>默认值auto,可以看作是层级0，还可以取负值</p>
</li>
</ul>
<h3 id="_2相对定位" tabindex="-1"><a class="header-anchor" href="#_2相对定位"><span>2相对定位</span></a></h3>
<p>相对定位: <strong>position:relative;</strong></p>
<p>(1) 使用相对定位的元素不会脱离文档流，还保有原来的位置支撑父元素，所以不会影响父级</p>
<p>(2) 使用相对定位的元素可以通过top/bottom/left/right调整自己的位置</p>
<p>(3) 使用相对定位可能会发生元素的堆叠，想改变堆叠次序可以使用z-index调整元素层级</p>
<p>(4) 相对定位的参照物是<strong>元素原来的位置</strong></p>
<p>(5) 相对定位与margin的区别是不会挤开其他元素，而是会发生堆叠</p>
<h3 id="_3绝对定位" tabindex="-1"><a class="header-anchor" href="#_3绝对定位"><span>3绝对定位</span></a></h3>
<p>绝对定位: <strong>position:absolute;</strong></p>
<p>(1) 使用绝对定位的元素会脱离文档流，释放原有的布局空间，不再支撑父元素</p>
<p>(2) 使用绝对定位的元素可以通过top/bottom/left/right调整自己的位置</p>
<p>(3) 使用绝对定位可能会发生元素的堆叠，想改变堆叠次序可以使用z-index调整元素层级</p>
<p>(4) 绝对定位的参照物是<strong>距离自己最近的且有非静态定位属性的祖先元素</strong></p>
<p>(5) 使用技巧：<strong>子绝父相</strong> 父亲用相对定位影响最小最温和，但若父级已有定位属性，就不用重复添加了</p>
<h3 id="_4固定定位" tabindex="-1"><a class="header-anchor" href="#_4固定定位"><span>4固定定位</span></a></h3>
<p>固定定位: <strong>position:fixed</strong>;</p>
<p>(1) 使用固定定位的元素会脱离文档流，释放原有的布局空间，不再支撑父元素</p>
<p>(2) 使用固定定位的元素可以通过top/bottom/left/right调整自己的位置</p>
<p>(3) 使用固定定位可能会发生元素的堆叠，想改变堆叠次序可以使用z-index调整元素层级</p>
<p>(4) 固定定位的参照物是<strong>HTML根元素(浏览器窗口)</strong></p>
<p>(5) 注意: 行内元素使用固定定位会块状化</p>
<h2 id="css高级选择器" tabindex="-1"><a class="header-anchor" href="#css高级选择器"><span>CSS高级选择器</span></a></h2>
<h3 id="_1结构性伪类选择器" tabindex="-1"><a class="header-anchor" href="#_1结构性伪类选择器"><span>1结构性伪类选择器</span></a></h3>
<table>
<thead>
<tr>
<th><strong>第1个子元素</strong>:nth-child(1)  :first-child</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>最后1个子元素</strong>:nth-chilid(必须明确子元素的总个数) 或 :last-child【推荐】</td>
</tr>
<tr>
<td><strong>倍数子元素</strong>:nth-child(Xn)</td>
</tr>
<tr>
<td><strong>偶数子元素</strong>:nth-child(2n) 或 :nth-child(even)</td>
</tr>
<tr>
<td><strong>奇数子元素</strong>:nth-child(2n+1) 或 :nth-child(2n-1) 或 :nth-child(odd)</td>
</tr>
<tr>
<td><strong>倒数第n个子元素</strong>:nth-last-child(n)</td>
</tr>
</tbody>
</table>
<h3 id="_2属性选择器" tabindex="-1"><a class="header-anchor" href="#_2属性选择器"><span>2属性选择器</span></a></h3>
<p>元素[属性名]  选中包含指定属性名的元素</p>
<p>元素[属性名 = “属性值”] 选中包含指定属性名，且值为指定值的元素</p>
<p>元素[属性名 ^= “开头字段”] 选中包含指定属性名，且值以指定字段开头的元素</p>
<p>元素[属性名 $= “结尾字段”] 选中包含指定属性名，且值以指定字段结尾的元素</p>
<p>元素[属性名 *= “包含字段”] 选中包含指定属性名，且值包含指定字段的元素</p>
<p>注意：这里的包含注意区分大小写</p>
<h2 id="flex弹性布局" tabindex="-1"><a class="header-anchor" href="#flex弹性布局"><span>Flex弹性布局</span></a></h2>
<h3 id="_1flex简述" tabindex="-1"><a class="header-anchor" href="#_1flex简述"><span>1flex简述</span></a></h3>
<p>Flex布局也叫做flexbox(弹性盒)，针对于单行多列的布局效果，有很强大的布局分配能力</p>
<p>在没有flex之前，一般使用流式布局、浮动布局、定位布局等等</p>
<p>Flex布局的优势：</p>
<p>因为它具有很多自带的属性来完成分配空间的效果，不需要计算，分配合理，新版浏览器基本都兼容</p>
<p>注意：</p>
<p>Flex自带了很多属性，我们要多多学习才能达到自己的预期效果</p>
<h3 id="_2flexbox弹性盒的指定" tabindex="-1"><a class="header-anchor" href="#_2flexbox弹性盒的指定"><span>2flexbox弹性盒的指定</span></a></h3>
<p>给需要使用弹性布局的元素添加display:flex;属性</p>
<p>这个元素就变成了flex布局的父容器元素，就可以使用flex的相关属性了</p>
<h3 id="_3容器和项目" tabindex="-1"><a class="header-anchor" href="#_3容器和项目"><span>3容器和项目</span></a></h3>
<p>容器:使用display:flex;的父级元素，在容器中使用的属性叫做容器属性</p>
<p>项目：容器中的第一层子元素，受控于父容器的元素叫项目，在项目中使用的属性叫做项目属性</p>
<h3 id="_4flex的注意事项" tabindex="-1"><a class="header-anchor" href="#_4flex的注意事项"><span>4Flex的注意事项</span></a></h3>
<ul>
<li>
<p>子元素需要依赖容器元素，我们控制子元素的排列不再依靠子元素自己float</p>
</li>
<li>
<p>设置父元素为弹性盒，子元素的float将失效</p>
</li>
<li>
<p>切记不要把flex与浮动定位布局一起使用</p>
</li>
<li>
<p>使用了display:flex；其中的子元素会“块状化”</p>
</li>
</ul>
<h2 id="flex容器属性" tabindex="-1"><a class="header-anchor" href="#flex容器属性"><span>flex容器属性</span></a></h2>
<h3 id="_1主轴的排列方向" tabindex="-1"><a class="header-anchor" href="#_1主轴的排列方向"><span>1主轴的排列方向</span></a></h3>
<p><strong>主轴的行模式与列模式</strong></p>
<p>主轴有水平的，有两个方向，向右123 向左321</p>
<p>主轴有竖直的，有两个方向，向下123 向上321</p>
<p><strong>主轴的方向</strong></p>
<p>flex-direction: row; 行模式 <strong>默认值</strong></p>
<p>flex-direction: row-reverse; 反向行模式</p>
<p>flex-direction: column;  列模式</p>
<p>flex-direction: column-reverse;反向列模式</p>
<h3 id="_2项目的换行" tabindex="-1"><a class="header-anchor" href="#_2项目的换行"><span>2项目的换行</span></a></h3>
<p><strong>flex-wrap</strong> 用来控制容器中项目是否换行显示，默认不换行</p>
<p>flex-wrap: nowrap; 默认值,不换行</p>
<p>flex-wrap: wrap; 换行</p>
<h3 id="_3主轴的排列方式与换行的简写" tabindex="-1"><a class="header-anchor" href="#_3主轴的排列方式与换行的简写"><span>3主轴的排列方式与换行的简写</span></a></h3>
<p><strong>flex-flow</strong> 有两个值，第一个是主轴方向，第二个值是是否换行</p>
<p>flex-flow: row nowrap; 行模式 不换行 默认值</p>
<p>flex-flow: column wrap; 列模式 换行</p>
<p>注意：如果是列模式,想要换行的话,记得设置高度,否则不会换行</p>
<h3 id="_4主轴和交叉轴" tabindex="-1"><a class="header-anchor" href="#_4主轴和交叉轴"><span>4主轴和交叉轴</span></a></h3>
<p>我们使用flex时，要想到两条轴线</p>
<p>主轴：先看是行模式还是列模式</p>
<p>行模式的主轴是水平方向的，列模式的主轴是垂直方向的</p>
<p>交叉轴：永远与主轴垂直的轴线</p>
<h3 id="_5主轴上的项目对齐方式" tabindex="-1"><a class="header-anchor" href="#_5主轴上的项目对齐方式"><span>5主轴上的项目对齐方式</span></a></h3>
<p><strong>justify-content</strong></p>
<p>注意：需要区别行模式和列模式，在渲染之前，会先确认主轴方向再做渲染</p>
<p>justify-content: <strong>flex-start</strong>;  项目在主轴上<strong>起点对齐</strong></p>
<p>justify-content: <strong>flex-end</strong>; 项目在主轴上<strong>终点对齐</strong></p>
<p>justify-content: <strong>center</strong>; 项目在主轴上<strong>居中对齐</strong></p>
<p>justify-content: <strong>space-between</strong>; 项目在主轴上<strong>两端对齐</strong></p>
<p>首个项目贴近主轴的起点，尾项目贴近主轴的终点，剩余空间均分</p>
<p>justify-content: <strong>space-around</strong>; 项目在主轴上<strong>环绕对齐</strong></p>
<p>均匀排列所有项目，每个项目周围分配相等的空间，若遇到了相邻元素，就成了两臂间距</p>
<p>justify-content: <strong>space-evenly</strong>; 项目在主轴上<strong>公平对齐</strong></p>
<p>均匀排列所有项目，所有项目之间等距，均分所有的剩余空间</p>
<h3 id="_6单行项目在交叉轴方向上的对齐方式" tabindex="-1"><a class="header-anchor" href="#_6单行项目在交叉轴方向上的对齐方式"><span>6单行项目在交叉轴方向上的对齐方式</span></a></h3>
<p><strong>align-items</strong></p>
<p>注意：想要让项目移动，必须要在移动的轴上有剩余空间！</p>
<p>align-items: flex-end;  项目在交叉轴方向终点对齐</p>
<p>align-items: flex-start;  项目在交叉轴方向起点对齐</p>
<p>align-items: center; 项目在交叉轴方向居中对齐</p>
<h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性"><span>项目属性</span></a></h2>
<p>我们在实际开发中多用容器属性，项目属性用的少一些</p>
<h3 id="_1项目的增长规则" tabindex="-1"><a class="header-anchor" href="#_1项目的增长规则"><span>1项目的增长规则</span></a></h3>
<p>flex-grow 用于规定项目在flex容器中分配容器剩余空间的比例</p>
<p>注意: 容器一定要大于所有项目长度之和，要有剩余空间！负值无效!</p>
<p>默认值：0 当父容器中有剩余空间时，项目也默认不会放大</p>
<p>若设置：1 当父容器中有剩余空间时，会自动放大占有比例</p>
<p>注意：如果此时没有给其它项目设置此属性，那本项目将占有父容器的所有剩余空间</p>
<p>若设置：n 当父容器中有剩余空间，会按照1的n倍放大占有比例</p>
<p>公式：所有元素的flex-grow数值相加，每个项目再按照自己的数值取按比例分总数</p>
<h3 id="_2项目的收缩规则" tabindex="-1"><a class="header-anchor" href="#_2项目的收缩规则"><span>2项目的收缩规则</span></a></h3>
<p>flex-shrink 用于指定项目在父容器中的缩小比例</p>
<p>默认值：1 当父容器空间不足时，会默认等比例缩小该项目</p>
<p>若设置：0 当父容器空间不足时，该项目不会缩小</p>
<p>注意：父容器的长度要小于项目长度之和，也就是说父容器的空间不足才会压缩</p>
<p>项目不可以换行，项目才会被压缩，不允许有负值！</p>
<p>公式：压缩的尺寸是所有项目缩小系数之和，之后再按照比重重新分配</p>
<p>如:第4个元素的flex-shrink:2;所有项目1+1+1+2+1+1=7，总长度缩小了70px</p>
<p>那每个项目缩小的长度为:10px+10px+10px+20px+10px+10px=70px</p>
<h2 id="css样式重置" tabindex="-1"><a class="header-anchor" href="#css样式重置"><span>CSS样式重置</span></a></h2>
<p>【面试题：】你知道浏览器兼容性问题有哪些？进行过样式重置吗？进行过样式标准化吗？</p>
<p><strong>解决方案：</strong></p>
<p>https://necolas.github.io/normalize.css/8.0.1/normalize.css</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/*********第1步:样式标准化(重置):将浏览器提供的默认样式统一化 实用化********/
/*有些元素默认样式不好用，需要在最开始写页面时重新设定统一下，改成适合于当前项目的样式 */
/* 1.将html根元素设置一下 */
html {
	/* 1.1设定根元素html的字体大小
	页面中所有使用rem单位的长度，都是相对于html的字体大小而言的*/
	font-size: 14px;
	/* 1.2 根元素html的高度默认是靠内容撑起来的，很矮，使用起来不方便
	 我们可以让html的高度为浏览器窗口高度的100%*/
	height: 100%;
}
/* 2.body的样式重置 */
body {
	/* 2.1 不同浏览器的外间距不同，不要，清零 */
	margin: 0;
	/* 2.2 字体型号与字体颜色的设置 */
	font-family: '黑体';
	color: #666;
	/* 2.3 背景颜色 */
	background-color: #f5f5f5;
}
/* 3.超链接样式重置 */
a {
	/* 3.1去除超链接自带的下划线 */
	text-decoration: none;
	/* 3.2 修改超链接的字体颜色，超链接默认不会继承body的字体颜色 */
	color: #666;
}
/* 3.3超链接未被访问过的样式 */
a:link {
	color: #0aa1ed;
}
/* 3.4超链接已被访问过的样式 一般未被访问过与已被访问过样式一致 */
a:visited {
	color: #0aa1ed;
}
/* 3.5超链接悬停的样式 */
a:hover {
	color: #808080;
}
/* 3.6超链接激活的样式 */
a:active {
	color: #666;
}
/* 4.列表样式重置 */
ul,ol {
	/* 4.1浏览器为所有列表提供了间距，需要清除 */
	margin: 0;
	padding: 0;
}
/* 4.2清除浏览器提供的列表项前标识符*/
li {
	/* 去掉有序列表项前默认的阿拉伯数字 / 无序列表项前默认的实心圆 */
	list-style-type: none;
}
/* 5.清除段落默认存在的上下外间距 */
p {
	margin: 0;
}
/* 6.清除输入框的外轮廓线 */
input {
	outline: none;
}
/**************第2步:样式脚手架:声明一些基础类，辅助构建整个页面****************/
/* 7.版心基础类 */
.container {
	/* 7.1根据设计给的宽度制定版心的宽度 */
	width: 1000px;
	/* 7.2设置版心的内容在页面中水平居中 */
	margin: 0 auto;
}
/* 8.清除父级高度坍塌影响的工具类 */
.clearfix::after {
	content: '';/* 在指定元素的最后生成一个空的假孩子 */
	display: block; /* 显示模式变为块级才能使用clear属性 */
	clear: both; /* 清除向左/向右两个方向浮动产生的影响 */
}
/* 9.开发测试阶段的辅助线，颜色自定义，代码完成后记得删掉！ */
div {
	border: 1px solid #f00;
}
/*************第3步：开始写自己的项目代码*****************/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过渡-transition" tabindex="-1"><a class="header-anchor" href="#过渡-transition"><span>过渡 transition</span></a></h2>
<h3 id="_1过渡的概念" tabindex="-1"><a class="header-anchor" href="#_1过渡的概念"><span>1过渡的概念</span></a></h3>
<p>过渡可以为元素在不同状态之间切换的时候定义不同的过渡效果</p>
<p>过渡一般要结合伪类使用</p>
<h3 id="_2过渡属性是由以下四个分属性组合的" tabindex="-1"><a class="header-anchor" href="#_2过渡属性是由以下四个分属性组合的"><span>2过渡属性是由以下四个分属性组合的</span></a></h3>
<p>transition-property 过渡的名称</p>
<p>也就是要过渡的属性名，默认值是all,代表所有可过渡的属性</p>
<p>transition-duration 过渡的时间</p>
<p>默认值是0s 使用时间单位秒</p>
<p>transition-delay 过渡的延迟时间</p>
<p>默认值是0s 效果就是等一会才执行，使用时间单位秒</p>
<p>transition-timing-function 过渡的方式</p>
<p>以下的单词都是帮我们设置好的效果，可以直接使用单词</p>
<p>默认值是ease,先慢再快再慢，但常用的是linear匀速</p>
<p><img src="@source/web/imageMD/css/过度.png" alt=""></p>
<p>https://cubic-bezier.com/#1,.99,.23,.21 其他的效果可以通过贝塞尔曲线在线调整</p>
<h3 id="_3过渡的简写" tabindex="-1"><a class="header-anchor" href="#_3过渡的简写"><span>3过渡的简写</span></a></h3>
<p>Transition过渡的最简形式是只写一个过渡时间</p>
<p>如果需要同时写两个时间，过渡时间在前，延迟时间在后，其他属性没有顺序要求</p>
<h3 id="_4多组过渡的写法" tabindex="-1"><a class="header-anchor" href="#_4多组过渡的写法"><span>4多组过渡的写法</span></a></h3>
<p>先过渡2s背景颜色，等颜色过渡完，再过渡圆角3s</p>
<p>transition: 2s background-color,3s 2s border-radius;</p>
<p>注意：使用多组过渡，延迟时间一定是前面多组过渡时间之和</p>
<h3 id="_5常用的可过渡属性" tabindex="-1"><a class="header-anchor" href="#_5常用的可过渡属性"><span>5常用的可过渡属性</span></a></h3>
<p>尺寸类(宽度 高度)  文字渲染(颜色 修饰线) 内外间距 边框 圆角 透明度 阴影 背景类 定位</p>
<p>https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties</p>
<h2 id="变换-transform" tabindex="-1"><a class="header-anchor" href="#变换-transform"><span>变换 transform</span></a></h2>
<p>变换是为了方便我们从多种维度改变元素的样式，transform为我们提供了4种变换函数，我们可以通过函数的参数改变变换效果，变换可以在一个元素上应用多种效果。</p>
<h3 id="_1位移函数-translate" tabindex="-1"><a class="header-anchor" href="#_1位移函数-translate"><span>1位移函数 translate</span></a></h3>
<p>transform: translateX(100px); 元素在X轴向右移动100px 正值向右，负值向左</p>
<p>transform: translateY(100px); 元素在Y轴向下移动100px 正值向下，负值向上</p>
<p>transform: translate(100px,100px); 元素在X轴、Y轴的位移，如果写一个值，代表X轴</p>
<h3 id="_2旋转函数-rotate" tabindex="-1"><a class="header-anchor" href="#_2旋转函数-rotate"><span>2旋转函数 rotate</span></a></h3>
<p>transform: rotate(30deg);函数在二维空间中默认指Z轴</p>
<p>transform: rotateX(30deg); 元素围绕X轴(水平)旋转</p>
<p>transform: rotateY (30deg); 元素围绕Y轴(垂直)旋转</p>
<h3 id="_3缩放函数-scale" tabindex="-1"><a class="header-anchor" href="#_3缩放函数-scale"><span>3缩放函数 scale</span></a></h3>
<p>transform:scaleX(2); x轴放大</p>
<p>transform:scaleY(2); y轴放大</p>
<p>transform:scale(1.2); x轴y轴同时放大1.2倍</p>
<p>transform: scale(0.5,2);  x轴缩小至一半,y轴放大2倍</p>
<p>transform: scale(0); 元素缩小到消失,使用0值</p>
<p><strong>翻转效果:</strong></p>
<p>transform: scaleX(-1); X轴镜面效果</p>
<p>transform: scaleY(-1); Y轴镜面效果</p>
<p>transform: scale(-1); X轴 Y轴双方向镜面翻转效果</p>
<h3 id="_4扭曲函数-skew-【较少使用】" tabindex="-1"><a class="header-anchor" href="#_4扭曲函数-skew-【较少使用】"><span>4扭曲函数 skew 【较少使用】</span></a></h3>
<p>transform: skewX(40deg); x轴的扭曲</p>
<p>transform: skewY(30deg); y轴的扭曲</p>
<p>transform: skew (30deg); x轴的扭曲</p>
<p>transform: skew(20deg,20deg); X Y两个轴一起扭曲</p>
<h3 id="_5多个函数一起使用" tabindex="-1"><a class="header-anchor" href="#_5多个函数一起使用"><span>5多个函数一起使用</span></a></h3>
<p>如果想要使用多个函数,用空格分隔,注意有先后顺序,从左向右执行</p>
<p>transform: rotate(10deg) scale(1.4);</p>
<h2 id="变换" tabindex="-1"><a class="header-anchor" href="#变换"><span>变换</span></a></h2>
<h3 id="_1修改基点" tabindex="-1"><a class="header-anchor" href="#_1修改基点"><span>1修改基点</span></a></h3>
<p><img src="@source/web/imageMD/css/变换.png" alt=""></p>
<p>我们可以利用这个属性修改变换的基点，值支持百分比与关键字</p>
<p>中心点：元素的中心（必须长方形两条对角线交叉的点就是中心点）</p>
<p>原点: 比如屏幕的左上角是原点</p>
<p>基点：变换时参照的点，默认值是中心点，但可以修改</p>
<h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画"><span>动画</span></a></h2>
<p>CSS3过渡动画模板</p>
<p>http://web.chacuo.net/css3transition</p>
<p>这里面的效果都是二维的，可以选中自己喜欢的效果点一下，页面上部会出现此效果的代码，复制即可</p>
<p>注意:要把id值修改为自己的id选择器</p>
<h3 id="_1关键帧的语法规则" tabindex="-1"><a class="header-anchor" href="#_1关键帧的语法规则"><span>1关键帧的语法规则</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>@keyframes move {
0% { transform：translateX(0);}
100% { transform：translateX(300px); }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@keyframes 表示要制定关键帧规则(动画脚本)</p>
<p>move 自定义的关键帧名称，注意不要用数字开头，尽量做到见名知意</p>
<p>{ } 用来包裹所有的执行阶段</p>
<p>0%或from 都表示动画还没开始的初始状态</p>
<p>100%或to 都表示动画结束的状态</p>
<ul>
<li>
<p>推荐使用百分比，可以制定多个动画阶段0%...20%...50%...79%...100%</p>
</li>
<li>
<p>每个动画阶段都可以设置多个CSS样式属性</p>
</li>
<li>
<p>动画不一定需要搭配伪类使用，刷新页面就会执行</p>
</li>
<li>
<p>动画执行完毕后，默认会到起始位置</p>
</li>
<li>
<p>动画脚本一定要通过animation属性执行！！！</p>
</li>
</ul>
<h3 id="_2使用动画脚本-最简写法" tabindex="-1"><a class="header-anchor" href="#_2使用动画脚本-最简写法"><span>2使用动画脚本(最简写法)</span></a></h3>
<p>animation：go 2s;</p>
<p>第1个属性值是要执行的动画脚本名</p>
<p>第2个属性值是动画脚本的执行时间</p>
<h3 id="_3animation动画属性的拆分" tabindex="-1"><a class="header-anchor" href="#_3animation动画属性的拆分"><span>3Animation动画属性的拆分</span></a></h3>
<p>animation-name: move; 要执行的关键帧名称，必写</p>
<p>animation-duration: 2s; 关键帧的执行时间，单位(秒)，必写</p>
<p>animation-delay: 1s; 关键帧的延迟时间，单位(秒)</p>
<p>animation-timing-function: ease; 动画的执行方式</p>
<p>和过渡一样，可以用贝塞尔曲线，默认值为ease,一般用linear匀速</p>
<p>animation-iteration-count: 1; 动画的执行次数，默认值为1</p>
<p>没有单位，直接写数字，我们常用infinite表示无限次</p>
<p>animation-fill-mode: backwards; 动画结束后立即回到初始位置</p>
<p>如果需要动画执行完毕时，停留在终点位置，可以将此值设置为forwards</p>
<p>animation-play-state: running; 动画的播放状态，默认值running执行</p>
<p>如果需要暂停可以将此值设置为paused暂停</p>
<p>比如可以结合伪类，用户触发动画暂停，比如商品滚动条，鼠标移入就会暂停滚动</p>
<p>animation-direction: normal; 动画的播放次序，默认从0%~100%播放</p>
<p>如果需要修改播放次序，比如可以设置alternate正反序交替执行(先正序执行，再反序执行)</p>
<p>还可以设置成reverse反序执行</p>
</div></template>


