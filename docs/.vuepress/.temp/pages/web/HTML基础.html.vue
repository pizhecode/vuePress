<template><div><h1 id="html基础" tabindex="-1"><a class="header-anchor" href="#html基础"><span>HTML基础</span></a></h1>
<h2 id="html入门" tabindex="-1"><a class="header-anchor" href="#html入门"><span>HTML入门</span></a></h2>
<h3 id="_1网页的组成" tabindex="-1"><a class="header-anchor" href="#_1网页的组成"><span>1网页的组成</span></a></h3>
<p>HTML: 内容层—负责页面的内容—文字 链接 图片…</p>
<p>CSS：样式层—负责页面的样式—颜色 大小 位置 表现…</p>
<p>JavaScript：行为层—负责页面的行为—交互效果 轮播图</p>
<p>页面的内容与样式也有标准，它的标准是由w3c制定的，万维网联盟</p>
<h3 id="_2html的定义" tabindex="-1"><a class="header-anchor" href="#_2html的定义"><span>2HTML的定义</span></a></h3>
<p>HTML超文本标记语言Hyper Text Markup Language</p>
<p>可以把它简单理解成我们常见的网页</p>
<p>Html是一门编程语言，由大量的标签组成</p>
<p>超文本:文本 图片 超链接 音频 视频…</p>
<p>标记(标签):html的语法标签 &lt;标签&gt;</p>
<h2 id="html的语法规则" tabindex="-1"><a class="header-anchor" href="#html的语法规则"><span>HTML的语法规则</span></a></h2>
<h3 id="_1html的特点" tabindex="-1"><a class="header-anchor" href="#_1html的特点"><span>1HTML的特点</span></a></h3>
<p>HTML文档是以.html或者.htm为后缀</p>
<p>需要由浏览器解析执行(默认代码从上往下，同一行从左往右按顺序执行)</p>
<p>页面中还可以嵌入JS代码</p>
<p>我们学习的是HTML5,代表第5次重大版本修改</p>
<h3 id="_2语法基础" tabindex="-1"><a class="header-anchor" href="#_2语法基础"><span>2语法基础</span></a></h3>
<p>标签: &lt;标签名&gt; 用尖括号包裹标签名，分为：</p>
<p><strong>双标记标签，封闭类型标签</strong></p>
<p>&lt;开始标签&gt;内容区域&lt;/结束标签&gt;</p>
<p>如:<title>我是标题</title></p>
<p><strong>单标记标签，非封闭类型标签</strong></p>
<p>&lt;标签名/&gt;  h5后单标记标签可以不加斜杠 &lt;标签名&gt;</p>
<p>如：<br/> 或者 <br></p>
<h3 id="_3完整的html结构" tabindex="-1"><a class="header-anchor" href="#_3完整的html结构"><span>3完整的HTML结构</span></a></h3>
<p><strong><!DOCTYPE HTML> 文档类型声明</strong></p>
<p>写在html文件中的第1行，告诉浏览器，当前这个文档类型是HTML</p>
<p>并且使用了h5的语法编写的，请用h5的规范解析</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span> 表示网页的开始与结束
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span> 网页的头部，定义了当前页面的一些配置信息
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>我是标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span> 网页的标题
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 设置网页的编码为了认识中文
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span> 网页的主体，所有可见的展示内容都写在这里
		我是要展示的内容
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html标签" tabindex="-1"><a class="header-anchor" href="#html标签"><span>HTML标签</span></a></h2>
<h3 id="_1文本样式的标签" tabindex="-1"><a class="header-anchor" href="#_1文本样式的标签"><span>1文本样式的标签</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;b>&lt;/b> 加粗
&lt;i>&lt;/i> 斜体
&lt;u>&lt;/u> 下划线
&lt;s>删除线文本&lt;/s>
h5提供了一些带有语义的标签，通常带语义的标签更容易理解和记忆
&lt;strong>加粗文本&lt;/strong>
&lt;em>&lt;/em> 斜体
&lt;del>&lt;/del> 删除线
&lt;mark>&lt;/mark> 高亮标记
X&lt;sup>2&lt;/sup> 上标字
Y&lt;sub>1&lt;/sub> 下标字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2换行标签" tabindex="-1"><a class="header-anchor" href="#_2换行标签"><span>2换行标签</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;br> 或 &lt;br/> 单标记标签
在编辑器中敲回车是不可以让大段文字换行的，如果需要让内容换行，可以使用该标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3注释" tabindex="-1"><a class="header-anchor" href="#_3注释"><span>3注释</span></a></h3>
<p>格式 <!-- 被注释掉的内容 --></p>
<p>注释就是不被浏览器解析执行的内容，它是为了解释代码用的</p>
<p>(1) 注释内部不能嵌套注释</p>
<p>(2) 在&lt;&gt;里不可以写注释</p>
<p>快捷键 Ctrl+/ 再按一次取消注释</p>
<h3 id="_4转义符号" tabindex="-1"><a class="header-anchor" href="#_4转义符号"><span>4转义符号</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&amp;copy; 版权声明 © 
&amp;reg; 注册商标 ®
&amp;trade; 商标符号 ™
&amp;times; 关闭符号/乘号 ×
&amp;otimes; 带圈的关闭符号⊗
&amp;divide；除号 ÷
&amp;lt; 小于号 &lt;
&amp;gt; 大于号 >
&amp;nbsp; 空格
空格折叠现象：多个空格与换行会折叠成一个空格显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5段落标签" tabindex="-1"><a class="header-anchor" href="#_5段落标签"><span>5段落标签</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;p>&lt;/p>
自己单独成行，上下方向有垂直的行间距
lorem是用于生成假文的，先输入Lorem出现提示回车或者Tab补全均可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6标题字标签" tabindex="-1"><a class="header-anchor" href="#_6标题字标签"><span>6标题字标签</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;hn>&lt;/hn>n从1~6
单独成行, h1最大 h6最小,字体加粗 上下有垂直的行间距
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7水平分割线标签" tabindex="-1"><a class="header-anchor" href="#_7水平分割线标签"><span>7水平分割线标签</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;hr> 或者 &lt;hr/> 单标记标签
在页面上添加一条独占一行的分割线，我们还可以设置分割线的属性
&lt;hr color="red" size="10px"> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片"><span>图片</span></a></h2>
<h3 id="_1图片" tabindex="-1"><a class="header-anchor" href="#_1图片"><span>1图片</span></a></h3>
<p><strong>常见的图片格式：</strong></p>
<p>jpg/jpeg 普通图片</p>
<p>png 透明图</p>
<p>gif 动图</p>
<p>webp 谷歌新出的图片格式</p>
<p>图片的问题不同担心，设计师会把所需的图片资源切好给我们</p>
<p><strong>标签的属性和值</strong></p>
<p>**属性：**也称为特征，用来描述标签某一方面的特点</p>
<p>Html定义了很多的属性和值，用来修改元素的样式和状态</p>
<p><strong>写法:</strong> &lt;开始标签 属性名1=“属性值1” 属性名2=“属性值2”&gt;&lt;/结束标签&gt;</p>
<p>(1) 属性的声明必须写在开始标签里</p>
<p>(2) 一个html元素可能不止有一个属性，多个属性之间使用空格隔开</p>
<p>(3) 多个属性之间不区分先后顺序</p>
<p>(4) 属性名与属性值之间使用等号连接</p>
<p>(5) 属性值要包裹在引号中</p>
<p>如：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;img src="123.jpg" alt="哎呀图片走丢了"/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;img /> 单标记标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>属性：</strong></p>
<p>src =“图片资源的路径/url”【必写】</p>
<p>alt =“资源加载失败时显示的替换文字”</p>
<p>width = “图片的宽度 单位(%或px)”</p>
<p>height = “图片的高度 单位(%或px)”</p>
<p><strong>注意：</strong></p>
<p>图片本身是有宽高的，如果设置图片宽高时的尺寸不符合图片本身的宽高比，图片会失真</p>
<p>失真：图片本身的比例与初始比例不符</p>
<p>解决方案：宽或高只写一个，另外一个会自动适应</p>
<h3 id="_2url" tabindex="-1"><a class="header-anchor" href="#_2url"><span>2url</span></a></h3>
<p><strong>相对路径</strong>—参照物就是当前的html文件</p>
<p><strong>同一级</strong> src=“图片名.后缀名” 如：src=&quot;zichan2.jpg&quot;</p>
<p><strong>下一级</strong> src=“同级的目录名/图片名.后缀名” 如：src=&quot;img/zichan1.jpg&quot;</p>
<p><strong>上一级</strong> src=“../图片名.后缀名”如：src=&quot;../zichan3.jpg&quot;·</p>
<p><strong>绝对路径</strong></p>
<p>是一个完整的路径，使用网络资源的时候，使用绝对路径</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://blog.kunkun.cool/image/touxiang.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>优点：节省自己的服务器存储空间</p>
<p>缺点：资源不稳定，如果远程服务器删除资源，本地就找不到这个图片了</p>
<h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接"><span>超链接</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;a href=“”>&lt;/a>
属性:
href=“要跳转的页面路径”
target=“打开跳转页面的方式”
_self 默认值，在本页面打开链接
_blank 在新的选项卡页面中打开链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>锚点
在页面上定义一个位置，叫做锚点
我们可以使用a标签，跳转到锚点，页面会直接在这个位置显示
定义锚点的方式：
可以直接给html元素定义一个id值，id值直接当做锚点名称
&lt;h3 id="c2">第二章 东海学艺&lt;/h3>
跳转到锚点位置：
&lt;a href="#c2">快速跳转到第二章&lt;/a>
跳转到页面顶部：
&lt;a href="#">快速跳转到页面顶部&lt;/a>
在写项目时，如果不知道href跳转到哪里，就先用#占位
&lt;a href="#">跳转到登录页，但登录页还没写，不知道路径&lt;/a>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h2>
<h3 id="_1表格的语法" tabindex="-1"><a class="header-anchor" href="#_1表格的语法"><span>1表格的语法</span></a></h3>
<p>table标签：表示网页的开始和结束，表格的所有内容都要写在这对标签里</p>
<p>tr标签：表示表格中的一行 table row</p>
<p>td标签：是真正存放数据的地方，一行有几个单元格就表示有几列 table datacell</p>
<h3 id="_2表格的可选标记" tabindex="-1"><a class="header-anchor" href="#_2表格的可选标记"><span>2表格的可选标记</span></a></h3>
<p>caption标签: 表格的标题</p>
<p>thead标签：表头部分</p>
<p>tbody标签：表主体部分</p>
<p>th标签：行/列的标题，文字加粗显示</p>
<h3 id="_3表格的属性" tabindex="-1"><a class="header-anchor" href="#_3表格的属性"><span>3表格的属性</span></a></h3>
<p>border=“1px” 给表格添加边框</p>
<p>style=&quot;border-collapse: collapse;&quot; 表格默认的边框是带有间距的，想去掉可以加这句代码</p>
<h3 id="_4不规则的表格" tabindex="-1"><a class="header-anchor" href="#_4不规则的表格"><span>4不规则的表格</span></a></h3>
<p>写在td元素中</p>
<p>colspan=“n”跨列，从当前单元格开始，向右合并n个单元格</p>
<p>rowspan=“n” 跨行，从当前单元格开始，向下合并n个单元格</p>
<p>被合并的单元格一定得删掉！！！</p>
<h3 id="_5表格的大小" tabindex="-1"><a class="header-anchor" href="#_5表格的大小"><span>5表格的大小</span></a></h3>
<p>表格的大小是靠内容撑起来的</p>
<p>如果修改了某个单元格的高度，这一行单元的高度都会随之改变</p>
<p>同理，如果修改了某个单元的宽度，这一列单元格的宽度都会随之改变</p>
<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表"><span>列表</span></a></h2>
<h3 id="_1有序列表" tabindex="-1"><a class="header-anchor" href="#_1有序列表"><span>1有序列表</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;ol> 有序列表 order list 
	&lt;li> &lt;/li> 列表项 list item
	&lt;li> &lt;/li>
