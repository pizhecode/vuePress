# BOOTSTRAP响应式

## 响应式

随着移动端的兴起，多种页面规格出现，我们需要通过响应式让用户在不同的设备终端看到接近相同的内容。

响应式也叫作“自适应页面”可以根据浏览设备的不同，改变不同的布局效果

特点：

使用一套html结构，根据终端的变化(宽度)，使用媒体查询，将不同宽度的CSS样式加入到不同的页面中。

### 1设备的宽度

为了避免不可控制的页面缩放，我们需要在HTML代码中告诉浏览器当前页面的设备宽度是多少，需要使用到的标签就是媒体查询，写法: meta:vp补全即可

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

viewport视口：用户可以看到的，浏览器用来展示页面的窗口

width=device-width 指:视口宽度=设备宽度

initial-scale=1.0 指：初始化视口不缩放

### 2媒体查询规则

```
@media (min-width:500px) and (max-width:900px) {
    body { background-color:red;}
}
```

```
@media 媒体查询规则
(min-width:500px) 设备的最小宽度
and 用来连接两个尺寸，注意左右两侧的空格必须写！
(max-width:900px) 设备的最大宽度
{ 这个里面写我们设置的CSS样式 }
```

### 3响应式断点设计原则

响应式的核心是适配多种设备终端，也就是有不同的尺寸，所以我们需要考虑在什么范围下匹配什么样的样式。

@media(max-width:576px){  } <576 超小 手机/手表

@media(min-width:576px){  } >=576px 小 平板

@media(min-width:768px){  } >=768px 中 窄屏电脑

@media(min-width:992px){  } >=992px 大 普通电脑

@media(min-width:1200px){  } >1200px 超大 宽屏电脑

@media(min-width:1400px){  } >=1400 特大 高清电脑或广告投放设备

### 4相对于视口的尺寸

vw(viewport width) 视口宽度

vh(viewport height) 视口高度

1vw == 视口宽度的1%

1vh == 视口高度的1%

撑满全屏宽度100vw 撑满全屏高度100vh

注意:这两个单位可以灵活使用，不是vw只能设置给宽度，给谁都行

## Bootstrap

Boot是由推特的两名工程师，基于html css js开发的开源 简洁 强大 优雅的UI框架

至今经历了5个大版本，目前我们学习的是BOOT5

### 1学习UI框架的终极意义

学习UI框架的终极意义，就是学会如何查文档，运用文档

市面上有很多的UI框架，企业会用哪个不一定，但一定会用框架

### 2Bootstrap文档

| Boot5的中文文档https://v5.bootcss.com/docs/getting-started/introduction/ |
| ------------------------------------------------------------ |
| 注意：使用的是哪个版本，就查哪个版本的手册任何框架都会升级，升级后必然有一些改动，所以一定要查看对应版本的手册注意：公司中项目的开发手册中有体现使用什么框架的哪个版本，一定要看版本5改动较大比如：不再兼容IE , 对很多类名有改动，最大对的改动左右改成了start end |

### 3模板文件

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>模板文件</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="../css/bootstrap.css"/>
		<link rel="stylesheet" href="../css/bootstrap-icons.css"/>
		<script src="../js/bootstrap.bundle.js"></script>
	</head>
	<body>
	</body>
