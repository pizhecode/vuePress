# JAVASCRIPT

**JS的应用：**

编写在网页中，操作网页的元素，实现用户的各种交互效果

编写服务器端代码

编写移动APP应用、命令行…

**JS的历史**

1995年 JS最早出现在网景浏览器中

1996年 IE也出了一个JS克隆版

1997年 制定了JS的标准规范 ECMAScript->ES6

2009年，JS开始向后端发展，出现了Node.js

**JS的学习步骤**

- 了解背景知识(什么时候出现 发展历史 背景 现状)

- 搭建开发环境

- 基础语法(变量 常量 数据类型 逻辑运算 运算符。。。)

-  函数和对象

- 第三方框架和库(VUE REACT)

- 完成自己的个人项目

## JS入门

### 1JS的运行方式

```
(1) 内部写法
<script>JS代码<script>
```

```
(2) 外部写法
先创建01.js外部文件，然后引入：
<script src=“01.js”> 这里不能再写其他的代码 </script>
```

### 2JS的语法规范

- 代码严格区分大小写

-  使用到的所有符号都是英文符号

- 推荐将js代码写到body中的最后面

- 每行代码后的分号可以省略不写

## JS基础语法

### 1注释

注释：用于解释代码的内容

被注释掉的内容不会被执行的，可以提高代码的可阅读性和后续的可维护性。

单行注释，格式： // 快捷键 Ctrl+/

多行注释，格式：/*  */ 快捷键 Ctrl+Shift+/

### 2变量

**变量的概念：**

用于存储数据的容器

var(variable变量) 用于声明变量，格式：

声明变量var age 

声明变量并且赋值 var age = 18

声明单个变量 var name = ‘tom’

声明多个变量 var a=11,b=22

使用关键字var来声明变量，会在内存中开辟空间，把值存入

**变量的赋值：**

- 变量可以声明时同时赋值，也可以先声明再赋值，变量需要声明后才可以使用

- 变量声明了但没赋值，打印出来的是undefined(未定义)空值

- 变量允许多次赋值，后面的值会把前面的值覆盖掉，重新赋值不需要再写var

- 变量的多次赋值可以赋不同类型的值(这是弱类型语言的特点)

**变量的命名规则**

- 变量名称可以由字母、数字、下划线、美元符号构成

- 变量名称不可以使用数字开头

- 变量名称不可以是关键字，比如false、var、undefined

-  变量名称不推荐使用汉字

- 变量名称要做到见名知意，如:user_name

**多个单词的命名方式：**

CSS类名: background-color 中划线命名法

文件名：UserName 大驼峰命名法

变量名: userName 小驼峰命名法

数据库表字段: user_name 下划线命名法

## 常量

\1. 和变量一样，都是用于存储数据的容器

\2. 常量的值不允许被修改

\3. 常量声明的时候必须赋值，否则报错

## 数据类型

数据类型分为**原始类型**和**引用类型**

原始类型分为：数值型、字符串型、布尔型、未定义型、空

### 1数值型

**整数类型**

整数类型就是我们所说的整数 0 1 2 …

数值有多种进制的表示方式 二进制0b 八进制0 十六进制0X

**浮点型**

浮点型就是我们所说的小数

浮点型可以使用科学计数法的方式来表示

```
//1.数值型number
//1.1 整型
var n1 = 10 //十进制
//2进制：用0b开头的数字
var n2 = 0b1010
//8进制：用0开头的数字
var n3 = 012
//16进制:用0x开头的数字
var n4 = 0xA
console.log(n1,n2,n3,n4)
			
//1.2浮点型
var f1 = 3140
var f2 = 3.14E+3
var f3 = 31.4e2
var f4 = 31400e-1
console.log(f1,f2,f3,f4)
```

### 2字符串型

被引号所包裹的值，引号不区分单双引号，JS中推荐使用单引号

***\*检测数据类型\**** typeof 值

'number'数值型/'string'字符串型/'boolean'布尔型/'undefined'未定义型/'object'空

查看任意一个字符的编码

'a'.charCodeAt()

### 3布尔型

只有两个值，分别是true和false,表示真和假，用于保存只有两个值的数据。

如：是否登录、是否会员、是否购买过...

### 4未定义型

只有一个值是undefined,表示一个空值，例如:声明变量未赋值就是undefined

### 5空

只有一个值，null,常和引用类型的数据一起使用

## 数据类型的转换

数据类型转换分为隐式转换和强制转换

### 1隐式转换

在运算过程中，自动产生的转换

| 数字+字符串 数字转为字符串如: 2+‘3’//23                  |
| -------------------------------------------------------- |
| 数字+布尔 布尔转为数字如：3-false //3                    |
| 字符串+布尔 布尔转字符串如: ‘2’+true //2true             |
| **JS中加号(+)的作用**数字之间的加法运算 字符串之间的拼接 |

### 2强制转换

强制转换需要用到函数

函数：是一个功能体，需要我们提供若干数据，它会根据预设好的逻辑执行并返回结果

(1) **强制转换为数字** **Number()**

```
Number('3') //3
Number(true) //1
Number(false) //0
Number(null) //0
Number('3a') //NaN
Number(undefined) //NaN
```

**NaN：**Not a Number 不是一个数字

是指Number()在将一个值转为数字的过程中，没有成功得到数字结果，那么就是NaN

NaN与任何数字执行数学运算的结果还是NaN

(2) **强制转换为整型parseInt()**

用于将小数或者字符串转为整型，其他类型的转换结果为NaN

```
parseInt(3.6)//3
parseInt('6a')//6
parseInt('a6')//NaN
parseInt(null)//NaN
```

(3) **强制转换为浮点型** **parseFloat()**

用于将字符串转为浮点型，其他类型结果为NaN

```
parseFloat('75')//75
parseFloat('3.14a')//3.14
parseFloat('a3.14')//NaN
```

## 运算符

运算符是用于连接表达式中的操作数并对操作数执行运算的符号

例如：表达式num1+num2,其中操作数是num1和num2,运算符是“+”

常见的运算符有以下几类：

算术运算符、比较运算符、逻辑运算符、赋值运算符、三目运算符、位运算符

### 1算术运算符

| + - * / 普通的四则运算符                                     |
| ------------------------------------------------------------ |
| % 取余数                                                     |
| **自增自减运算符：**++ 自增 变量的值自动加1--自减 变量的值自动减1口诀: 符号在前，先变化，再使用；符号在后，先使用，再变化变化指的是++或者--使用指的是可以打印这个变量的值，或者将这个变量的值赋值给其他变量… |

### 2比较运算符

| < >  <=  >=== 等于，比较两个值是否相同=== 全等于 不仅比较两个值是否相同，还会比较类型是否相同!= 不等于，比较两个值是否不相同!== 不全等于，比较的是两个值不相同或者类型不相同 |
| ------------------------------------------------------------ |
| (1) 数字与字符串比较，字符串转为数字如：3>‘7’ //false        |
| (2) 字符串之间的比较，比较的是字符的编码如: ‘3’>‘10’//true 字符3的编码51 字符10的编码49 |
| (3) NaN和任何值比较，结果都是false如: 3>'10a'  3<'10a'  3=='10a'  NaN==NaN |

### 3逻辑运算符

| **&&** **逻辑与**                                            |
| ------------------------------------------------------------ |
| 只有关联的左右两个条件的结果都为true,最终结果才为true,否则false |
| **\|\| 逻辑或**                                              |
| 只有关联的左右两个条件的结果都为false,最终结果才为false,否则为true |
| **！****逻辑非**                                             |
| 取反 !true=>false  !false=>false                             |
| **短路逻辑：**                                               |
| && 当第一个条件的结果为false时，最终结果就是false,不再执行第二个条件 |
| \|\| 当一个条件的结果为true时，最终结果就是true，不再执行第二个条件 |

### 4赋值运算符

= 赋值 等号右边给左边

运算赋值：先执行运算再执行赋值

+= *= -= /= %=….

如: a -=5 就等价于 a = a-5

### 5三目(元)运算符

一目运算符:连接了一个操作数的运算符  比如:a++ a-- !

二目运算符:连接了两个操作数的运算符 + &&

三目运算符:由两个运算符连接了三个表达式

条件表达式 **?** 表达式1 **：** 表达式2

当条件表达式的结果为true时，执行表达式1

当条件表达式的结果为false时，执行表达式2

口诀：1？2：3  1真取2 1假取3

## 操作网页元素的步骤

### 1查找网页元素

给标签设置id属性，一个网页中的id值不允许重复

```
<button id="btn">按钮</button>
```

### 2给按钮绑定事件，监听用户操作

```
btn.onclick=function(){   点击事件
  一旦监听到用户的操作，要执行的内容
}
```

### 3弹出警示框

alert() 可以把要显示的内容写到小括号里

### 4修改标签之间的内容(修改HTML)

```
<span id="sum"></span>
sum.innerHTML=值
```

### 5修改标签的CSS样式

```
<div id="sum"></div>
sum.style.样式名称=值
例如：sum.style.display='none'
      sum.style.fontSize='20px'  
属性名如果是多个单词组成，采用驼峰命名法
```

## 流程控制

我们需要控制程序的执行方式

### 分支结构

#### 1if语句

```
if(条件表达式){
    如果条件表达式的结果为true,执行此处代码，否则跳过
}
```

注意：以下值作为条件表达式会转为false: 0 NaN undefined null ‘’

#### 2if-else语句

```
if(条件表达式){
   语句块1
}else{
   语句块2
}
```

#### 3if-else嵌套

```
if(条件表达式1){
   语句块1
}else if(条件表达式2){
   语句块2
}else{
   语句块n+1 //以上条件都不满足执行此处代码
}
```

### 4switch-case语句

是一种特殊的多项分支语句，条件只能进行全等于的比较

```
switch(表达式){
	case 值1:
		语句块1
		break //用于中断当前选项，防止穿透现象
	case 值n:
		语句块n
		break //用于中断当前选项，防止穿透现象
	default://如果前面的case都不满足，执行语句块n+1
		语句块n+1
}
```

**执行顺序：**

\1. 会拿着表达式的值依次与case后的值做全等比较，如果相等，就会执行case后的语句块

\2. 如果没有遇到break,会依次穿透所有case,包括default

\3. 如果遇到了break,就会结束当前case，不会继续向后执行了

\4. case的个数、break的个数、default是否要加都是可选项，根据具体业务决定

如果前面的所有case都没有匹配上，就会执行default后的语句

### 循环结构

#### 1while循环

```
while(循环条件){
   只要循环条件的结果为true,就一直执行循环
}
```

- 当循环条件直接写true时，表明这是一个死循环

- 注意：死循环必须要设置结束条件，我们可以通过break关键字强制结束当前循环

#### 2do-while循环

```
do{
   循环体
}while(循环条件)
```

\1. do-while循环会直接执行第一轮循环，不做任何判断

\2. 是否要执行第二轮循环，取决于是否满足循环条件

\3 while和do-while的循环使用上区别不大，do-while常用于需要先执行一次的情况

#### 3for循环

```
for(开始条件;循环条件;增量){
   循环体
}
```

\1. for循环也属于先判断再执行的循环

\2. for循环的开始条件可以一次声明多个变量

\3 循环的循环条件如果有多个的话，是最后一个起作用

#### 4break和continue

\1. break和continue都是关键字

\2. break用于强制结束当前循环(后面所有轮数均不执行)

\3. break还可以用在switch-case中，结束当前case,防止穿透现象

\4 continue在循环中用于跳过代码，continue后的代码在本轮不执行，直接开启下一轮循环

#### 5循环的嵌套

```
for (var i = 1; i <= 3; i++) { //外层循环
	for (var j = 1; j <= 5; j++) { //内层循环
}
}
```

\1. 循环嵌套就是在一个循环中嵌套了另外一个循环

\2. 外层循环与内层循环的循环变量应该不同，防止互相影响，推荐使用i j

\3. 外层循环执行1次，内层循环执行多次

\4 对于图形而言，外层循环控制的是图形的行数，内层循环控制的是这一行的列数

## 函数【重点】

Number() parseInt() parseFloat()….

函数: 就是一个功能的集合，我们可以给它提供数据，它根据预先设计好的逻辑执行，给我们结果

**函数分为：**系统函数 和 自定义函数

### 1创建自定义函数

```
function 函数名(){
   函数体(这个函数的具体功能)
}
```

1． 自定义函数封装了我们预设好的一段功能，可以使用多次，这样会提高程序的复用性

2． 函数必须要调用才会执行，调用几次，执行几次

3． 调用函数的格式: **函数名称()**

### 2创建带有参数的函数

```
function 函数名(形参){
   函数体(这个函数的具体功能)
}
```

调用函数的格式: **函数名称(实参)**

\1. 形参：定义函数时，参数列表中出现的名字，这个参数的名字可以更换

\2. 实参：调用函数时，在参数列表中传入的实际的值，这个值会影响函数的执行结果

\3. 实参的值会赋值给形参，两者的个数可以不匹配

\4. 如果实参的个数小于形参的个数，未被赋值的形参变量值为undefined

\5. 如果实参的个数大于形参的个数，多余的实参会被舍弃

### 3创建带有返回值的函数

```
function 函数名(参数列表){
   函数体(这个函数的具体功能)
   return 值 //返回值，外部调用本函数后可以拿到的结果
}
```

调用函数的格式:**函数名称(参数) **    //如果函数有返回值，可以拿到返回值

\1. return用于向外部传递函数调用后的结果

\2. return后不允许写代码，因为不会执行，一遇到return函数就结束了

\3. return后如果没有值，外部接收到的值是unefined

### 4return和break

return用在函数中，结束函数的调用

break用在循环与switch-case中，用于结束循环或者防止穿透

## 变量的作用域

全局作用域: 函数以外的作用域，有且只有一个全局作用域

函数作用域：函数以内的作用域，可能有多个函数作用域

全局变量:全局作用域下声明的变量，可以在任意作用域下访问到

局部变量：函数作用域下声明的变量，只能在所在的函数作用域访问到



在函数内，不加var声明的变量是全局变量

注意：这只是一种特殊现象，我们定义全局变量时还是要按规范来写



JS的预加载/预解析：

在程序执行前，会将var声明的变量提升到所在作用域的最前面

但注意只是提升声明部分，赋值不提升



其他规则：

\1. 变量的查找原则：就近原则，当前作用域下由就不再往全局作用域下查找

\2. 形参属于是局部变量，只能在函数内访问

## 函数作用域

| 函数提升：在程序执行前，会将函数整体提升到所在作用域的最前面 |
| ------------------------------------------------------------ |
| 局部函数: 在函数作用域下创建的函数，只能在当前的函数作用域下调用 |
| 作用域链: 是作用域之间嵌套形成的作用域结构                   |
| 在查找变量的时候，会先在当前作用域下查找，如果没有会沿着作用域链一级级向上找 |
| 函数提升：在程序执行前，会将函数整体提升到所在作用域的最前面 |

## 匿名函数

没有名字的函数

### 1创建函数

```
函数声明：--创建有名字的函数
function fn(){
   函数体
}
```

```
函数表达式：--创建匿名函数
var fun = function(){
  函数体
}
把匿名函数赋值给一个变量，变量名称就代表函数的名称
```

### 2函数名称 和 函数名称()

函数名称: 本质上是一个变量，变量中保存了一个函数类型的值fn

函数名称()：表示在调用函数，要执行函数体中的代码fn()

### 3对比函数声明与函数表达式的区别

函数声明：存在函数的整体提升，可以先写调用，再写创建

函数表达式：只有函数声明提升，必须先写创建再写调用

### 4函数名与变量名相同时的提升情况

正常情况下，普通函数整体先提升，变量声明再提升

函数名称与变量名称相同时，当函数名称先提升后，变量声明就不再提升了

### 5全局污染与解决方案

**全局污染：**我们在代码中可能会出现多个同名的变量，范围控制不好可能会互相影响“污染”

```
全局污染的解决方案：匿名函数自调用
;(function() {
匿名函数函数体			
})()
; 在匿名函数自调用前加分号结束上一行，防止与上一行代码连接到一起执行
() 前面的这个小括号把匿名函数整体包裹起来，表示这是一个整体
() 后面的这个小括号表示要调用当前的这个匿名函数
```

\1. 普通函数也可以自调用--少用

\2. 自调用这个区域相当于把内部的函数变成了局部函数

## 回调函数

函数可以传哪些参数：

Fn(77) 函数的实参可以是数值类型

Fn(‘王小明’) 函数的实参可以是字符串类型

Fn(false) 函数的实参可以是布尔类型

前面我们讲过，函数也是一种类型function,函数也可以作为参数被传递到另一个函数中



**函数的实参可以是函数类型，分为两种：**

Fn(函数名称) ->普通函数需要传自己的函数名即可，注意：没有小括号

Fn(匿名函数)->匿名函数由于没有名字，需要传自己的全部内容



**回调函数：**

就是把一个函数类型的值作为参数传递，被传递的这个函数被称为回调函数

回调函数会自动调用

```
回调函数的格式:
function xinRun(madai){
	madai()//调用传进来的函数
}
function liangRun(){
	console.log('亮哥开始跑')
	console.log('亮哥跑完了')
}
xinRun(liangRun)//把普通函数作为回调函数
xinRun(function(){匿名函数的函数体})//把匿名函数作为回调函数
```

**获取函数的执行结果，有两种方式：**

\1. **通过return返回结果**

\2. **通过回调函数，将值传给回调函数的形参带出**

```
function fn(cb) {
	console.log('fn()开始了')
	var a = 666
	cb(a) //调用回调函数，并将变量a赋值给回调函数的形参r带出
	console.log('fn()结束了')
}
//fn()表示调用fn函数
//将下面的匿名函数作为回调函数传给fn()
fn(function(r) {//调用fn函数，并将匿名函数作为参数传入，匿名函数现在就是回调函数
	console.log(r)
})
```

## 递归recursion

递归指的是函数自己调用自己

递归本身是一个死循环，如果要使用递归解决问题，切记要设置边界条件及时退出



递归的要点：总结规律+边界条件

边界条件通常结合return一起使用



**斐波那契数列:** **1 1 2 3 5 8 13 21 34 55 89…**

我们可以使用递归求出第n项数字是几

规律：前两项数字为1，后面每一项的值都为前两项数字之和



补充：系统函数isNaN()

/用于检测数据中是否含有非数字，有返回true,没有返回false

```
console.log(isNaN(666))//false
console.log(isNaN(true))//false->1
console.log(isNaN(false))//false->0
console.log(isNaN(null))//false->0
console.log(isNaN(undefined))//true
console.log(isNaN(NaN))//true
console.log(isNaN('1a'))//true
```

## 对象

对象：是一组属性和方法的集合

一个杯子：属性有颜色、容量、大小、形状...  方法有装水、发泄...

一部手机：属性有颜色、品牌、型号、内存、CPU、屏幕尺寸...  方法有打电话、发短信、看视频、聊天、办公、娱乐...

**万物皆对象**

### 1.JS中的对象

- 自定义对象：用户自己创建的对象
- 内置对象：JS提供的对象
- 宿主对象：根据不同的执行环境来划分

​         前端（浏览器宿主）: dom

​         后端（Node.js宿主）: mysql

### 2.自定义对象

####   (1)对象字面量      

```js
var cup = { '属性名': 属性值, 属性名: 属性值 }
```

  属性名的引号可以省略，如果属性名中含有特殊字符必须添加引号。

  练习：创建一个商品对象，包含的属性有编号、名称、价格、图片

```js
var product = {
    id: 1,
    title: '戴尔灵越',
    price: 5499,
    image: 'img/1.jpg'
}
```

练习：创建一个员工对象，包含的属性有编号、姓名、性别、生日、工资、部门编号

```js
var emp = {
    eid: 2,
    ename: 'xin',
    sex: 0,
    birthday: '1981-8-30',
    salary: 50000,
    deptid: 20
}
```

#### (2)内置构造函数

```js
// 创建一个空对象，需要手动添加每个属性
var student = new Object()   // {} 
```

  练习：创建一个手机对象，包含的属性有品牌、颜色、屏幕尺寸、内存大小。

```js
var phone = new Object()
phone.brand = '华为'
phone.color = '黑色'
phone.size = 6.71
phone.memory = '8G'
console.log(phone)
```

### 3.属性的访问

   对象.属性名

   对象['属性名']

   如果属性不存在，获取的值为undefined

   练习：创建一本图书的对象，包含的属性有编号、书名、作者、价格；打印输出书名属性，修改图书的价格属性，添加图书的出版社属性。

```js
var book = {
    id: 'NS228909113',
    title: '三国演义',
    author: '罗贯中',
    price: 59.9
}
console.log(book.title)
book.price = 49.9
book['publish'] = '人民邮电出版社'
console.log(book)
```

### 4.遍历(枚举)属性

  采用循环方式，依次访问对象中的每个属性  

```js
for(var k in 对象){
    // k 代表每个属性名
    // 对象[k]  属性名对应的属性值
}
```

  练习：创建一个对象，包含一组工资的值；计算出工资总和、平均工资

```js
var salary = {
    a: 8000,
    b: 12000,
    c: 5000,
    d: 10000
}
// 声明变量，用于保存总和
var sum = 0
// 声明变量，用于保存工资的数量
var count = 0
// 获取到每个工资的值
for(var k in salary) {
    // salary[k] 每个工资的值
    // console.log(k,salary[k])
    // 把每个工资的值加到sum
    sum += salary[k]
    // 数量加1
    count++
}
console.log(sum,count,sum/count)
```

### 5.检测属性是否存在

```js
对象.属性名  === undefined   // true->不存在    false->存在
对象.hasOwnProperty('属性名')   //true->存在   false->不存在
'属性名' in 对象   //true->存在   false->不存在
```

  练习：创建一个商品对象，包含的属性有编号、标题、价格；如果颜色属性不存在，则添加该属性；如果价格属性存在，要求打8折。

```js
var product = {
    id: 1,
    title: '小米13',
    price: 4199,
    // color: '白色'
}
// 如果颜色属性不存在
// product.color === undefined
// !product.hasOwnProperty('color')
if( !('color' in product) ) {
	product.color = '黑色'
}
// 如果价格属性存在
if( product.hasOwnProperty('color') ) {
	product.price *= 0.8
}
```

## 模板字符串

 简化了字符串的拼接

```js
`模板字符串 ${JS表达式}`
```

## 对象中的方法

本质上就是一个函数

```js
var phone = {
    // 方法
    call: function() {
       // this 指向调用方法的对象
    }
}
// 调用
phone.call()
```

 练习：创建一个圆对象，包含的属性有半径和圆周率，添加方法计算出圆的面积，添加方法计算出圆的周长；最后调用两个方法

```js
var circle = {
    radius: 4,
    pi: 3.14,
    area: function() {
        console.log( this.pi * this.radius * this.radius )
    },
    len: function() {
        console.log( 2 * this.pi * this.radius )
    }
}
// console.log( circle )
circle.area()
circle.len()
```

练习：创建一个计算器对象，添加两个方法；第一个方法传递任意两个数字返回总和，结果渲染到span标签之间；第二个方法传递任意两个数字返回相减结果，最后渲染到span标签之间。

```js
var calc = {
    plus: function(a,b) {
        // a,b接收传递进来的两个数字
        // 先把接收到两个值转为数字
        // 求和后，把结果渲染到cont标签之间
        cont.innerHTML = Number(a) + Number(b)
    },
    subtract: function(a,b) {
        // 将两个值相减，结果渲染到cont之间
        cont.innerHTML = a - b
    }
}
// 给按钮绑定点击事件
btn1.onclick = function(){
    // 获取两个值
    calc.plus(num1.value, num2.value)
}
btn2.onclick = function() {
    calc.subtract(num1.value, num2.value)
}
```

## 数组

数组是一组数据的集合，每一个数据称为元素

### 1.创建数组

####   (1)数组字面量   

```js
var arr = [ 元素1, 元素2, 元素3,... ]
```

  练习：创建数组，包含有一组工资的值； 创建函数，包含一组城市名称

####   (2)内置构造函数

```js
var arr1 = new Array(元素1, 元素2, 元素3,..)
var arr2 = new Array(3)  //初始化长度，后期需要手动添加每一个元素，可以添加更多个元素
```

  练习：创建数组，包含多个国家

  练习：创建数组，初始化长度为4，添加4门课程

### 2.访问数组元素

  下标(索引)：JS为每个元素自动添加的编号，是从0开始的一个整数

  语法格式     `数组名称[下标]`

### 3.数组的长度

  数组.length       获取数组元素个数

  在数组的末尾添加元素      `数组[ 数组.length ] = 值`

  练习：创建一个空数组，使用数组长度往数组中添加若干个汽车品牌。

### 4.数组分类

  **索引数组：**以>=0的整数作为下标，可以通过length获取长度。

  **关联数组：**以字符串作为下标，需要单独添加元素，不能使用length获取长度。

  练习：创建对象，包含一个人的多门成绩

  练习：创建数组，包含一个班所有人的成绩。

  **对比数组和对象的区别**

   两者都可以存储一组数据，对象是通过属性，数组是通过元素；

   对象中这一组是无序的，不分先后顺序； 数组中这一组是有序的，可以进行排序。

   练习：创建数组，包含一组新闻；每一条新闻包含的属性有标题、发表时间

```js
var news = [
    {
        title: '盘点！美国操纵网络霸权的四大罪状',
        ctime: '2022-11-18'
    },
    {
        title: '周鸿祎：微信已经从精神上把运营商干掉了',
        ctime: '2022-09-30'
    }
]
// console.log(news)
console.log(news[0].title, news[0].ctime)
```

### 5.遍历数组元素

通过循环依次访问数组中每个元素

```js
// for-in
for(var k in 数组){
    //k  下标
    //数组[k]  下标对应元素
}
//for循环（推荐方式）
for(var i = 0;i < 数组.length;i++) {
    //i 下标
    //数组[i]   下标对应元素
}
```

练习：创建数组，包含一组成绩，计算出平均成绩。

```js
var arr = [82, 93, 74, 63]
for(var i = 0, sum = 0; i < arr.length; i++) {
    // console.log(i, arr[i])
    // 把每个成绩加到sum
    sum += arr[i]
}
console.log( sum, sum/arr.length )
```

练习：创建数组，包含一组工资，遍历数组，统计出工资在5000~8000的百分比；  38.5%			

```js
var arr = [3500, 8000, 12000, 7500, 9000, 6500,4000]
// 声明变量，用于统计数量
for(var i = 0, count = 0; i < arr.length; i++) {
    if(arr[i] >= 5000 && arr[i] <= 8000) {
        // console.log(arr[i])
        // 数量加1
        count++
    }
}
console.log(count/arr.length * 100 + '%')
```

## 数组

### 1.API

   concat(arr2,arr3...)      拼接多个数组，返回拼接后的结果

> 如何学习一个API：作用、参数、返回值
>
> 数组API还需要查看原数组是否会发生变化

   reverse()    翻转数组元素，返回翻转后的数组，原数组会发生变化

   slice(start, [end])    截取数组元素，start开始的下标，end结束的下标，不包含end本身；end为空会截取到最后；如果下标为负数表示倒数；返回截取的数组

   练习：创建数组，包含a~h，每个字母是一个元素，分别截取出bc，f；再将两部分拼接成一个新数组。

   splice(start, [count], [v1],...)     删除数组元素，start开始的下标，count删除的长度；count为空会删除到最后；下标为负数表示倒数；v1,..表示删除后要补充的元素；返回删除的元素，原数组会发生变化。

   练习：创建数组，包含a~h，每个字母是一个元素，删除cd，替换h为m，在下标为1的位置插入z

   sort()    对数组元素进行排序，默认是按照首个字母的Unicode码排列

```js
arr.sort( function(a, b) {
    return a - b  //按照数字从小到大排列
    // return b - a  //按照数字从大到小排列
} )
```

  push()    在数组的末尾添加元素，返回数组的长度，原数组会发生变化

  pop()    删除数组末尾的一个元素，返回删除的元素，原数组会发生变化

  unshift()    在数组的开头添加元素，返回数组的长度，原数组会发生变化

  shift()   删除数组开头的一个元素，返回删除的元素，原数组会发生变化

  indexOf()    检测数组中是否含有某个元素，存在返回下标，不存在返回-1

  练习：创建数组，包含爱国福、和谐福；如果不含有敬业福，则把敬业福添加到数组。

   其它API:   https://www.w3school.com.cn/js/js_array_methods.asp

