<template><div><h1 id="bootstrap响应式" tabindex="-1"><a class="header-anchor" href="#bootstrap响应式"><span>BOOTSTRAP响应式</span></a></h1>
<h2 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式"><span>响应式</span></a></h2>
<p>随着移动端的兴起，多种页面规格出现，我们需要通过响应式让用户在不同的设备终端看到接近相同的内容。</p>
<p>响应式也叫作“自适应页面”可以根据浏览设备的不同，改变不同的布局效果</p>
<p>特点：</p>
<p>使用一套html结构，根据终端的变化(宽度)，使用媒体查询，将不同宽度的CSS样式加入到不同的页面中。</p>
<h3 id="_1设备的宽度" tabindex="-1"><a class="header-anchor" href="#_1设备的宽度"><span>1设备的宽度</span></a></h3>
<p>为了避免不可控制的页面缩放，我们需要在HTML代码中告诉浏览器当前页面的设备宽度是多少，需要使用到的标签就是媒体查询，写法: meta:vp补全即可</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>viewport视口：用户可以看到的，浏览器用来展示页面的窗口</p>
<p>width=device-width 指:视口宽度=设备宽度</p>
<p>initial-scale=1.0 指：初始化视口不缩放</p>
<h3 id="_2媒体查询规则" tabindex="-1"><a class="header-anchor" href="#_2媒体查询规则"><span>2媒体查询规则</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>@media (min-width:500px) and (max-width:900px) {
    body { background-color:red;}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>@media 媒体查询规则
(min-width:500px) 设备的最小宽度
and 用来连接两个尺寸，注意左右两侧的空格必须写！
(max-width:900px) 设备的最大宽度
{ 这个里面写我们设置的CSS样式 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3响应式断点设计原则" tabindex="-1"><a class="header-anchor" href="#_3响应式断点设计原则"><span>3响应式断点设计原则</span></a></h3>
<p>响应式的核心是适配多种设备终端，也就是有不同的尺寸，所以我们需要考虑在什么范围下匹配什么样的样式。</p>
<p>@media(max-width:576px){  } &lt;576 超小 手机/手表</p>
<p>@media(min-width:576px){  } &gt;=576px 小 平板</p>
<p>@media(min-width:768px){  } &gt;=768px 中 窄屏电脑</p>
<p>@media(min-width:992px){  } &gt;=992px 大 普通电脑</p>
<p>@media(min-width:1200px){  } &gt;1200px 超大 宽屏电脑</p>
<p>@media(min-width:1400px){  } &gt;=1400 特大 高清电脑或广告投放设备</p>
<h3 id="_4相对于视口的尺寸" tabindex="-1"><a class="header-anchor" href="#_4相对于视口的尺寸"><span>4相对于视口的尺寸</span></a></h3>
<p>vw(viewport width) 视口宽度</p>
<p>vh(viewport height) 视口高度</p>
<p>1vw == 视口宽度的1%</p>
<p>1vh == 视口高度的1%</p>
<p>撑满全屏宽度100vw 撑满全屏高度100vh</p>
<p>注意:这两个单位可以灵活使用，不是vw只能设置给宽度，给谁都行</p>
<h2 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap"><span>Bootstrap</span></a></h2>
<p>Boot是由推特的两名工程师，基于html css js开发的开源 简洁 强大 优雅的UI框架</p>
<p>至今经历了5个大版本，目前我们学习的是BOOT5</p>
<h3 id="_1学习ui框架的终极意义" tabindex="-1"><a class="header-anchor" href="#_1学习ui框架的终极意义"><span>1学习UI框架的终极意义</span></a></h3>
<p>学习UI框架的终极意义，就是学会如何查文档，运用文档</p>
<p>市面上有很多的UI框架，企业会用哪个不一定，但一定会用框架</p>
<h3 id="_2bootstrap文档" tabindex="-1"><a class="header-anchor" href="#_2bootstrap文档"><span>2Bootstrap文档</span></a></h3>
<table>
<thead>
<tr>
<th>Boot5的中文文档https://v5.bootcss.com/docs/getting-started/introduction/</th>
</tr>
</thead>
<tbody>
<tr>
<td>注意：使用的是哪个版本，就查哪个版本的手册任何框架都会升级，升级后必然有一些改动，所以一定要查看对应版本的手册注意：公司中项目的开发手册中有体现使用什么框架的哪个版本，一定要看版本5改动较大比如：不再兼容IE , 对很多类名有改动，最大对的改动左右改成了start end</td>
</tr>
</tbody>
</table>
<h3 id="_3模板文件" tabindex="-1"><a class="header-anchor" href="#_3模板文件"><span>3模板文件</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;meta charset="utf-8">
		&lt;title>模板文件&lt;/title>
		&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
		&lt;link rel="stylesheet" href="../css/bootstrap.css"/>
		&lt;link rel="stylesheet" href="../css/bootstrap-icons.css"/>
		&lt;script src="../js/bootstrap.bundle.js">&lt;/script>
	&lt;/head>
	&lt;body>
	&lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bootstrap的响应式" tabindex="-1"><a class="header-anchor" href="#bootstrap的响应式"><span>Bootstrap的响应式</span></a></h2>
<h3 id="_1断点breakpoints" tabindex="-1"><a class="header-anchor" href="#_1断点breakpoints"><span>1断点breakpoints</span></a></h3>
<p>https://v5.bootcss.com/docs/layout/breakpoints/</p>
<p>BOOT为我们设置了5+1个断点，写好了媒体查询，我们可以直接使用类中缀，就能对应某个响应式设备的宽度，不同自己写了</p>
<p>&lt;576 超小 没有类中缀</p>
<p>类中缀 sm  &gt;=576</p>
<p>类中缀 md  &gt;=768</p>
<p>类中缀 lg  &gt;=992</p>
<p>类中缀 xl  &gt;=1200</p>
<p>类中缀 xxl  &gt;=1400</p>
<h3 id="_2容器-container" tabindex="-1"><a class="header-anchor" href="#_2容器-container"><span>2容器 container</span></a></h3>
<p>https://v5.bootcss.com/docs/layout/containers/</p>
<p>BOOT中容器的三种写法：</p>
<p><strong>container</strong> 它会自动匹配断点，叫做定宽容器</p>
<p>它会按照响应式的最大宽度体现，并且居中</p>
<p><strong>container-fluid</strong> 全宽适配、变宽容器</p>
<p>它会撑满整个视口的全部宽度</p>
<p>.container-{*} 直接指定断点的类，用的较少，如: .container-sm</p>
<p>sm: 页面宽度在 576~768 之间，版心宽度是540</p>
<p>md: 页面宽度在 768~992 之间，版心宽度是720</p>
<p>lg: 页面宽度在 992~1200 之间，版心宽度是960</p>
<p>xl: 页面宽度在 1200~1400 之间，版心宽度是1140</p>
<p>xxl: 页面宽度大于1400，版心宽度是1320</p>
<h3 id="_3天沟-gutter" tabindex="-1"><a class="header-anchor" href="#_3天沟-gutter"><span>3天沟 gutter</span></a></h3>
<p>gutter天沟这个词是直译过来的，指的是容器左右两侧的内间距</p>
<p>让内容不至于紧贴元素的两侧，默认左右各有0.75rem(12px),共1.5rem(24px)内间距</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>我们可以在bootstrap.css中按Ctrl+F搜索.container可得：
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4颜色-color" tabindex="-1"><a class="header-anchor" href="#_4颜色-color"><span>4颜色 color</span></a></h3>
<p>https://v5.bootcss.com/docs/5.3/utilities/colors/#colors</p>
<p>我们在开发中，使用框架是为了更加快速高效的开发</p>
<p>BOOT自带了一些设计好的颜色，我们可以直接使用</p>
<p>primiary蓝色 danger红色 success绿色 warning黄色 dark暗色 light亮色</p>
<p>.bg-{color} 表示背景颜色</p>
<p>.text-{color} 表示字体颜色</p>
<p>.link-{color} 表示超链接颜色</p>
<h3 id="_5表格-table" tabindex="-1"><a class="header-anchor" href="#_5表格-table"><span>5表格 table</span></a></h3>
<p>https://v5.bootcss.com/docs/5.3/content/tables/</p>
<table>
<thead>
<tr>
<th>.table 基础类 写在<code v-pre>&lt;table&gt;</code>标签，必须写，有了这个基类其他的辅助类才能正常生效</th>
</tr>
</thead>
<tbody>
<tr>
<td>.table-{color} 表格颜色可以加在表格、tr、td、th</td>
</tr>
<tr>
<td>.table-striped 条形纹效果，表格隔行变色</td>
</tr>
<tr>
<td>.table-hover 鼠标悬停变色效果</td>
</tr>
<tr>
<td>.table-bordered 给表格加边框，有了这个属性才可以改边框的颜色.border-{color}</td>
</tr>
<tr>
<td>.table-dark 表头的深色主题,加在<code v-pre>&lt;thead&gt;</code>上.table-light 表头的亮色主题,加在<code v-pre>&lt;thead&gt;</code>上</td>
</tr>
</tbody>
</table>
<h3 id="_6表单-form" tabindex="-1"><a class="header-anchor" href="#_6表单-form"><span>6表单 form</span></a></h3>
<p>https://v5.bootcss.com/docs/forms/overview/</p>
<p>如果需要调整元素的宽度,可以给外层套一个div,调整外层父级的宽度即可</p>
<p><strong>文本输入框和表述文字</strong></p>
<p>form-control 加给input标签的,让input标签有样式上的变化</p>
<p>form-label加在label标签上的,有下外间距</p>
<p>form-text 指对表单进行描述,并且是块级元素,字体大小和间距会发生变化</p>
<p><strong>下拉菜单</strong></p>
<p>form-select 下拉菜单必写的类,写给select标签</p>
<p><strong>单选复选框</strong></p>
<p>form-check 单选框和复选框外层包裹元素,有些边距的样式</p>
<p>form-check-input 单选和复选框的样式,会根据属性type改变样式</p>
<p>form-check-label 是单选和复选的说明文字</p>
<p><strong>输入组</strong></p>
<p>input-group 表单组的外层包裹元素</p>
<p>input-group-text 表单标签前面的文字提示,使用内联元素</p>
<p>form-control 输入框就用表单控件</p>
<h2 id="工具类utilities" tabindex="-1"><a class="header-anchor" href="#工具类utilities"><span>工具类utilities</span></a></h2>
<h3 id="_1尺寸sizing" tabindex="-1"><a class="header-anchor" href="#_1尺寸sizing"><span>1尺寸Sizing</span></a></h3>
<p>https://v5.bootcss.com/docs/utilities/sizing/</p>
<p><strong>宽度和高度</strong></p>
<p>在boot中提供宽度和高度的类是百分比的.</p>
<p>宽度.w-{number} 支持25 50 75 100 auto 分别代表百分比</p>
<p>高度.h-{number} 支持25 50 75 100 auto 分别代表百分比</p>
<p>注意:高度是父级元素的百分比,前提是父元素要有高度才行</p>
<p><strong>相对视口的尺寸</strong></p>
<p>相对视口的宽度vw-100 表示全屏宽度</p>
<p>相对视口的宽度vh-100 表示全屏高度</p>
<p>没有25 50 75这些值，源码中找不到</p>
<h3 id="_2边框borders" tabindex="-1"><a class="header-anchor" href="#_2边框borders"><span>2边框borders</span></a></h3>
<p>https://v5.bootcss.com/docs/utilities/borders/</p>
<p><strong>边框样式</strong></p>
<p>.border边框的基础类,默认四个方向一像素的边框 [必写属性]</p>
<p><strong>单方向边框</strong></p>
<p>.border-{方向} top上/end右/bottom下/start左</p>
<p><strong>边框的宽度</strong></p>
<p>.border-{number} 0~5数字,0是去掉边框,1~5是边框的宽度为1px~5px</p>
<p><strong>边框的颜色</strong></p>
<p>.border-{color} 颜色是使用boot提供的颜色</p>
<p><strong>圆角</strong></p>
<p>.rounded圆角的基础类,默认四个方向都是圆角</p>
<p>.rounded-circle 圆形</p>
<p>.rounded-pill 胶囊型</p>
<h3 id="_3间距" tabindex="-1"><a class="header-anchor" href="#_3间距"><span>3间距</span></a></h3>
<p>间距包括内间距和外间距，内间距使用p-* 外间距使用m-*</p>
<p><strong>间距的宽度(距离)</strong></p>
<p>m-{number} 0~5 外间距,1是0.25rem,四个方向共同使用一个距离的外间距</p>
<p>p-{number} 0~5 内间距,1是0.25rem,四个方向共同使用一个距离的内间距</p>
<p><strong>间距的方向</strong></p>
<p>上内、外间距 pt-{number} 和 mt-{number}</p>
<p>下内、外间距 pb-{number} 和 mb-{number}</p>
<p>左内、外间距 ps-{number} 和 ms-{number}</p>
<p>右内、外间距 pe-{number} 和 me-{number}</p>
<p>垂直方向的内、外间距 py-{number} 和 my-{number}</p>
<p>水平方向的内、外间距 px-{number} 和 mx-{number}</p>
<p>特殊值: 外间距的auto值,mx-auto水平方向的自动居中</p>
<h3 id="_4浮动" tabindex="-1"><a class="header-anchor" href="#_4浮动"><span>4浮动</span></a></h3>
<p>https://v5.bootcss.com/docs/utilities/float/</p>
<p>.float-start 左浮动</p>
<p>.float-end 右浮动</p>
<p>响应式浮动显示 .float-{类中缀}-{浮动方式}</p>
<p>清除浮动</p>
<p>.clearfix 清除父元素高度坍塌,放到父元素中</p>
<p>https://v5.bootcss.com/docs/5.1/helpers/clearfix/</p>
<h3 id="_5定位" tabindex="-1"><a class="header-anchor" href="#_5定位"><span>5定位</span></a></h3>
<p>https://v5.bootcss.com/docs/utilities/position/</p>
<p><strong>定位方式</strong></p>
<p>.position-relative 相对定位</p>
<p>.position-absolute 绝对定位</p>
<p>.position-fixed 固定定位</p>
<p><strong>位移方向</strong></p>
<p>top-{number} 对于顶部的位移位置,数值支持0 50 100分别指0% 50% 100%</p>
<p>bottom-{number} 对于底部的位移位置,数值支持0 50 100分别指0% 50% 100%</p>
<p>start-{number} 对于左侧的位移位置,数值支持0 50 100分别指0% 50% 100%</p>
<p>end-{number} 对于右侧的位移位置,数值支持0 50 100分别指0% 50% 100%</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;div class="position-relative">
  &lt;div class="position-absolute top-0 start-0">&lt;/div>  左上角
  &lt;div class="position-absolute top-0 end-0">&lt;/div>  右上角
  &lt;div class="position-absolute bottom-0 start-0">&lt;/div>  左下角
  &lt;div class="position-absolute bottom-0 end-0">&lt;/div>  右下角
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>中心位置位移</strong></p>
<p>.translate-middle 使用位移x轴y轴居中</p>
<p>底层源码：transform: translate(-50%, -50%) !important;</p>
<h3 id="_6display显示模式" tabindex="-1"><a class="header-anchor" href="#_6display显示模式"><span>6display显示模式</span></a></h3>
<p>https://v5.bootcss.com/docs/utilities/display/</p>
<p>使用display属性,可以改变元素的展示效果</p>
<p>.d-none 就表示元素消失display:none;</p>
<p>.d-block 就表示以块级形式显示</p>
<p>.d-inline 以内联形式显示</p>
<p>.d-inline-block 以行内块显示</p>
<p>.d-flex 以弹性布局的方式显示</p>
<p>显示方式都有响应式的写法,如: .d-{类中缀}-{显示模式}</p>
<h3 id="_7flex弹性布局" tabindex="-1"><a class="header-anchor" href="#_7flex弹性布局"><span>7flex弹性布局</span></a></h3>
<p>https://v5.bootcss.com/docs/utilities/flex/</p>
<p><strong>direction -- flex主轴排序</strong></p>
<p>行模式 .flex-row 和 .flex-row-reverse</p>
<p>列模式 .flex-column 和 .flex-column-reverse</p>
<p>还可以写响应式 .flex-{类中缀}-row</p>
<p><strong>justify-content</strong> <strong>--</strong> <strong>主轴方向的对齐方式</strong></p>
<p>.justify-content-start 起点对齐</p>
<p>.justify-content-end 终点对齐</p>
<p>.justify-content-center 居中对齐</p>
<p>.justify-content-between 两端对齐</p>
<p>.justify-content-around 每个元素左右两侧距离相等,首尾是一臂,中间是两臂间隔</p>
<p>.justify-content-evenly 所有空隙均匀分配,等大</p>
<p>响应式的效果 .justify-content-{类中缀}-{对齐方式}</p>
<p><strong>align items</strong>项目的交叉轴对齐方式</p>
<p>.align-items-start 交叉轴起点对齐</p>
<p>.align-items-end 交叉轴终点对齐</p>
<p>.align-items-center 交叉轴居中对齐</p>
<p>响应式的效果: .align-items-{类中缀}-{项目在交叉轴的对齐方式}</p>
<p><strong>grow and shrink</strong>项目的增长和收缩</p>
<p>.flex-{grow|shrink}-0 项目不可放大 不可收缩</p>
<p>.flex-{grow|shrink}-1 项目可放大 可收缩</p>
<h2 id="布局栅格系统-grid" tabindex="-1"><a class="header-anchor" href="#布局栅格系统-grid"><span>布局栅格系统 Grid</span></a></h2>
<p>https://v5.bootcss.com/docs/layout/grid/</p>
<h3 id="_1行和列" tabindex="-1"><a class="header-anchor" href="#_1行和列"><span>1行和列</span></a></h3>
<p>父子布局，父元素包裹子元素，父元素使用.row行，子元素是父元素的列，使用.col-{*}</p>
<p>一行分为12份，最多可以容纳12列，每个列所占的份数为.col-1</p>
<p>在栅格布局中可以调整每个列所占的份额，如：一行4列</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;div class="row">
	&lt;div class="col-3">占3个份额也就是3/12&lt;/div>
	&lt;div class="col-3">占3个份额也就是3/12&lt;/div>
	&lt;div class="col-3">占3个份额也就是3/12&lt;/div>
	&lt;div class="col-3">占3个份额也就是3/12&lt;/div>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>栅格布局的底层是flexbox,也就是说,我们在使用栅格的同时也可以使用flex的相关属性.</p>
<p>row就是我们的容器col就是我们的项目</p>
<h3 id="_2响应式栅格布局" tabindex="-1"><a class="header-anchor" href="#_2响应式栅格布局"><span>2响应式栅格布局</span></a></h3>
<p>栅格系统最大的作用是能够帮我们实现响应式的布局</p>
<p>.col-{类中缀}-{number}列的响应式写法</p>
<img src="/images/WEB/BOOTSTRAP/栅格.png" alt="d2" style="zoom:0%;" />
<p>注意：在栅格布局中，列与列之是紧挨着的，加不了额外的间距的，如果想让元素之间有间距，可以利用列本身存在的左右天沟充当间距。在列里再嵌套内容。</p>
<p>注意:每一个列不允许有额外的外间距,因为一行的空间12份完全瓜分,顶死不能再加额外的外间距了</p>
<h2 id="栅格布局" tabindex="-1"><a class="header-anchor" href="#栅格布局"><span>栅格布局</span></a></h2>
<p>栅格布局最大的作用是帮我们实现响应式布局</p>
<p>响应式写法 .col-{类中缀}-{份数}</p>
<p>注意：列与列之间是紧挨着的，加不了额外的间距，如果想让元素之间有间距，可以利用列本身存在的左右天沟充当间距，在列里再嵌套内容</p>
<p><strong>栅格布局的嵌套</strong></p>
<ul>
<li>
<p>永远都是行里嵌套列，如：.row&gt;.col&gt;.row&gt;.col</p>
</li>
<li>
<p>栅格布局的底层是flex,所以.row可以使用容器属性，.col可以使用项目属性</p>
</li>
</ul>
<h3 id="_1按钮组件" tabindex="-1"><a class="header-anchor" href="#_1按钮组件"><span>1按钮组件</span></a></h3>
<p>.btn 按钮的基类 必须写</p>
<p>.btn-{color} 按钮的颜色</p>
<p>.btn-outline-{color} 带外轮廓线的按钮</p>
<p>.btn-lg 大号尺寸的按钮</p>
<p>.btn-sm 小号尺寸的按钮</p>
<p>按钮组：一个外层div包裹着需要的几个按钮，给这个div加一个.btn-group即可</p>
<h3 id="_2navbar导航栏" tabindex="-1"><a class="header-anchor" href="#_2navbar导航栏"><span>2Navbar导航栏</span></a></h3>
<p><strong>最外层包裹元素-功能块：</strong></p>
<p>.navbar 导航栏的基类</p>
<p>.navbar-expand-{断点}  响应式断点，用来指定大小菜单切换的节点</p>
<p>.bg-dark 修改导航栏区域的背景颜色为暗色</p>
<p>.navbar-dark 暗色主题</p>
<p><strong>LOGO区域</strong></p>
<p>.navbar-brand 可以是文字也可以是图片</p>
<p><strong>小菜单</strong></p>
<p>.navbar-toggler 用来修饰小菜单的样式</p>
<p>.navbar-toggler-icon 作为小菜单的图标(三条横线) 用span包裹</p>
<p>JS属性：data-bs-toggle=&quot;collapse&quot;  开启折叠功能</p>
<p>JS属性：data-bs-target=&quot;#navbarNav&quot; 使用折叠功能的目标是谁(id值对应的是大菜单)</p>
<p><strong>大菜单</strong></p>
<p>.collapse 负责消失与显示的切换</p>
<p>.navbar-collapse 负责水平铺满 允许放大 元素居中显示</p>
<p>.navbar-nav 表示导航栏列表，加给ul</p>
<p>.nav-item 导航项，加给li</p>
<p>.nav-link 链接样式，加给导航栏中的超链接</p>
<p>.active 表示当前项为激活项</p>
<p>.disabled 表示当前项为禁用项</p>
<p>注意大菜单一定要设置id值与小菜单的js属性对应</p>
<h3 id="_3徽章-badge" tabindex="-1"><a class="header-anchor" href="#_3徽章-badge"><span>3徽章 badge</span></a></h3>
<p>https://v5.bootcss.com/docs/components/badge/</p>
<p>在一个小的按钮区，固定一个类似于角标这样的内容</p>
<p>.badge 徽章的基础类，一般用内联元素，比如span</p>
<p>可以修改徽章的背景色 .bg-{color}</p>
<p>可以修改徽章的形状 比如 rounded-pill 变成胶囊状</p>
<p>徽章也可以在父级元素中参与定位</p>
<h3 id="_4图标-icons" tabindex="-1"><a class="header-anchor" href="#_4图标-icons"><span>4图标 icons</span></a></h3>
<p>https://v5.bootcss.com/docs/extend/icons/</p>
<p><strong>扩展内容-&gt;图标-&gt;了解跟多关于</strong> <strong>Bootstrap 图标库的信息</strong></p>
<p>https://www.iconfont.cn/ 阿里图标库</p>
<p>boot提供的图标其实就是文字</p>
<p>我们可以在图标库中找到自己需要的图标名称</p>
<p>使用方法：class=”bi-{图标名}”引入使用该图标</p>
<p>我们可以使用文字的类区修改图标的颜色 大小等</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;!-- booticon简称bi 要用的小信封的图标名字是envelope -->
&lt;span class="bi-envelope text-danger" style="font-size: 35px;">&lt;/span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5下拉菜单dropdowns" tabindex="-1"><a class="header-anchor" href="#_5下拉菜单dropdowns"><span>5下拉菜单Dropdowns</span></a></h3>
<p>https://v5.bootcss.com/.dropdown 最外层父元素包裹按钮和下拉菜单</p>
<p>. dropdown-toggle 负责渲染按钮中的小三角</p>
<p>. dropdown-menu 下拉菜单父级 一般是ul</p>
<p>.dropdown-item 下拉列表项</p>
<p>JS属性：data-bs-toggle=&quot;dropdown&quot; 开启下拉菜单的菜单项的显示与隐藏ocs/components/dropdowns/</p>
<h3 id="_6模态框-modal" tabindex="-1"><a class="header-anchor" href="#_6模态框-modal"><span>6模态框 Modal</span></a></h3>
<p>https://v5.bootcss.com/docs/components/modal/</p>
<p><strong>被点击的对象</strong></p>
<p>JS属性：data-bs-toggle=&quot;modal&quot;  触发模态框的显示与隐藏</p>
<p>JS属性：data-bs-target=&quot;#motai&quot; 对应的是要弹出的模态框的id值</p>
<p><strong>弹出层</strong></p>
<p>.modal 灰色遮罩</p>
<p>.fade 遮罩先消失</p>
<p><strong>模态区域</strong></p>
<p>.modal-dialog 弹出模态框整体</p>
<p>.modal-content 弹出框中的内容</p>
<p>.modal-header 内容区域的头部</p>
<p>.modal-body 内容区域的主体</p>
<p>.modal-footer 内容区域的尾部</p>
<p>注意：关闭按钮记得加JS属性控制关闭的交互效果 data-bs-dismiss=&quot;modal&quot;</p>
<h3 id="_7手风琴-accordion" tabindex="-1"><a class="header-anchor" href="#_7手风琴-accordion"><span>7手风琴 accordion</span></a></h3>
<p>https://v5.bootcss.com/docs/components/accordion/</p>
<p>.accordion 手风琴最外层 需要添加id属性，被手风琴其他地方使用</p>
<p>.accordion-item 手风琴中的每一组</p>
<p><em><strong>*展示头*</strong></em> .accordion-header 放按钮标题</p>
<p>JS属性: data-bs-toggle=&quot;collapse&quot; 控制折叠/打开的属性</p>
<p>JS属性: data-bs-target=&quot;# collapseOne&quot; 控制折叠/打开的对象 #后放目标对象的id</p>
<p><em><strong>*展示主体*</strong></em> .accordion-body</p>
<p>.collapse负责消失  .show负责显示</p>
<p>JS属性:data-bs-parent=&quot;#最上层父元素的id(sfq)&quot;</p>
<p>通过js开合，关联最外层父级sfq，听它的指示关闭</p>
<h3 id="_8列表组listgroup" tabindex="-1"><a class="header-anchor" href="#_8列表组listgroup"><span>8列表组listgroup</span></a></h3>
<p>https://v5.bootcss.com/docs/components/list-group/</p>
<p>.list-group 最外层功能块</p>
<p>.list-group-flush 加了一些下边框线</p>
<p>.list-group-item 列表组中的每一项</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;ul class="list-group list-group-flush">
	&lt;li class="list-group-item">403页面&lt;/li>
	&lt;li class="list-group-item">404页面&lt;/li>
	&lt;li class="list-group-item">500页面&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="补" tabindex="-1"><a class="header-anchor" href="#补"><span>补：</span></a></h4>
<p>站长素材-&gt;网页模板</p>
<p>https://sc.chinaz.com/mobandemo.aspx?downloadid=82022103256405</p>
<h2 id="轮播图carousel" tabindex="-1"><a class="header-anchor" href="#轮播图carousel"><span>轮播图Carousel</span></a></h2>
<p>https://v5.bootcss.com/docs/components/carousel/</p>
<p><strong>基础设置</strong></p>
<p>.carousel 轮播图基础类</p>
<p>.slide 如果设置了自动轮播，轮播效果为平滑过渡</p>
<p>JS属性：data-bs-ride=&quot;carousel&quot; 设置自动轮播定时器，默认间隔5000ms</p>
<p>JS属性：data-bs-interval=&quot;2000&quot; 修改定时器的间隔时间，单位毫秒</p>
<p>注意：要设置id值，因为本元素要作为父级方便控制子级的轮播效果</p>
<p><strong>最底部的按钮控制区</strong></p>
<p>.carousel-indicators 表示底部控制区的最外层</p>
<p>.active 激活项</p>
<p>JS属性：data-bs-target=&quot;#lbt&quot; 用来关联轮播图lbt</p>
<p>JS属性：data-bs-slide-to=&quot;0&quot; 控制切换到第几张图片，数字从0开始</p>
<p><strong>图片区</strong></p>
<p>.carousel-inner 图片区最外层</p>
<p>.carousel-item 图片组，默认都是消失状态</p>
<p>.active 显示图片，注意只能显示一张图，自动轮播底层的js代码就是切换的这个值</p>
<p><strong>上一张控制区</strong></p>
<p>.carousel-control-prev 表示上一张区域</p>
<p>.carousel-control-prev-icon 表示上一张对应的那个图标</p>
<p>JS属性：data-bs-target=&quot;#lbt&quot; 用来关联轮播图lbt</p>
<p>JS属性：data-bs-slide=&quot;prev&quot; 控制切换到上一张图片</p>
<p><strong>下一张控制区</strong></p>
<p>.carousel-control-next 表示下一张区域</p>
<p>.carousel-control-next-icon 表示下一张对应的那个图标</p>
<p>JS属性：data-bs-target=&quot;#lbt&quot; 用来关联轮播图lbt</p>
<p>JS属性：data-bs-slide=&quot;next&quot; 控制切换到下一张图片</p>
</div></template>