</html>
```

## Bootstrap的响应式

### 1断点breakpoints

https://v5.bootcss.com/docs/layout/breakpoints/

BOOT为我们设置了5+1个断点，写好了媒体查询，我们可以直接使用类中缀，就能对应某个响应式设备的宽度，不同自己写了

<576 超小 没有类中缀 

类中缀 sm  >=576 

类中缀 md  >=768

类中缀 lg  >=992

类中缀 xl  >=1200

类中缀 xxl  >=1400

### 2容器 container

https://v5.bootcss.com/docs/layout/containers/

BOOT中容器的三种写法：

**container** 它会自动匹配断点，叫做定宽容器

它会按照响应式的最大宽度体现，并且居中

**container-fluid** 全宽适配、变宽容器

它会撑满整个视口的全部宽度

.container-{*} 直接指定断点的类，用的较少，如: .container-sm



sm: 页面宽度在 576~768 之间，版心宽度是540

md: 页面宽度在 768~992 之间，版心宽度是720

lg: 页面宽度在 992~1200 之间，版心宽度是960

xl: 页面宽度在 1200~1400 之间，版心宽度是1140

xxl: 页面宽度大于1400，版心宽度是1320

### 3天沟 gutter

gutter天沟这个词是直译过来的，指的是容器左右两侧的内间距

让内容不至于紧贴元素的两侧，默认左右各有0.75rem(12px),共1.5rem(24px)内间距

```
我们可以在bootstrap.css中按Ctrl+F搜索.container可得：
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
```

### 4颜色 color

https://v5.bootcss.com/docs/5.3/utilities/colors/#colors

我们在开发中，使用框架是为了更加快速高效的开发

BOOT自带了一些设计好的颜色，我们可以直接使用

primiary蓝色 danger红色 success绿色 warning黄色 dark暗色 light亮色

.bg-{color} 表示背景颜色

.text-{color} 表示字体颜色

.link-{color} 表示超链接颜色

### 5表格 table

https://v5.bootcss.com/docs/5.3/content/tables/

| .table 基础类 写在`<table>`标签，必须写，有了这个基类其他的辅助类才能正常生效 |
| ------------------------------------------------------------ |
| .table-{color} 表格颜色可以加在表格、tr、td、th              |
| .table-striped 条形纹效果，表格隔行变色                      |
| .table-hover 鼠标悬停变色效果                                |
| .table-bordered 给表格加边框，有了这个属性才可以改边框的颜色.border-{color} |
| .table-dark 表头的深色主题,加在`<thead>`上.table-light 表头的亮色主题,加在`<thead>`上 |

### 6表单 form

https://v5.bootcss.com/docs/forms/overview/

如果需要调整元素的宽度,可以给外层套一个div,调整外层父级的宽度即可

**文本输入框和表述文字**

form-control 加给input标签的,让input标签有样式上的变化

form-label加在label标签上的,有下外间距

form-text 指对表单进行描述,并且是块级元素,字体大小和间距会发生变化

**下拉菜单**

form-select 下拉菜单必写的类,写给select标签

**单选复选框**

form-check 单选框和复选框外层包裹元素,有些边距的样式

form-check-input 单选和复选框的样式,会根据属性type改变样式

form-check-label 是单选和复选的说明文字

**输入组**

input-group 表单组的外层包裹元素

input-group-text 表单标签前面的文字提示,使用内联元素

form-control 输入框就用表单控件

## 工具类utilities

### 1尺寸Sizing

https://v5.bootcss.com/docs/utilities/sizing/

**宽度和高度**

在boot中提供宽度和高度的类是百分比的.

宽度.w-{number} 支持25 50 75 100 auto 分别代表百分比

高度.h-{number} 支持25 50 75 100 auto 分别代表百分比

注意:高度是父级元素的百分比,前提是父元素要有高度才行

**相对视口的尺寸**

相对视口的宽度vw-100 表示全屏宽度

相对视口的宽度vh-100 表示全屏高度

没有25 50 75这些值，源码中找不到

### 2边框borders

https://v5.bootcss.com/docs/utilities/borders/

**边框样式**

.border边框的基础类,默认四个方向一像素的边框 [必写属性]

**单方向边框**

.border-{方向} top上/end右/bottom下/start左

**边框的宽度**

.border-{number} 0~5数字,0是去掉边框,1~5是边框的宽度为1px~5px

**边框的颜色**

.border-{color} 颜色是使用boot提供的颜色	

**圆角**

.rounded圆角的基础类,默认四个方向都是圆角

.rounded-circle 圆形

.rounded-pill 胶囊型

### 3间距

间距包括内间距和外间距，内间距使用p-* 外间距使用m-*

**间距的宽度(距离)**

m-{number} 0~5 外间距,1是0.25rem,四个方向共同使用一个距离的外间距

p-{number} 0~5 内间距,1是0.25rem,四个方向共同使用一个距离的内间距

**间距的方向**

上内、外间距 pt-{number} 和 mt-{number}

下内、外间距 pb-{number} 和 mb-{number}

左内、外间距 ps-{number} 和 ms-{number}

右内、外间距 pe-{number} 和 me-{number}

垂直方向的内、外间距 py-{number} 和 my-{number}

水平方向的内、外间距 px-{number} 和 mx-{number}

特殊值: 外间距的auto值,mx-auto水平方向的自动居中

### 4浮动

https://v5.bootcss.com/docs/utilities/float/

.float-start 左浮动

.float-end 右浮动 

响应式浮动显示 .float-{类中缀}-{浮动方式}

清除浮动

.clearfix 清除父元素高度坍塌,放到父元素中

https://v5.bootcss.com/docs/5.1/helpers/clearfix/

### 5定位

https://v5.bootcss.com/docs/utilities/position/

**定位方式**

.position-relative 相对定位

.position-absolute 绝对定位

.position-fixed 固定定位

**位移方向**

top-{number} 对于顶部的位移位置,数值支持0 50 100分别指0% 50% 100%

bottom-{number} 对于底部的位移位置,数值支持0 50 100分别指0% 50% 100%

start-{number} 对于左侧的位移位置,数值支持0 50 100分别指0% 50% 100%

end-{number} 对于右侧的位移位置,数值支持0 50 100分别指0% 50% 100%

```
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>  左上角
  <div class="position-absolute top-0 end-0"></div>  右上角
  <div class="position-absolute bottom-0 start-0"></div>  左下角
  <div class="position-absolute bottom-0 end-0"></div>  右下角