&lt;/ol>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有序列表的属性</p>
<p>start=“4” 指定列表项的编号起始值从4开始 默认值是1</p>
<p>type=“1”指定编号的类型，默认值1代表阿拉伯数字</p>
<p>a小写字母 A大写字母 i小写的罗马数字 I大写的罗马数字</p>
<h3 id="_2无序列表" tabindex="-1"><a class="header-anchor" href="#_2无序列表"><span>2无序列表</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;ul> 有序列表 unorder list 
	&lt;li> &lt;/li> 列表项 list item
	&lt;li> &lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无序列表的属性</p>
<p>type=“disc”实心圆，默认值</p>
<p>circle空心圆 square方块 none没有标识</p>
<h3 id="列表的嵌套" tabindex="-1"><a class="header-anchor" href="#列表的嵌套"><span>列表的嵌套</span></a></h3>
<p>ul与ol的直接子元素必须是li</p>
<p>所以，所有被嵌套的内容都需要写在li中</p>
<h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单"><span>表单</span></a></h2>
<h3 id="_1特点" tabindex="-1"><a class="header-anchor" href="#_1特点"><span>1特点</span></a></h3>
<ul>
<li>
<p>提供了一些可视化的输入控件</p>
</li>
<li>
<p>会自动收集整理用户输入的内容，并提交给服务器</p>
</li>
</ul>
<h3 id="_2语法" tabindex="-1"><a class="header-anchor" href="#_2语法"><span>2语法</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;form>&lt;/form>
可以添加的属性:
action=“url” 表示会将表单收集的数据提交到哪个服务器
目前我们可以先写一个#,表示提交到当前页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3input元素" tabindex="-1"><a class="header-anchor" href="#_3input元素"><span>3input元素</span></a></h3>
<p><strong>公共属性：</strong></p>
<p>type 设置input元素的类型，默认值是text</p>
<p>value 用来保存用户输入的值，用于后期提交给服务器</p>
<p>如果控件是按钮，value用来设置按钮上显示的文本</p>
<p>name 为控件起名字,注意：form表单必须起name否则提交不了数据</p>
<h4 id="文本框与密码框" tabindex="-1"><a class="header-anchor" href="#文本框与密码框"><span><strong>文本框与密码框</strong></span></a></h4>
<p>type=“text” 普通文本输入框</p>
<p>type=“password” 密码框</p>
<p>属性：</p>
<p>maxlength=&quot;5&quot; 设置输入数据的最大长度</p>
<p>placeholder=&quot;请输入用户名&quot; 提示文字</p>
<p>value=&quot;jack&quot; 表示给当前输入框设置了一个默认值jack</p>
<p>这个属性不写默认也有，默认值为空，到时用户输入什么数据，value就保存什么值</p>
<h4 id="按钮" tabindex="-1"><a class="header-anchor" href="#按钮"><span><strong>按钮</strong></span></a></h4>
<p>type=“submit”提交按钮，会自动手机整理用户输入的数据，提交</p>
<p>type=“reset 重置按钮，会将表单的控件恢复到初始状态，注意不是清空</p>
<p>type=&quot;button&quot; 普通按钮，后期会绑定JS代码</p>
<p>注意: 按钮的value属性是用来设置按钮上显示的文字</p>
<p>H5新增了一个表示按钮的标签 <button></button>等价于上面的type=”button”</p>
<h4 id="单选与多选框" tabindex="-1"><a class="header-anchor" href="#单选与多选框"><span>单选与多选框</span></a></h4>
<p>type=&quot;radio&quot; 单选框</p>
<p>type=&quot;checkbox&quot; 多选框</p>
<p><strong>属性：</strong></p>
<p>name【必须加】 为控件起名并分组，一组单选框/多选框的名称必须相同才能实现效果</p>
<p>value【必须加】 不加提交的值是on</p>
<p>checked 表示当前项默认被选中</p>
<h4 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传"><span>文件上传</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>请上传您的文件&lt;input type="file" multiple>
multiple可以实现文件上传的多选效果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="h5新增的input控件" tabindex="-1"><a class="header-anchor" href="#h5新增的input控件"><span>h5新增的input控件</span></a></h3>
<ul>
<li>数字控件：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;input type="number" max="30" min="10" step="3"/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>min 最小值 max最大值</p>
<p>step步长，一次递增/递减的大小，默认步长为1</p>
<p>注意：这个输入框无法阻止用户自行输入数据</p>
<ul>
<li>颜色控件：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;input type="color"/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提供了一个取色器，可以选择不同的颜色，默认是黑色</p>
<ul>
<li>日期控件：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;input type="date"/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以年月日，后期如果想要其他更加精美的日期效果，可以使用其他的插件</p>
<ul>
<li>月份控件：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;input type="month"/> 选择年-月
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>星期控件：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;input type="week"/> 选择年-周 一年有52周
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>搜索控件：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;input type="search"/> 提供了一个快速删除所有内容的小叉叉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>范围控件：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;input type="range" min="10" max="30" step="7"/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>min最小值 max最大值 step步长，表示数字滑动的跨度</p>
<p>作用:可以控制区间，比如音量 地图缩放 进度</p>
<p>注意：设置步长时应该选取可以除得尽的值，否则区间中会有一部分值无法被选中</p>
<h3 id="select下拉选择框" tabindex="-1"><a class="header-anchor" href="#select下拉选择框"><span>select下拉选择框</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;select name="food" multiple>
	&lt;option value="1" >四川火锅&lt;/option>
	&lt;option value="2">东北乱炖&lt;/option>