​                     https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

### 2.二维数组

  数组中的元素还是数组，用于对数据进行二次分类

  [  [元素1, 元素2],  [ 元素3, 元素4 ],...  ]

## 字符串对象

  包装对象：目的是为了让原始类型的值像对象一样具有属性和方法；JS中提供了三种包装对象，分别是字符串对象、数字对象、布尔对象

```js
new String()   // 将一个字符串包装为对象
String()   // 将一个值强制转换为字符串
```

### 1.转义字符  ——  \

   改变字符本身的意义

```js
\'   // 将一个具有特殊意义的引号转义为普通引号
\n   // 将字符n转义为换行符
\t   // 将字符t转义为制表符，一组连续空格
```

  练习：打印输出以下字符串

​        C:\User\Teacher 

### 2.API

  length       获取字符串的长度

  charAt()    获取下标对应的字符，也可以使用数组的格式    字符串[下标]

  练习：遍历字符串javascript，获取每一个字符，统计出字符a出现的次数。

​     面试题：统计出一个字符串中哪一个字符出现的次数最多，一共几次

  indexOf()    检测字符串中是否含有某个字符串，返回的是找到的第1个的下标，找不到返回-1

 lastIndexOf()    检测字符串中是否含有某个字符串，返回的是找到的最后1个的下标，找不到返回-1

 练习：声明变量保存用户输入的邮箱，如果邮箱中不含有@，打印'非法的邮箱'

  slice(start, [end])     截取字符串，start开始的下标，end结束的下标，不包含end这一项；end为空会截取到最后；下标为负数表示倒数

  练习：截取出一个邮箱的用户名和域名

  toUpperCase()     将英文字母转大写

  toLowerCase()    将英文字母转小写

  split()     将一个字符串按照指定的字符转为数组

> 所有的字符串API都返回新的字符串，不会影响到原来的字符串

## Math对象

  提供了一组数学相关的API；是一个特殊的对象，不需要使用new来创建就可以直接调用API

   PI      获取圆周率

  abs()    计算绝对值

  ceil()   向上取整

  floor()   向下取整

  round()    四舍五入取整

  pow(x,y)     计算x的y次方   

  max()    获取一组数字最大值

  min()   获取一组数字最小值

  random()    获取随机数，范围0~1之间     >=0   <1


## Date对象

用于项目中日期时间的存储和计算

### 创建Date对象 

```js
new Date('2023/2/27 10:40:30')
new Date(2023,1,27,10,40,30)  //第2个参数月份的值是0~11对应1~12月
new Date()   //存储的是当前操作系统的时间
new Date(1680000000000)   //存储的是距离计算机元年(1970-1-1 0:0:0)的毫秒数，会产生一个具体的日期时间    1秒 = 1000毫秒
```

### Date对象转为本地字符串

```js
toLocaleString()  //存在兼容性问题，不同的JS解释器下显示有差别，只能用于开发调试阶段
```

### 获取Date对象存储的值

```js
getFullYear()  //年
getMonth()   //月份，值是0~11，用的时候需要加1
getDate()  //日期
getHours()   //小时
getMinutes()  //分钟
getSeconds()  //秒钟
getMilliseconds()  //毫秒
getDay()   //星期，值是0~6，对应的是日~六
getTime()   //获取时间戳

Date.now()   //获取当前时间的时间戳
```

练习：创建Date对象，保存当前系统的日期时间，最后打印以下格式

'今天是xxxx年xx月xx日  xx时xx分xx秒  星期x'

```js
var d = new Date()
var year = d.getFullYear()
var month = d.getMonth() + 1
var date = d.getDate()
var hour = d.getHours()
var minute = d.getMinutes()
var second = d.getSeconds()
var day = d.getDay()  //范围0~6
// 如果秒钟小于10，在前拼接0，否则正常显示
second = second<10 ? '0'+second : second
// 创建数组，包含日~六，下标范围0~6
var arr = ['日', '一', '二', '三', '四', '五', '六']
// console.log(arr[day])
console.log(`今天是${year}年${month}月${date}日  ${hour}时${minute}分${second}秒  星期${arr[day]}`)
```

练习：计算出当前时间距离周末（2023/3/4）还有x天x时x分x秒

```js
// 创建对象，保存当前时间
var d1 = new Date()
// 获取当前时间的时间戳
// console.log(Date.now(),d1.getTime())
// 创建对象，保存周末时间
var d2 = new Date('2023/3/4')
// 计算相差的毫秒数
var d = d2.getTime() - d1.getTime()
// 把相差的单位改为秒
d = parseInt(d/1000)
// 计算相差的秒钟部分：去除含有的分钟（60秒），总的相差的秒钟%60
var second = d%60
// 计算相差的分钟部分：去除总的秒数中含有的小时(3600秒)，单位要求是分钟
var minute = parseInt(d%3600/60) 
// 计算相差的小时部分：去除总的秒数中含有的天(24*3600)，单位要求是小时
var hour = parseInt(d%(24*3600)/3600) 
// 计算相差的天部分：直接将总的秒数单位转为天(24*3600)
var day = parseInt(d/(24*3600)) 
console.log(`距离周末还有${day}天${hour}时${minute}分${second}秒`)
```

### 设置存储的值

```js
setFullYear()  //年
setMonth()   //月份，值是0~11
setDate()  //日期
setHours()   //小时
setMinutes()  //分钟
setSeconds()  //秒钟
setMilliseconds()  //毫秒
setTime()   //设置时间戳，会产生一个具体的日期时间
```

### 拷贝一个Date对象

```js
var d = new Date('2023/2/21 14:42:50')
// 拷贝一份Date对象，把一个对象作为参数传递
var d2 = new Date(d)
```

练习：创建Date对象，保存员工的**入职时间**2023/2/28，假设合同期为3年，计算出合同的**到期时间**；合同到期前一个月进行续签，计算出**续签时间**；

最后打印出以下格式

入职时间：xxxx-xx-xx..

到期时间：xxxx-xx-xx..

续签时间：xxxx-xx-xx..

## 二、数字对象

```js
new Number()   //将一个数字包装为对象，存储在了堆内存中
Number()   //将一个值转换为数字
toFixed(n)   //保留小数点后n位
```

## 三、布尔对象

```js
new Boolean()   //将一个布尔值包装为对象
Boolean()   //将一个值转换为布尔型
!!值    //将一个值隐式转换为布尔型
```

## 四、错误处理

### 常见的错误

- 语法错误(SyntaxError)：代码书写不符合语法规范，例如缺少半块括号、使用中文符号...
- 引用错误(ReferenceError)：使用了未声明的变量
- 类型错误(TypeError)：当前调用的不是一个函数类型
- 范围错误(RangeError)：当前使用的值超出了JS的规定范围
- 自定义错误：用户自己指定的错误，用于调试 

```js
throw 错误内容
```

###  错误处理

```js
try{
    // 尝试执行，可能会出现错误
}catch(err){
    // 一旦try中出现错误，就会捕获到错误，把错误信息放入到err
    // 不会阻止后续代码执行
}
```

## 一、ES6

  let声明的变量解决提升的问题，不允许重复声明

### 1. 块级作用域

  大括号之间的语句块就是块级作用域，块级作用域下，let和const声明的变量和常量，只能在当前作用域访问到。  

  块级作用域：if、else、for... 所有大括号之间都是

```js
// 块级作用域
{
    var a = 1  //全局变量
    let b = 2  //局部变量
    const c = 3  //局部常量
}
```

  **面试题：var、let、const的区别**

>   var声明的变量存在声明提升，允许重复声明；
>
>   let声明的变量解决了声明提升问题，不允许重复声明；
>
>   const声明的是常量，声明后必须赋值，不允许重新赋值；
>
>   var声明变量只有在函数作用域下是局部变量
>
>   let和const存在块级作用域，在块级作用域是局部变量和常量

### 2. 参数增强

可以给参数设置默认值

```js
function add(a,b,c=0) {
    //ES5默认值
    b = b || 0
}
add(5000)
```

### 3. 箭头函数 

```js
 () => {  }
```

简化了匿名函数的写法 

```js
sort( (a, b)=>{
    return a-b
} )
```

 如果箭头函数的函数体中只有一行代码，并且是return形式可以进一步简化

```js
sort( (a,b) => a-b ) 
```





## 二、Node.js概述

  Node.js是一种运行在服务器端的JS环境

### Node.js对比JS

- JS运行在客户端浏览器，有多种解释器，存在代码兼容性问题；Node.js运行在服务器端，只有一种解释器，不存在代码兼容性问题
- 两者都有相同的内置对象和自定义对象，有各自的宿主对象
- JS用于操作网页元素，实现用户交互；Node.js用于服务器端开发，例如操作数据库、调用其它的服务器...

   官网：www.nodejs.org

   国内镜像：www.nodejs.cn

### Node.js运行方式

1. 脚本模式  

```bash
node  拖拽产生文件的路径
```

2. 交互模式

```bash
node       //回车 进入到交互模式
ctrl+d   或者   按两次  ctrl+c    //退出交互模式
```

### Node.js特点

  单线程运行逻辑



## 三、全局对象

### global对象

可以查看一个变量或者函数是否为全局的

在交互模式下，属于全局作用域，全局变量和全局函数可以通过global访问

```js
var a = 1  //全局变量
function fn(){   //全局函数
	return 2
}
global.a
global.fn()
```

在脚本文件下，属于模块作用域，变量和函数都是局部的

> JS下全局对象global名称为：window

### console对象

 用于输出到控制台 

```js
console.log(1)  //输出日志
console.info(2)  //输出消息
console.warn(3)  //输出警告
console.error(4)  //输出错误
console.time()  //开始计时
console.timeEnd()  //结束计时
```

>  注意事项：开始计时和结束计时的参数要保持一致

### process对象

  进程：计算上任何的软件运行都会占用一定得资源

```js
process.arch    //查看当前服务器的CPU架构
process.platform   //查看服务器的操作系统
process.pid   //查看当前进程的编号
process.kill()   //结束指定编号的进行
```

### Buffer对象

  缓冲区，是内存中一块区域，用于临时存储数据

```js
// 从内存分配空间作为缓冲区，存储一个值，单位是字节，一个汉字占3个字节
var buf = Buffer.alloc(6, 'abc新') // <Buffer 61 62 63 e6 96 b0>
buf.toString()  // 将Buffer转为字符串
```



## 四、模块

每一个JS文件就是模块，模块内部封装了一组功能，会形成一个独立的作用域，变量和函数都不能被外部直接访问。

使用模块化来管理项目，便于维护和代码的复用

require:  是一个函数，用来引入其它的模块，得到暴露的对象

module.exports： 是模块暴露的对象，默认是一个空对象，如果想让外部使用哪个功能，就需要添加到这个对象



### 局部变量

  __dirname   获取当前模块的绝对路径    

  __filename   获取当前模块的绝对路径+模块名称

### 模块分类

  模块分为自定义模块、核心模块、第三方模块

|              | 以路径开头                                                   | 不以路径开头                                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **文件模块** | require('./circle.js')  用于引入自定义模块                   |                                                              |
| **目录模块** | require('./02_2')   首先会到目录中查找说明文件package.json中main属性对应的文件，如果文件找不到会自动寻找index.js | require('04_2')  首先会到当前目录下的node_modules目录中寻找；如果找不到会不断的往上一级的node_modules目中寻找；用于引入第三方模块 |

练习：在03_main.js中引入同一级的目录模块03_2，目录中包含文件index.js，模块中创建函数，传递任意3个数字返回最大值，将该函数暴露出去；最终在主模块中调用暴露的函数。

## 二、包和NPM

  **CommonJS**：是一种模块化规范，Node.js就是采用了这种模块化规范，require、module.exports都是基于CommonJS模块规范。

  **包**：package，就是第三方模块，以目录模块的形式出现

  **NPM**：是管理包的工具模块，例如：下载安装、上传、更新、卸载...   NPM在Node.js安装的过程已经附带安装

```bash
npm  -v  
```

 准备工作：确保命令行指向到要下载的目录

 NPM网址：www.npmjs.com

### NPM命令

```bash
npm init -y
```

初始化生成一个项目描述文件，名称为package.json；可以用来记录下载安装的包

```bash
npm install 模块名称
```

下载安装指定的模块，会将所有的包放入到node_modules目录，在package.json中记录下载的当前这个包；会生成package-lock.json，会记录下载安装的所有的包（包括依赖的包）

```bash
npm install
```

自动下载安装package.json记录的包



设置中国镜像: npm set registry https://registry.npmmirror.com

查看当前镜像: npm get registry



其它npm命令：https://www.npmjs.cn/

## 三、URL

URL：统一资源定位器，互联网上的任何资源都有对应的URL，用来标识资源，例如：网页、图片、视频、声音...

```http
https://www.jd.com/product.html?a=1&b=2
```

​    协议           域名              资源的路径      查询参数

  **协议：**用来传输资源

  **域名（主机）：**用来查找服务器

  **资源的路径：**表示要请求的服务器端文件路径

  **查询参数：**客户端向服务器端所传递的值，例如：传递搜索的关键、用户名、密码；   格式为    参数名1=参数值1&参数名2=参数值2

```js
new URL()    // 将一个URL转为对象，可以获取各个部分
searchParams   //获取对象中查询参数部分
get('参数名')    //获取查询参数中参数名对应的参数值
```

```js
// 将URL转为对象
var obj = new URL(str)
// 获取查询参数
var qs = obj.searchParams
console.log(`
	班级名称：WEB${qs.get('cid')}   课程名称：${qs.get('cname')}
`)
```

## 四、定时器

### 一次性定时器

```js
// 开启
var timer = setTimeout(回调函数, 间隔时间) //当间隔时间到了，会调用一次回调函数
// 清除
clearTimeout(timer)
```

### 周期性定时器

```js
//开启
var timer = setInterval(回调函数, 间隔时间) //当间隔时间到了，会调用一次回调函数
//清除
clearInterval(timer)
```

### 立即执行定时器

```js
setImmediate(回调函数)/clearImmediate()
process.nextTick(回调函数)  // 没有清除的方法
```

> 定时器执行逻辑：所有定时器中的回调函数都是放在主线程后的事件(任务)队列中执行，不会阻止主线程中后续代码执行

## 一、文件系统模块

 属于是核心模块

 文件分为目录形式和文件形式

####  查看文件状态  

```js
var s = fs.statSync(文件的路径)
s.isFile()  //是否为文件
s.isDirectory()   //是否为目录

fs.stat(文件路径, 回调函数)
```

### 同步方法和异步方法

同步方法：在主线程中执行，会阻止主线程后续代码的执行；通过返回值获取结果

异步方法：在一个独立的线程执行，不会阻止主线程后续代码的执行；通过回调函数获取结果

#### 清空写入文件

```js
writeFileSync(文件的路径, 写入的值) 
writeFile(文件的路径, 写入的值, 回调函数)
```

如果文件不存在，会先创建文件然后写入值

如果文件已经存在，会清空文件中的内容然后写入值

#### 追加写入文件

```js
appendFileSync(文件的路径, 写入的值)
appendFile(文件的路径, 写入的值, 回调函数)
```

如果文件不存在，会先创建文件然后写入值

如果文件已经存在，会在文件的末尾追加写入值

#### 读取文件

```js
readFileSync(文件的路径)
readFile(文件的路径, 回调函数)
```

 读取结果的格式为Buffer

#### 删除文件

```
unlinkSync(文件的路径)
unlink(文件的路径, 回调函数)
```

#### 检测文件(目录)是否存在

```
existsSync(文件的路径)
```

练习：如果文件3.txt存在，则删除文件。

练习：如果文件4.txt存在，则读取文件

#### 文件流

createReadStream()   创建可读取的文件流

createWriteStream()   创建可写入的文件流

pipe()    管道

```js
// 引入文件系统模块
const fs = require('fs')
// 以流的方式读取文件
var rs = fs.createReadStream('banner.jpg')
// 创建写入的流，可以流的方式写入文件
var ws = fs.createWriteStream('1.jpg')
// 将读取的流添加到写入的流
rs.pipe(ws)
```

#### Node.js事件监听

on('事件名称',  回调函数)           一旦监听到事件后，会调用回调函数，事件名称是固定的字符串 

```js
// 绑定事件，监听是否有数据流入到内存
rs.on('data', (c) => {
	// c 表示每次读取的数据
	console.log(c)
})
```

## 二、HTTP协议

HTTP：超文本传输协议，是客户端和WEB服务器之间的通信协议；

WEB服务器：为客户端提供资源的服务器

### 1.通用头信息

**请求的URL：**要请求的服务器端资源

**请求的方式：**对资源的操作方式         例如：GET / POST

**响应的状态码：**

​     1**： 接收到部分请求，还在继续...

​     2**： 成功的响应

​     3**： 响应的重定向，会请求另一个资源

​     4**： 客户端错误

​     5**： 服务器端错误

### 2.响应头信息

 服务器做出的是响应

  Content-Type：设置响应的内容类型，解决中文乱码   text/html;charset=utf-8

  Location：设置要跳转的URL，通常配合状态码302使用

### 3.请求头信息

  客户端发出的是请求

## 三、HTTP模块

 是Node.js提供的一个核心模块，可以用来创建WEB服务器

 createServer()     创建WEB服务器

 listen()     设置端口

 res     响应对象

 res.statusCode     设置响应的状态码

 res.setHeader()     设置响应的头信息

 res.write()      设置响应到客户端的内容

 res.end()      结束响应

```js
// 引入http模块
const http = require('http')
// 创建WEB服务器
const app = http.createServer()
// 给服务器设置端口
app.listen(3000, () => {
	console.log('服务器启动成功')
})
// 域名、IP地址
// http://127.0.0.1:3000
// http://localhost:3000

// 给服务器绑定事件，监听客户端的请求
app.on('request', (req, res) => {
	// console.log('有一个请求进来')
	// req 请求的对象
	// res 响应的对象
	// 设置响应头信息中，内容类型
	res.setHeader('Content-Type','text/html;charset=utf-8')
	// 设置响应的内容
	res.write('WEB前端2212')
	// 结束响应
	res.end()
})
```
## 一、http模块

 req 请求对象

 req.url     获取请求的资源， 格式为   /xxxxx

 req.method    获取请求的方式

 练习：编写文件02_https.js，使用http模块创建WEB服务器，设置端口；监听客户端的请求，根据请求的URL做出不同的响应

​    '/login'    响应     '<h2>登录成功</h2>'

​    '/index.html'      响应     index.html文件

​    '/study'       跳转到       

​    其它           响应          404    Not  Found



框架：是一整套解决方案，简化了已有的功能，增加新的功能，便于开发维护，专门用于项目开发。

## 二、express框架

基于Node.js平台，快速、开放、极简的WEB开发框架。

属于是第三方模块，需要先去下载安装       

```bash
npm install express
```

 网址：www.expressjs.com.cn

### 创建WEB服务器

```js
const express = requrie('express') 
//创建WEB服务器
const app = express()
//设置端口
app.listen(3000)
```

### 路由

 用来处理特定的请求，就是设置客户端请求和服务器端响应之间的对应关系

 路由包含请求的URL、请求的方式、回调函数

```js
app.请求的方式('请求的URL', 回调函数)
```

 **res  响应对象**

 res.send()     设置响应的内容并结束

 res.redirect()    设置响应的重定向，会跳转到另一个URL

 res.sendFile()     设置响应的文件，文件必须使用绝对路径    __dirname

**req 请求对象**

req.url     获取请求的URL

req.method     获取请求的方式

req.query     获取请求的URL中的查询参数，格式为对象


## 一、路由器

将多个路由写入到一个独立的模块中，便于管理路由  ——— 模块化开发

### 路由器模块

```js
//1.引入express
//2.创建路由器对象
const router = express.Router()
//3.往路由器对象添加路由
//4.暴露路由器对象
module.exports = router
```

### WEB服务器

```js
//1.引入路由器模块
//2.挂载路由器，路由器模块下的路由成为WEB服务器的一部分
// 添加的前缀可以给所有的路由的URL添加前缀
app.use(要添加的前缀, 引入的路由器)
```



## 二、中间件(插件)

用于拦截对服务器端的请求

express下中间件分为 应用级中间件、路由级中间件、内置中间件、第三方中间件、错误处理中间件

### 1.应用级中间件

本质上是一个函数，一旦拦截后会调用这个函数

```js
function fn(req, res, next) {
    next()  //往后执行，可能是下一个中间件，或者路由
}
app.use('/list', fn)  //拦截特定的请求
app.use( fn )  //拦截所有的请求
```



### 2.路由级中间件

 就是路由器的使用，在拦截到URL以后，会到指定的路由器下寻找路由

```js
app.use(拦截的URL, 路由器)
```

### 3.内置中间件

 express提供的中间件就是内置中间件，可以直接使用

 (1) 将POST传参转为对象 

```js
app.use( express.urlencoded({
	extended: true
}) )
```

 (2) 托管静态资源

​    动态资源：通常指要请求的数据库的数据，伴随着传递参数不同，获取的资源也就不同；例如：传递关键字'手机'和'笔记本'获取的结果是不一样的。

​    静态资源：通常指要请求的静态文件，例如：HTML、CSS、图像、视频、声音...  这个过程中没有传参传递

​    托管静态资源：客户端要请求静态资源，不需要通过路由去响应文件，而是让客户端自己去到指定的目录查找文件。

```js
app.use( express.static('目录的路径') )
```

### 4.第三方中间件

   属于第三方模块形式，使用之前需要先去下载安装

### 5.错误处理中间件

   用于后期项目中

## 一、使用express项目生成器搭建项目(脚手架)

文档：https://www.expressjs.com.cn/starter/generator.html

### 生成项目

```bash
npx express-generator
```

   npx会临时安装一个包，使用完会自动卸载

```bash
npm install
```

  会安装package.json中记录的依赖包 

```bash
npm start
```

  启动项目，运行的是package.json中scripts下start对应的命令

  或者     node    bin/www

  启动后服务器占用的端口是3000

## 二、pm2

是Node.js的进程管理器，可以简化node任务管理

### 1.特征：

   自动重新启动

   后台运行

   服务信息查看

   最大内存重启....

###  2.安装

   pm2属于Node.js下的第三方模块

   全局安装pm2

```bash
npm install -g pm2
```

   查看是否安装了pm2 

```bash
pm2 -v
```

  使用pm2启动一个node项目

  --watch  监听程序源文件的编号，一旦发生变化会自动重启(热启动)

```bash
pm2 start 项目的启动文件  --name 自定义名称  --watch 
```

 查看当前node进程列表

```bash
pm2 list
```

 停止一个node进程

```bash
pm2 stop [进程名] | [进程id]
```

重启进程

```bash
pm2 restart [进程名] | [进程id]
```

删除进程

```bash
pm2 delete [进程名] | [进程id]
```

查看日志

```bash
pm2 logs       所有日志
pm2 logs  [进程名] | [进程id]
```
## AJAX(阿贾克斯)

Asynchronous  Javascript  And   XML（异步JavaScript和XML）

不用整个刷新页面，而是局部刷新

在页面加载后，向服务器端请求并结束数据，在后台向服务器发请求

好处：用于体验好



XML ：是一种数据格式，采用了自定义的标签

```
[
    {
        title: '标题1',
        ctime: '2023-3-10'
    },
    {
        title: '标题2',
        ctime: '2023-4-10'
    }
]
```

```xml
<list>
	<news>
        <title>标题1</title>
        <ctime>2023-3-10</ctime>
    </news>
    <news>
        <title>标题2</title>
        <ctime>2023-4-10</ctime>
    </news>
</list>
```

## 一、跨域

跨域：Ajax中请求，协议、域名、端口不同，都会产生跨域。

解决跨域：

 在接口端使用中间件模块

  1.下载安装cors模块      

```
npm install cors
```

 2.使用中间件

```js
const cors = require('cors')
//在WEB服务器创建后
app.use( cors() )
```

## 二、AJAX请求步骤

1.创建http请求对象

```js
var xhr = new XMLHttpRequest()
```

2.打开服务器的连接，设置请求的接口

```js
xhr.open(请求方式, 接口地址, 是否为异步)
```

    请求方式：标准的写法为大写

3.发送请求

```js
xhr.send()
```

4.绑定事件，监听服务器端响应

```js
xhr.onload = function() {
	xhr.responseText //获取服务器端响应的文本
}
```



## 三、post传参的内容类型

| Content-Type                      | 请求体中的格式   | 用途            |
| --------------------------------- | ---------------- | --------------- |
| application/x-www-form-urlencoded | a=1&b=2          | 传递多个参数    |
| application/json                  | {"a": 1, "b": 2} | 传递多个参数    |
| application/form-data             |                  | 上传文件        |
| text/xml                          |                  | 传递xml格式参数 |

### AJAX中POST传参

```js
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
xhr.send('a=1&b=2')
```

```js
xhr.setRequestHeader('Content-Type','application/json')
xhr.send('{"a": 1, "b": 2}')
```

### express中将post传参格式为json数据转为对象

```js
//使用中间件将post传参json转为对象
app.use( express.json() )
// 路由获取
req.body   //{a:1, b:2}
```

## JSON

JSON：JS对象表示法，是一种数据交互的文本形式，不是一种编程语言。

JSON由键值对组成，键名称必须用双引号包裹，值可以是字符串、数字、布尔型、数组、对象、null

```json
{
    "a": 1,
    "b": "hello",
    "c": true,
    "color": ["红色","绿色","蓝色"],
    "p": {"name": "xin", "age": 18}
}
```

 JSON对象:  提供JS和JSON相互转换的API

 JSON.parse()           将JSON转为JS（反序列化）

 JSON.stringify()       将JS转为JSON（序列化）

```
var baseURL = 'http://127.0.0.1:3000'
function get(obj) {
    // obj.type  接口请求方式
    // obj.url   接口地址
    // obj.data  接口传递的参数，对象格式，需要转换为查询参数格式  a=1&b=2
    // obj.success  函数，成功以后会调用
    // 将传递的对象转换为查询参数
    var arr = []
    for(var k in obj.data) {
        arr.push(k + '=' + obj.data[k])
    }
    // 数组转字符串，用&分割
    var str = arr.join('&')
    // 1.创建HTTP请求对象
    var xhr = new XMLHttpRequest()
    // 2.打开服务器连接，设置请求的接口
    xhr.open(obj.type, baseURL + obj.url + '?' + str)
    // 3.发送请求
    xhr.send()
    // 4.绑定事件，监听服务器端响应
    xhr.onload = function() {
        // 将响应的结果JSON转为JS，然后再传递到外部 
        obj.success(JSON.parse(xhr.responseText))
    }
}
```



## 一.正则表达式

 专门描述字符串中字符出现规则的表达式

###  1.字符集

  []   可选范围

###  2.预定义字符集

  对极其常用的字符集进行了简化

  \d  表示匹配[0-9]

  \w  表示匹配[a-zA-Z0-9_]

  \s   表示匹配空白字符，例如：空格、制表符、回车、换行

  .     表示匹配任意个字符

### 3.量词

 规定一个字符集连续出现的次数

 {n}  必须是n个

 {n,m}  至少n个，最多m个

 {n,}  至少是n个，多了不限

 \+  至少1个，多了不限

 ?  可有无可，最多1个

 \*  可有可无，多了不限

### 4.匹配特殊位置

 ^  开始的位置

 $  结束的位置

 如果同时使用以上两个可以实现从头到尾的完整匹配



## 全局作用域

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>作用域相关 09:22</title>
</head>

<body>
  <!-- 
    什么是作用域?
    答: 代码运行时的生效范围.   有作用的领域

    有哪些作用域?
    - 全局作用域: 这里的代码在哪里都能用, 公共的
    - 局部作用域: 函数运行时产生的, 函数私有的
    - 块级作用域: ES6提供的
   -->

  <script src="./01.a.js"></script>
  <script src="./01.b.js"></script>
  <script>
    // 直接在脚本中书写的代码, 都属于全局作用域
    // 全局中 声明的变量 存储在 顶级对象 -- window
    // window是浏览器提供的, 存储了 浏览器提供的所有 API 
    // JS在浏览器中运行, 就可以操作 window 对象中提供的功能

    // 宿主环境: JS代码运行时所在的平台
    // 1. node.js  -- 2阶段
    // 2. 浏览器  -- 3阶段 - 研究运行在浏览器上的JS 有什么特点.

    var a = 10

    function b() { }

    // clg : 快速生成打印的脚本代码
    console.log(window)
    // 运行方式:  右键当前页面内容 -> open with live server
    // 会自动在 默认浏览器 开启当前页面, 自带热更新功能

    // alert: 浏览器提供的 弹窗功能 函数
    // window.alert("Hello Window!")

    // 使用全局对象 window 中的属性时, 可以省略 window 前缀
    alert('Hello Window!')

    // 全局(对象)污染:
    // 全局对象指的是 window 对象, 本质功能是存储系统级的内容
    // 我们声明的变量默认也会存储在 window 对象里,  这并非window的主要职责, 所以说:  自定义变量 污染了 全局对象

    // 造成的问题:
    // 1. 属性名和系统属性重复, 会导致覆盖
    // 2. 多个外部脚本中的变量 都存放在全局, 会导致冲突覆盖!

    // 利用函数作用域来解决全局污染!
  </script>