</div>
```

**中心位置位移**

.translate-middle 使用位移x轴y轴居中

底层源码：transform: translate(-50%, -50%) !important;

### 6display显示模式

https://v5.bootcss.com/docs/utilities/display/

使用display属性,可以改变元素的展示效果

.d-none 就表示元素消失display:none;

.d-block 就表示以块级形式显示

.d-inline 以内联形式显示

.d-inline-block 以行内块显示

.d-flex 以弹性布局的方式显示

显示方式都有响应式的写法,如: .d-{类中缀}-{显示模式}

### 7flex弹性布局

https://v5.bootcss.com/docs/utilities/flex/

**direction -- flex主轴排序**

行模式 .flex-row 和 .flex-row-reverse

列模式 .flex-column 和 .flex-column-reverse

还可以写响应式 .flex-{类中缀}-row

**justify-content** **--** **主轴方向的对齐方式**

.justify-content-start 起点对齐

.justify-content-end 终点对齐

.justify-content-center 居中对齐

.justify-content-between 两端对齐

.justify-content-around 每个元素左右两侧距离相等,首尾是一臂,中间是两臂间隔

.justify-content-evenly 所有空隙均匀分配,等大

响应式的效果 .justify-content-{类中缀}-{对齐方式}

**align items**项目的交叉轴对齐方式

.align-items-start 交叉轴起点对齐

.align-items-end 交叉轴终点对齐

.align-items-center 交叉轴居中对齐

响应式的效果: .align-items-{类中缀}-{项目在交叉轴的对齐方式}

**grow and shrink**项目的增长和收缩

.flex-{grow|shrink}-0 项目不可放大 不可收缩

.flex-{grow|shrink}-1 项目可放大 可收缩

## 布局栅格系统 Grid

https://v5.bootcss.com/docs/layout/grid/

### 1行和列

父子布局，父元素包裹子元素，父元素使用.row行，子元素是父元素的列，使用.col-{*}

一行分为12份，最多可以容纳12列，每个列所占的份数为.col-1

在栅格布局中可以调整每个列所占的份额，如：一行4列

```
<div class="row">
	<div class="col-3">占3个份额也就是3/12</div>
	<div class="col-3">占3个份额也就是3/12</div>
	<div class="col-3">占3个份额也就是3/12</div>
	<div class="col-3">占3个份额也就是3/12</div>
