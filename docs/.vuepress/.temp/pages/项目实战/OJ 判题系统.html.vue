<template><div><h1 id="oj-判题系统" tabindex="-1"><a class="header-anchor" href="#oj-判题系统"><span>OJ 判题系统</span></a></h1>
<blockquote>
<p>本文作者：<a href="https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah" target="_blank" rel="noopener noreferrer">程序员鱼皮<ExternalLinkIcon/></a></p>
<p>本站地址：<a href="https://codefather.cn" target="_blank" rel="noopener noreferrer">https://codefather.cn<ExternalLinkIcon/></a></p>
<p>⭐️ 加入项目系列学习：<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介"><span>项目简介</span></a></h2>
<h3 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span>项目介绍</span></a></h3>
<p>这次带做的是一个让很多同学 “望而生畏” 的硬项目， 基于 Vue 3 + Spring Boot + Spring Cloud 微服务 + Docker 的 <strong>编程题目在线评测系统</strong> （简称 OJ）。</p>
<p>在系统前台，管理员可以创建、管理题目；用户可以自由搜索题目、阅读题目、编写并提交代码。</p>
<p>在系统后端，能够根据管理员设定的题目测试用例在 <strong>代码沙箱</strong> 中对代码进行编译、运行、判断输出是否正确。</p>
<p>其中，代码沙箱可以作为独立服务，提供给其他开发者使用。</p>
<p>题目搜索页面：</p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151906178.(null)" alt=""></p>
<p>在线做题页面，支持代码编辑器、代码高亮：</p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151906503.(null)" alt=""></p>
<p>题目提交列表页面：</p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151906750.(null)" alt=""></p>
<p>创建题目页面，包含 Markdown 富文本编辑器、动态增删测试用例：</p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151906966.(null)" alt=""></p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151907197.(null)" alt=""></p>
<p>项目业务流程图：</p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151907345.(null)" alt=""></p>
<p>感兴趣的同学可以 <strong>免费试看</strong> 第一期项目回放：<a href="https://yuyuanweb.feishu.cn/wiki/SePYwTc9tipQiCktw7Uc7kujnCd" target="_blank" rel="noopener noreferrer">项目实战 - 鱼皮原创项目教程系列<ExternalLinkIcon/></a></p>
<h3 id="为什么带大家做这个项目" tabindex="-1"><a class="header-anchor" href="#为什么带大家做这个项目"><span>为什么带大家做这个项目？</span></a></h3>
<ol>
<li>资料少：OJ 系统网上几乎找不到教程</li>
<li>比较新颖，有亮点、有区分度（人家写外卖，你写 OJ）</li>
<li>能学到东西：能够学到很多传统 CRUD 开发外的知识点和编程思想</li>
<li>复杂度 “高”：很多同学觉得 OJ 是个很复杂的项目，一起攻克它</li>
<li>可扩展性强，有很多区别于 CRUD 的功能可做</li>
</ol>
<h3 id="项目特点" tabindex="-1"><a class="header-anchor" href="#项目特点"><span>项目特点</span></a></h3>
<p>该项目选题非常 <strong>新颖</strong> ，不同于泛滥的管理系统、博客、商城，不同于只有增删改查的业务系统，本项目会基于 <strong>Docker</strong> <strong>虚拟化技术</strong> <strong>+ 多种设计模式</strong> ，从 0 开始手把手带大家实现一个安全的、可复用的 <strong>代码****沙箱</strong> ，并通过 <strong>微服务架构</strong> 实现一个可扩展的在线判题系统。</p>
<p>鱼皮 <strong>从 0 到 1 全程直播无剪辑</strong> 地带大家开发完成项目，总课程时长超 <strong>30 小时</strong> ！从需求分析、技术选型、系统设计、项目初始化、前后端开发，每个环节我都 <strong>从理论到实践</strong> 给大家讲的明明白白、每个细节都不放过！</p>
<h3 id="项目收获" tabindex="-1"><a class="header-anchor" href="#项目收获"><span>项目收获</span></a></h3>
<p>鱼皮给大家讲的都是通用的项目开发方法和架构设计套路，从这个项目中你可以学到：</p>
<ul>
<li>如何从设计到开发一套完整系统？</li>
<li>如何在应用中使用 Docker 隔离程序？</li>
<li>如何从 0 打造前端项目模板？</li>
<li>单体项目如何改造为微服务？</li>
<li>如何保证用户执行代码的安全？</li>
<li>如何使用消息队列解耦程序？</li>
<li>如何巧妙利用设计模式来优化代码？</li>
</ul>
<p>此外，还能学会很多作图、思考问题、对比方案的方法，提升排查问题、自主解决 Bug 的能力。</p>
<p>值得一提的是，我带大家做这个项目的过程是先做完单体项目、再改造为微服务，所以哪怕你还没接触过微服务、或者时间紧急，也可以分阶段来学习~ 而且学完这个操作后，你的任何单机项目都可以升级成微服务了，不用再单独做一个微服务新项目，大幅节省时间。</p>
<h3 id="本项目适合的同学" tabindex="-1"><a class="header-anchor" href="#本项目适合的同学"><span>本项目适合的同学</span></a></h3>
<p>本项目同时适合前端和后端，是一套完整的全栈项目。</p>
<p>如果你是后端，已经学习过 Java Web 开发技术，希望做一个新颖的、有亮点的、写在简历上加分的项目，学习 OJ 系统的设计实现、微服务项目的设计实现、Docker 技术的实战运用、设计模式的实战运用、提升自己的编程和架构设计能力，那么非常欢迎来学习！</p>
<p>如果你是前端，最好已经学习过 Vue 或 React 框架，可以通过本项目学习到快速开发前端项目的技巧、自主编写一套前端通用模板的方法。</p>
<h3 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h3>
<h4 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h4>
<ul>
<li>Vue 3</li>
<li>Vue-CLI 脚手架</li>
<li>Vuex 状态管理</li>
<li>Arco Design 组件库</li>
<li>前端工程化：ESLint + Prettier + TypeScript</li>
<li>⭐️ 手写前端项目模板（通用布局、权限管理、状态管理、菜单生成）</li>
<li>⭐️ Markdown 富文本编辑器</li>
<li>⭐️ Monaco Editor 代码编辑器</li>
<li>⭐️ OpenAPI 前端代码生成</li>
</ul>
<h4 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h4>
<ul>
<li>⭐️ Java Spring Cloud + Spring Cloud Alibaba 微服务
<ul>
<li>Nacos 注册中心</li>
<li>OpenFeign 客户端调用</li>
<li>GateWay 网关</li>
<li>聚合接口文档</li>
</ul>
</li>
<li>Java Spring Boot（万用后端模板）</li>
<li>Java 进程控制</li>
<li>⭐️ Java 安全管理器</li>
<li>⭐️ Docker 代码沙箱实现</li>
<li>⭐️ 虚拟机 + 远程开发</li>
<li>MySQL 数据库</li>
<li>MyBatis-Plus 及 MyBatis X 自动生成</li>
<li>Redis 分布式 Session</li>
<li>⭐️ RabbitMQ 消息队列</li>
<li>⭐️ 多种设计模式
<ul>
<li>策略模式</li>
<li>工厂模式</li>
<li>代理模式</li>
<li>模板方法模式</li>
</ul>
</li>
<li>其他：部分并发编程、JVM 小知识</li>
</ul>
<p>再列举下项目的大纲，只是部分关键环节。此外，直播过程中还讲了很多平时大家自己看视频根本学不到的做项目经验和编码技巧，比如：如何自定义代码模板、规范的前后端开发流程、代码抽象复用的小技巧等。</p>
<h2 id="项目大纲" tabindex="-1"><a class="header-anchor" href="#项目大纲"><span>项目大纲</span></a></h2>
<p>这个项目内容非常多，大家可以看看有没有自己想学的知识点。</p>
<h3 id="第一章-项目诞生" tabindex="-1"><a class="header-anchor" href="#第一章-项目诞生"><span>第一章：项目诞生</span></a></h3>
<ol>
<li>项目介绍 | OJ 系统常用概念</li>
<li>项目介绍 | 企业项目开发流程</li>
<li>项目介绍 | 主流 OJ 系统调研</li>
<li>项目介绍 | 核心实现模块介绍</li>
<li>项目介绍 | 核心业务流程（2 种作图）</li>
<li>项目介绍 | 系统功能梳理</li>
<li>项目介绍 | 技术选型</li>
<li>项目介绍 | 系统架构设计（架构设计图）</li>
<li>OJ 系统实现方案（5 种方案讲解）</li>
<li>前端项目初始化 | Vue-CLI 初始项目搭建</li>
<li>前端项目初始化 | 组件库引入</li>
<li>前端项目初始化 | 项目通用布局开发及优化</li>
<li>前端项目初始化 | 全局状态管理</li>
<li>前端项目初始化 | 全局权限管理</li>
<li>前端项目初始化 | 通用菜单组件开发</li>
<li>前端项目初始化 | 全局项目入口</li>
<li>前端项目初始化 | 多套布局支持</li>
<li>后端项目初始化（Spring Boot 万用模板讲解）</li>
<li>前后端联调 | 用户登录页面开发</li>
<li>前后端联调 | 前端请求代码生成</li>
<li>前后端联调 | 用户自动登录</li>
</ol>
<h3 id="第二章-单体项目开发" tabindex="-1"><a class="header-anchor" href="#第二章-单体项目开发"><span>第二章：单体项目开发</span></a></h3>
<ol>
<li>后端接口开发 | 库表设计</li>
<li>后端接口开发 | 数据库索引知识</li>
<li>后端接口开发 | 后端开发流程讲解</li>
<li>后端接口开发 | 代码自动生成</li>
<li>后端接口开发 | 开发题目相关接口</li>
<li>前端页面开发 | 整合 Markdown 编辑器</li>
<li>前端页面开发 | 整合 Monaco Editor 代码编辑器</li>
<li>前端页面开发 | 题目页面开发（自定义代码模板）</li>
<li>前端页面开发 | 题目管理页面开发</li>
<li>前端页面开发 | 题目更新页面开发</li>
<li>前端页面开发 | 题目列表搜索页面开发</li>
<li>前端页面开发 | 在线做题页面开发</li>
<li>判题机架构 | 判题机模块划分</li>
<li>判题机架构 | 判题服务开发</li>
<li>判题机架构 | 工厂模式优化</li>
<li>判题机架构 | 代理模式优化</li>
<li>判题机架构 | 策略模式优化</li>
</ol>
<h3 id="第三章-代码沙箱实现" tabindex="-1"><a class="header-anchor" href="#第三章-代码沙箱实现"><span>第三章：代码沙箱实现</span></a></h3>
<ol>
<li>代码沙箱 Java 原生实现 | 执行原理</li>
<li>代码沙箱 Java 原生实现 | 核心流程开发</li>
<li>代码沙箱 Java 原生实现 | Java 程序漏洞讲解（6 种）</li>
<li>Java 程序安全控制 | 超时控制</li>
<li>Java 程序安全控制 | 资源控制</li>
<li>Java 程序安全控制 | 权限控制</li>
<li>Java 程序安全控制 | 安全管理器</li>
<li>Java 程序安全控制 | 环境隔离</li>
<li>Docker 从入门到实战 | Docker 入门讲解</li>
<li>Docker 从入门到实战 | 虚拟机 + 远程开发环境搭建</li>
<li>Docker 从入门到实战 | Docker 命令实操</li>
<li>Docker 从入门到实战 | Java 操作 Docker</li>
<li>代码沙箱 Docker 实现 | 核心流程实现</li>
<li>代码沙箱 Docker 实现 | Docker 容器安全性</li>
<li>代码沙箱优化 | 模板方法模式</li>
<li>代码沙箱开放 API（API 安全性）</li>
</ol>
<h3 id="第四章-项目微服务化" tabindex="-1"><a class="header-anchor" href="#第四章-项目微服务化"><span>第四章：项目微服务化</span></a></h3>
<ol>
<li>微服务入门 | 基本概念</li>
<li>微服务入门 | 微服务实现技术</li>
<li>微服务入门 | Spring Cloud Alibaba 入门</li>
<li>微服务改造 | Redis Session 分布式登录</li>
<li>微服务改造 | 服务划分</li>
<li>微服务改造 | 路由划分</li>
<li>微服务改造 | Nacos 注册中心</li>
<li>微服务改造 | Maven 子父工程生成</li>
<li>微服务改造 | 代码依赖同步</li>
<li>微服务改造 | Open Feign 服务内部调用</li>
<li>Gateway 微服务网关 | 接口路由</li>
<li>Gateway 微服务网关 | 聚合文档</li>
<li>Gateway 微服务网关 | 跨域解决</li>
<li>Gateway 微服务网关 | 权限校验</li>
<li>消息队列解耦 | RabbitMQ 项目异步化改造</li>
</ol>
<h2 id="项目资料" tabindex="-1"><a class="header-anchor" href="#项目资料"><span>项目资料</span></a></h2>
<h3 id="学习计划" tabindex="-1"><a class="header-anchor" href="#学习计划"><span>学习计划</span></a></h3>
<p>项目学习计划：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/kopt9cghiz3fos5o" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/kopt9cghiz3fos5o<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程"><span>视频教程</span></a></h3>
<p>项目完整视频教程：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/ghtqs44k9dq1shin" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/ghtqs44k9dq1shin<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目笔记" tabindex="-1"><a class="header-anchor" href="#项目笔记"><span>项目笔记</span></a></h3>
<p>鱼皮直播笔记：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/rls4he4gffa1g1ob" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/rls4he4gffa1g1ob<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<p>星球学员笔记：</p>
<ul>
<li><a href="https://t.zsxq.com/11DU38GGj" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11DU38GGj<ExternalLinkIcon/></a> By 大洲（部署笔记）</li>
<li><a href="https://t.zsxq.com/112Z9qaI2" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/112Z9qaI2<ExternalLinkIcon/></a> By cq2022（C++ 项目扩展）</li>
<li><a href="https://t.zsxq.com/113jApDpH" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/113jApDpH<ExternalLinkIcon/></a> By cq2022（第四期项目拓展）</li>
<li><a href="https://t.zsxq.com/11dpmRzKA" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11dpmRzKA<ExternalLinkIcon/></a> By cq2022（第三期项目拓展）</li>
<li><a href="https://t.zsxq.com/11VXVabH1" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11VXVabH1<ExternalLinkIcon/></a> By cq2022（第一期项目拓展）</li>
<li><a href="https://t.zsxq.com/11ABlDSDF" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11ABlDSDF<ExternalLinkIcon/></a> By 林寻</li>
</ul>
<h3 id="直播大纲" tabindex="-1"><a class="header-anchor" href="#直播大纲"><span>直播大纲</span></a></h3>
<p>直播大纲：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/krg656f95hsgdncf" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/krg656f95hsgdncf<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目源码" tabindex="-1"><a class="header-anchor" href="#项目源码"><span>项目源码</span></a></h3>
<p>项目完整源码：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/iazdpwvvl5xyz6hi" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/iazdpwvvl5xyz6hi<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目答疑" tabindex="-1"><a class="header-anchor" href="#项目答疑"><span>项目答疑</span></a></h3>
<p>项目问答专区（请在 PC 端访问星球链接）：<a href="https://wx.zsxq.com/dweb2/index/tags/%E5%9C%A8%E7%BA%BF%E5%88%A4%E9%A2%98%E9%A1%B9%E7%9B%AE/88888144288522" target="_blank" rel="noopener noreferrer">https://wx.zsxq.com/dweb2/index/tags/%E5%9C%A8%E7%BA%BF%E5%88%A4%E9%A2%98%E9%A1%B9%E7%9B%AE/88888144288522<ExternalLinkIcon/></a></p>
<p>可以在星球中更好地解决项目中遇到的问题：<a href="https://yuyuanweb.feishu.cn/wiki/FY7DwfanEikgzuk3yJlcXRWLnZc" target="_blank" rel="noopener noreferrer">编程导航 1 对 1 免费答疑服务<ExternalLinkIcon/></a></p>
<p>项目问题答疑汇总：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/wnpwfmhqnqc2928v" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/wnpwfmhqnqc2928v<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目交流群" tabindex="-1"><a class="header-anchor" href="#项目交流群"><span>项目交流群</span></a></h3>
<p>加群方式请见星球帖子：<a href="https://t.zsxq.com/11dtAMfs8" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11dtAMfs8<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="简历写法" tabindex="-1"><a class="header-anchor" href="#简历写法"><span>简历写法</span></a></h3>
<p>项目简历写法：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/doi0w3pcuxgwmno7" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/doi0w3pcuxgwmno7<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目面试题" tabindex="-1"><a class="header-anchor" href="#项目面试题"><span>项目面试题</span></a></h3>
<p>项目面试题：<a href="https://bcdh.yuque.com/staff-wpxfif/resource/qzyitesgu4glm7te" target="_blank" rel="noopener noreferrer">https://bcdh.yuque.com/staff-wpxfif/resource/qzyitesgu4glm7te<ExternalLinkIcon/></a></p>
<p>密码见星球语雀知识库：<a href="https://t.zsxq.com/12nb1snxh" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nb1snxh<ExternalLinkIcon/></a>（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h2 id="学员反馈" tabindex="-1"><a class="header-anchor" href="#学员反馈"><span>学员反馈</span></a></h2>
<blockquote>
<p>展示部分学员的真实反馈，也欢迎星球鱼友私信星球管理或鱼皮反馈，认真完成项目会有小奖励哦 🧧！</p>
</blockquote>
<h3 id="项目总结" tabindex="-1"><a class="header-anchor" href="#项目总结"><span>项目总结</span></a></h3>
<ol>
<li><a href="https://t.zsxq.com/11KzB2Utk" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11KzB2Utk<ExternalLinkIcon/></a> By 心宿二（React + Ant Design Pro 重写前端）</li>
<li><a href="https://t.zsxq.com/11S6NEfz2" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11S6NEfz2<ExternalLinkIcon/></a> By 八月点灯笼</li>
<li><a href="https://t.zsxq.com/12HLpAQDI" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12HLpAQDI<ExternalLinkIcon/></a> By 猫十二懿</li>
</ol>
<h3 id="上岸报喜" tabindex="-1"><a class="header-anchor" href="#上岸报喜"><span>上岸报喜</span></a></h3>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151907552.(null)" alt=""></p>
<h3 id="学员评价" tabindex="-1"><a class="header-anchor" href="#学员评价"><span>学员评价</span></a></h3>
<p>文章链接：<a href="https://t.zsxq.com/11O6Y8b7e" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11O6Y8b7e<ExternalLinkIcon/></a></p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151907704.(null)" alt=""></p>
<h3 id="成品展示" tabindex="-1"><a class="header-anchor" href="#成品展示"><span>成品展示</span></a></h3>
<p>文章链接：<a href="https://t.zsxq.com/11KzB2Utk" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11KzB2Utk<ExternalLinkIcon/></a></p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151907914.(null)" alt=""></p>
<p>文章链接：<a href="https://t.zsxq.com/11DU38GGj" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/11DU38GGj<ExternalLinkIcon/></a></p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151908124.(null)" alt=""></p>
<p>文章链接：<a href="https://t.zsxq.com/12nE2Jrdg" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12nE2Jrdg<ExternalLinkIcon/></a></p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151908292.(null)" alt=""></p>
<p>文章链接：<a href="https://t.zsxq.com/12HLpAQDI" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/12HLpAQDI<ExternalLinkIcon/></a></p>
<p><img src="https://pic.yupi.icu/1/(null)-20231026151908469.(null)" alt=""></p>
<h2 id="更多项目" tabindex="-1"><a class="header-anchor" href="#更多项目"><span>更多项目</span></a></h2>
<p>请见：<a href="https://yuyuanweb.feishu.cn/wiki/SePYwTc9tipQiCktw7Uc7kujnCd" target="_blank" rel="noopener noreferrer">项目实战 - 鱼皮原创项目教程系列<ExternalLinkIcon/></a></p>
<h2 id="加入学习" tabindex="-1"><a class="header-anchor" href="#加入学习"><span>加入学习</span></a></h2>
<p>点击 <a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> ，鱼皮原创项目均可学习。</p>
</div></template>