</body>

</html>
```



## window对象

-  window 对象哪里来的?

  浏览器提供的

- window对象里的内容是做什么的

  提供操作浏览器的各种功能函数

- 如何使用window对象中的内容

  两种方式可以使用

  - window.属性名
  - 属性名 : 全局中没有书写前缀, 默认到window对象中查找使用 

## 函数作用域

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>作用域-局部 09:53</title>
</head>

<body>
  <script>
    // 函数运行时产生的作用域, 其中的变量使用范围仅限函数内部!
    // 函数分两种状态:
    // 1. 静态 -- 声明时
    // 2. 动态 -- 触发函数/调用函数, 例如 函数名()
    function show() {
      // 这里的 x 属于 函数的私有财产, 外部无法使用
      var x = 10

      // 函数中声明的变量, 存储在函数的作用域对象中
      // 没有存储在全局window里, 不会造成污染!
    }

    show() //动态

    console.log('x:', x) // 能打印出10吗?

      // 快速生成函数作用域的语法:  匿名函数自调用
      // var z = function () { }
      // z()

      ; (function () {
        var a = 10 // 属于函数作用域, 不会造成污染!
        var b = 20
      })()
  </script>
</body>

</html>
```

## 作用域链

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>作用域链 10:21</title>
</head>

<body>
  <!-- 作用域链: 多层作用域嵌套时, 当在某个作用域中使用一个变量, 按照作用域链的原则 向上层就近查找 -->

  <script>
    // var a = 10

    function x() {
      // var a = 20

      function y() {
        // var a = 30

        function z() {
          // var a = 40
          console.log('a:', a)
        }
        z()
      }
      y()
    }
    x()
  </script>
</body>

</html>
```



## 闭包

为什么有闭包机制?

- 为了自身的正常运行, 需要把用到的外部作用域存储在自身, 防止其释放

Closure闭包:

- 一种称呼, 代表函数作用域的一种状态:  被其他函数存储在 scopes 中,无法释放

官方描述:

- **闭包**（closure）是一个函数以及其捆绑的周边环境状态（**lexical environment**，**词法环境**）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>闭包 10:32</title>
</head>

<body>
  <script>
    // 设定: 函数运行时产生的内存会在函数执行完毕后自动销毁, 节省内存
    // 除非 把变量存放在全局对象window, 因为window永存!

    function displayName() {
      var name = 'mike'

      var x = function () {
        console.log('name:', name)
      }

      return x
    }

    // show 中存储的是 displayName() 函数中声明的变量x
    // 所以x函数不会释放!
    var show = displayName()
    // 这里能打印出 name, 就说明 name 一定被存储了
    show()

    console.log(window)
    //scopes: 作用域 们  -- 存放函数声明时所在的作用域链 中的作用域
    //closure: 闭包 -- 封闭的包;  函数作用域生成的对象

    // 闭包 表达的是函数作用域的一种状态, 被别人存储在 scopes 里了
    // 类似 妻子/丈夫 这种称呼, 代表一个人的一种状态

    // 为什么要存闭包: 防止其释放后, 导致自身函数运行时, 找不到对应的变量资源 而 运行失败!

    // 闭包的缺点: 不可避免的消耗更多的内存
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>闭包 10:55</title>
</head>

<body>
  <script>
    // 闭包的原则: 只存储用的到的值, 杜绝内存的浪费
    // 存储顺序是 就近原则
    // 只存储外部作用域
    function x() {
      var a = 10, b = 20

      function y() {
        var b = 30, c = 40

        function z() {
          var d = 50
          // 使用了 a b c d 4个变量
          // 这些变量都属于哪些作用域?
          console.log(a, b, c, d);
        }
        // cdi:  direct直接输出. 以对象的方式打印函数
        // log: 按照一定的规则对输出内容进行美化, 函数会以字符串模式打印
        console.dir(z)
      }
      y()
    }
    x()
  </script>
</body>

</html>
```



## 私有变量

公共变量: 存储在全局中 能够被多个函数使用.   不安全 不可靠; --  公共的电脑

私有变量: 专门为 函数声明的变量 安全可靠, 非共享 -- 个人笔记本电脑

声明的方式:

- 非全局变量:   局部变量, 通过函数运行时产生
  - 利用 匿名函数自调用语法 快速生成作用域
- 利用 闭包 这个被动技能, 把这个局部作用域保存在自身, 后续随时使用.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>私有属性 11:26</title>
</head>

<body>
  <script>
    // 公共属性
    var a = 10  //全局区

    function x() {
      a++
      console.log('a:', a)
    }

    function y() {
      console.log('a:', a)
    }

    x()
    y()

    // 私有属性: 只给某个函数使用的属性, 其他函数无法使用
    // 案例: 记录某个函数调用的次数

    // 利用匿名函数自调用语法 快速生成函数作用域/局部作用
    var show = (function () {
      // 这里的count 是函数作用域中的, 不在全局中, 所以非公有
      var count = 0  // alt + 上/下  可以调整代码位置

      function show() {
        count++
        console.log('调用次数:', count)
      }
      // show函数发动 被动技能 - 闭包, 把当前的匿名函数作用域保存在自身的闭包中, 属于show函数私有的财产
      console.dir(show)
      // 需要通过return的方式, 把show函数暴露到全局中
      return show
    })()

    console.log(window)
    // 在全局中使用show函数
    show()
    show()
    show()


    //////////////////////////////////////
    // 标准的私有属性声明方式:
    var suibian = (function () {
      // 命名规范: 以 _ 作为私有属性的开头, 可以达到 见名知意的效果
      var _x = 10
      var _y = 20
      // var z = function () {
      //   console.log(_y, _x)
      // }
      // return z
      return function () {
        console.log(_y, _x)
      }
    })()

    suibian()
    suibian()
  </script>
</body>

</html>
```



## 上午知识点回顾

作用域

- 全局作用域

  - 顶级对象: window, 由浏览器提供的, 存放系统方法 (API) 的对象

    - 使用window中的属性, 可以直接调用

      ```js
      window.alert()
      alert()
      ```

- 局部作用域

  - 函数在运行时产生的作用域, 属于一个私有的空间
  - 作用: 避免全局(变量/对象)污染 
    - 在脚本中 自定义的属性, 默认存储在 window 对象里,  污染
    - 解决: 用匿名函数自调用语法, 快速生成局部作用域, 保存自定义的变量

- 块级作用域

作用域链:

- 当多层作用域嵌套时, 当在某个作用域下使用变量, 如果自身没有, 则按照就近原则 到上层作用域查找

闭包:  对于函数作用域的 一种状态的描述

- 状态: 被其他函数存储在 scopes 中
- 为什么:  为了确保函数的顺利执行, 需要把用到的外部作用域存储在自身scopes中, 防止其释放

闭包的使用场景: 私有属性

- 利用闭包的存储特性, 把 存放在函数作用域中的属性, 存储在自身使用

  ```js
  var 函数名 = (function(){
      var _私有属性 = 值
      
      return function(){}
  })()
  ```

  

## arguments

函数自带的属性:arguments

- 其中存储函数收到的所有实参

使用场景:

- 实参个数不固定的函数, 例如  max  min
- 函数重载: 通过判断 实参的个数 或 类型 执行不同的代码逻辑, 实现不同的效果!

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>arguments 14:10</title>
</head>

<body>
  <script>
    function show(x, y) {
      console.log(x, y)
      // 函数内部自带 arguments 变量, 存储收到的所有实参
      console.log('arguments:', arguments)
    }

    show(11, 22, 'mike', 'lucy', 'lily')

    // 来自 Math 的 max 函数, 求多个实参中的最大值
    console.log(
      Math.max(11, 2, 3, 43, 54),
      Math.max(11, 2, 3, 43, 54, 11, 23, 345, 6786),
    );

    // 仿写 max 函数
    function max() {
      // 利用 arguments 来查看收到的所有实参, 进行进一步处理
      console.log('max:', arguments)
      // 思路:
      // 1. 先假设数组的第一个值是最大的
      // 2. 然后从第二个值开始比较, 是否有更大的
      // 3. 如果有更大的, 就替换成 找到的最大值, 一直到最后
      var tmp_max = arguments[0] //临时最大值

      for (var i = 1; i < arguments.length; i++) {
        // 如果临时最大值 比 遍历出来的值 小
        if (tmp_max < arguments[i]) {
          // 替换临时最大值
          tmp_max = arguments[i]
        }
      }
      // 遍历结束后, 返回最终的结果
      return tmp_max
    }

    console.log(
      max(11, 22),
      max(11, 22, 342, 43, 564, 76),
    )

    // 什么是编程?
    // 把人类解决问题的思维,转换成代码的方式表达出来.


    // 练习1: 制作一个min函数, 找到实参中的最小值
    function min() {
      var tmp_min = arguments[0]

      for (var i = 1; i > arguments.length; i++) {
        if (tmp_min > arguments[i]) {
          tmp_min = arguments[i]
        }
      }

      return tmp_min
    }

    console.log(
      min(11, 22, 33),
      min(11, 22, 33, 34, 54, 65, 766),
    )

    // 练习2: 制作一个sum函数, 求出实参的总和
    function sum() {
      var total = 0
      for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]
      }
      return total
    }

    console.log(
      sum(11, 232, 43, 56),
      sum(54, 54, 23, 3, 5, 4, 10),
    );
  </script>
</body>

</html>
```

## 函数重载

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>函数的重载 15:07</title>
</head>

<body>
  <!-- 函数重载: 根据实参的数量或类型不同, 执行不同的逻辑操作; 可以让函数变成多功能函数 -->
  <script>
    function zhekou(money) {
      // 判断实参的个数,  3个 就是满减
      if (arguments.length == 3) {
        if (money >= arguments[1]) { //超过满减条件
          money -= arguments[2]
        }
      }

      // 两个参数
      if (arguments.length == 2) {
        // 参数2: 字符串类型 - 代表 vip
        // 参数2: 数字类型 - 折扣
        if (typeof arguments[1] == 'number') {
          money *= arguments[1]
        }
        if (typeof arguments[1] == 'string') {
          if (arguments[1] == 'vip1') {
            money *= 0.95
          }
          if (arguments[1] == 'vip2') {
            money *= 0.8
          }
        }
      }

      return money
    }

    // zhekou : 计算折扣价格的函数
    // 使用方式:
    console.log(zhekou(3000, 0.8)) // 消费3000 打八折
    console.log(zhekou(3000, 0.6)) // 6折

    console.log(zhekou(3000, 2000, 500)) // 满2000 减500
    console.log(zhekou(3000, 3000, 700)) // 满3000 减700

    console.log(zhekou(3000, 'vip1')) // 95折
    console.log(zhekou(3000, 'vip2')) // 8折

  </script>
</body>

</html>
```

## 练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <script>
    function calc() {
      if (arguments.length == 1) {
        if (typeof arguments[0] == 'number') {
          return arguments[0] * arguments[0]
        }
        // instanceof: 判断对象是否是指定构造函数创建的
        // 是 Array 创建的, 则说明是数组类型
        if (arguments[0] instanceof Array) {
          var total = 0
          // arguments[0] 是 数组
          for (var i = 0; i < arguments[0].length; i++) {
            total += arguments[0][i]
          }
          return total
        }
      }

      if (arguments.length == 2) {
        return arguments[0] + arguments[1]
      }

      if (arguments.length == 3) {
        return arguments[0] * arguments[1] * arguments[2]
      }
    }

    // 实现一个 calc 函数, 预期效果如下
    console.log(calc(10)) //算出数字的平方, 即 10 * 10
    console.log(calc(20)) //算出数字的平方, 即 20 * 20
    console.log(calc(10, 20)) //算出和值, 即 10 + 20
    console.log(calc(10, 20, 30)) //算出乘积, 即 10 * 20 * 30

    // 难
    console.log(calc([11, 22, 33])) //数组类型, 则计算出数组内容的和
  </script>
</body>

</html>
```



## this

是什么?

- 是函数中自带的一个变量, 指向函数`运行时`所在的对象 -- **非常灵活**

使用场景?

- 为函数提供了另一种执行方式
  - 传统方案: 通过传递参数的方式  把对象传入
  - 当前方案: 把函数作为参数传递到对象里执行 -- 反过来

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>this 16:13</title>
</head>

<body>
  <!-- 
    this关键词: 代表函数运行时所在的对象
    从格式上分辨:  对象.方法名()  方法中的this 就是 前面的对象
   -->

  <script>
    function show() {
      console.log('this:', this) // window
    }

    show() // 简写
    window.show() // 全局的show函数, 在window对象里

    var emp = {
      ename: "俊俊",
      show: function () {
        console.log('this:', this)
      }
    }

    emp.show()
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>this使用场景 16:22</title>
</head>

<body>
  <script>
    // 矩形对象:
    var r1 = { length: 10, width: 20 }
    var r2 = { length: 100, width: 120 }

    // area函数: 用于计算 矩形的面积  长 * 宽

    // 传统做法:
    function area(rect) {
      return rect.length * rect.width
    }

    console.log(
      area(r1), area(r2)
    );


    // this模式的函数
    function area1() {
      // this: 运行时服务的对象, 所在的
      return this.length * this.width
    }

    // 1. 把 area1 存储到对象中 :  上门服务
    r1.area1 = area1
    console.log(r1)
    // 2. 执行 r1 中的 area1 函数
    console.log(
      r1.area1()
    )
    // 3. 执行完毕后, 从对象中删除.
    delete r1.area1

    // 练习: 把 area1 放到 r2 执行
    // 1. 上门服务:  函数存入r2中
    r2.area1 = area1
    // 2. 在 r2 中执行
    console.log(r2.area1())
    // 3. 删除
    delete r2.area1
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>

<body>
  <script>
    // 立方体: 长 宽 高
    var c1 = { length: 10, width: 20, height: 30 }

    // 制作一个函数 volume 计算体积 = 长 * 宽 * 高
    function volume() {
      // 在制作包含this变量的函数时, 要提前预判 这个函数运行时的环境, 才能知道 this 是什么
      return this.length * this.width * this.height
    }

    // 要求: 把 volume 传递到 c1 对象里执行, 返回其体积
    // 1. 函数上门服务: 到c1对象里
    c1.volume = volume
    // 2. 调用
    console.log(c1.volume())
    // 3. 删除
    delete c1.volume
  </script>
</body>

</html>
```

## call

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>

<body>
  <script>
    // call: 短暂拜访
    // 函数 具有一个短暂拜访对象的方法 -- call
    function area() {
      return this.length * this.width
    }

    var r1 = { length: 10, width: 20 }

    // 任务: 把 area 函数临时放到 r1 对象中执行
    console.log(
      area.call(r1) // area函数短暂拜访 r1 对象
    )

    console.dir(area) // dir: 直接输出函数对象

    // 练习: 立方体
    var c1 = { length: 10, width: 20, height: 30 }

    // 1. 制作 volume 函数, 计算 体积=长*宽*高
    // 把此函数放到 c1 中执行, 获取其体积
    function volume() {
      return this.length * this.width * this.height
    }
    console.log(volume.call(c1))

    // 2. 制作 area 函数, 计算 面积=(长x宽 + 长x高 + 宽x高)*2
    // 把此函数放到 c1 中执行, 获取其面积
    function area() {
      return (this.width * this.length + this.length * this.height + this.width * this.height) * 2
    }

    console.log(area.call(c1))
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>

<body>
  <script>
    var emp1 = { name: "俊俊", salary: 30000 } //月薪
    var emp2 = { name: "小明", salary: 10000 }
    var emp3 = { name: "泡泡", salary: 20000 }

    // 所得税汇算函数  shui
    // 年薪 10~ 15w   扣税 5%
    // 年薪 >15 ~ 20  扣税 10%
    // 年薪 >20 ~ 30  扣税 15%
    // 年薪 >30 ~ 40  扣税 20%
    // >40  扣税40%;   <10  不扣税
    function shui() {
      var total = 12 * this.salary // 年薪
      // 语法糖: 代码在满足一些特定条件时, 有简化写法. 让程序员能够偷懒, 像吃糖一样, 令人愉悦!
      // if判断的 {} 里只有一行代码, 可以省略{}
      if (total < 10) return 0
      if (total >= 10 && total < 15) return total * 0.05
      if (total >= 15 && total < 20) return total * 0.1
      if (total >= 20 && total < 30) return total * 0.15
      if (total >= 30 && total < 40) return total * 0.2
      if (total >= 40) return total * 0.4
    }

    // 把shui函数, 放到 emp1 2 3 中, 分别计算扣税的金额
    console.log(shui.call(emp1))
    console.log(shui.call(emp2))
    console.log(shui.call(emp3))
  </script>
</body>

</html>
```

## call的实参

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>call的参数 17:48</title>
</head>

<body>
  <script>
    var emp = { ename: '俊俊', salary: 20000 }

    // 制作一个函数, 用于获取员工  n 个月的总薪资
    function total(n) {
      return this.salary * n
    }

    console.log(
      // 6个月
      // 参数1: 指定函数执行时所在的对象, 即 this 的指向
      // 参数2 之后 : 传递给函数的实参列表
      total.call(emp, 6)
    )

    ///////////////////////
    var x = { a: 10 }

    function show(b, c, d) {
      return this.a + b + c + d
    }

    console.log(
      show.call(x, 20, 30, 40)
    );
  </script>
</body>

</html>
```



## 内容总结

- 作用域

  - 全局
    - 顶级对象window - 浏览器提供, 存放系统方法
  - 局部
    - 利用局部的函数作用域, 避免全局污染
  - 块级

- 作用域链

  - 多层作用域嵌套, 按照`就近原则 `到上级作用域查找变量来使用

- 闭包 Closure

  - 是一种状态:  函数作用域被 别的函数保存在自身的scopes中, 无法释放

- 函数中隐藏的变量

  - arguments: 保存所有实参

    - 实参个数不固定的函数
    - 函数重载: 多功能函数

  - this: 指向函数运行时所在的对象, 特别灵活

    - 把函数 传递到 对象中执行

    - call: 短暂访问;  更加便捷的把 函数放到对象中执行

      ```js
      函数.call(对象, 实参, 实参...)
      ```

作用域: 代码起`作用`的领`域`

- 全局 - 在 script 脚本中直接声明的变量

  - 顶级对象: window.  浏览器提供, 存放系统级的各种方法 API

    顶级对象中的属性, 在使用时 可以直接书写调用

    ```js
    window.alert()
    
    alert()
    ```

    全局污染: window用于存储系统API, 把 自定义的变量放这里 则造成污染

- 局部 - 函数运行时诞生, 仅限在函数内使用

  - 变量在函数中声明, 就不会造成全局污染. 利用 `匿名函数自调用` 快速形成函数作用域

    ```js
    (function(){})()
    ```

- 块级

作用域链: 多层作用域嵌套时, 使用到某个变量如果自身不存在, 则到上级作用域`就近`查找

闭包:

- 为什么有闭包: 防止外层作用域中的变量自动释放, 导致自身运行失败
- 做法: 把外层作用域保存到自身的 `scopes` 属性里
- 闭包Closure:被保存到 scopes 中的 函数作用域对象, 就叫闭包

使用场景:私有属性

```js
var 函数 = (function(){
    var _属性名 = 值
    
    return function(){}
})()
```

函数相关: 函数体中存在两个隐形的变量

- arguments: 存储了所有的实参

  - 制作 实参个数 不固定的函数, 比如 max min
  - 制作 多功能函数 - 函数重载.   通过 if 判断 实参的个数或类型不同, 做不同的逻辑操作

- this: 非常灵活, 函数运行时才能确定, 指向函数所在的对象

  - 新的做法: 把函数传递到对象里执行

  - 函数的call方法: 短暂访问;   快速把函数`临时`放到指定对象里执行

    `函数.call(对象, 实参, 实参...)`

## apply

函数的一个属性, 作用和 call 方法极其相似:

- 函数.apply(对象):  把函数临时放到对象里执行, 修改函数中的this指向

不同点:

- 实参通过 `数组类型` 进行传递

  ```js
  函数.apply(对象, [实参, 实参, ...])
  ```

用途:

- 如果函数接收的是实参列表, 但是我们只有数组类型, 则利用此函数实现数组转实参列表的效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>apply 09:16</title>
</head>

<body>
  <script>
    // call: 临时把函数放对象里执行
    // apply: 临时把函数方对象执行
    var emp = { name: '小明', salary: 10000 }
    // 年终奖 , 扣税
    function total(zhong, shui) {
      return 12 * this.salary + zhong - shui //年终奖
    }
    // 区别: 实参传递不同
    // call: 实参要1个1个传递
    console.log(total.call(emp, 50000, 30000))
    // apply: 实参要放数组里传递
    console.log(total.apply(emp, [50000, 30000]))
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <script>
    // 制作一个 sum 函数, 能够计算出 所有实参的总和
    function sum() {
      var total = 0
      for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]
      }
      return total
    }

    var nums = [21, 32, 43, 6546, 65, 3]
    // 用sum函数,求出 nums 数组中的元素总和

    // 利用 apply 把 数组 转为 参数列表的形式
    // 参数1: 是 sum 在哪个对象里执行, 即 this 的指向
    // 由于 sum 函数体中, 没有使用this, 则可以随意传递
    console.log(sum.apply(1, nums))

    // 预期用法:
    console.log(sum(11, 22, 33))
    console.log(sum(5, 4, 32, 14, 45, 67))

    // 练习:
    // max: 求出实参列表中的最大值
    console.log(Math.max(1, 21, 43, 54, 65));
    // 参数1: 随便书写, max的执行不依赖于this
    console.log(Math.max.apply(null, nums))

    // 练习: 求最小值
    console.log(Math.min.apply('', nums))
  </script>
</body>

</html>
```





## bind

函数触发的三种方案:

- call: 临时把函数放在对象中执行, 用于设定this的指向
- apply: 临时放对象中执行, 可以把数组 转为 参数列表
- bind: 提前绑定 函数和运行时的资源, 简化后续调用时的格式

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>bind 10:06</title>
</head>

<body>
  <!-- 问题: 在HTML代码中, 掺杂过多的 JS 代码, 导致些许混乱 -->
  <button onclick="total.call(emp, 50000, 30000)">计算年薪</button>
  <br>
  <!-- 触发bind函数 -->
  <button onclick="total_bind()">计算年薪</button>

  <script>
    var emp = { ename: "小明", salary: 10000 }

    function total(zhong, shui) {
      alert(this.salary * 12 + zhong - shui)
    }


    // bind: 绑定
    // 作用: 把函数和其运行时需要的资源捆绑在一起, 返回新的函数
    var total_bind = total.bind(emp, 50000, 30000)

    console.dir(total_bind);
  </script>
</body>

</html>
```

## 构造函数

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>构造函数 10:23</title>
</head>

<body>
  <script>
    // 给web的老师建立档案
    var teachers = [
      // 代码中 不应该出现 大批量的复制粘贴情况.
      // 通常用函数实现复用 -- 重复使用
      { ename: "1", age: 18, phone: "18989787444" },
      { ename: "2", age: 28, phone: "18944444446" },
      { ename: "3", age: 38, phone: "18933338944" },
      { ename: "4", age: 32, phone: "18985478784" },
      { ename: "5", age: 35, phone: "15689789879" },
      { ename: "6", age: 25, phone: "13659879797" },
    ]

    console.log(teachers)

    // 新建一个 Teacher 函数, 帮我们生成 讲师 对象
    function Teacher(ename, age, phone) {
      var obj = {}

      obj.ename = ename
      obj.age = age
      obj.phone = phone

      return obj
    }
    // 构造函数: 功能是用于构建创造对象的函数, 称为构造函数.
    var t1 = Teacher('6', 32, '10086')
    console.log(t1)
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <script>
    // 代码规范: 构造函数 采用大驼峰命名法, 即单词首字母均大写
    // - 达到见名知意的效果
    function Student(sname, age, sid) {
      var obj = {}

      obj.sname = sname
      obj.age = age
      obj.sid = sid

      return obj
    }

    // 制作1个 学生对象的构造函数, 使用时
    var stu1 = Student('小明', 22, '0002')
    //效果: { sname:"小明", age:22, sid:"0002" }
    console.log(stu1)

    function Product(pname, price, maker, count) {
      var obj = {}

      obj.pname = pname
      obj.maker = maker
      obj.price = price
      obj.count = count

      return obj
    }

    // 制作1个 产品对象的构造函数
    var p1 = Product('鼠标', 300, 'logi', 4)
    console.log(p1)
    // {pname:"鼠标", price:300, maker:"logi", count:4}
  </script>
</body>

</html>
```

## new

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>new</title>
</head>

<body>
  <script>
    // new运算符: 搭配构造函数使用时, 可以自动完成一些代码
    function Teacher(ename, age, phone) {
      // this非常灵活: 默认代表函数运行时所在对象
      // 如果是 new 运算符触发, 则this指向 当前构造出来的对象

      // 省略的代码如下
      // this = {}

      this.ename = ename
      this.age = age
      this.phone = phone

      // return this
    }

    // 当系统发现 函数前存在 new 运算符, 则认为此函数为构造函数
    // 就会自动辅助此函数 完成一些构造函数 特有的代码
    var t1 = new Teacher('小明', 32, '10086')
    console.log(t1)
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <script>
    function Student(sname, age, sid) {
      this.sname = sname
      this.age = age
      this.sid = sid
    }

    // 制作1个 学生对象的构造函数, 使用时
    var stu1 = new Student('小明', 22, '0002')
    //效果: { sname:"小明", age:22, sid:"0002" }

    function Product(pname, price, maker, count) {
      this.pname = pname
      this.price = price
      this.maker = maker
      this.count = count
    }

    // 制作1个 产品对象的构造函数
    var p1 = new Product('鼠标', 300, 'logi', 4)
    // {pname:"鼠标", price:300, maker:"logi", count:4}

    console.log(p1, stu1);
  </script>
</body>

</html>
```





## prototype

总结:

- 为什么要设计原型模式?
  - 节省内存
- 如何节省的?
  - 把公共的方法存储在 共享的对象 :  构造函数.prototype 中
  - new 运算符生成对象时, 自动为对象关联 `__proto__` 到 共享对象 prototype 上
  - JS引擎的原型链设计,  全自动
    - 如果 `对象.属性` 对象自身没有, 则自动到 `__proto__` 中查找!





```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>原型设计</title>
</head>