&lt;/select>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>提交时如果没有给option设置value值，提交的就是option标签之间的文本</li>
<li>selected 设置当前option默认被选中</li>
<li>multiple 设置当前下拉选择框可以多选</li>
</ul>
<h3 id="textarea多行文本域" tabindex="-1"><a class="header-anchor" href="#textarea多行文本域"><span>textarea多行文本域</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;textarea rows="10" cols="50">&lt;/textarea>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rows=&quot;10&quot; 文本域的行数，改变的是高度</p>
<p>cols=&quot;50&quot; 文本域的列数，改变的是宽度</p>
<p>注意：默认的文本域大小可以被用户随意拖拽改变，想要禁用拖拽：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>style="resize:none;"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="label关联控件" tabindex="-1"><a class="header-anchor" href="#label关联控件"><span>label关联控件</span></a></h3>
<p>用于将form表单中的文本与控件进行关联</p>
<p>点击文本，效果如同点击控件</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;label for="要关联控件的id值">&lt;/label>
&lt;input type="checkbox" name="yes" id="y" value="1">
&lt;label for="y">请同意此协议&lt;/label>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浮动框架" tabindex="-1"><a class="header-anchor" href="#浮动框架"><span>浮动框架</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>iframe 用于在一个html页面中，引入其它的html页面
&lt;iframe src="https://www.codeboy.com/xuezi/admin/login.html">&lt;/iframe>
属性：
src="" 被引入资源的路径
width="500px" 被引入资源在本页面显示的宽度
height="450px"  被引入资源在本页面显示的高度
frameborder="0" 去掉被引入资源的边框线
scrolling="no" 是否需要拖拽条，no表示不要滚动条
优势与劣势：
1.我们可以直接引入已经写好的页面，比较方便
2.被引入的页面使用了多次，复用性较高
3.样式不好控制
4.有额外的链接，请求的次数会增加，速度会变慢
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构化标签" tabindex="-1"><a class="header-anchor" href="#结构化标签"><span>结构化标签</span></a></h3>
<p>h5新增了带有结构语义的标签，来取代div</p>
<p>虽然在用户看来之前使用div没有区别，但是带语义的标签可以增加代码的可读性</p>
<p>很方便的实现页面各个部分的划分，让网络爬虫更快找到</p>
<p>但注意: 低版本的浏览器会不兼容</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;header> &lt;/header> 定义网页的头部或者某个区域的顶部
&lt;nav>&lt;/nav> 定义网站的导航栏
&lt;section>&lt;/section> 定义网页的主体内容
&lt;article>&lt;/article> 定义与文字相关的内容，比如文章 论坛 回帖
&lt;aside>&lt;/aside> 定义网页的侧边栏比如分类 广告
&lt;footer>&lt;/footer> 定义网页的底部或者某个区域的底部
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