</div>
```

栅格布局的底层是flexbox,也就是说,我们在使用栅格的同时也可以使用flex的相关属性.

row就是我们的容器col就是我们的项目

### 2响应式栅格布局

栅格系统最大的作用是能够帮我们实现响应式的布局

.col-{类中缀}-{number}列的响应式写法

<img src="/images/WEB/BOOTSTRAP/栅格.png" alt="d2" style="zoom:0%;" />

注意：在栅格布局中，列与列之是紧挨着的，加不了额外的间距的，如果想让元素之间有间距，可以利用列本身存在的左右天沟充当间距。在列里再嵌套内容。

注意:每一个列不允许有额外的外间距,因为一行的空间12份完全瓜分,顶死不能再加额外的外间距了

## 栅格布局

栅格布局最大的作用是帮我们实现响应式布局

响应式写法 .col-{类中缀}-{份数}

注意：列与列之间是紧挨着的，加不了额外的间距，如果想让元素之间有间距，可以利用列本身存在的左右天沟充当间距，在列里再嵌套内容

**栅格布局的嵌套**

- 永远都是行里嵌套列，如：.row>.col>.row>.col

- 栅格布局的底层是flex,所以.row可以使用容器属性，.col可以使用项目属性

### 1按钮组件

.btn 按钮的基类 必须写

.btn-{color} 按钮的颜色

.btn-outline-{color} 带外轮廓线的按钮

.btn-lg 大号尺寸的按钮

.btn-sm 小号尺寸的按钮

按钮组：一个外层div包裹着需要的几个按钮，给这个div加一个.btn-group即可

### 2Navbar导航栏

**最外层包裹元素-功能块：**

.navbar 导航栏的基类 

.navbar-expand-{断点}  响应式断点，用来指定大小菜单切换的节点

.bg-dark 修改导航栏区域的背景颜色为暗色

.navbar-dark 暗色主题

**LOGO区域**

.navbar-brand 可以是文字也可以是图片

**小菜单**

.navbar-toggler 用来修饰小菜单的样式

.navbar-toggler-icon 作为小菜单的图标(三条横线) 用span包裹

JS属性：data-bs-toggle="collapse"  开启折叠功能

JS属性：data-bs-target="#navbarNav" 使用折叠功能的目标是谁(id值对应的是大菜单)

**大菜单**

.collapse 负责消失与显示的切换

.navbar-collapse 负责水平铺满 允许放大 元素居中显示

.navbar-nav 表示导航栏列表，加给ul

.nav-item 导航项，加给li

.nav-link 链接样式，加给导航栏中的超链接

.active 表示当前项为激活项

.disabled 表示当前项为禁用项

注意大菜单一定要设置id值与小菜单的js属性对应

### 3徽章 badge

https://v5.bootcss.com/docs/components/badge/

在一个小的按钮区，固定一个类似于角标这样的内容

.badge 徽章的基础类，一般用内联元素，比如span

可以修改徽章的背景色 .bg-{color}

可以修改徽章的形状 比如 rounded-pill 变成胶囊状

徽章也可以在父级元素中参与定位

### 4图标 icons

https://v5.bootcss.com/docs/extend/icons/  

**扩展内容->图标->了解跟多关于** **Bootstrap 图标库的信息**

https://www.iconfont.cn/ 阿里图标库

boot提供的图标其实就是文字

我们可以在图标库中找到自己需要的图标名称

使用方法：class=”bi-{图标名}”引入使用该图标

我们可以使用文字的类区修改图标的颜色 大小等

```
<!-- booticon简称bi 要用的小信封的图标名字是envelope -->
<span class="bi-envelope text-danger" style="font-size: 35px;"></span>
```

### 5下拉菜单Dropdowns

https://v5.bootcss.com/.dropdown 最外层父元素包裹按钮和下拉菜单

. dropdown-toggle 负责渲染按钮中的小三角

. dropdown-menu 下拉菜单父级 一般是ul 

.dropdown-item 下拉列表项

JS属性：data-bs-toggle="dropdown" 开启下拉菜单的菜单项的显示与隐藏ocs/components/dropdowns/

### 6模态框 Modal

https://v5.bootcss.com/docs/components/modal/

**被点击的对象**

JS属性：data-bs-toggle="modal"  触发模态框的显示与隐藏

JS属性：data-bs-target="#motai" 对应的是要弹出的模态框的id值

**弹出层**

.modal 灰色遮罩

.fade 遮罩先消失

**模态区域**

.modal-dialog 弹出模态框整体

.modal-content 弹出框中的内容

.modal-header 内容区域的头部

.modal-body 内容区域的主体

.modal-footer 内容区域的尾部

注意：关闭按钮记得加JS属性控制关闭的交互效果 data-bs-dismiss="modal"

### 7手风琴 accordion

https://v5.bootcss.com/docs/components/accordion/

.accordion 手风琴最外层 需要添加id属性，被手风琴其他地方使用

.accordion-item 手风琴中的每一组

***\*展示头\**** .accordion-header 放按钮标题

JS属性: data-bs-toggle="collapse" 控制折叠/打开的属性

JS属性: data-bs-target="# collapseOne" 控制折叠/打开的对象 #后放目标对象的id

***\*展示主体\**** .accordion-body

.collapse负责消失  .show负责显示

JS属性:data-bs-parent="#最上层父元素的id(sfq)" 

通过js开合，关联最外层父级sfq，听它的指示关闭

### 8列表组listgroup

https://v5.bootcss.com/docs/components/list-group/

.list-group 最外层功能块

.list-group-flush 加了一些下边框线

.list-group-item 列表组中的每一项

```
<ul class="list-group list-group-flush">
	<li class="list-group-item">403页面</li>
	<li class="list-group-item">404页面</li>
	<li class="list-group-item">500页面</li>