<body>
  <script>
    // 制作生成矩形对象的构造函数 Rect
    function Rect(length, width) {
      // new运算符构造对象时, 会额外默认完成
      // 为当前构造的对象, 关联其父元素 为 构造函数的prototype
      // this.__proto__ = Rect.prototype

      this.length = length
      this.width = width

      // 新增计算面积的方法
      // this.area = function () {
      //   return this.length * this.width
      // }
    }

    // 构造函数 -- 相当于 母亲角色, 能生对象
    // 构造函数必然存在 prototype 属性, 即其丈夫
    // prototype.constructor : 关联到构造函数, 即丈夫的妻子
    console.dir(Rect) //查看 prototype 属性

    // 把共享的方法,存储在 prototype 原型中
    Rect.prototype.area = function () {
      return this.length * this.width
    }

    // 用法:
    // r1: 母亲通过new方案 生下来的对象
    var r1 = new Rect(10, 20) // {length: 10, width:20}
    console.log(r1)

    // 母亲的丈夫 == 孩子的父亲
    // 原型属性的名称 : __proto__ 是未经美化的原属性名
    // 由于官方的要求, 浏览器必须按照固定规则 美化后再显示
    console.log(Rect.prototype == r1.__proto__) // true

    console.log(
      // JS引擎自带 原型链机制: 
      // 白话文: 我自己没有的东西, 找我爸爸要
      // 专业: 自身没有的属性, 到原型链__proto__中查找
      r1.area()
    )

    // 构造函数能够反复多次调用, 每次调用都会执行函数中的代码

    var r2 = new Rect(20, 30)
    var r3 = new Rect(40, 50)
    // 代表两个对象中的area 函数非同一个
    console.log(r2.area == r3.area) //false

    // 问题: 在构造函数中, 为对象添加方法属性, 导致内存的浪费. 因为方法是可以共享的
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <script>
    // Rect : 矩形构造函数
    // 初始化时, 需要传入 宽 和 高的值
    // 生成的对象具有两个方法: area面积  perimeter周长
    function Rect(length, width) {
      this.length = length
      this.width = width
    }

    // 函数: 应该共享 -- 存放在原型中
    Rect.prototype.area = function () {
      return this.width * this.length
    }

    Rect.prototype.perimeter = function () {
      return (this.width + this.length) * 2
    }

    // 使用时:
    var r1 = new Rect(20, 30)
    console.log(r1) // {length:20, width:30}
    console.log(r1.area()) // 面积 = 长x宽
    console.log(r1.perimeter()) // 周长 = (长+宽)*2

    ////////////////////////////////////////////////
    // 立方体构造函数 Cube
    // 初始化时, 有三个属性.  长length 宽width 高height
    // 带有3个方法: area面积   volume体积   perimeter周长
    function Cube(length, width, height) {
      this.length = length
      this.width = width
      this.height = height
    }
    // 为了防止每次构造时, 都去创建一次函数, 所以才要放在外部书写
    Cube.prototype.area = function () {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    Cube.prototype.volume = function () {
      return this.length * this.height * this.width
    }
    Cube.prototype.perimeter = function () {
      return (this.length + this.width + this.height) * 4
    }

    // 使用方式
    var c1 = new Cube(10, 20, 30)
    // {length:10,width:20,height:30}
    console.log(c1)
    console.log(c1.area()) // 面积=(长x宽+长x高+宽x高)*2
    console.log(c1.perimeter()) // 周长=(长+宽+高)*4
    console.log(c1.volume()) // 体积=长x宽x高

    ////////////////////////////////////////
    // 圆形构造函数: Circle
    // 初始化参数: 半径 radius
    // 拥有方法: 周长  面积  直径
    function Circle(radius) {
      this.radius = radius
    }

    Circle.prototype.diameter = function () {
      return this.radius * 2
    }
    Circle.prototype.area = function () {
      return this.radius * this.radius * 3.14
    }
    Circle.prototype.perimeter = function () {
      return this.radius * 3.14 * 2
    }

    // 使用时
    var c1 = new Circle(10) //{radius: 10}
    console.log(c1)
    console.log(c1.diameter()) // 直径 = 半径 x 2
    console.log(c1.area()) // 面积 = 3.14 * 半径 * 半径
    console.log(c1.perimeter()) // 周长=2 * 3.14 * 半径
  </script>
</body>

</html>
```

## 数组的原型

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>数组的原型</title>
</head>

<body>
  <!-- 
    JS: 万物皆对象, 对象由构造而来
   -->
  <script>
    var a = 5  // 字面量写法: 属于语法糖
    console.log(a.toFixed(2))

    //构造写法
    var a = new Number(5)
    console.log(a)

    // 数组
    var nums = [11, 22, 33, 44, 55]
    console.log(nums)

    // 为数组的原型增加一个求和的方法 sum
    Array.prototype.sum = function () {
      // this: 函数运行时所在的对象
      var total = 0
      for (var i = 0; i < this.length; i++) {
        total += this[i]
      }
      return total
    }

    console.log(nums.sum()) 
  </script>
</body>

</html>
```

## class语法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>class语法</title>
</head>

<body>
  <script>
    // JS原型的这套写法并不受欢迎, 在java语言中存在相同功能的语法 -- class语法.  比JS的语法更容易让人接受
    // 在 2015年6月 出品的 ES6 即 JS的第六个版本中, 集成了Java的class语法

    // class: 类;    一类事物

    // 本质相当于一种语法糖, 自动完成原型的相关操作. 不需要程序员自己操作prototype 属性
    class Rect {
      // 固定名称的方法, 省略function关键词, 通过new触发
      constructor(length, width) {
        this.length = length
        this.width = width
      }

      area() {
        return this.width * this.length
      }

      perimeter() {
        return 2 * (this.width + this.length)
      }
    }

    console.dir(Rect)

    var r1 = new Rect(10, 20)
    console.log(r1)

  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <script>
    // 立方体构造函数 Cube
    // 初始化时, 有三个属性.  长length 宽width 高height
    // 带有3个方法: area面积   volume体积   perimeter周长
    class Cube {
      constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
      }

      area() {
        return (this.length * this.width + this.width * this.height + this.length * this.height) * 2
      }

      perimeter() {
        return (this.width + this.length + this.height) * 4
      }

      volume() {
        return this.height * this.length * this.width
      }
    }

    // 使用方式
    var c1 = new Cube(10, 20, 30)
    // {length:10,width:20,height:30}
    console.log(c1)
    console.log(c1.area()) // 面积=(长x宽+长x高+宽x高)*2
    console.log(c1.perimeter()) // 周长=(长+宽+高)*4
    console.log(c1.volume()) // 体积=长x宽x高

    ////////////////////////////////
    // 圆形构造函数: Circle
    // 初始化参数: 半径 radius
    // 拥有方法: 周长  面积  直径
    class Circle {
      constructor(radius) {
        this.radius = radius
      }

      diameter() {
        return this.radius * 2
      }

      area() {
        return this.radius * this.radius * 3.14
      }

      perimeter() {
        return this.radius * 2 * 3.14
      }
    }

    // 使用时
    var c1 = new Circle(10) //{radius: 10}
    console.log(c1)
    console.log(c1.diameter()) // 直径 = 半径 x 2
    console.log(c1.area()) // 面积 = 3.14 * 半径 * 半径
    console.log(c1.perimeter()) // 周长=2 * 3.14 * 半径
  </script>
</body>

</html>
```

## 严格模式

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>严格模式</title>
</head>

<body>
  <!-- 2009年出品的 JS第五个版本: ES5.  提供的新特性 - 严格模式 -->
  <!-- 可以手动让 JS 代码进入到严格模式的状态, 此时 JS引擎会对代码严格要求, 有风险的操作都会报错!  强制程序员写出健康的代码. -->
  <script>
    // use:使用;   strict:严格
    // 代表下方所有代码, 用严格模式处理
    'use strict'

    // 严格模式下, 变量必须先声明 再使用

    var servername = 'localhost'

    // 修改
    servename = 'www.tedu.cn'

    // 默认全局中的属性, 自带前缀  window.
    // window.servename = 'www.tedu.cn'

    // 由于单词拼写错误, 导致在 window对象中 新增了属性 -- 全局污染!

    console.log(window)
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>严格模式 16:00</title>
</head>

<body>
  <script>
    // 严格模式下, 函数中的this如果是window, 则改为undefined; 防止全局污染
    'use strict'

    function Rect(length, width) {
      // window.length = length
      console.log('this:', this)
      this.length = length
      this.width = width
    }
    // new: 专门搭配构造函数使用, 默认会把函数中的this 指向构造出来的对象
    // 忘记写new了, 则this指向函数运行时所在对象 --> window
    var r1 = Rect(10, 20)
    console.log(r1)

    console.log(window)
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>严格模式</title>
</head>

<body>
  <script>
    // 以后写JS代码, 尽量开启严格模式
    // 后续使用的第三方框架 默认均开启严格模式

    // 严格模式下, 禁用 静默失败
    // 失败的操作 提供报错, 辅助程序员排查BUG
    'use strict'

    var emp = { ename: "皮喆", age: 19 }
    // freeze: 冻结
    // 冻结的对象, 其内容无法被修改
    Object.freeze(emp)

    emp.age = 30
    console.log(emp)
  </script>
</body>

</html>
```

## ES6

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ES6</title>
</head>

<body>
  <!-- 
    ES6 也称  ES2015:
    2015年6月出品的 JS的第6个版本

    此版本中, 引入大量的新特性, 解决JS沉积多年的各种弊病
    - 这是一个 里程碑的版本

    https://www.runoob.com/w3cnote/es6-tutorial.html
   -->
</body>

</html>
```

## let与const

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>let 与 const</title>
</head>

<body>
  <script>
    // ES6前: 两种方式可以声明变量  var   function
    var a = 10
    function aa() { }
    // 问题: 在全局中声明的变量, 会存储在顶级对象 window 中
    // window用于存储系统属性. 放自定义属性则 污染

    // 解决方案: 利用匿名函数自调用语法, 把变量存储在这里.

    // 使用 let /const 声明的变量, 存储在新增的顶级对象 script 中
    // 专门存储 自定义的全局属性.  需要利用浏览器的断点功能查看
    // 断点: 中断的点. 让代码运行时 停在某一行 (子弹时间)
    let abb = 111
    const bba = 222

    console.log(window)

    // let: 变量 -- 值可以变更  -> 和var相同
    // const: 常量 -- 初始化赋值后, 不能修改.  更安全

    // 根据实际的场景来选择用什么方式声明变量

    // 声明一个变量, 存放 俊俊的 薪资
    let salary = 8000
    salary = 20000 //后期可修改

    // 声明一个变量, 存放 俊俊的 媳妇
    const wife = '翠花'
    // wife = '金莲'
    // console.log(wife)

    // 特殊情况
    const wife1 = { name: '翠花', hair: "短发" }
    wife1.hair = '大波浪'
    console.log(wife1)


  </script>
</body>

</html>
```

## 块级

````html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>块级作用域</title>
</head>

<body>
  <script>
    // 块级作用域就是 函数作用域的 简化版本

    // 以前: 用匿名函数自调用语法生成作用域
    // (function () { })()

    // 现在: 用 {} 配合 let/const 即可形成块级作用域
    {
      let a = 10
      const b = 20
      console.log(111)
    }

    for (let i = 0; i < 10; i++) {
      console.log(i)
    }


    console.log(window)

    // 私有属性: 函数作用域 诞生私有的变量, 通过闭包机制存储在函数里
    var show = (function () {
      var _count = 0

      return function () {
        _count++
        console.log('次数:', _count)
      }
    })()

    console.dir(show) //查看scopes
    show()
    show()

    ///////////////////////////////////////
    // 块级实现私有属性
    {
      let _count = 0

      function talk() {
        _count++
        console.log('次数:', _count);
      }
    }

    console.dir(talk);
    talk()
    talk()
    talk()
  </script>
</body>

</html>
````

## 声明提升

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>声明提升 </title>
</head>

<body>
  <script>
    // JS引擎的机制: 会先阅读一次代码, 把代码按照规范改为规范的代码 然后执行

    // 整体是数学表达式
    // 理论上 参与数学表达式的值, 都应该是数字类型
    // 隐式类型转换: 类型不规范, 则按照规则转换后, 再执行
    console.log(30 - true + null * '12')

    // 声明提升
    // 正常的规范: 先声明 再使用
    // 隐式的声明提升操作: 会先阅读一次代码, 把所有的声明操作移动到代码的最上方, 然后再执行

    // 声明提升 广受诟病: 导致代码的运行结果 和 所见到的不一样
    function show() {
      console.log(11);
    }
    show()

    function show() {
      console.log(22)
    }
    show()

    // ES6: 提供的 let /const 对声明提升有新的处理
    console.log(x)
    var x = 10

    // let: 拥有暂存死区的设定;
    // 首先: let/const 存在声明提升
    // 但是: 暂存死区的状态要求: 在执行声明代码行之前, 不允许使用此变量, 否则报错
    // 总结: 声明提升是 JS引擎的基本设定,无法推翻;  作者添加报错机制, 强制用户先声明再使用.
    console.log(y);
    let y = 10
  </script>

</body>

</html>
```

## 总结

函数的三种触发方式

- call: 让函数短暂访问对象, 修改函数中的this指向
- apply: 把数组 转换成 参数列表形式, 来调用函数
- bind: 把函数运行时依赖的 对象和实参 绑定起来. 便于后续的调用.

构造函数: 用于创建对象的函数, 要求大驼峰命名法

- new: 3件事, 专门辅助构造函数

  ```js
  this = {}
  this.__proto__ = 构造函数.prototype
  return this
  ```

- prototype: 原型机制

  - 节省内存, 把对象共享的方法存储在 prototype 对象里
  - 利用原型链机制:`__proto__`  对象.属性,  对象没有属性 就自动到 `__proto__`中查找

- class: 来自 Java 的语法, 更简单

ES5 的严格模式

- 2009年推出, 提供更多的报错. 强制程序员写出更好的代码
- 开启方式: `'use strict'`

ES6 的 let/const

- 新的全局变量存储位置: 脚本区, 专门放自定义属性
- 新的作用域: 块级
- 声明提升: 暂存死区.  利用报错强制程序员 先声明 再使用
- const: 常量;  初始化之后无法修改, 安全!

## 回顾

函数触发的方式

- call: 函数临时放到对象中执行. 切换函数中的this指向
- apply: 把 数组 转换成 参数列表. 传递到函数中使用
- bind: 函数运行时的 参数 和 所在对象 捆绑在一起. 便于后期调用

构造函数: 用于构建创造对象的函数

- new: 用于辅助构造函数使用, 隐式完成一些代码

  ```js
  this = {}
  this.__proto__ = 构造函数.prototype
  return this
  ```

- prototype: 原型

  - 作用: 节省内存
  - 实现方式:
    - 共享方法存储在 构造函数.prototype 对象中
    - 原型链机制: 对象使用属性时, 自身没有 则 自动到 `__proto__`查找使用

- class:  来自 Java 的class语法, 更容易书写

  ```js
  class 类名{
      // new 运算符触发
      constructor(){}
      
      方法(){}
      
      方法(){}
  }
  ```

ES5 - 严格模式

- 开启方式: `'use strict'`
- 作用: 提供更多的报错. 强制程序员书写更健康的代码

ES6 - let/const

- 带来新的顶级对象, 用于存储自定义的全局变量
- 块级作用域: 用 `{}` 搭配使用
- 声明提升: 存在声明提升 但是 有暂存死区 设定. 在声明行代码运行之前,不允许使用此变量.
  - 利用报错方式, 强制用户 先声明再使用
- const 常量: 声明时必须赋值, 后续无法更改. 更安全

## 模板字符串

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>模板字符串</title>
</head>

<body>
  <script>
    // 传统字符串 用 "" 或 '' 书写

    // 问题1: 不支持换行
    // var html = '<ul>
    //   <li></li>'

    // 问题2: 字符串拼接方案繁琐, 用 + 
    var emp = { ename: "小明", age: 19, phone: "10086" }

    // 姓名:xxx, 今年xx岁. 手机号xxxx
    var words = '姓名:' + emp.ename + ', 今年' + emp.age + '岁. 手机号' + emp.phone

    // ES6中的 字符串增强语法 -> 模板字符串
    // 符号: ``
    // 支持换行 和 ${} 在字符串中书写JS代码
    var skills = ['js', 'html', 'css']

    var words = `<ul>
        <li>${skills[0]}</li>
        <li>${skills[1]}</li>
        <li>${skills[2]}</li>
      </ul>`
    console.log(words)
  </script>
</body>

</html>
```

## 箭头函数

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>箭头函数</title>
</head>

<body>
  <script>
    // ES6 提供的 匿名函数语法

    // 之前的匿名函数
    // function() { }
    // 箭头函数
    // () => { }

    // 官方提供语法糖:
    var show = (x) => {
      return 2 * x
    }
    // 糖1: 形参有且只有1个时, 可以省略()
    var show = x => {
      return 2 * x
    }
    // 糖2: 函数体仅有一行时,可以省略 {return }
    var show = x => 2 * x

    console.log(show(10))

    //////////////////////////
    //练习: 尝试用语法糖 简化下方代码
    var a = (y) => { return y * y }
    var a = y => y * y

    var b = (x, y) => { return x + y }
    var b = (x, y) => x + y

    var c = (m, n) => {
      return { m: m, n: n }
    }
    // 问题: 对象的{} 被误认为是 函数的{}, 产生歧义
    // 解决: 用()括起来, 从格式上避免歧义

    // { 属性名: 值 }.  巧合: 值是变量, 变量名和属性名相同
    var c = (m, n) => ({ m: m, n: n })
    // 语法糖: 属性名和变量名一样, 则可以合写
    var c = (m, n) => ({ m, n })

    console.log(
      c(10, 20)
    )

    // 糖:
    var emp = {
      // 可以省略 : function
      // show: function () { alert("Hello!") }
      show() { alert("Hello!") }
    }

    emp.show()
  </script>
</body>

</html>
```

## 箭头函数的this

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>箭头函数中的this</title>
</head>

<body>
  <script>
    // 关于function的this
    // 对象.方法名(): this是前方的对象
    // 方法名(): this是window
    // new 方法名(): this是构造出的 实例对象

    // 关于箭头函数的this
    // 箭头函数没有this, 按照作用域链的就近原则到上级作用域查找
    var emp = {
      ename: "小明",
      show() {
        // 箭头函数没有this, 所以使用上级 show 函数中的this
        // emp.show() :  所以 show的this 就是emp
        var a = () => {
          console.log('this:', this)
          console.log(this == emp)
        }
        a()
      }
    }

    emp.show()
  </script>
</body>

</html>
```



## 数组的高阶函数

函数内 使用了其他函数, 就称为高阶函数

- every: 每一个元素都满足条件
- some: 至少有一个元素满足条件
- filter: 把满足条件的元素过滤出来
- map
- forEach
- reduce

## every


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>every</title>
</head>

<body>
  <script>
    // 数组的高阶函数 -- 不属于ES6的新特性
    // 高阶函数: 一个函数的内部使用了其他函数, 常见的带有回调函数的函数;

    console.log(Array.prototype)

    // every: 每一个
    // 数组中, every可以自动遍历数组, 检查每一个元素是否符合指定条件
    // every最终结果: 全真则真, 有假为假;  与 逻辑与操作相似 &&

    var nums = [12, 432, 453, 65, -32, 12, 43]
    // 需求: 判断数组中 是否 所有的/每一个 值都是正数

    // 实参: 要求函数类型
    // every会自动遍历数组, 把数组中的每个元素 都传递给 箭头函数
    var res = nums.every((value, index, array) => {
      // 三个参数: 值, 序号, 数组本身
      // 关系: array[index] == value
      console.log(value, index, array)
      // 返回 判断的结果, 例如 >0 代表正数
      return value > 0
    })

    console.log(res ? '都是正数' : '非都是正数');
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <script>
    var nums = [12, 43, 54, 6, 65, 23, 54, 33]
    // 1. 判断元素是否都大于10
    var res = nums.every((value, index, array) => {
      return value > 10
    })

    // 形参: 未使用到的可以不写
    var res = nums.every((value) => {
      return value > 10
    })

    // 糖1: 形参只有1个 可以省略()
    var res = nums.every(value => {
      return value > 10
    })
    // 糖2: 方法体只有一行,省略{return }
    var res = nums.every(value => value > 10)

    console.log(res ? '都大于10' : "非都大于10")

    // 2. 判断元素是否都是偶数  对2取余是0
    var res = nums.every((value, index, array) => {
      return value % 2 == 0
    })

    var res = nums.every(value => value % 2 == 0)
    console.log(res ? '都是偶数' : '非都是偶数');
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <script>
    // 构造员工对象的 构造函数
    function Employee(eid, ename, age, married) {
      this.eid = eid // 员工id
      this.ename = ename
      this.age = age
      this.married = married //婚姻
    }

    var emps = [
      new Employee('0001', '小明', 29, false),
      new Employee('0002', '李四', 32, true),
      new Employee('0003', '俊俊', 36, true),
      new Employee('0004', '楠姐', 19, false),
      new Employee('0005', '小新', 34, true),
    ]

    console.log(emps)

    // 1. 判断是否所有人都已婚
    var res = emps.every((value, index, array) => {
      // value: Employee类型的对象
      return value.married == true
    })

    var res = emps.every(value => value.married)

    console.log(res ? '都已婚' : '非都已婚');

    // 2. 是否所有人年龄都超过20
    var res = emps.every(value => value.age > 20)
  </script>
</body>

</html>
```

## some

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>some</title>
</head>

<body>
  <script>
    // some: 一些, 至少有一个
    // 只要存在 1个 满足条件的元素, 就算真;  类似逻辑或 ||

    var nums = [21, 3, 34, -54, 65, 34, 43, 6]
    // 判断: 是否存在负数
    var res = nums.some((value, index, array) => {
      return value < 0 // 判断结果: 是否有值是负数
    })

    // 简化
    var res = nums.some(value => value < 0)

    console.log(res ? '存在负数' : '不存在负数')
  </script>
</body>

</html>
```

练习

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:31</title>
</head>

<body>
  <script>
    function Employee(eid, ename, age, married) {
      this.eid = eid // 员工id
      this.ename = ename
      this.age = age
      this.married = married //婚姻
    }

    var emps = [
      new Employee('0001', '小明', 29, false),
      new Employee('0002', '李四', 32, true),
      new Employee('0003', '俊俊', 36, true),
      new Employee('0004', '楠姐', 19, false),
      new Employee('0005', '小新', 34, true),
    ]

    // 1. 判断是否有人年龄小于20
    var res = emps.some((value, index, array) => {
      return value.age < 20
    })

    var res = emps.some(value => value.age < 20)

    console.log(res ? '有小于20' : '无小于20');

    // 2. 判断是否有人未婚
    var res = emps.some((value, index, array) => {
      return value.married == false
    })
    // 婚姻状态为 假, 属于满足条件,  非假为真
    var res = emps.some(value => !value.married)
    console.log(res ? '有人未婚' : '都已婚')
  </script>
</body>

</html>
```

## filter

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>filter</title>
</head>

<body>
  <script>
    // filter: 过滤
    // 把数组中满足条件的元素 过滤出来, 形成新的数组
    var nums = [12, 3, 54, 23, 43, 65, 67]
    // 把大于20的元素找出来
    var res = nums.filter((value, index, array) => {
      return value > 20
    })

    var res = nums.filter(value => value > 20)

    console.log(res)
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:48</title>
</head>

<body>
  <script>
    function Employee(eid, ename, age, married) {
      this.eid = eid // 员工id
      this.ename = ename
      this.age = age
      this.married = married //婚姻
    }

    var emps = [
      new Employee('0001', '小明', 29, false),
      new Employee('0002', '李四', 32, true),
      new Employee('0003', '俊俊', 36, true),
      new Employee('0004', '楠姐', 19, false),
      new Employee('0005', '小新', 34, true),
    ]

    // 1. 找出年龄大于20的所有人
    var res = emps.filter((value, index, array) => {
      return value.age > 20
    })

    var res = emps.filter(value => value.age > 20)

    console.log(res)

    // 2. 找出所有已婚的人
    var res = emps.filter((value, index, array) => {
      return value.married == true
    })

    var res = emps.filter(value => value.married)

    console.log(res)
  </script>
</body>

</html>
```

## map

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>map</title>
</head>

<body>
  <ul id="box"></ul>

  <script>
    // map: 映射
    // 把数组中的元素 按照规律进行转换, 形成新的数组
    var nums = [1, 2, 3, 4, 5, 6]

    var res = nums.map((value, index, array) => {
      return value * 2
    })

    var res = nums.map(value => value * 2)

    console.log(res)

    var skills = ['html', 'css', 'js', 'dom']

    // 把每个元素放在 li 标签里:   <li>html</li>
    var res = skills.map((value, index, array) => {
      return `<li>${value}</li>`
    })

    var res = skills.map(value => `<li>${value}</li>`)
    // 如何把数组转化/拼接成字符串?  join
    // join的参数, 代表间隔的符号, 默认是 逗号
    console.log(res.join(''))

    box.innerHTML = res.join('')

    console.log(res)
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习</title>
</head>

<body>
  <div id="box"></div>
  <div id="box1">
    <!-- <a href="" title=""></a> -->
  </div>

  <script>
    var webs = [
      { title: "百度一下", href: "http://www.baidu.com" },
      { title: "京东", href: "http://www.jd.com" },
      { title: "淘宝", href: "http://www.taobao.com" },
      { title: "斗鱼", href: "http://www.douyu.com" },
    ]

    var res = webs.map(value => `<a href="${value.href}" title="${value.title}">${value.title}</a>`)

    box1.innerHTML = res.join('')


    var names = ['小明', '李四', '泡泡', '小新']
    // 要求: 把元素放在 button 标签里, 显示到页面上
    var res = names.map(value => `<button>${value}</button>`)

    box.innerHTML = res.join('')
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 14:38</title>

  <style>
    table {
      width: 400px;
      border-collapse: collapse;
    }

    td {
      border: 1px solid gray;
      text-align: center;
      padding: 6px;
    }

    thead {
      background-color: #ccc;
    }
  </style>
</head>

<body>
  <table>
    <thead>
      <tr>
        <td>序号</td>
        <td>id</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>婚姻状态</td>
      </tr>
    </thead>
    <tbody id="box">
      <!-- <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr> -->
    </tbody>
  </table>

  <script>
    function Employee(eid, ename, age, married) {
      this.eid = eid // 员工id
      this.ename = ename
      this.age = age
      this.married = married //婚姻
    }

    var emps = [
      new Employee('0001', '小明', 29, false),
      new Employee('0002', '李四', 32, true),
      new Employee('0003', '俊俊', 36, true),
      new Employee('0004', '楠姐', 19, false),
      new Employee('0005', '小新', 34, true),
    ]

    // 数据 -> HTML代码
    var res = emps.map((value, index) => {
      return `<tr>
        <td>${index + 1}</td>
        <td>${value.eid}</td>
        <td>${value.ename}</td>
        <td>${value.age}</td>
        <td>${value.married ? '已婚' : '未婚'}</td>
      </tr>`
    })

    box.innerHTML = res.join('')
  </script>
</body>

</html>
```

## ajax

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AJAX 15:15</title>
</head>

<body>
  <ul id="box"></ul>

  <script>
    // AJAX: 在JS中通过网络请求 从服务器获取数据
   
    var url = 'https'

    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onload = function () {
      var data = JSON.parse(xhr.response)
      console.log(data)

      // 把请求到的数组 list, 转为 li 元素;  <li>标题...<li>
      var res = data.data.list.map(value => {
        return `<li>${value.title}</li>`
      })
      console.log(res)

      box.innerHTML = res.join('')
    }
    xhr.send()
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:34</title>
</head>

<body>
  <div id="box"></div>

  <script>

    // 任务:
    // 1. 利用AJAX 请求接口中的数据
    // 2. 把数据中的内容, 转为 li 标签, 显示出标题
    // 3. 把 li 标签显示到页面上
    var url = 'https:'

    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onload = function () {
      var data = JSON.parse(xhr.response)
      console.log(data)

      var res = data.data.map(value => {
        return `<li>${value.title}</li>`
      })
      console.log(res)

      box.innerHTML = res.join('')
    }
    xhr.send()

    // 步骤跟上一个 几乎一样
  </script>
</body>

</html>
```

## ajax封装

```js
// 需求:
// get(地址, 回调函数)

// callback:回调;  简写: cb
function get(url, cb) {
  var xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.onload = function () {
    var data = JSON.parse(xhr.response)

    cb(data) //传递到回调函数中
  }
  xhr.send()
}
```

## 练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:50</title>

  <!-- 解除防盗链 -->
  <meta name="referrer" content="no-referrer">

  <style>
    #box {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }

    li {
      list-style: none;
      margin: 0 10px 10px 0;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    }

    li>img {
      width: 220px;
      height: 330px;
    }

    li>div {
      padding: 4px;
      text-align: center;
    }

    li>div>span {
      font-size: 0.9em;
      color: orange;
    }
  </style>
</head>

