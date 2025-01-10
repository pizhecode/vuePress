# NodeJS

## 1.node介绍与使用

### 1.1 Node介绍

什么是 Node.js，众所周知 javascript 是在浏览器上运行的脚本语言，主要用来控制 html 元素，即 html dom 对象，是纯粹的 客户端语言。 那么要和服务端交互，就需要等待服务端的开发人员，而服务端开发又以 java 居多，对于不了解 java　语言的前端开发人员，有的时候就不得不干等着服务端准备好，很多时候，青春就在这样的尬等中消逝了。 那么于是就有人想，如果服务端也是用 javascript 开写的话，那么前端人员不是很容易也可以开发服务端的东西了吗？ 于是就有大佬开发了一个 v8 引擎，它在服务端运行 javascript 语言，在这个基础上再进行了一定的发展，就出现了可以在服务端运行的 javascript， 它就叫做 node.js 了。 可以把 node.js 简单的看成 javascript 写的 tomcat ...

### 1.2 node.js的优势

既然已经有了tomcat这样的基于 java 的服务器，为什么还要有 node.js 呢？node.js 上的应用可以使用 javascript 开发，这样方便前端人员,node.js 的 I/O 操作是非阻塞式的，比起 tomcat 这种 阻塞式 的更有优势