</ul>
```

#### 补：

站长素材->网页模板

https://sc.chinaz.com/mobandemo.aspx?downloadid=82022103256405

## 轮播图Carousel

https://v5.bootcss.com/docs/components/carousel/

**基础设置**

.carousel 轮播图基础类

.slide 如果设置了自动轮播，轮播效果为平滑过渡

JS属性：data-bs-ride="carousel" 设置自动轮播定时器，默认间隔5000ms

JS属性：data-bs-interval="2000" 修改定时器的间隔时间，单位毫秒

注意：要设置id值，因为本元素要作为父级方便控制子级的轮播效果

**最底部的按钮控制区**

.carousel-indicators 表示底部控制区的最外层

.active 激活项

JS属性：data-bs-target="#lbt" 用来关联轮播图lbt

JS属性：data-bs-slide-to="0" 控制切换到第几张图片，数字从0开始

**图片区**

.carousel-inner 图片区最外层

.carousel-item 图片组，默认都是消失状态

.active 显示图片，注意只能显示一张图，自动轮播底层的js代码就是切换的这个值

**上一张控制区**

.carousel-control-prev 表示上一张区域

.carousel-control-prev-icon 表示上一张对应的那个图标

JS属性：data-bs-target="#lbt" 用来关联轮播图lbt

JS属性：data-bs-slide="prev" 控制切换到上一张图片

**下一张控制区**

.carousel-control-next 表示下一张区域

.carousel-control-next-icon 表示下一张对应的那个图标

JS属性：data-bs-target="#lbt" 用来关联轮播图lbt

JS属性：data-bs-slide="next" 控制切换到下一张图片