<body>
  <ul id="box">
    <!-- <li>
      <img src="" alt="">
      <div>
        <b></b>
        <span></span>
      </div>
    </li> -->
  </ul>

  <script src="common.js"></script>
  <script>
   

    var url = 'https:'

    get(url, data => {
      console.log(data)

      var res = data.subjects.map(value => {
        return `<li>
          <img src="${value.cover}" alt="">
          <div>
            <b>${value.title}</b>
            <span>${value.rate}</span>
          </div>
        </li>`
      })

      box.innerHTML = res.join('')
    })

    // var xhr = new XMLHttpRequest()
    // xhr.open('get', url)
    // xhr.onload = function () {
    //   var data = JSON.parse(xhr.response)
    //   console.log(data)

    //   var res = data.subjects.map(value => {
    //     return `<li>${value.title}</li>`
    //   })

    //   box.innerHTML = res.join('')
    // }
    // xhr.send()

    // 1. 请求到接口中的数据
    // 2. 转为 li, 内容为 题目 title
    // 3. 显示到页面上
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 16:47</title>

  <style>
    #box {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
    }

    li {
      list-style: none;
      margin: 0 10px 10px 0;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      background-color: #14151A;
      padding: 10px;
      border-radius: 4px;
      align-items: center;
    }

    li>b {
      color: white;
      padding: 10px 0;
    }

    li>img {
      width: 100px;
      height: 100px;
    }

    li>span {
      color: #AB934D;
    }
  </style>
</head>

<body>
  <ul id="box">
    <!-- <li>
      <img src="" alt="">
      <b></b>
      <span></span>
    </li> -->
  </ul>

  <script src="common.js"></script>
  <script>

    get('https://', data => {
      console.log(data)

      var res = data.items.map(value => {
        return `<li>
          <img src="${value.iconPath}" alt="">
          <b>${value.name}</b>
          <span>${value.price}</span>
        </li>`
      })

      box.innerHTML = res.join('')
    })

    // 1. 利用 common.js 中封装的 get 方法获取数据
    // 2. 在html中书写 ul#box 标签 和 li标签模板
    // 3. 在 js 中, 把请求到的数据 转为 li 代码
    // 4. 把 li 代码显示到 box 标签里
    // 5. 利用CSS进行美化

    // 此接口的图没有防盗链问题
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 17:29</title>

  <meta name="referrer" content="no-referrer">

  <style>
    #box {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
    }

    li {
      margin: 0 10px 10px 0;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
      list-style: none;
      display: flex;
      flex-direction: column;
      width: 250px;
    }

    li>b {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 5px 0;
    }

    li>div {
      display: flex;
    }

    li>div>span {
      width: 50%;
    }

    li>img {
      width: 100%;
      height: 150px;
    }
  </style>
</head>

<body>
  <ul id="box">
    <!-- <li>
      <img src="" alt="">
      <b></b>
      <div>
        <span></span>
        <span></span>
      </div>
    </li> -->
  </ul>

  <script src="common.js"></script>
  <script>
    get('', data => {
      console.log(data)

      var res = data.data.archives.map(value => {
        return `<li>
          <img src="${value.pic}" alt="">
          <b>${value.title}</b>
          <div>
            <span>${value.stat.view}</span>
            <span>${value.stat.danmaku}</span>
          </div>
        </li>`
      })

      box.innerHTML = res.join('')
    })


    // 1. 请求接口中的数据
    // 2. html中完成 ul 和 li的代码
    // 3. 数据转html
    // 4. 把 html 添加到页面上
    //  -- 图片有防盗链,需要解除
    // 5. css美化
  </script>
</body>

</html>
```



## 总结

- 模板字符串
  - 支持文本的换行, 特别适合 在JS中书写带有格式的 html 代码
  - 更好的字符串拼接方案 : `${}`
- 箭头函数
  - 格式更简单的匿名函数语法
  - 带有两个语法糖
    - 形参只有一个 省略()
    - 函数体只有一行 省略 {return }
  - this
    - 没有this, 通过作用域链 使用上层作用域的
- 数组高阶函数
  - 高阶函数: 函数中使用了其他函数, 就叫高阶函数
  - every : 判断每个元素都符合条件
  - some : 判断至少一个元素符合条件
  - filter : 把满足条件的元素过滤出来
  - map : 映射. 把每个元素 处理后的返回值, 组合成新的数组

## 回顾

- 模板字符串

  - 使用 反引号 `` 书写
  - 特点
    - 支持换行: 允许在JS中书写 HTML 代码时, 可以带有格式, 更易读
    - 更好的字符串拼接方案:  `${}` 即可

- 箭头函数

  - 更简单的匿名函数写法: ()=>{}
  - 语法糖
    - 形参只有一个, 省略`()`
    - 函数体只有一行, 省略 `{return  }`

- 其他语法糖

  - 对象类型: `{属性名: 变量名}`  一旦两者名称相同, 可以合写  `{ 属性名 }`

  - 对象中的函数类型的属性, 可以省略 `:function`

    ```js
    var obj = {
        show : function(){},
        
        show(){}
    }
    ```

- 数组高阶函数

  - 高阶: 函数中 使用了 其他函数
  - every: 每一个元素都符合条件
  - some: 至少有一个元素符合条件
  - filter: 把满足条件的元素过滤出来
  - map: 映射.  把数组中的每个元素 修改后, 组成新的数组

## forEach

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>forEach 09:07</title>
</head>

<body>
  <script>
    // 数组的遍历操作: 4种方案
    var names = ['mike', 'lucy', 'lily', 'john']

    // 1. for
    for (let i = 0; i < names.length; i++) {
      console.log(i, names[i]);
    }

    // 2. for..in : 用于遍历对象类型, key是属性名, 字符串类型
    // 由于数组属于对象类型的一种, 所以可以用for..in遍历. 但是并不合适
    for (const key in names) {
      console.log(key, names[key])
    }

    // 3. for..of   来自 ES6
    // 特色: 直接遍历值;    
    // 区别for..in. 先拿属性名 再通过属性名拿值
    // for..of 更加直接
    for (const value of names) {
      console.log(value)
    }

    // 4. forEach   来自 ES6
    // 没有返回值, 只是存粹的遍历数组
    names.forEach((value, index, array) => {
      console.log(index, value)
    })

    ////////////////////////////
    // 取舍问题:
    // 通常对数组采用 forEach 方案
    // 对 伪数组 / 类(似)数组 采用 for..of 方案

    function show() {
      // 伪数组/类数组: 内容与数组的结构相同, 但是原型不是数组的
      console.log(arguments)
      // 无法使用forEach
      // arguments.forEach()

      // for..of 可以遍历
      for (const value of arguments) {
        console.log(value)
      }

      // 另一种方案: 把其原型替换成数组的prototype
      Object.setPrototypeOf(arguments, Array.prototype)
      arguments.forEach((value, index) => {
        console.log(index, value)
      })
    }

    show(11, 22, 333, 44, 55, 66)
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 09:36</title>
</head>

<body>
  <div id="box"></div>

  <script>
    var nums = [12, 4, 34, 54, 67, 76, 8, 43]

    // 要求: 分别用 for-of 和 forEach 方式, 计算出数组中元素总和
    var total = 0

    for (const value of nums) {
      total += value
    }
    console.log(total)

    total = 0
    nums.forEach(value => total += value)
    console.log(total)

    ////////////////////////////////
    // 结合 html
    var skills = ['html', 'css', 'js', 'dom']
    // 把元素转化成 button 标签, 拼接到一起形成字符串
    // 昨天: 先用map映射, 再用 join 拼接

    var template = '' //模板
    skills.forEach(value => template += `<button>${value}</button>`)

    console.log(template);

    box.innerHTML = template
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:06</title>

  <meta name="referrer" content="no-referrer">

  <style>
    #box {
      width: 600px;
    }

    li {
      display: flex;
      list-style: none;
      margin-bottom: 10px;
    }

    li>img {
      width: 160px;
      border-radius: 4px;
      margin-right: 10px;
    }

    li>div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    li>div>div {
      color: #888;
    }
  </style>
</head>

<body>
  <ul id="box">
    <!-- <li>
      <img src="" alt="">
      <div>
        <b></b>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </li> -->
  </ul>

  <script src="common.js"></script>
  <script>
    // 万的转换
    function wan(value) {
      return value >= 10000 ? (value / 10000).toFixed(1) + "万" : value
    }


    var url = 'https://api.kunkun.cool/bilibili/recommend.json'

    get(url, data => {
      console.log(data)

      var tem = ''

      data.data.season.forEach(value => {
        // 问题点: 在 模板字符串中 书写过多的 过长的 JS代码, 会导致 html的结构被打乱, 不容易阅读!
        // 先把用到的变量都解构出来
        const {
          title,
          new_ep: { cover, index_show },
          stat: { view, danmaku }
        } = value

        tem += `<li>
          <img src="${cover}" alt="">
          <div>
            <b>${title}</b>
            <div>
              <div>${index_show}</div>
              <div>${wan(view)}播放 · ${wan(danmaku)}弹幕</div>
            </div>
          </div>
        </li>`
      })

      box.innerHTML = tem
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:34</title>

  <meta name="referrer" content="no-referrer">

  <style>
    #box {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      width: 250px;
      list-style: none;
      margin: 0 10px 10px 0;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    }

    li>img {
      width: 100px;
      height: 100px;
    }

    li>div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 5px;
    }

    li>div>div>span {
      display: inline-block;
      padding: 2px 10px;
      background-color: pink;
      border-radius: 40px;
    }
  </style>
</head>

<body>
  <ul id="box">
    <!-- <li>
      <img src="" alt="">
      <div>
        <b></b>
        <div>
          更新至 <span></span>
        </div>
      </div>
    </li> -->
  </ul>

  <script src="common.js"></script>
  <script>
    // 用 forEach 方式实现
    var url = 'https://api.kunkun.cool/bilibili/timeline.json'

    get(url, data => {
      console.log(data)

      var tem = ''

      data.result.map(value => {
        tem += `<li>
          <img src="${value.square_cover}" alt="">
          <div>
            <b>${value.title}</b>
            <div>
              更新至 <span>${value.bgmcount}</span>
            </div>
          </div>
        </li>`
      })

      box.innerHTML = tem
    })
  </script>
</body>

</html>
```



## reduce

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>reduce 11:10</title>
</head>

<body>
  <div id="box"></div>

  <script>
    // reduce: 减少, 合并
    // 把数组中的元素 经过处理之后, 合并成 1个值
    var nums = [1, 2, 3, 4, 5, 6, 7, 8]

    // 任务: 把数组的元素 累加到一起, 得到总和
    // 参数1: 每个元素都被此函数处理, 其中 box 形参, 接收的是 当前的总和 
    // 参数2: 初始时的 总和
    var res = nums.reduce((box, value, index, array) => {
      return box + value
    }, 0)

    console.log(res)

    /////////////////////////////
    var skills = ['js', 'dom', 'html', 'css']
    // 把元素转为按钮标签, 拼接到一起
    var res = skills.reduce((box, value) => {
      return box + `<button>${value}</button>`
    }, '')

    console.log(res)

    box.innerHTML = res
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:34</title>
</head>

<body>
  <ul id="box"></ul>

  <script src="common.js"></script>
  <script>
    var url = 'https://douyu.kunkun.cool/api/cate/recList'
    get(url, data => {
      console.log(data)

      var res = data.data.reduce((box, value) => {
        return box + `<li>${value.name}</li>`
      }, '')

      box.innerHTML = res
    })

    // 把请求到的数据 中的 name 属性, 放到 li 标签中, 进行展示
    // 采用 reduce 方案实现   
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:49</title>
</head>

<body>
  <script>
    // https://douyu.kunkun.cool/api/room/list?page=1&type=ms


  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:49</title>

  <style>
    #box {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
    }

    li {
      margin: 0 10px 10px 0;
      list-style: none;
    }
  </style>
</head>

<body>
  <ul id="box">
    <!-- <li>
      <img src="" alt="">
      <div></div>
    </li> -->
  </ul>

  <script src="common.js"></script>
  <script>
    var url = "https://douyu.kunkun.cool/api/room/list?page=1&type=ms"

    get(url, data => {
      console.log(data)

      var res = data.data.list.reduce((box, value) => {
        const { roomSrc, roomName } = value

        return box + `<li>
          <img src="${roomSrc}" alt="">
          <div>${roomName}</div>
        </li>`
      }, '')

      box.innerHTML = res
    })
  </script>
</body>

</html>
```



## 数组数据转HTML代码的方案

- map 搭配 join 使用
  - 缺点: 用map和join 两个函数完成任务
- forEach 搭配 外部的变量
  - 缺点: 需要额外的外部变量
- reduce
  - 缺点: 理解上有难度, 使用少 

## 展开语法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>展开语法 14:06</title>
</head>

<body>
  <script>
    var nums = [12, 43, 435, 12, 43, 6, 67, 45]

    // ES6 推出了 展开运算符: ...
    // 可以把 数组/对象  的内容提取出来
    console.log(
      Math.max(...nums),
      // 下方两种写法是等效的
      Math.max(...[11, 22, 33]),
      // ... 和 [] 会抵消掉
      Math.max(11, 22, 33)
    );


    console.log(
      // apply: 把数组转为参数列表 来触发函数
      Math.max.apply(0, nums),
      Math.min.apply(null, nums)
    );

    ////////////////////////////////////
    // 利用展开语法可以更形象的进行 对象的合并操作
    var x = [11, 22]
    var y = [33, 44]

    var z = [...x, ...y, 55, 66]

    console.log(z)

    ////////////////////////////
    var m = { x: 10, y: 20 }
    var n = { y: 400, z: 600 }

    var q = { ...m, ...n, b: 1000 }
    console.log(q)
  </script>
</body>

</html>
```

## 剩余参数

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>剩余参数 14:22</title>
</head>

<body>
  <script>
    // ... 在形参中书写, 代表剩余参数
    // 没有形参接收的 实参, 都会存储在 剩余参数 这个 数组类型的变量里
    // 和 arguments 比较相似, 但是 arguments 是存储所有实参.
    function show(x, y, ...z) {
      console.log(x, y, z)
    }

    show(11, 22, 33, 44, 55, 66)
  </script>
</body>

</html>
```

## 解构语法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>解构语法 14:32</title>
</head>

<body>
  <script>
    var emps = [
      { ename: "小明", age: 32, phone: '13599898888' },
      { ename: "张三", age: 22, phone: '13544498888' },
      { ename: "李四", age: 33, phone: '13599333888' },
      { ename: "俊俊", age: 36, phone: '13599777888' },
    ]

    // 可选解构:
    const [kai1, , , liang] = emps
    console.log(kai1.ename, liang.ename);

    // ES6的 解构语法
    const [kaikai, nannan] = emps
    console.log(kaikai.ename, nannan.ename);

    // 缺点: 把值赋给变量时, 格式略长
    const kai = emps[0], nan = emps[1]
    console.log(kai.ename, nan.ename)

    // 缺点: 无法直观的知道 0 和 1 是什么
    console.log(emps[0].ename, emps[1].ename)


  </script>
</body>

</html>
```



## 复杂解构

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>对象的解构 14:45</title>
</head>

<body>
  <script>
    var emp = {
      ename: "小明", age: 32, phone: "18879798888"
    }

    // 别名: 换个名字
    // { 属性名: 别名 }
    var { ename: en } = emp
    console.log('en:', en)

    // 解构
    var { ename, age, phone } = emp
    console.log(ename, age, phone)

    // 期望:
    var ename = emp.ename
    var age = emp.age
    var phone = emp.phone

    ///////////////////////////////////////////
    // 复杂的解构
    var paopao = {
      name: "皮喆",
      age: 18,
      tags: ['html', 'css', 'js'],
      husband: {
        name: "大连",
        age: 26
      }
    }

    // 技巧: ctrl + i 可以弹出提示
    var {
      name,
      age,
      husband: { age: hus_age, name: hus_name },
      tags: [tag1, tag2, tag3]
    } = paopao

    console.log(name, age, hus_age, hus_name, tag1, tag2, tag3);
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:17</title>
</head>

<body>
  <script>
    var emp = {
      name: "小明", age: 32,
      desc: {
        home: "黑龙江鹤岗",
        phone: "18878789999",
        skills: ['html', 'css', 'js', 'vue', 'react'],
        wife: {
          name: "王二", age: 27,
          tags: ['宅', '时尚']
        }
      }
    }

    var { age, desc: {
      home, phone, skills: [
        skill1, skill2, , , skill3
      ], wife: { age: wife_age, name: wife_name, tags: [tag1, tag2] }
    }, name } = emp

    console.log(age, name, wife_name, wife_age, skill1, skill2, skill3, tag1, tag2);
  </script>
</body>

</html>
```



## 形参解构

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>形参解构</title>
</head>

<body>
  <script>
    var r1 = { length: 10, width: 20 }

    // 省略形参名, 直接把 实参中的值解构出来使用
    function area({ length, width }) {
      // const { length, width } = rect
      return length * width
      // return rect.length * rect.width
    }

    console.log(
      area(r1)
    )

    ////////////////////////////////////
    // 练习
    var c1 = { length: 10, width: 20, height: 30 }

    // 计算面积 =(长x宽 + 长x高 + 宽x高)*2
    function area({ length: l, width: w, height: h }) {
      return 2 * (l * w + l * h + w * h)
      // return 2 * (length * width + length * height + width * height)
    }

    //期望用法:
    console.log(
      area(c1)
    );
  </script>
</body>

</html>
```

## dom操作初体验

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- title: 属于固有的标签 -->
  <title>dom 17:20</title>

  <style>
    h1 {
      color: green;
    }
  </style>
</head>

<body>
  <!-- 属于自定义标签 -->
  <h1>Hello World!</h1>

  <script>
    console.log(window) // 找到 document 属性
    // log: 会美化输出的结果, 让其更容易阅读
    console.log(document.body)
    console.log(document.head)
    console.log(document)

    // dir: 直接输出本体
    console.dir(document.body)

    // JS特点: 能够实现更强大的 带有逻辑性的操作

    // 制作一个时钟效果:
    // 通过定时器, 每隔1秒中, 就修改页面上的某个元素
    setInterval(() => {
      var now = new Date().toLocaleTimeString()

      // document.title : 就可以操作 head 中的 title 标签的内容
      document.title = now

      // 同css, js也提供类似选择器的方案, 通过标签名来查找某些标签

      //get:查找,获取    elements: 元素们    by:通过   tag:标签  name:名字
      const h1s = document.getElementsByTagName('h1')
      console.log('h1s:', h1s)
      // 修改 找到的第一个 h1 标签的 内容
      h1s[0].innerHTML = now

      console.log('now:', now)
    }, 1000) // 1000毫秒 == 1秒
  </script>
</body>

</html>
```



练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 17:48</title>
</head>

<body>
  <p></p>

  <script>
    // 在 p 标签中, 实时显示当前时间
    setInterval(() => {
      const now = new Date().toLocaleTimeString()
      // 目标: 把 now 放到 p 标签的内容中显示
      // 1. 先找到p标签
      const ps = document.getElementsByTagName('p')
      console.log(ps)

      ps[0].innerHTML = now
    }, 1000);
  </script>
</body>

</html>
```



## 事件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>元素的事件 09:06</title>
</head>

<body>
  <!-- 事件: 在元素上触发的一些事情, 能够触发的事件都被系统提前规定好 -->
  <!-- https://www.runoob.com/jsref/dom-obj-event.html -->

  <button id="btn1" onclick="alert('Hello!')">Click Me!</button>

  <!-- 尝试通过 DOM方式, 给这个按钮添加事件 -->
  <button id="btn2">Hello!</button>

  <button id="btn3">点我打印 666</button>

  <script>
    const btn3 = document.getElementById('btn3')
    btn3.onclick = function () {
      alert("666")
    }

    // 1. 先查询到 btn2 元素
    const btn2 = document.getElementById('btn2')
    // 2. 为元素的onclick属性赋值
    btn2.onclick = function () {
      alert('DOM!!')
    }

    console.dir(btn2) // 查看onclick属性



    // id: 唯一标识;  说明理论上 只有一个 满足条件的元素
    // 所以 : getElementById 的结果是 元素本身

    // 区分: 昨天的根据标签名查找 tagName
    // 页面中可以存在多个 相同的标签, 例如 很多个 li.  所以查询结果是类数组

    // 从document中, 查找 id=btn1 的元素
    const btn1 = document.getElementById('btn1')

    console.log('btn1:', btn1)
    // 所有 on 开头的属性, 都是事件相关的
    console.dir(btn1)
  </script>
</body>

</html>
```



## style操作

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>style 09:35</title>
</head>

<body>
  <!-- 1个页面元素的样式, 由哪些因素决定? -->
  <!-- 1. 原本本身的样式:  w3c的标准规定 -->
  <!-- 2. 浏览器品牌 的 个性化美化 -->
  <!-- 3. class: 用户通过 class方案 -->
  <!-- 4. style: 内联样式的个性化 -->
  <button id="btn1">Click Me!</button>

  <div id="box" style="width: 100px;height: 100px; background-color: gray;"></div>

  <script>
    // 要求: box 被点击后, 背景色变为 红色red

    const box = document.getElementById('box')
    box.onclick = function () {
      // JS规范: 属性名不允许带有 -, 所以默认会以 小驼峰的形式出现
      this.style.backgroundColor = 'red'
      console.log(this.style)
    }


    // 1. 从document中查找到按钮元素
    const btn1 = document.getElementById('btn1')
    console.dir(btn1) // 找到 style 属性
    // 内联样式的优先级是最高的, 当这里赋值时, 会覆盖 前三种因素的效果
    btn1.style.color = 'green'

    // 与事件操作结合: 点击后, 让按钮的文字变红
    btn1.onclick = function () {
      // onclick属性 属于 btn1, 触发时 是btn1 触发的, 所以this是btn1
      this.style.color = 'red'
    }
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:13</title>
</head>

<body>
  <ul>
    <li>DOM</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>

  <script>
    // 需求: 点击li 让其变为红色

    // 问题: 要操作的元素个数>1个, 即多个.  考虑批量修改的方案

    // 利用 标签选择方案, 查询到所有的li
    const lis = document.getElementsByTagName('li')
    console.log(lis)

    // 用 for ... of 遍历这个伪数组
    for (const li of lis) {
      li.onclick = function () {
        // this: 此变量非常灵活, 需要运行时才知道代表什么
        // 所以: vscode 静态分析代码时 不知道this是什么, 所以无法提供准确的提示
        li.style.color = 'red'
      }
    }
  </script>
</body>

</html>
```

## querySelectorAll

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>选择器方案查找元素 10:27</title>

  <style>
    #girl>li {
      border: 1px solid blue;
    }
  </style>
</head>

<body>
  <ul id="boy">
    <li>富贵</li>
    <li>王五</li>
    <li>亮亮</li>
  </ul>

  <ul id="girl">
    <li>楠楠</li>
    <li>泡泡</li>
    <li>梦瑶</li>
  </ul>

  <script>
    // querySelectorAll
    // query:查询  selector:选择器  all:所有
    // 通过选择器查找所有符合的元素
    // qsa
    const girl_lis = document.querySelectorAll('#girl>li')
    console.log(girl_lis)
    // 此方式查询的结果, 是类数组类型, 但是其原型 NodeList中存在forEach方法可以实现遍历操作
    girl_lis.forEach(li => {
      li.onclick = function () {
        this.style.color = 'pink'
      }
    })

    // document: 整个html代码

    // 要想精确查找: 先找 id=boy 的元素
    const boy = document.getElementById('boy')
    // 再从boy里面查, 实现元素的小范围查找
    const boy_lis = boy.getElementsByTagName('li')
    console.log(boy_lis)

    for (const li of boy_lis) {
      li.onclick = function () {
        li.style.color = 'blue'
      }
    }
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:50</title>
</head>

<body>
  <ul id="box1">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>

  <ul id="box2">
    <li>Node.js</li>
    <li>Express</li>
    <li>SQL</li>
  </ul>

  <ul id="box3">
    <li>DOM</li>
    <li>jQuery</li>
    <li>HTML5</li>
  </ul>

  <script>
    const box1_lis = document.querySelectorAll('#box1>li')

    box1_lis.forEach(li => li.onclick = function () {
      this.style.color = 'red'
    })
  </script>
</body>

</html>
```

## class

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>class操作 11:17</title>

  <link rel="stylesheet" href="reset.css">

  <style>
    li {
      padding: 5px 10px;
      background-color: #ccc;
      border-radius: 4px;
      display: inline-block;
      cursor: pointer;
    }

    li:hover {
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    }

    /* <li class="active" */
    li.active {
      background-color: orangered;
      color: white;
    }
  </style>
</head>

<body>
  <h2>点击选择午餐:</h2>
  <ul>
    <li>KFC</li>
    <li>牛肉面</li>
    <li>麻辣烫</li>
    <li>黄焖鸡</li>
    <li>螺蛳粉</li>
  </ul>
  <script>
    // 需求: 点击 li 之后, 把他的 class="active"
    const lis = document.querySelectorAll('li')
    // 遍历查找到的元素们, 挨个绑定 点击事件
    lis.forEach(li => li.onclick = function () {
      // 在JS中, class 是关键词, 不能作为属性名
      // 改为 className

      console.dir(this) //找到 和 class 有关的属性
      // 切换效果:  有->无;  无->有;
      if (this.className == '') {
        this.className = 'active'
      } else {
        this.className = ''
      }
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:44</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
    }

    li {
      padding: 5px 15px;
      background-color: #eee;
      border-radius: 4px;
      margin: 4px;
      cursor: pointer;
    }

    li.suibian {
      background-color: orangered;
      color: white;
    }
  </style>
</head>

<body>
  <h2>勾选你的技术栈:</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>DOM</li>
    <li>Vue</li>
    <li>Node.js</li>
  </ul>

  <script>
    const lis = document.querySelectorAll('li')

    lis.forEach(li => li.onclick = function () {
      if (li.className == '') {
        li.className = 'suibian'
      } else {
        li.className = ''
      }
    })
  </script>
</body>

</html>
```

## 开关

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>switch 14:03</title>

  <style>
    .switch {
      border: 2px solid #aaa;
      background-color: #f6f6f6;
      display: inline-block;
      width: 100px;
      display: flex;
      cursor: pointer;
      padding: 2px;

      transition: 0.3s;
    }

    .switch>span {
      transition: 0.3s;
      width: 50px;
      height: 40px;
      background-color: #666;
    }

    .switch.open {
      background-color: #18832c;
    }

    .switch.open>span {
      transform: translateX(50px);
      background-color: orange;
      border-radius: 4px;
    }
  </style>
</head>

<body>
  <div class="switch open">
    <span></span>
  </div>

  <script>

    // querySelector: 直接查询到元素本身
    // 使用场景: 我们明确知晓要查询的元素只有1个时, 采用此方案更合理
    var my_switch = document.querySelector('.switch')
    console.log('my_switch:', my_switch);

    //1. 找到 .switch 元素
    var switchs = document.querySelectorAll('.switch')
    console.log(switchs)

    //2. 为其添加点击事件
    my_switch.onclick = function () {
      console.dir(this) // classList

      // classList 是通过构造函数创建出的对象, 属于对 原始的className 的封装
      // 提供强大的辅助功能

      // toggle: 开关, 切换
      // 自动判断目标样式是否存在, 实现切换效果
      this.classList.toggle('open')
      // if (this.className == "switch") {
      //   this.className = 'switch open'
      // } else {
      //   this.className = 'switch'
      // }
    }

    //3. 点击时判断其 class 的值, 来决定 open 样式的添加与否

  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 14:44</title>

  <style>
    #box {
      width: 200px;
      height: 200px;
      background-color: gray;
      transition: 0.3s;
    }

    #box.open {
      border-radius: 50%;
      background-color: orange;
    }
  </style>
</head>

<body>
  <div id="box"></div>

  <script>
    // 1. 预判 id=box的元素只有一个
    const box = document.querySelector('#box')

    box.onclick = function () {
      this.classList.toggle('open')
    }
  </script>
</body>

</html>
```

## 唯一性激活效果



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:11</title>
  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      width: 200px;
    }

    li {
      padding: 10px;
      background-color: #eee;
      margin-bottom: 4px;
      transition: 0.3s;
    }

    li.active {
      box-shadow: 0 0 2px 2px rgba(50, 150, 200, 0.2);
      padding-left: 30px;
      background-color: orange;
      color: white;
    }
  </style>
</head>

<body>
  <ul>
    <!-- active: 激活, 代表此项目默认选中状态 -->
    <li class="active">阶段1: 皮喆</li>
    <li>阶段2: 俊俊</li>
    <li>阶段3: 小新</li>
    <li class="xx yy">阶段4: 李四</li>
    <li>阶段5: 文华</li>
  </ul>

  <script>
    // 1. 先查找你操作的元素
    const lis = document.querySelectorAll('li')

    lis.forEach(li => li.onclick = function () {
      // 唯一性激活效果:
      // 先删除之前 激活的元素, 再激活新的
      // 预判: 只有1个处于激活状态, qs
      const li_active = document.querySelector('li.active')
      // 采用 classList 提供的 remove 方法, 删除指定的样式类
      li_active.classList.remove('active')

      // = : 会导致覆盖操作, 覆盖原有的值. 此写法存在风险.
      // this.className = 'active'

      // classList中提供了 add 方案, 会保留原有的class 然后添加新的
      this.classList.add('active')
    })
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:38</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
      background-color: #002c69;
      color: white;
      padding: 0 40px;
    }

    li {
      padding: 10px 35px;
      cursor: pointer;
    }

    li.active {
      background-color: orange;
    }
  </style>
</head>

<body>
  <ul>
    <li class="active">首页</li>
    <li>关于净美仕</li>
    <li>公司动态</li>
    <li>产品中心</li>
    <li>联系我们</li>
  </ul>

  <script>
    const lis = document.querySelectorAll('li')

    lis.forEach(li => li.onclick = function () {
      const li_active = document.querySelector('li.active')
      li_active.classList.remove('active')

      this.classList.add('active')
    })
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 16:11</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
      background-color: #f2f5f6;
      padding: 50px;
    }

    li {
      border: 1px solid #bbb;
      color: #333;
      background-color: white;
      padding: 5px 15px;
      margin: 5px;
      border-radius: 100px;
      cursor: pointer;
    }

    li:hover {
      border-color: #FF5D23;
      color: #FF5D23;
    }

    li.active {
      background-color: #FF5D23;
      color: white;
      border-color: #FF5D23;
    }
  </style>
</head>

<body>
  <ul>
    <li class="active">网游竞技</li>
    <li>单机游戏</li>
    <li>手游休闲</li>
    <li>娱乐天地</li>
    <li>颜值</li>
  </ul>

  <script>
    const lis = document.querySelectorAll('li')

    lis.forEach(li => li.onclick = function () {
      // 在整个页面上的所有元素中, 找到符合条件的: 查询会消耗一定的性能
      // const li_active = document.querySelector('li.active')
      // li_active.classList.remove('active')

      // 简单粗暴的做法: 遍历之前查到的每个li 都删除一次激活状态
      lis.forEach(li => li.classList.remove('active'))

      li.classList.add('active')
    })
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 16:41</title>

  <style>
    #box {
      display: flex;
    }

    #box>img {
      width: 140px;
      height: 140px;
      border-radius: 4px;
      margin: 4px;
      /* 原始比例 和 显示比例不同, 存在适配问题 */
      /* cover: 覆盖;  保持原有比例, 充满整个显示的区域 */
      object-fit: cover;

      transition: 0.5s;
    }

    #box>img.active {
      width: 305px;
    }
  </style>
</head>

<body>
  <div id="box">
    <img class="active" src="./imgs/bigskin-1.jpg" alt="">
    <img src="./imgs/bigskin-2.jpg" alt="">
    <img src="./imgs/bigskin-3.jpg" alt="">
    <img src="./imgs/bigskin-4.jpg" alt="">
    <img src="./imgs/bigskin-5.jpg" alt="">
  </div>

  <script>
    const imgs = document.querySelectorAll('#box>img')
    // onmouseover : 鼠标移动到某元素上时触发
    imgs.forEach(img => img.onmouseover = function () {
      imgs.forEach(img => img.classList.remove('active'))

      img.classList.add('active')
    })
  </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 17:16</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
      background-color: #0a0e10;
      padding: 40px;
    }

    li {
      margin: 10px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    li>img {
      width: 90px;
      margin-bottom: 5px;
      border: 5px solid #7a7a7a;
      border-radius: 0 14px;
    }

    li.active>img {
      border-color: orange;
    }
  </style>
</head>

<body>
  <ul>
    <li class="active">
      <img src="./imgs/smallskin-5.jpg" alt="">
      <span>时之愿境</span>
    </li>
    <li>
      <img src="./imgs/smallskin-4.jpg" alt="">
      <span>时之祈愿</span>
    </li>
    <li>
      <img src="./imgs/smallskin-3.jpg" alt="">
      <span>遇见神鹿</span>
    </li>
    <li>
      <img src="./imgs/smallskin-2.jpg" alt="">
      <span>森&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </li>
    <li>
      <img src="./imgs/smallskin-1.jpg" alt="">
      <span>鹿灵守心</span>
    </li>
  </ul>

  <script>
    const lis = document.querySelectorAll("li")

    lis.forEach(li => li.onmouseover = function () {
      lis.forEach(li => li.classList.remove('active'))

      li.classList.add('active')
    })
  </script>
</body>

</html>
```

## 广告弹窗

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>广告弹窗效果 17:37</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    #ad {
      padding: 10px;
      background-color: #eee;
      width: 200px;
      position: fixed;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      transition: 0.4s;
    }

    #ad.active {
      transform: translateY(0)
    }
  </style>
</head>

<body>
  <div id="ad">
    <button>关闭</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos, asperiores sit velit aut molestias quas
      placeat, autem alias corporis voluptates culpa nulla at ea sed illo ullam, nemo exercitationem?</p>
  </div>

  <script>
    setTimeout(() => {
      const ad = document.getElementById('ad')

      ad.classList.add('active')
    }, 3000)

    // 明确知晓: 关闭按钮只有一个
    const btn_close = document.querySelector('#ad>button')
    btn_close.onclick = function () {
      const ad = document.getElementById('ad')
      ad.classList.remove('active')
    }
  </script>
</body>

</html>
```

## 回顾

什么是DOM?

- `D`ocument `O`bject `M`odel: 文档对象模型
- HTML文档 被浏览器转为 document 对象, 然后再渲染到页面上

学习DOM能做什么?

- 学习 document 对象的用法
- 可以通过 JS 来操作页面上的内容
- 由于 JS 语言可以书写复杂的逻辑操作, 可以丰富页面的交互

如何查找要操作的元素

- 通过元素的特征
  - id: 唯一标识;  `document.getElementById`  结果是元素本身
  - tagName: 标签名; `document.getElementsByTagName` 结果是多个元素组成的`类数组`
    - 通常使用`for...of`遍历使用
- 通过css选择器查找
  - 单个元素: `document.querySelector`  结果是元素
  - 多个元素: `document.querySelectorAll` 结果是所有元素组成的`类数组`
    - 通过使用 `forEach` 遍历使用

操作元素的属性:

- 事件相关: 由浏览器规定的一系列事件
  - 这些属性都以`on`开头
    - 鼠标点击: onclick
    - 鼠标悬浮: onmouseover
- 样式相关
  - style: 内联样式. 优先级最高
  - class: 样式类
    - className: 本体. 一个字符串类型的值
    - classList: 通过构造函数生成的一个对象, 提供了操作 className 的一系列方法
      - toggle: 切换
      - add: 添加
      - remove: 删除

## 属性操作

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>属性操作 09:15</title>
</head>

<body>
  <!-- 1个元素上, 自带很多属性 -->
  <!-- 系统属性: 官方默认提供的, 每个属性都有自己的作用 -->
  <!-- 自定义属性: 添加一些自己的属性, 有两种添加方式 -->
  <!-- 1. 旧方案, 不规范: 随便写, 需要用固定方法来操作 -->
  <!-- 2. 新方案: 用 data- 做开头, 存储在 dataset 属性中 -->
  <a data-x="11" data-NanNAN-NANNAN="张三" suibian="随便" v-text="自定义格式" href="http://www.baidu.com" target="_blank"
    title="百度一下,你就知道" id="a1">百度一下</a>

  <script>
    const a1 = document.getElementById('a1')
    console.dir(a1) // 展开查看,找到上方书写的各个属性

    // 自定义属性: 用使用专业的方法来操作

    // 读:
    console.log(
      // Attribute: 属性
      // getAttribute: 读取元素上的自定义属性的值
      a1.getAttribute('suibian'),
      a1.getAttribute('v-text'),
    );

    // 写入操作
    a1.setAttribute('suibian', '换一个内容')

    // 读取使用 data- 声明的属性, 从 dataset 中读取
    // 多个单词 是 小驼峰命名法
    console.log(
      a1.dataset.x,
      a1.dataset.nannanNannan
    );
  </script>
</body>

</html>
```

## 练习



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 09:35</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
      margin-top: 10px;
    }

    li {
      margin: 0 10px 10px 0;
      background-color: #eee;
      padding: 10px 25px;
      border-radius: 4px;
      cursor: pointer;
    }

    li.active {
      background-color: orange;
    }
  </style>
</head>

<body>
  <h2>请选择今日的午餐:</h2>
  <ul>
    <!-- 如何在元素上 存储单价信息?  通过自定义属性实现-->
    <li data-price="22">黄焖鸡</li>
    <li data-price="18">红烧牛肉面</li>
    <li data-price="35">老乡鸡</li>
    <li data-price="30">麻辣烫</li>
    <li data-price="15">水果捞</li>
    <li data-price="25">盖浇饭</li>
  </ul>

  <div id="box">
    消费金额: <b>0</b>
  </div>

  <script>
    const lis = document.querySelectorAll('li')

    lis.forEach(li => li.onclick = function () {
      li.classList.toggle('active')

      // 查询到所有激活状态的li, 计算price的总和
      const li_actives = document.querySelectorAll('li.active')
      var total = 0
      li_actives.forEach(li => {
        const price = li.dataset.price * 1 //读取自定义属性 data-price 的值
        total += price
      })

      const b = document.querySelector('#box>b')
      b.innerHTML = total
    })
  </script>
</body>

</html>
```

## 练习



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:17</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    #box {
      width: 400px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
    }

    #box>img {
      width: 100%;
    }

    #box>div {
      display: flex;
    }

    #box>div>img {
      flex: 1;
      border: 3px solid transparent;
    }

    #box>div>img.active {
      border-color: orangered;
    }
  </style>
</head>

<body>
  <div id="box">
    <img src="imgs/1_lg.jpg" alt="">
    <div class="small">
      <!-- 自定义属性: 在小图上存放其对应的大图地址 -->
      <img data-big="imgs/1_lg.jpg" class="active" src="imgs/1_sm.jpg" alt="">
      <img data-big="imgs/2_lg.jpg" src="imgs/2_sm.jpg" alt="">
      <img data-big="imgs/3_lg.jpg" src="imgs/3_sm.jpg" alt="">
      <img data-big="imgs/4_lg.jpg" src="imgs/4_sm.jpg" alt="">
      <img data-big="imgs/5_lg.jpg" src="imgs/5_sm.jpg" alt="">
    </div>
  </div>

  <script>
    var imgs = document.querySelectorAll('#box>div>img')

    imgs.forEach(img => img.onmouseover = function () {
      imgs.forEach(img => img.classList.remove('active'))

      img.classList.add('active')
      // 读取大图地址:
      const big_src = img.dataset.big // data-big
      const img_big = document.querySelector('#box>img')
      // 修改 大图元素 显示的图片地址 src
      img_big.src = big_src
    })
  </script>
</body>

</html>
```



## 练习



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:43</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    #box {
      width: 600px;
    }

    #box>div {
      display: flex;
    }

    #box>div>img {
      border: 3px solid transparent;
    }


    #box>div>img.active {
      background-color: orange;
    }

    #box>img {
      width: 100%;
    }
  </style>
</head>

<body>
  <div id="box">
    <div>
      <img data-big="imgs/bigskin-1.jpg" class="active" src="imgs/smallskin-1.jpg" alt="">
      <img data-big="imgs/bigskin-2.jpg" src="imgs/smallskin-2.jpg" alt="">
      <img data-big="imgs/bigskin-3.jpg" src="imgs/smallskin-3.jpg" alt="">
      <img data-big="imgs/bigskin-4.jpg" src="imgs/smallskin-4.jpg" alt="">
      <img data-big="imgs/bigskin-5.jpg" src="imgs/smallskin-5.jpg" alt="">
    </div>
    <img src="./imgs/bigskin-1.jpg" alt="">
  </div>

  <script>
    const imgs = document.querySelectorAll('#box>div>img')

    imgs.forEach(img => img.onmouseover = function () {
      imgs.forEach(img => img.classList.remove('active'))

      img.classList.add('active')

      const big_src = img.dataset.big
      const img_big = document.querySelector('#box>img')
      img_big.src = big_src
    })
  </script>
</body>

</html>
```

## 练习


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:17</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    #box {
      width: 700px;
      overflow: hidden;
    }

    #box>ul {
      display: flex;
      background-color: #000;
    }

    #box>ul>li {
      flex: 1;
      padding: 10px 0;
      color: #b1b2be;
      text-align: center;
      cursor: pointer;
    }

    #box>ul>li.active {
      background-color: #262626;
      color: #f3c258;
    }

    #box>div>img {
      width: 100%;
      /* 关闭图片的 缩放属性 */
      flex: none;
    }

    #box>div {
      display: flex;
      transition: 0.3s;

      /* transform: translateX(-200%); */
    }
  </style>
</head>

<body>
  <div id="box">
    <div>
      <img src="wzry_imgs/1.jpeg" alt="">
      <img src="wzry_imgs/2.jpeg" alt="">
      <img src="wzry_imgs/3.jpeg" alt="">
      <img src="wzry_imgs/4.jpeg" alt="">
      <img src="wzry_imgs/5.jpeg" alt="">
    </div>

    <ul>
      <li data-x="0" class="active">夏洛特语音爆料</li>
      <li data-x="-100%">合金弹头4月上线</li>
      <li data-x="-200%">城市主理人招募</li>
      <li data-x="-300%">王者炸麦了</li>
      <li data-x="-400%">荣耀大话王</li>
    </ul>
  </div>

  <script>
    const lis = document.querySelectorAll('#box>ul>li')

    lis.forEach(li => li.onmouseover = function () {
      lis.forEach(li => li.classList.remove('active'))

      li.classList.add('active')

      // 读取偏移量x
      const x = li.dataset.x // data-x
      const div = document.querySelector('#box>div')
      div.style.transform = `translateX(${x})`
    })
  </script>
</body>

</html>
```

## 标签栏切换

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>标签栏切换 14:02</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    .tabs {
      width: 800px;
    }

    .tabs>.tab-bar {
      border-bottom: 1px solid #e4393c;
      background-color: #f7f7f7;
      display: flex;
    }

    .tabs>.tab-bar>li {
      padding: 10px 30px;
      cursor: pointer;
    }

    .tabs>.tab-bar>li:hover {
      color: #e4393c;
    }

    .tabs>.tab-bar>li.active {
      color: white;
      background-color: #e4393c;
    }

    .tab-content>li {
      height: 400px;
      display: none;
    }

    .tab-content>li.active {
      display: block;
    }
  </style>
</head>

<body>
  <div class="tabs">
    <ul class="tab-bar">
      <!-- 利用自定义属性 关联到 对应的内容项 -->
      <li data-cid="content-1" class="active">商品介绍</li>
      <li data-cid="content-2">规格与包装</li>
      <li data-cid="content-3">售后保障</li>
      <li data-cid="content-4">商品评价(20万+)</li>
      <li data-cid="content-5">商品问答</li>
    </ul>

    <ul class="tab-content">
      <!-- 利用唯一标识 id 进行区分 -->
      <li id="content-1" class="active" style="background-color: orange;"></li>
      <li id="content-2" style="background-color: blue;"></li>
      <li id="content-3" style="background-color: purple;"></li>
      <li id="content-4" style="background-color: palegreen;"></li>
      <li id="content-5" style="background-color: brown;"></li>
    </ul>
  </div>

  <script>
    const lis = document.querySelectorAll('.tab-bar>li')

    lis.forEach(li => li.onclick = function () {
      lis.forEach(li => li.classList.remove('active'))
      li.classList.add('active')

      // 查找到之前激活的内容元素, 删除其激活状态
      const content_active = document.querySelector('.tab-content>li.active')
      content_active.classList.remove('active')

      // 读取自定义属性: 内容项的id - cid
      const cid = li.dataset.cid
      // 通过id查找到对应的内容项元素
      const content = document.getElementById(cid)
      content.classList.add('active')
    })
  </script>
</body>

</html>
```

## 轮播图

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>轮播图 14:41</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    .banner {
      width: 600px;
      overflow: hidden;
      border: 2px solid green;
      position: relative;
    }

    .banner>.btns {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }

    .banner>.imgs {
      display: flex;
      transition: 0.3s;
    }

    .banner>.imgs>img {
      width: 100%;
    }

    .banner>ul {
      display: flex;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .banner>ul>li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: white;
      margin: 4px;
    }

    .banner>ul>li.active {
      background-color: #0aa1ed;
    }
  </style>
</head>

<body>
  <div class="banner">
    <div class="imgs">
      <img src="imgs/banner1.png" alt="">
      <img src="imgs/banner2.png" alt="">
      <img src="imgs/banner3.png" alt="">
      <img src="imgs/banner4.png" alt="">
    </div>
    <!-- 页数指示点 -->
    <ul>
      <li data-x="0" class="active"></li>
      <li data-x="-100%"></li>
      <li data-x="-200%"></li>
      <li data-x="-300%"></li>
    </ul>

    <div class="btns">
      <button class="prev">上一页</button>
      <button class="next">下一页</button>
    </div>
  </div>

  <script>
    const lis = document.querySelectorAll('.banner > ul > li')

    lis.forEach(li => li.onmouseover = function () {
      lis.forEach(li => li.classList.remove('active'))

      li.classList.add('active')

      const x = li.dataset.x
      const div_imgs = document.querySelector('.banner>.imgs')
      div_imgs.style.transform = `translateX(${x})`
    })

    /////////////////////////////////////////
    //下一页: 
    const btn_next = document.querySelector('button.next')
    btn_next.onclick = function () {
      // 当前激活小圆点的 下一个点
      const li_active = document.querySelector('.banner li.active')
      // 下一个兄弟元素 nextElementSibling
      // next:下一个  element:元素  sibling:兄弟
      const li_next = li_active.nextElementSibling || document.querySelector('.banner li:first-child')

      console.log('当前激活圆点的下一个兄弟元素:', li_next);
      // 通过代码方式, 触发元素的 onmouseover 事件
      li_next.onmouseover()
    }

    ///////////////////////////////
    // 上一页:
    // 上一个兄弟元素: previousElementSibling
    const btn_prev = document.querySelector('.banner button.prev')
    btn_prev.onclick = function () {
      const li_active = document.querySelector('.banner li.active')

      const li_prev = li_active.previousElementSibling || document.querySelector('.banner li:last-child')

      li_prev.onmouseover()
    }

    // 定时器: 每隔4秒 自动触发下一页按钮的点击事件
    setInterval(() => {
      btn_next.onclick()
    }, 4000);

    // 逻辑短路语法 ||
    // 逻辑或: 值为从左到右 的首个 真值 true
    var res = null || 0 || '' || 11 || false
    console.log('res:', res);
  </script>
</body>

</html>
```

## 内容

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>标签内容 16:16</title>
</head>

<body>
  <div id="box1">Hello World!</div>

  <div id="box2">
    <a href="">Hello World!</a>
  </div>

  <script>
    const box1 = document.getElementById('box1')
    const box2 = document.getElementById('box2')

    console.log('box1.innerHTML:', box1.innerHTML)
    console.log('box1.innerText:', box1.innerText)

    console.log('box2.innerHTML:', box2.innerHTML)
    console.log('box2.innerText:', box2.innerText)

    // 总结:
    // inner: 内部的
    // innerHTML: 内部的html代码
    // innerText: 内部的文本内容

    // 如果: 标签中只有文本
    // 则 两个属性的 内容是相同的

    var words = '<h1>Nice To Meet You!</h1>'

    box1.innerHTML = words // 字符串会作为HTML代码被解析后显示
    box2.innerText = words // 字符串会作为普通文本, 不解析
  </script>
</body>

</html>
```

## 计数器

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>计数器 16:28</title>
</head>

<body>
  <div class="price" data-price="99">单价: ¥99</div>
  <div class="counter">
    <button>-</button>
    <span>10</span>
    <button>+</button>
  </div>
  <div class="total">总价格: ????</div>

  <script>
    const counter = document.querySelector('.counter')
    // children: 孩子们, 获取元素的 子元素们
    console.dir(counter) // 查看其 children 属性
    // 解构语法
    const [btn_minus, span_count, btn_add] = counter.children

    btn_add.onclick = function () {
      span_count.innerHTML++
      update()
    }

    btn_minus.onclick = function () {
      span_count.innerHTML--
      update()
    }

    // 用于更新页面上元素的状态
    function update() {
      // 读取单价 和 数量相乘, 结果赋值给总价
      const div_price = document.querySelector('.price')
      const price = div_price.dataset.price
      // 与数量相乘: 得到总价
      const total = price * span_count.innerHTML
      // 赋值到总价格元素中
      const div_total = document.querySelector('.total')
      div_total.innerHTML = `总价格: ¥${total}`

      // 根据数量的值, 来决定减按钮的不可用状态

      btn_minus.disabled = (span_count.innerHTML == 1)

      // span_count.innerHTML == 1 ? btn_minus.disabled = true : btn_minus.disabled = false

      // if (span_count.innerHTML == 1) {
      //   btn_minus.disabled = true
      // } else {
      //   btn_minus.disabled = false
      // }
    }

    /// 初始化显示时, 先更新一次
    update()
  </script>
</body>

</html>
```

## 购物车

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>购物车 17:15</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    table {
      width: 800px;
    }

    thead {
      background-color: #eee;
    }

    td {
      padding: 10px 0;
      text-align: center;
      border: 1px solid gray;
    }
  </style>
</head>

<body>
  <table>
    <thead>
      <tr>
        <td>序号</td>
        <td>商品名</td>
        <td>单价</td>
        <td>数量</td>
        <td>小计</td>
      </tr>
    </thead>

    <tbody>
      <!-- <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr> -->
    </tbody>

    <tfoot>
      <tr>
        <td colspan="5">总金额: ????</td>
      </tr>
    </tfoot>
  </table>

  <script>
    var data = [
      { name: "黄焖鸡", count: 3, price: 22 },
      { name: "炝莲白", count: 6, price: 17 },
      { name: "西红柿牛腩", count: 3, price: 52 },
      { name: "包子", count: 6, price: 3 },
      { name: "烤鸭", count: 1, price: 40 },
      { name: "麻辣烫", count: 13, price: 35 },
    ]

    var temp = data.reduce((box, value, index) => {
      const { count, name, price } = value

      return box + `<tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td data-price="${price}">¥${price}</td>
        <td>
          <button>-</button>
          <span>${count}</span>
          <button>+</button>
        </td>
        <td></td>
      </tr>`
    }, '')

    const tbody = document.querySelector('tbody')
    tbody.innerHTML = temp


    // 1. 查询到所有的计数器, 然后挨个实现其 + 和 - 操作
    const counters = document.querySelectorAll('tbody td:nth-child(4)')

    console.log(counters)

    counters.forEach(counter => {
      const [btn_minus, span_count, btn_add] = counter.children

      btn_add.onclick = function () {
        span_count.innerHTML++
        update()
      }

      btn_minus.onclick = function () {
        span_count.innerHTML--
        update()
      }
    })

    // 页面的更新
    function update() {
      counters.forEach(counter => {
        const [btn_minus, span_count] = counter.children
        // 计数器td 的上一个兄弟
        const td_price = counter.previousElementSibling
        // 下一个兄弟: 小计
        const td_subtotal = counter.nextElementSibling

        // 单价:
        const price = td_price.dataset.price  // data-price
        // 小计 = 单价 x 数量
        const total = price * span_count.innerHTML
        td_subtotal.innerHTML = `¥${total}`
        // 减按钮的不可用
        btn_minus.disabled = span_count.innerHTML == 1
      })
    }

    update()
  </script>
</body>

</html>
```



## 知识点总结

属性操作的方案

- 系统属性: 元素自带的属性, 各有各的功能
  - src: 图片的, 用来设置 img标签展示的图片地址
  - innerHTML: html内容的操作
  - innerText: 纯文本的内容操作
- 自定义属性
  - 旧写法: 随便声明的属性, 名称不要跟系统属性重名即可
    - 通过固定的方法来读取和写入
    - getAttribute: 读取
    - setAttribute: 写入
  - 新写法
    - 固定格式: 使用 `data-` 开头来声明自定义属性
    - 存储在 dataset 属性中, 多个单词以小驼峰命名法进行保存

## 购物车

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>购物车 10:41</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    table {
      width: 800px;
    }

    thead {
      background-color: #eee;
    }

    td {
      padding: 10px 0;
      text-align: center;
      border: 1px solid gray;
    }
  </style>
</head>

<body>
  <table>
    <thead>
      <tr>
        <td>序号</td>
        <td>商品名</td>
        <td>单价</td>
        <td>数量</td>
        <td>小计</td>
      </tr>
    </thead>

    <tbody>
      <!-- <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr> -->
    </tbody>

    <tfoot>
      <tr>
        <td colspan="5">总金额: ????</td>
      </tr>
    </tfoot>
  </table>

  <script>
    var data = [
      { name: "黄焖鸡", count: 3, price: 22 },
      { name: "炝莲白", count: 6, price: 17 },
      { name: "西红柿牛腩", count: 3, price: 52 },
      { name: "包子", count: 6, price: 3 },
      { name: "烤鸭", count: 1, price: 40 },
      { name: "麻辣烫", count: 13, price: 35 },
    ]

    var temp = data.reduce((box, value, index) => {
      const { count, name, price } = value

      return box + `<tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td data-price="${price}">¥${price}</td>
        <td>
          <button>-</button>
          <span>${count}</span>
          <button>+</button>
        </td>
        <td></td>
      </tr>`
    }, '')

    const tbody = document.querySelector('tbody')
    tbody.innerHTML = temp


    // 1. 查询到所有的计数器, 然后挨个实现其 + 和 - 操作
    const counters = document.querySelectorAll('tbody td:nth-child(4)')

    console.log(counters)

    counters.forEach(counter => {
      const [btn_minus, span_count, btn_add] = counter.children

      btn_add.onclick = function () {
        span_count.innerHTML++
        update()
      }

      btn_minus.onclick = function () {
        span_count.innerHTML--
        update()
      }
    })

    // 页面的更新
    function update() {
      var sum = 0 //存储总金额

      counters.forEach(counter => {
        const [btn_minus, span_count] = counter.children
        // 计数器td 的上一个兄弟
        const td_price = counter.previousElementSibling
        // 下一个兄弟: 小计
        const td_subtotal = counter.nextElementSibling

        // 单价:
        const price = td_price.dataset.price  // data-price
        // 小计 = 单价 x 数量
        const total = price * span_count.innerHTML

        sum += total // 小计累加给 总金额

        td_subtotal.innerHTML = `¥${total}`
        // 减按钮的不可用
        btn_minus.disabled = span_count.innerHTML == 1
      })

      // 查询到总金额 的 td, 进行赋值
      const td_sum = document.querySelector('tfoot td')
      td_sum.innerHTML = `总金额: ¥${sum}`
    }

    update()
  </script>
</body>

</html>
```



## 表单元素事件

- focus: 获取焦点
- blur: 失去焦点
- change: 内容有变化
- input: 实时输入
- keyUp: 按键抬起
  - 利用事件参数中的 keyCode 识别具体的按键

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>表单元素事件 09:02</title>

  <style>
    #box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  </style>
</head>

<body>
  <!-- 表单元素: 和用户之间存在交互操作的元素.  按钮 输入框 下拉框 勾选框.. -->
  <div id="box">
    <input type="text">
    <input type="checkbox">
    <!-- 范围 1 - 100 -->
    <input type="range" min="1" max="100">
  </div>

  <script>
    const inp1 = document.querySelector('#box>input:first-child')

    // 1. 获得焦点 focus
    inp1.onfocus = function () {
      console.log('获得焦点 focus')
    }
    // 2. 失去焦点 blur
    inp1.onblur = function () {
      console.log('失去焦点 blur')
    }
    // 3. 内容变化 change
    // 内容变更后, 按回车 或 失去焦点时触发
    inp1.onchange = function () {
      // 单标签的值存储在 value 属性
      console.log('内容变化 change: ', this.value);
    }

    // 4. 内容输入 input
    inp1.oninput = function () {
      console.log('输入内容 input:', this.value)
    }

    // 5. 键盘事件 keyup
    // 事件参数: 由系统触发的事件, 默认会把本次事件相关联的信息 作为参数传递到事件方法中
    // 形参名: event事件. 习惯上会缩写为 e
    inp1.onkeyup = function (e) {
      console.log(arguments)
      console.log('按键抬起 keyup:', e)
      // 可以通过 keyCode 属性, 来分辨具体的按键
      // 回车的 keyCode : 13
      if (e.keyCode == 13) alert("回车按钮被点击!")
    }

    // 勾选框的 勾选状态
    const inp2 = document.querySelector('#box>input:nth-child(2)')
    inp2.onchange = function () {
      // checked: 此属性用于保存当前的勾选状态
      console.log('勾选框:', this.checked)
    }

    // 
    const inp3 = document.querySelector('#box>input:nth-child(3)')
    // change: 滑块松手后, 才会触发
    inp3.onchange = function () {
      console.log('change:', this.value)
    }
    // input: 实时的
    inp3.oninput = function () {
      console.log('input:', this.value)
    }
  </script>
</body>

</html>
```

## 练习: 输入框内容格式验证

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:00</title>

  <style>
    input {
      padding: 5px;
      border: 1px solid #333;
      outline: none;
      border-radius: 3px;
    }

    input:focus {
      border-color: blue;
    }

    td {
      vertical-align: top;
    }

    /* 如果 输入框 带有 ok 样式, 则 div.ok 应该显示 */
    input.ok~div.ok {
      display: block;
    }

    /* ~ : 下方所有兄弟元素 */
    input.err~div.err {
      display: block;
    }

    input.err {
      border-color: red;
    }

    div.err {
      color: red;
      display: none;
    }

    div.ok {
      color: green;
      display: none;
    }
  </style>
</head>

<body>
  <!-- 对于存在隐藏效果的元素, 都应该先在HTML中书写 -->
  <table>
    <tbody>
      <tr>
        <td>手机号</td>
        <td>
          <input type="text" placeholder="可用于登录和找回密码">
          <div class="err">手机号码格式不正确</div>
          <div class="ok">手机号正确</div>
        </td>
      </tr>
    </tbody>
  </table>

  <script>
    // 当光标从输入框离开 - 失去焦点. 检查内容是否为手机号码格式
    const inp = document.querySelector('input')

    inp.onblur = function () {
      // 如果没有输入值, 则不进行检查!
      if (this.value == '') return

      // 利用 正则表达式 验证字符串格式
      if (/^1[3-9]\d{9}$/.test(this.value)) {
        this.classList.add('ok')
      } else {
        this.classList.add('err')
      }
    }

    // 获取焦点时: 清空之前的样式类
    inp.onfocus = function () {
      this.className = '' //因为是清空操作, 不需要什么技巧, 直接操作原始值
    }
  </script>

</body>

</html>
```

## 练习: 实时搜索

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:00</title>
</head>

<body>
  <input type="text" placeholder="请输入商品名">

  <ul id="result"></ul>

  <script>
    // 监听输入框的 实时输入 操作, 到服务器查询相关的数据进行展示
    const inp = document.querySelector('input')

    inp.oninput = function () {
      const kw = this.value

      var url = `https://serverms.kunkun.cool/mall/search?type=1&kw=${kw}&page=1`

      var xhr = new XMLHttpRequest()
      xhr.open('get', url)
      xhr.onload = function () {
        var data = JSON.parse(xhr.response)
        console.log(data)

        const result = document.getElementById('result')
        result.innerHTML = data.data.reduce((box, value) => {
          return box + `<li>${value.name}</li>`
        }, '')
      }
      xhr.send()
    }
  </script>
</body>

</html>
```

## 勾选框联动

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:25</title>

  <style>
    button {
      background-color: #72b134;
      color: white;
      width: 200px;
      border: none;
      border-radius: 2px;
      height: 34px;
    }

    /* 伪类选择器: 鼠标按下时 */
    button:active {
      opacity: 0.8;
    }

    /* 伪类选择器: 不可用时 */
    button:disabled {
      background-color: #ccc;
    }
  </style>
</head>

<body>
  <div>
    <label>
      <input type="checkbox">
      我已阅读并同意用户注册协议
    </label>
  </div>

  <button disabled>提交注册</button>

  <script>
    const chb = document.querySelector('input')
    const btn = document.querySelector('button')

    chb.onchange = function () {
      btn.disabled = !this.checked
      // if (this.checked) {
      //   // 勾选-真;   不可用-假
      //   btn.disabled = false
      // } else {
      //   btn.disabled = true
      // }
    }
  </script>
</body>

</html>
```

## 滑块: 颜色选择

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:42</title>

  <style>
    #box {
      width: 200px;
      height: 200px;
      border: 2px solid gray;
    }
  </style>
</head>

<body>
  <table>
    <tbody>
      <tr>
        <td>Red</td>
        <td><input type="range" min="0" max="255" value="0"></td>
        <td>0</td>
      </tr>
      <tr>
        <td>Green</td>
        <td><input type="range" min="0" max="255" value="0"></td>
        <td>0</td>
      </tr>
      <tr>
        <td>Blue</td>
        <td><input type="range" min="0" max="255" value="0"></td>
        <td>0</td>
      </tr>
    </tbody>
  </table>

  <div id="box"></div>

  <script>
    const trs = document.querySelectorAll('tbody>tr')
    // 查询 3个 range 
    const ranges = document.querySelectorAll('[type=range]')

    // 给每个滑块都要添加 实时变更事件, 来更新页面内容
    ranges.forEach(range => {
      range.oninput = function () {
        update()
      }
    })

    // 更新页面
    function update() {
      ranges.forEach(range => {
        // 值所在的td, 是range标签的父元素的下一个兄弟
        // parentElement: 父元素
        const td_value = range.parentElement.nextElementSibling
        td_value.innerHTML = range.value
      })

      // 获取 rgb 三个值
      const red = ranges[0].value
      const green = ranges[1].value
      const blue = ranges[2].value

      const box = document.getElementById('box')
      box.style.backgroundColor = `rgb(${red},${green},${blue})`
    }
    update()
  </script>
</body>

</html>
```



## 事件的冒泡机制

当元素上触发一个事件之后, 会传递给父元素触发相同的事件

- 事件参数中的`target`: 代表触发事件的当事元素
- 事件参数中的`stopPropagation` 方法, 可以主动停止冒泡机制

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件的冒泡机制 14:01</title>

  <style>
    #red {
      background-color: red;
      width: 500px;
      height: 500px;
    }

    #green {
      background-color: green;
      width: 300px;
      height: 300px;
    }

    #blue {
      background-color: blue;
      width: 100px;
      height: 100px;
    }
  </style>
</head>

<body>
  <div id="red">
    <div id="green">
      <div id="blue"></div>
    </div>
  </div>

  <script>
    // 事件的冒泡机制: 子元素上发生一个事件后, 默认会传播到父元素, 触发相同的事件

    const red = document.getElementById('red')
    const green = document.getElementById('green')
    const blue = document.getElementById('blue')

    // 当事元素: 事件触发的当事'人'
    red.onclick = function (e) {
      console.log('red click!');

      //事件参数中的 target 属性, 存储的就是当事元素
      console.log('当事元素:', e.target)
    }

    green.onclick = function () {
      console.log('green click!');
    }

    blue.onclick = function (e) {
      // stopPropagation: 停止传播. 则不再冒泡到父元素
      e.stopPropagation()
      console.log('blue click!');
    }
  </script>
</body>

</html>
```

## 委托模式

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件委托 14:21</title>

  <style>
    ul {
      display: flex;
      border: 2px solid green;
      padding: 10px;
    }

    ul>li {
      list-style: none;
      background-color: #f5f5f5;
      padding: 10px 20px;
      margin: 5px;
    }

    .active {
      background-color: orange;
    }
  </style>
</head>

<body>
  <!-- 委托: 自己不亲自完成任务, 让其他人帮忙 -->
  <!-- 事件委托: 元素自身不处理事件, 而是让父元素帮忙处理 -->
  <ul id="box">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>DOM</li>
    <li>Vue</li>
  </ul>

  <script>
    // 思想: 要操作哪些元素 就要先把它们查询出来, 再通过遍历的方式挨个捆绑事件
    // const lis = document.querySelectorAll('#box>li')

    // lis.forEach(li => li.onclick = function () {
    //   this.classList.add('active')
    // })

    // 代理方案: 每个li触发点击事件后, 都会传递给父元素. 那么直接让父元素处理点击事件
    const box = document.querySelector('#box')
    box.onclick = function (e) {
      console.log('当事元素:', e.target)

      // 问题: 必须判断 当事元素 是否是 我们要处理的元素
      // 当前场景中: 只处理 标签名 是  li 的元素
      console.dir(e.target) // 查看哪个属性代表 标签名

      // 如果标签名 不是 li , 则终止执行
      if (e.target.localName != 'li') return

      // 帮助当事元素添加激活类
      e.target.classList.add('active')
    }
  </script>
</body>

</html>
```

## 练习: 动态新增子元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 14:45</title>
</head>

<body>
  <!-- 适合采用委托模式的场景: 动态新增的子元素 -->
  <button>新增元素</button>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>

  <script>
    const btn = document.querySelector('button')
    const ul = document.querySelector('ul')

    btn.onclick = function () {
      ul.innerHTML += '<li>新增...</li>'

    }
    // 点击li之后, 颜色变红  style.color = 'red'
    // 查询到所有li, 遍历增加点击事件, 点击后修改 style

    // 问题: 运行时只有3个li存在, 所以只影响了 这3个li
    // 对于后续增加的li, 并没有影响, 所以导致 没有点击效果

    // const lis = document.querySelectorAll('li')
    // lis.forEach(li => li.onclick = function () {
    //   li.style.color = 'red'
    // })


    // 委托: 给父元素增加任务.  不管什么时候增加的子元素, 都让父元素帮忙
    ul.onclick = function (e) {
      // 判定: 当事元素不是li的,不进行处理
      if (e.target.localName != 'li') return

      e.target.style.color = 'red'
    }
  </script>
</body>

</html>
```

## 练习: 网络请求+委托

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:16</title>

  <style>
    #menu {
      display: flex;
      margin: 0;
      padding: 0;
    }

    #menu>li {
      list-style: none;
      margin: 6px;
      cursor: pointer;
    }

    #menu>li.active {
      color: orange;
      border-bottom: 2px solid orange;
    }
  </style>
</head>

<body>
  <ul id="menu">

  </ul>

  <script>
    var url = 'https://douyu.kunkun.cool/api/cate/recList'
    var ul = document.querySelector('#menu')

    var xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onload = function () {
      var data = JSON.parse(xhr.response)
      console.log(data)

      ul.innerHTML = data.data.reduce((box, value, index) => {
        // 根据序号 给出不同的初始样式
        return box + `<li class="${index == 0 ? 'active' : ''}">${value.name}</li>`
      }, '')
    }
    xhr.send()

    // 委托模式: 通过父元素 ul 标签, 帮助子元素 li 实现点击事件的效果
    ul.onclick = function (e) {
      if (e.target.localName != 'li') return

      const li_active = document.querySelector('#menu>li.active')
      li_active.classList.remove('active')

      e.target.classList.add('active')
    }
  </script>
</body>

</html>
```



## 事件监听器

重复为相同的事件绑定方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件监听器 15:50</title>
</head>

<body>
  <button>Click Me!</button>

  <script>
    const btn = document.querySelector('button')
    // 通过属性来绑定事件的弊端: 同一时间只能绑定一个
    // 风险: 团队合作时, 可能不同的组员给同一个元素绑定了相同的事件, 导致BUG
    btn.onclick = function () {
      console.log(1)
    }

    btn.onclick = function () {
      console.log(2)
    }

    // 事件监听器: 为事件添加多个响应的方法, 按顺序执行 而不会覆盖
    // 参数1: 事件名. 比如 click blur focus change ...
    // 参数2: 关联的方法
    btn.addEventListener('click', function () {
      console.log(3)
    })

    btn.addEventListener('click', function () {
      console.log(4)
    })
  </script>
</body>

</html>
```



## 页面的滚动事件

scroll

通过 pageYOffset 读取滚动的距离

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>窗口的滚动事件 16:15</title>

  <style>
    #nav {
      padding: 20px;
      background-color: orange;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }

    /* 当带有 class=show 时, 则显示 */
    #nav.show {
      display: block;
    }
  </style>
</head>

<body>
  <div id="nav">这是一个导航栏</div>

  <!-- 监听页面的滚动, 调整某些内容的显示和隐藏 -->
  <ul id="box"></ul>

  <script>
    const box = document.getElementById('box')
    for (let i = 0; i < 200; i++) {
      box.innerHTML += `<li>${i}</li>`
    }

    // 隐藏前缀: window 窗口
    // 滚动事件: scroll
    addEventListener('scroll', function () {
      console.log('滚动中...')
      // 读取竖向滚动距离
      console.log(pageYOffset)

      // 如果滚动距离 超出100像素, 就显示导航栏
      const nav = document.getElementById('nav')
      if (pageYOffset > 100) {
        nav.classList.add('show')
      } else {
        nav.classList.remove('show')
      }
    })
  </script>
</body>

</html>
```



## createDOM

利用JS方式创建DOM元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>创建DOM元素</title>

  <style>
    #box {
      width: 400px;
      height: 300px;
      background-color: gray;
    }
  </style>
</head>

<body>
  <!-- 
    DOM: 文档对象模型
    - 书写HTML代码, 浏览器帮我们转化成document对象, 最终渲染到页面上

    HTML代码相当于 语法糖. 比存粹的document 代码更加易读
    但是转化过程 需要消耗额外的系统资源

    对于性能的极致追求: 抛开HTML代码, 直接用 document 方式来创建页面元素
    - 浏览器的解析操作 由 程序员来完成

    目前世界排名第一的前端框架 React, 就是利用这种思想实现. 0 HTML编程
   -->

  <script>
    // 创建1个 div 元素
    // createElement: 通过标签名 来创建元素
    const box = document.createElement('div')
    box.id = 'box'
    console.log(box)
    // body: 代表body标签
    // appendChild: 添加子元素
    document.body.appendChild(box)

    // 在box中新增超链接:
    const a_baidu = document.createElement('a')
    a_baidu.innerHTML = '百度一下'
    a_baidu.title = '百度一下, 你就知道'
    a_baidu.href = 'https://www.baidu.com'

    box.appendChild(a_baidu)

    const btn = document.createElement('button')
    btn.innerHTML = 'Click Me!'
    btn.addEventListener('click', function () {
      alert("Hello !")
    })
    box.appendChild(btn)
  </script>
</body>

</html>
```



## 封装技巧

体验封装的魅力

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Query 17:11</title>

  <style>
    .warning {
      background-color: orange;
      padding: 5px;
      border-radius: 3px;
    }
  </style>
</head>

<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>DOM</li>
  </ul>

  <script>
    // 原生DOM操作的缺点:
    // 1. 对于结果要遍历操作
    // 2. 方法名比较长
    // const lis = document.querySelectorAll('li')
    // lis.forEach(li => li.style.color = 'red')

    function $(selector) {
      return document.querySelectorAll(selector)
    }

    // 在原型中增加 css 方法, 用于设置style
    NodeList.prototype.css = function (name, value) {
      // element 元素,  缩写: el
      // [] : 方括号语法, 其中是JS代码, 此处是 name 变量的值
      this.forEach(el => el.style[name] = value)
    }

    NodeList.prototype.addClass = function (className) {
      this.forEach(el => el.classList.add(className))
    }

    const lis = $('li')
    console.log(lis)


    // 利用封装技巧: 预期效果如下:
    $('li').css('color', 'red')
    $('li').addClass('warning')
  </script>

  <script>
    // 对象的属性操作有两种语法: [] 和 . 

    var emp = { x: 20, ename: "小明", age: 19, [11 + 9]: 'xxx' }
    console.log(emp)
    // 方括号语法: []中书写JS代码
    let x = 'ename'
    console.log(emp[x]) //小明
    console.log(emp.x) // 20


    // 点语法:
    console.log(emp.ename, emp.age)
    emp.ename = '孙凯'
    emp.age = 33
  </script>
</body>

</html>
```



## jQuery

在 2006年1月 发布, 在`当年`属于重量级的 javascript库, 利用封装技巧大大简化了 DOM操作的方式

- 属于当时市场占有率第一的库

https://jquery.com/

理念: `write less,do more`  写得少,做的多

下载地址: https://jquery.com/download/

# jQuery

> 2006年发布的 javascript 脚本库. 利用封装技巧把操作DOM的方式进行了简化
>
> 理念:write less, do more!   写的少,做的多

## css方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$ 09:03</title>
</head>

<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>DOM</li>
  </ul>

  <!-- 使用脚本前, 必须先引入 -->
  <script src="jquery-3.6.4.js"></script>
  <script>
    console.log(window)
    // jQuery脚本在全局对象中添加了 $ 和 jQuery  函数

    // 查询到所有li元素
    console.log(
      // 参数是 css 选择器;   等价与 document.querySelectorAll
      $('li')
    );

    // 利用css方法: 可以自动遍历修改 所有查询到的元素 的 style 属性
    $('li').css('color', 'red')
    // 设置 padding: 10px
    $('li').css("padding", '10px')
    // 设置 margin: 10px
    // 简化: 与像素单位有关的, 如果不写单位 默认是 px
    $('li').css('margin', 10)
    // 边框:
    $('li').css('border', '4px solid gray')
    // 圆角: border-radius 修改为 10px
    $('li').css('border-radius', 10)
    // 多个单词组成的 css 属性, 有两种写法:  字符串 或 小驼峰
    $('li').css('backgroundColor', 'green')

    // 支持 函数重载机制 实现多功能函数效果
    // 根据实参的 个数 或 类型 不同, 完成不同的任务
    console.log(
      // 只有一个参数: 则读取查询到的首个元素的 指定样式的值
      $('li').css('color')
    );

    // 参数只有一个 && 对象类型: 可以同时设置多个属性
    $('li').css({
      'font-size': 25,
      listStyle: 'none',
      width: 200
    })
  </script>
</body>

</html>
```



## 事件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件 09:33</title>
</head>

<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>DOM</li>
  </ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    // 把点击触发的方法, 通过实参方式传入
    $('li').click(
      function () {
        console.log('this:', this)
        // 使用 jQuery 提供的 css 方法, 则比如把 元素 转为 jQuery 包装的
        console.log('$(this):', $(this))

        // $():属于多功能函数
        // $(字符串): 负责查询到 指定的元素
        // $(元素): 封装成 jQuery 类型的对象
        // $(this) : 把this进行封装后, 能够使用 jQuery提供的功能
        // 类似:  托尼斯塔克 穿上 钢铁侠的机甲, 就能飞天遁地
        $(this).css('color', 'red')
      }
    )
  </script>
</body>

</html>
```



## class操作

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>class操作</title>

  <style>
    .danger {
      padding: 10px;
      border-radius: 3px;
      background-color: red;
      color: white;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
    }
  </style>
</head>

<body>

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>DOM</li>
  </ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('li').click(function () {
      $(this).addClass('danger')
    })
  </script>
</body>

</html>
```



## 练习: 选中效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:10</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
    }

    li {
      margin: 4px;
      background-color: #eee;
      padding: 10px 20px;
    }

    li.active {
      background-color: orange;
      color: white;
    }
  </style>
</head>

<body>
  <h2>点击选择午餐:</h2>
  <ul>
    <li>KFC</li>
    <li>牛肉面</li>
    <li>麻辣烫</li>
    <li>黄焖鸡</li>
    <li>螺蛳粉</li>
  </ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('li').click(function () {
      // toggleClass: 切换样式
      $(this).toggleClass('active')
    })
  </script>
</body>

</html>
```



## 练习:单选效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:21</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    li {
      background-color: #eee;
      padding: 10px;
      width: 200px;
      margin-bottom: 10px;
      transition: 0.3s;
    }

    li.active {
      background-image: linear-gradient(to right, red, orange);
      color: white;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
      padding-left: 30px;
    }
  </style>
</head>

<body>
  <ul>
    <li class="active">阶段1:晓宇</li>
    <li>阶段2:亮亮</li>
    <li>阶段3:小新</li>
    <li>阶段4:王五</li>
    <li>阶段5:文华</li>
  </ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('li').click(function () {
      // 把之前激活的删除样式
      // $('li.active').removeClass('active')

      // siblings(): 兄弟元素们
      // 当前项.添加样式().兄弟项目们.删除样式()
      $(this).addClass('active').siblings().removeClass('active')
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:38</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
      background-color: #002c69;
      padding: 0 30px;
    }

    li {
      padding: 10px 30px;
      color: white;
      cursor: pointer;
    }

    li.active {
      background-color: orange;
    }
  </style>
</head>

<body>
  <ul>
    <li class="active">首页</li>
    <li>关于净美仕</li>
    <li>公司动态</li>
    <li>产品中心</li>
    <li>联系我们</li>
  </ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('li').click(function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:50</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
      background-color: #f5f5f6;
      padding: 30px;
    }

    li {
      background-color: white;
      margin: 6px;
      color: #4e6ef2;
      width: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      cursor: pointer;
    }

    li.active {
      background-color: #4e6ef2;
      color: white;
    }
  </style>
</head>

<body>
  <ul>
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('li').click(function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
  </script>
</body>

</html>
```

## 显示和隐藏

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>显示与隐藏 11:16</title>

  <style>
    #box {
      width: 200px;
      height: 200px;
      background-color: gray;
      margin-top: 20px;
    }
  </style>
</head>

<body>
  <button>显示</button>
  <button>隐藏</button>
  <button>切换</button>
  <div id="box"></div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    // 隐藏
    console.log($('button'))

    // 获取查询出来的结果中, 序号1个的按钮
    console.log($('button')[1]) // 获取的是 原生的元素

    // eq(): 从查询结果中获取 指定序号的元素, 并封装成jQuery对象
    console.log($('button').eq(1)) // 获取的是 用jQuery包裹的 元素

    $('button').eq(1).click(function () {
      // hide:隐藏
      $('#box').hide()
    })

    $('button').eq(0).click(function () {
      $('#box').show() // 显示
    })

    $('button').eq(2).click(function () {
      $('#box').toggle() //切换
    })
  </script>
</body>

</html>
```

## 练习:菜单展开

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:31</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    #box {
      border: 2px solid gray;
      width: 400px;
    }

    #box>h3 {
      background-color: #eee;
      padding: 6px;
      cursor: pointer;
    }

    ul {
      display: none;
    }

    ul>li {
      padding: 5px;
      border-bottom: 1px dashed gray;
    }
  </style>
</head>

<body>
  <div id="box">
    <h3>点击查看一阶段内容</h3>
    <ul>
      <li>html</li>
      <li>css</li>
      <li>js</li>
      <li>sass</li>
    </ul>

    <h3>点击查看二阶段内容</h3>
    <ul>
      <li>node.js</li>
      <li>express</li>
      <li>云服务器</li>
      <li>mysql</li>
    </ul>

    <h3>点击查看三阶段内容</h3>

    <ul>
      <li>JSCORE</li>
      <li>DOM</li>
      <li>jQuery</li>
      <li>美食广场项目</li>
    </ul>
  </div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('#box>h3').click(function () {
      // next(): 下一个兄弟元素
      // $(this).next().toggle()

      // 带有滑动动画的过渡效果, 实现显示切换
      // slideToggle
      // 参数1: 动画时长, 两种写法: 'fast' 或 'slow';  或写 毫秒数
      $(this).next().slideToggle(200)  // 1000毫秒 = 1秒
    })
  </script>
</body>

</html>
```

## 练习:底部弹窗

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 11:50</title>
  <link rel="stylesheet" href="reset.css">
  <style>
    #ad {
      background-color: #eee;
      padding: 5px;
      position: fixed;
      bottom: 0;
      right: 0;
      width: 200px;
    }
  </style>
</head>

<body>
  <div id="ad">
    <button>关闭</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, atque! Nam ratione inventore molestiae veniam quo
      perspiciatis exercitationem. Deserunt expedita cum rem fuga similique perspiciatis autem ipsa et aliquid dolor.
    </p>
  </div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('#ad>button').click(function () {
      // $('#ad').hide()
      // 滑动收起
      // 回调函数: 当动画结束时会触发
      $('#ad').slideUp(function () {
        // alert("动画结束!")
        setTimeout(() => {
          $('#ad').slideDown() // 滑动展开
        }, 2000);
      })
    })
  </script>
</body>

</html>
```

## 自定义动画

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>动画效果制作 14:01</title>

  <style>
    #box {
      width: 100px;
      height: 100px;
      background-color: gray;
      /* 相对定位: 在调整位置时, 不会影响其他元素 */
      position: relative;
    }
  </style>
</head>

<body>
  <!-- 
    动画分三种制作方式:
    - transition: 过渡动画/补间动画
    - @keyFrame : 关键帧动画
    - JS动画: 捕捉频率刷新频率来实现
   -->
  <button>开始</button>
  <button>结束</button>

  <div id="box"></div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('button').eq(0).click(function () {
      // animate: 用动画的方式, 调整元素的样式
      // - transform 和 颜色相关 不支持
      $('#box').animate({ left: 100, height: 50 })
        // 支持动画队列: 多个动画可以排队执行
        .animate({ top: 200, width: 50 })
        // 可以通过参数2 设置动画时长, 单位毫秒
        .animate({ left: 0 }, 1000)
        // 可以添加函数, 作为结束时的回调函数
        .animate({ top: 0, width: 100, height: 100 }, function () {
          // alert("success!")
        })
    })


    // 结束动画
    $('button').eq(1).click(function () {
      // 停止的默认设定: 立刻停止当前动画, 继续动画队列中后续的
      // 样式默认会保持在停止时的状态

      // 参数1: 是否要清空整个动画队列, 默认false 代表不清空
      // 参数2: 停止时是否要跳转到动画的最终效果: 默认false , 不跳转
      $('#box').stop(true, true)
    })
  </script>
</body>

</html>
```

## 练习: 标签栏切换

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 14:29</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    #banner {
      width: 700px;
      overflow: hidden;
    }

    #banner>div {
      display: flex;
      position: relative;
      left: -100%;
    }

    #banner>div>img {
      width: 100%;
      flex: none;
    }

    #banner>ul {
      display: flex;
      background-color: #000;
    }

    #banner>ul>li {
      flex: 1;
      text-align: center;
      line-height: 40px;
      color: #b1b2be;
      cursor: pointer;
    }

    #banner>ul>li.active {
      background-color: #262626;
      color: #f2c158;
    }
  </style>
</head>

<body>
  <div id="banner">
    <div>
      <img src="wzry_imgs/1.jpeg" alt="">
      <img src="wzry_imgs/2.jpeg" alt="">
      <img src="wzry_imgs/3.jpeg" alt="">
      <img src="wzry_imgs/4.jpeg" alt="">
      <img src="wzry_imgs/5.jpeg" alt="">
    </div>

    <ul>
      <li class="active">夏洛特语音爆料</li>
      <li>合金弹头4月上线</li>
      <li>城市主理人招募</li>
      <li>王者炸麦了</li>
      <li>荣耀大话王</li>
    </ul>
  </div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('#banner>ul>li').mouseover(function () {
      $(this).addClass('active').siblings().removeClass('active')
      // index(): 获取元素在兄弟元素中的序号
      const i = $(this).index()
      console.log('i:', i)

      $('#banner>div').stop().animate({ left: `-${i}00%` })
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:15</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    .tabs {
      width: 800px;
    }

    .tabs>ul {
      display: flex;
      border-bottom: 1px solid #e4393c;
      background-color: #f7f7f7;
    }

    .tabs>ul>li {
      padding: 15px 30px;
      cursor: pointer;
    }

    .tabs>ul>li.active {
      color: white;
      background-color: #e4393c;
    }

    .tabs>div>div {
      height: 300px;
    }
  </style>
</head>

<body>
  <div class="tabs">
    <ul>
      <li class="active">商品介绍</li>
      <li>规格与包装</li>
      <li>售后保障</li>
      <li>商品评价(20万+)</li>
      <li>商品问答</li>
    </ul>

    <div class="tab-content">
      <div style="background-color: green;"></div>
      <div style="background-color: red;"></div>
      <div style="background-color: blue;"></div>
      <div style="background-color: yellow;"></div>
      <div style="background-color: brown;"></div>
    </div>
  </div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('.tabs>ul>li').click(function () {
      $(this).addClass('active').siblings().removeClass('active')

      // 根据当前点击项的序号, 找到对应序号的内容元素, 让其显示
      const i = $(this).index()

      // eq(): 从已查询到的元素中, 找到对应序号的
      $('.tabs>div>div').eq(i).show().siblings().hide()
    })

    // 初始化状态: 就应该触发第一个标签的点击事件
    // click(): 有两种用途
    // 1. 不传递参数: 就是触发事件
    // 2. 传递函数: 就是给元素绑定事件
    $('.tabs>ul>li').eq(0).click()
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 15:44</title>
  <link rel="stylesheet" href="reset.css">
  <style>
    .small {
      display: flex;

    }

    .small>img.active {
      border: 4px solid brown;
    }

    .large>img {
      width: 600px;
    }
  </style>
</head>

<body>
  <div class="small">
    <img class="active" src="imgs/smallskin-1.jpg" alt="">
    <img src="imgs/smallskin-2.jpg" alt="">
    <img src="imgs/smallskin-3.jpg" alt="">
    <img src="imgs/smallskin-4.jpg" alt="">
    <img src="imgs/smallskin-5.jpg" alt="">
  </div>

  <div class="large">
    <img src="imgs/bigskin-1.jpg" alt="">
    <img src="imgs/bigskin-2.jpg" alt="">
    <img src="imgs/bigskin-3.jpg" alt="">
    <img src="imgs/bigskin-4.jpg" alt="">
    <img src="imgs/bigskin-5.jpg" alt="">
  </div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('.small>img').mouseover(function () {
      $(this).addClass('active').siblings().removeClass('active')

      const i = $(this).index()
      $('.large>img').eq(i).show().siblings().hide()
    })

    //////////////
    $('.small>img').eq(0).mouseover()
  </script>
</body>

</html>
```

## 属性操作

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>属性操作 16:20</title>
</head>

<body>
  <!-- 
    元素具有两种属性:
    - 系统属性
    - 自定义属性
      -- 旧写法: 随便写. 用 getAttribute 和 setAttribute 操作
      -- 新写法: data- 开头;  用 dataset 属性操作
   -->
  <a data-x="10" data-nan-NAN="张三" suibian="随便" v-text="自定义属性" href="https://www.baidu.com" target="_blank">百度一下</a>

  <script src="jquery-3.6.4.js"></script>
  <script>
    // jQuery提供了 prop 和 attr 和 data 三种方法可以操作属性

    // prop: 操作系统属性
    console.log(
      $('a').prop('href'),
      $('a').prop('target'),
    )
    // 修改操作: 使用两个参数
    $('a').prop('href', 'https://www.jd.com')

    // 自定义属性: 万能用法 attr
    console.log(
      $('a').attr('suibian'),
      $('a').attr('v-text'),
      $('a').attr('data-x'),
      $('a').attr('href'),
    )

    $('a').attr('suibian', '修改一下')

    // data(): 只能用于读取 data- 定义的属性, 无法修改;  修改用attr
    console.log(
      $('a').data('x') //data-x
    );
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 16:38</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    #box {
      width: 300px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    }

    #box>img {
      width: 100%;
    }

    #box>div {
      display: flex;
    }

    #box>div>img {
      flex: 1;
      border: 2px solid transparent;
    }

    #box>div>img.active {
      border-color: orangered;
    }
  </style>
</head>

<body>
  <div id="box">
    <img src="imgs/1_lg.jpg" alt="">
    <div>
      <img data-lg="imgs/1_lg.jpg" class="active" src="imgs/1_sm.jpg" alt="">
      <img data-lg="imgs/2_lg.jpg" src="imgs/2_sm.jpg" alt="">
      <img data-lg="imgs/3_lg.jpg" src="imgs/3_sm.jpg" alt="">
      <img data-lg="imgs/4_lg.jpg" src="imgs/4_sm.jpg" alt="">
      <img data-lg="imgs/5_lg.jpg" src="imgs/5_sm.jpg" alt="">
    </div>
  </div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('#box>div>img').mouseover(function () {
      $(this).addClass('active').siblings().removeClass('active')

      //读取自定义属性 data-lg 的值
      const lg = $(this).data('lg')
      // 设置给大图的 src 属性:  src属于系统属性, 使用prop方法操作
      $('#box>img').prop('src', lg)
    })
  </script>
</body>

</html>
```

## 标签内容

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>内容 17:10</title>
</head>

<body>
  <!-- innerHTML 和 innerText -->
  <div id="box1">Hello World!</div>

  <div id="box2">
    <a href="">Hello World!</a>
  </div>

  <ul></ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    console.log('box1 html:', $('#box1').html())
    console.log('box1 text:', $('#box1').text())

    console.log('box2 html:', $('#box2').html())
    console.log('box2 text:', $('#box2').text())

    // 赋值语法:
    var kw = '<h1>Hello</h1>'

    $('#box1').html(kw)
    $('#box2').text(kw)

    // 数组:
    var data = [
      '<li>HTML</li>',
      '<li>CSS</li>',
      '<li>JS</li>',
      '<li>DOM</li>',
    ]
    // 如果 参数是数组类型, 会自动利用 join('') 完成拼接后 再赋值
    $('ul').html(data)
  </script>
</body>

</html>
```

## get请求

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网络请求 17:23</title>
</head>

<body>
  <ul></ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    console.dir($) // 查看其中的属性, 比如  get 

    var url = 'https://api.kunkun.cool/car/news.json'
    // jQuery把 ajax 操作做了封装, 比如 get 方法专门负责get请求
    $.get(url, data => {
      console.log(data)

      // 用 map 把数据映射成 html代码组成的数组
      // const arr = data.data.list.map(value => {
      //   return `<li>${value.title}</li>`
      // })

      $('ul').html(
        data.data.list.map(value => {
          return `<li>${value.title}</li>`
        })
      )
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 17:40</title>
</head>

<body>
  <ul></ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    var url = 'https://mfresh.kunkun.cool/data/news_select.php'

    $.get(url, data => {
      console.log(data)

      $('ul').html(
        data.data.map(value => `<li>${value.title}</li>`)
      )
    })
  </script>
</body>

</html>
```



## 总结

jQuery: 2006年推出的 javascript 脚本库

- write less, do More: 写的少,做的多

  - 通过封装, 提供的方法名很短
  - 方法基本上都自带遍历操作
  - 方法几乎都有函数重载机制: 根据实参的不同 产生不同的效果

- `$`: 是jQuery脚本在 全局window对象中注入的一个属性, 是函数类型

  - $(参数)
    - 参数是字符串: 查找操作
    - 参数是元素: 元素封装成jQuery的对象
  - css: 操作 style 属性
  - class相关
    - addClass: 添加
    - removeClass: 删除
    - toggleClass: 切换
  - 事件相关: click mouseover
    - 事件名(): 触发事件
    - 事件名(函数): 给元素绑定事件
  - 显示和隐藏
    - show 和 hide : 简单的添加 display:none
    - slideToggle, slideDown, slideUp : 带有滑动动画的 显示/隐藏
  - 自定义动画 animate
    - 不适用于 颜色 和 transform
  - 属性相关
    - prop: 系统属性
    - attr: 万能方法, 适用于 系统 和 自定义
    - data: 仅适用于 data- 声明的属性 的 `读取操作`

  - 内容
    - html(): innerHTML
    - text(): innerText
  - 网络请求: get 方法
    - $.get(接口地址, 回调函数)

   

# jQuery02

## 新增子元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>新增子元素 09:02</title>
</head>

<body>
  <button>新增</button>

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>SASS</li>
  </ul>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('button').click(function () {
      // append: 新增
      $('ul').append('<li>新元素</li>')
    })

    // 委托模式: 
    // 前提:事件的冒泡机制 -子元素上触发一个事件后, 会传递给父元素触发相同事件
    // 委托: 让父元素帮子元素完成事件的相关任务

    // 委托模式下: 需要分辨当事元素

    // 提供 on 方法, 特别适合委托场景:
    // 参数1: 事件名
    // 参数2: 可以书写css选择器, 来过滤出要操作的当事元素
    $('ul').on('click', '>li', function () {
      console.log('this:', this) // 代表触发事件的 当事元素

      $(this).css('color', 'red')
    })


    $('li').click(function () {
      $(this).css('color', 'red')
    })
  </script>
</body>

</html>
```

## 委托

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>委托模式 09:18</title>
</head>

<body>
  <div id="box">
    <ul class="boy">
      <li>富贵</li>
      <li>王五</li>
      <li>亮亮</li>
    </ul>

    <ul class="girl">
      <li>楠楠</li>
      <li>梦瑶</li>
      <li>燕子</li>
    </ul>
  </div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('#box').on('click', '>.boy>li', function () {
      $(this).css('color', 'red')
    })

    $('#box').on('click', '.girl>li', function () {
      $(this).css('color', 'green')
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 09:27</title>

  <link rel="stylesheet" href="reset.css">
  <style>
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      margin: 0 15px 15px 0;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
    }
  </style>
</head>

<body>
  <ul>
    <!-- <li>
      <img src="" alt="">
      <span></span>
    </li> -->
  </ul>

  <button>获取更多</button>

  <script src="jquery-3.6.4.js"></script>
  <script>
    // 场景: 一大堆代码,频繁执行, 只要小部分有变更
    // 封装技巧实现复用
    function getData(page) {
      var url = `https://douyu.kunkun.cool/api/room/list?page=${page}&type=yz`

      $.get(url, data => {
        console.log(data)
        // html: innerHTML = xxx 属于覆盖效果
        // append: 累加,新增
        $('ul').append(
          data.data.list.map(value => {
            return `<li>
            <img src="${value.roomSrc}" alt="">
            <span>${value.roomName}</span>
          </li>`
          })
        )

        // 在ul标签上,添加一个属性,存储当前页
        $('ul').attr('data-page', data.data.nowPage)
      })
    }

    // 初始化时, 获取第一页数据
    getData(1)

    // 获取更多
    $('button').click(function () {
      // 读取ul的自定义属性 data-page
      // 默认是字符串的值, 要 *1 转数字
      const page = $('ul').attr('data-page') * 1
      console.log(page)
      getData(page + 1)
    })
  </script>
</body>

</html>
```

## 在元素上保存数据 data

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>data方法 10:19</title>
</head>

<body>
  <!-- 
    data: 可以在元素上存储数据
    当使用data方法读取数据时, 拥有附加功能: 如果有 data- 自定义的属性, 也能帮忙读取
   -->
  <div id="box"></div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    $('#box').data('x', 100)  //在元素上存储一个属性x, 值是100
    console.log($('#box')) // 展开查看, x存放在哪里

    console.log($('#box').data('x'))
  </script>
</body>

</html>
```

## 练习: 加载更多

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:25</title>
</head>

<body>
  <ul>
    <!-- <li>新闻标题...</li> -->
  </ul>

  <button>获取更多</button>

  <script src="jquery-3.6.4.js"></script>
  <script>
    function getData(page) {
      var url = 'https://mfresh.kunkun.cool/data/news_select.php?pageNum=' + page

      $.get(url, data => {
        console.log(data)

        $('ul')
          .append(
            data.data.map(value => `<li>${value.title}</li>`)
          )
          .data('page', data.pageNum)
      })
    }

    getData(1)

    $('button').click(function () {
      // 每次点击都要触发相同的代码, 考虑封装
      const page = $('ul').data('page')
      getData(page + 1)
    })
  </script>
</body>

</html>
```

练习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 10:46</title>
</head>

<body>
  <ul></ul>
  <button>获取更多</button>

  <script src="jquery-3.6.4.js"></script>
  <script>
    function getData(page) {
      var url = 'https://serverms.kunkun.cool/mall?page=' + page

      $.get(url, data => {
        console.log(data);

        $('ul').append(
          data.data.map(value => {
            return `<li>${value.name}</li>`
          })
        ).data('page', data.page)
      })
    }

    getData(1)

    $('button').click(function () {
      const page = $('ul').data('page')
      getData(page + 1)
    })
  </script>
</body>

</html>
```



## Node.js

检查node.js 的环境: `node -v`

- 确保版本在 `12+` 即可

下载地址: https://nodejs.org/zh-cn


---

npm: 包管理工具

- 用于下载第三方模块代码, 需要修改`下载源`.  默认从国外下载, 下载速度慢 甚至无法下载

  ```
  设置中国镜像: npm set registry https://registry.npmmirror.com
  查看当前镜像: npm get registry
  ```




## 把项目包使用 node.js 管理

> vscode 能够自动识别模块, 进而提供`丰富的提示`

在 项目包目录下, 执行初始化命令: `npm init -y`

安装模块: `npm i jquery`




## 外部js文件: 准备就绪

```js
// 07.js

// 防御性编程: 通常出现在 多人协作 开发场景中
// 需要提前预判 使用者 有可能出现的问题, 提前预案解决

// 预判: 使用此js文件的人, 有可能在head中引入, 导致代码无法查询到DOM元素
// 解决: 监听 DOM元素加载完毕的时候, 再调用代码

// DOMContentLoaded: DOM的内容加载完毕 时触发
addEventListener('DOMContentLoaded', function () {
  // 问题: 在 .js 中书写 jQuery 代码, 没有提示!
  // 解决: 借助node.js的环境, 来提供代码提示
  $('ul').css('border', '2px solid gray')
  // 划线: 代表被抛弃, 不推荐使用.  但是这里是误报
  $('li').click(function () {
    alert("111")
  })
})

// jQuery做了封装, 简化上方的写法:
$(function () {
  $('ul').css('background-color', 'orange')
})

// $(实参):  函数重载有三种情况
// 字符串: 当做 css选择器 进行元素查找
// 元素: 封装成 jquery类型的对象
// 函数: 在DOM元素加载完毕后, 再调用
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>准备就绪 11:18</title>

  <script src="jquery-3.6.4.js"></script>
  <!-- 此处代码运行时, 下方的body 还没有开始加载, 导致查询不到对应元素 -->
  <script src="./07.js"></script>
</head>

<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>DOM</li>
  </ul>

  <!-- 1个html文件, 可以由3种代码组成: css html js -->
  <!-- 都写在1个文件中, 会导致结构复杂 -->
  <!-- 所以往往把 css 和 js 拆分成外部文件 -->

  <!-- 脚本中依赖 jQuery 脚本, 则必须先引入 jQuery 再引入其他脚本 -->
  <!-- <script src="07.js"></script> -->


  <!-- <script src="jquery-3.6.4.js"></script> -->
  <!-- 正常人: -->
  <!-- <script src="07.js"></script> -->

  <script>
    $('li').css('color', 'red')
  </script>
</body>

</html>
```

## load :加载外部html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>加载外部html文件 14:02</title>

  <style>
    body>div {
      border: 3px solid black;
      margin-bottom: 20px;
      padding: 20px;
    }
  </style>
</head>

<body>
  <div id="demo01"></div>
  <div id="demo02"></div>
  <div id="demo03"></div>
  <div id="demo04"></div>

  <script src="jquery-3.6.4.js"></script>
  <script>
    // 此语法仅支持通过服务器运行的html文件
    // 参数1: 要加载文件地址
    // 参数2: 加载完毕后的回调函数
    $('#demo01').load('./02.delegate.html', function () {
      $('ul').css('border', '2px solid green')
    })

    // load操作是异步操作, 类似网络请求
    // 必须在 load 操作完毕后, 才能去操作加载过来的元素
    // $('ul').css('border', '2px solid green')

    // $('#demo02').load('./06.practice.html')

    // $('#demo03').load('./05.practice.html')
  </script>
</body>

</html>
```



## BOM

> DOM: Document Object Model  文档对象模型
>
> - 操作页面上的内容
>
> `BOM`: Browser Object Model  浏览器对象模型
>
> - 操作浏览器的一些 API 合称 BOM

例如 location 用于操作浏览器地址栏相关,  属于 BOM 的范畴



### location

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>位置信息 14:19</title>
</head>

<body>
  <button onclick="location.reload()">reload 刷新</button>

  <!-- 无法返回之前的页面 -->
  <button onclick="location.replace('http://www.baidu.com')">替换</button>

  <!-- assign: 指派;  带有历史操作, 能够返回上一页 -->
  <button onclick="location.assign('http://www.baidu.com')">指派新页面</button>

  <!-- 路径的格式:   路径?参数=值&参数=值... -->
  <a href="?name=kaikai&age=18&phone=18873734444">路径参数</a>

  <script>
    console.log(location)
    // URLSearchParams : 专门用于读取路径中参数的构造函数
    const params = new URLSearchParams(location.search)
    console.log(
      'name:', params.get('name')
    );
  </script>
</body>

</html>
```

### 刷新保持输入框内容

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>练习 14:41</title>
</head>

<body>
  <!-- 模拟百度的 搜索栏内容, 页面刷新不丢失的效果 -->
  <input type="text">
  <button>百度一下</button>

  <script src="jquery-3.6.4.js"></script>
  <script>
    // 页面初始化时, 立刻从地址栏中读取参数
    const wd = new URLSearchParams(location.search).get('wd')
    // 设置到 输入框中, 作为其默认值显示
    $('input').val(wd) // value = wd


    // 当点击 百度一下 按钮时, 把输入框的值读取 然后放到地址栏参数中
    $('button').click(function () {
      // 输入框的值: value
      // 作者简化成 val() 方法, 用于操作输入框的值
      const wd = $('input').val()
      console.log('wd:', wd)

      location.assign('?wd=' + wd)
    })
  </script>
</body>

</html>
```

## 全局css变量

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>css全局变量 15:14</title>

  <style>
    html {}

    /* 伪类选择器: 代表页面的根元素, 即 html 标签, 习惯在这里声明全局变量 */
    :root {
      /* css变量的格式: --变量名: 值; */
      --color-red: rgb(0, 200, 0);
      /* 在 html 标签下的所有后代元素中, 都可以使用此变量 */

      /* 全局变量的优点: 便于维护; 只要修改变量的值, 就可以影响到所有使用了此变量的元素 */
    }

    li:nth-child(2) {
      /* var(变量) : 此语法找到变量的值 */
      color: var(--color-red);
    }

    ul {
      border: 2px solid var(--color-red);
    }
  </style>
</head>

<body>
  <!-- 变量: 可以多次 重复的使用 -->

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>
</body>

</html>
```

# ToolChain

> 前端工具链

传统的web制作: 书写 HTML CSS JS ...

- 小作坊, 手工业

现代的web制作采用工程化的模式

- 流水线:使用一套规范的工具, 按照固定的流程进行开发
- 有了规范之后, 就可以保障最终产物的质量 和 开发效率



## Webpack

https://webpack.docschina.org/



### 传统开发的问题

关于使用外部的js脚本时, 如何知道引入的脚本 是否依赖其他的脚本呢?

- 例如:引入demo.js之后, 还必须引入其依赖的 jQuery.js文件

- 期望的解决方案: 外部js脚本 能够自己携带自身依赖的其他脚本, 不需要在html中引入

  `自己的事情自己做!!`

关于外部的scss文件

- 在现代的开发中, 大量采用预编译的scss语言. 但是每次都要编译成css再运行.
- `期望`: 能否自动编译?   目前采用插件解决

关于服务器:

- 目前用live server 插件解决

> 最终期望:能否有一个 `一站式`解决方案
>
> - 一款工具, 其中自动提供: 服务器 + scss编译 + 解决脚本的依赖问题
>
> webpack工具诞生!



#### Webpack

是Node.js提供的模块

> 最基本的功能: 支持把Node.js 的模块化语法 转换成 普通的浏览器支持的脚本

1. 创建项目包: `webpack-demo`

2. 初始化成npm管理的环境: `npm init -y`

3. 安装webpack模块:`npm i webpack webpack-cli`

   



## 总结

前端工具链: 把一系列的开发工具整合在一起, 有序的运行. 最终提供完善的代码产物

- webpack: 实现工具链的一款工具
- vite: 也是类似的工具
- ...

第四阶段学习的 vue 框架:

- 就是用 webpack 搭建而来的

第五阶段学习的 React 框架:

- 也是用webpack搭建的

> webpack是给高级/架构工程师使用的工具

```js
// index.js
// 模块化语法: Node.js环境下提供的, 浏览器不支持
// 允许在JS文件中, 引入来自其他JS的模块
// webpack: 能够自动把 模块化语法转为普通的浏览器支持的脚本
// 执行命令: npx webpack
// 效果: 把 jQuery脚本的代码 和 当前文件的代码合并在一起, 存储在main.js中

// 安装jquery模块: npm i jquery
const $ = require('jquery')
const axios = require('./axios')

// 在js中引入外部的css文件
// webpack基础功能仅能打包JS类型的文件, 如果要操作其他类型文件, 则比如使用对应的 加载器- loader
// 1. 安装加载器模块: npm i css-loader style-loader
import './my.css'
// npm i sass-loader sass
import './my.scss'

// 图片类型的文件: 需要特殊配置后才能加载,  默认已经集成了加载器, 只要配置即可
import bigskin4 from './bigskin-4.jpg';
const img = new Image(200, 140)
img.style.border = '3px solid red'
img.src = bigskin4
$('body').append(img)

$('h1').css('color', 'red')

var url = 'https://api.kunkun.cool/car/news.json'
// 传统开发时, 如果使用来自外部脚本中的内容, 没有代码提示
// 但是在 模块化开发时, 会给出提示!  -- 重大升级
axios.get(url).then(res => res.json()).then(data => {
  console.log(data)
})

// 编译后, main.js 会自动更新
```



```js
// index.js

// 关于开发环境:
// - 目前每次修改代码,都要手动执行 编译命令
// - webpack提供了监听模式, 自动监听页面的内容变化, 进行编译
// 需要在 package.json 中进行配置启动的脚本

// 关于开发服务器: webpack提供了热更新服务器
// npm i webpack-dev-server
// 执行命令: npm run start  启动服务器
// 特点: 比 live server 插件提供的服务器, 给出更多的报错提示. 辅助程序员写出更好的代码
// 从4阶段开始, 都会使用 webpack 自带的服务器来进行开发

// index.html 生成的插件
// npm i html-webpack-plugin

// ES6模块引入语法, 和 const $ = require('jquery') 作用一致
// 仅仅语法有所不同 
import $ from 'jquery'

$('h1').css('color', 'blue')

$('body').append(
  `<p>Hello !!</p>`
)
```



```js
// ES6(ES2015)中提供的代码
// 兼容性问题: 这些语法无法适配2016年之前的浏览器

// babel: https://www.babeljs.cn/
// 可以把 ES6+ 的代码降级为 ES5  即 ES2009 的代码格式

// 官方文档
// https://webpack.docschina.org/loaders/babel-loader

// npm i babel-loader @babel/core @babel/preset-env
// 在配置文件中进行加载

var url = 'https://api.kunkun.cool/car/news.json'

fetch(url).then(res => res.json()).then(data => {
  console.log(data)
})

////////////////
class Emp {
  constructor(ename, age) {
    this.ename = ename
    this.age = age
  }
}

var emp1 = new Emp('小明', 22)
console.log({ emp1 })
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Hello Webpack!</h1>

  <!-- <script src="./src/index.js"></script> -->
  <!-- 引入浏览器支持的脚本 -->
  <script src="./dist/main.js"></script>
</body>

</html>
```



## 面向对象 OOP

面相对象开发有三大特征: 封装, 继承, 多态

- 封装: `中级程序员 需要掌握`
  - function 或 class 把代码封装成一个整体使用
- 继承: `高级程序员需要掌握, 在封装框架中使用`
- 多态: 封装框架时使用 - 高级程序员的领域



### 封装

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>封装 14:34</title>
</head>

<body>
  <script>
    // 封装: 把一些代码存储在一起, 后续可以复用
    function get(url, cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('get', url)
      xhr.send()
      xhr.onload = function () {
        cb(JSON.parse(xhr.response))
      }
    }

    // 复用: 重复使用
    get('https://api.kunkun.cool/car/news.json', data => {
      console.log(data)
    })

    var emp = { ename: "小明", age: 22 }
  </script>
</body>

</html>
```



### 继承

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>继承 14:41</title>
</head>

<body>
  <!-- 继承: 1个人可以拥有另外一个人的所有资源 -->
  <!-- 面相对象中的继承: 子类 可以拥有 父类的 所有属性和方法 -->

  <script>
    // 提取公共的代码
    class Animal {
      constructor(name, category) {
        this.name = name
        this.category = category
      }
    }

    // 制作几个构造函数: 猫  狗  羊
    // extends: 继承; Cat就可以使用Animal中的方法
    class Cat extends Animal {
      // constructor(name, category) {
      //   this.name = name
      //   this.category = category
      // }

      cry() {
        console.log('喵喵...');
      }
    }


    class Dog extends Animal {
      // constructor(name, category) {
      //   this.name = name
      //   this.category = category
      // }

      cry() {
        console.log('汪汪...');
      }
    }

    class Sheep extends Animal {
      // constructor(name, category) {
      //   this.name = name
      //   this.category = category
      // }

      cry() {
        console.log('咩咩...');
      }
    }

    var cat_mimi = new Cat('咪咪', 4)
    var dog_wangcai = new Dog('旺财', 5)
    var sheep_duoli = new Sheep("多利", 3)
    console.log(cat_mimi);
    console.log(dog_wangcai);
    console.log(sheep_duoli);
  </script>
</body>

</html>
```



### 多态

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>多态 15:17</title>
</head>

<body>
  <!-- 继承: 1个人可以拥有另外一个人的所有资源 -->
  <!-- 面相对象中的继承: 子类 可以拥有 父类的 所有属性和方法 -->

  <script>
    // 提取公共的代码
    class Animal {
      constructor(name, category) {
        this.name = name
        this.category = category
      }
      // 公共的方法: 所有动物都会 叫, 但是具体如何叫要看具体的子类
      cry() { }
    }

    class Cat extends Animal {
      // 重写: override;  把父元素提供的属性 重新书写
      cry() {
        console.log('喵喵...');
      }
    }


    class Dog extends Animal {
      cry() {
        console.log('汪汪...');
      }
    }

    class Sheep extends Animal {
      cry() {
        console.log('咩咩...');
      }
    }

    var cat_mimi = new Cat('咪咪', 4)
    var dog_wangcai = new Dog('旺财', 5)
    var sheep_duoli = new Sheep("多利", 3)
    console.log(cat_mimi);
    console.log(dog_wangcai);
    console.log(sheep_duoli);
    // 同样的方法, 由于子类的重写, 使用时出现不同的状态: 多态
    cat_mimi.cry()
    dog_wangcai.cry()
    sheep_duoli.cry()
  </script>
</body>

</html>
```



### 继承 function

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>继承: function方案 15:24</title>
</head>

<body>
  <!-- 
    构造函数的发展过程:
    早期: 用 function 实现: 在实现继承时特别复杂.

    ES6之后: class 语法;  更简单 更易用, 广受欢迎

    实际开发中, 很少见到 用 function 实现继承的

    但是: 面试会考
   -->
  <script>
    function Animal(name, category) {
      this.name = name
      this.category = category
    }

    Animal.prototype.cry = function () { }

    // 继承写法:
    function Cat(name, category) {
      // 触发Animal的构造方法
      Animal.call(this, name, category)
      // call(): 触发函数, 并且指定函数中的this指向
      // 把 cat 对象传递给 Animal 进行初始化的赋值
    }

    // 修改Cat 的原型的原型 为 Animal 的原型
    // create: 创建一个对象, 对象的原型是 Animal.prototype
    Cat.prototype = Object.create(Animal.prototype)
    Cat.prototype.constructor = Cat  //设置原型的构造函数

    console.dir(Cat)
  </script>
</body>

</html>
```



## 对象的访问权限

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>对象访问权限 15:42</title>
</head>

<body>
  <script>
    'use strict'

    var emp = {
      ename: '小明',
      age: 33,
      salary: 30000
    }

    // 把薪资改为 25000
    // 默认设定: 如果点语法赋值, 属性名不存在 则为新增操作
    // 个性化要求: 只允许修改, 不允许新增属性
    // prevent阻止;  Extensions:扩展,扩充
    // Object.preventExtensions(emp)

    // 密封: seal;  不允许增删元素
    // Object.seal(emp)

    // freeze: 冻结;  不允许增删改
    Object.freeze(emp)
    emp.ename = '孙凯'

    // delete emp.age
    // emp.salay = 25000
    console.log(emp)
  </script>
</body>

</html>
```