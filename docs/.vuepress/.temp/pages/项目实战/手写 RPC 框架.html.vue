<template><div><h1 id="手写-rpc-框架-24-年最新完结" tabindex="-1"><a class="header-anchor" href="#手写-rpc-框架-24-年最新完结"><span>手写 RPC 框架（24 年最新完结）</span></a></h1>
<blockquote>
<p>作者：<a href="https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah" target="_blank" rel="noopener noreferrer">程序员鱼皮<ExternalLinkIcon/></a></p>
<p>⭐️ 加入项目系列学习：<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介"><span>项目简介</span></a></h2>
<h3 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span>项目介绍</span></a></h3>
<p>基于 Java + Etcd + Vert.x 的高性能 RPC 框架，用新颖的技术栈从 0 到 1 带大家开发轮子。教程由浅入深，可以学习并实践基于 Vert.x 的网络服务器、序列化器、基于 Etcd 和 ZooKeeper 的注册中心、反射、动态代理、SPI 机制、自定义网络协议、多种设计模式（单例 / 工厂 / 装饰者等）、负载均衡器设计、重试和容错机制、Spring Boot Starter 注解驱动开发等，大幅提升架构设计能力。</p>
<p>项目分为基础版和扩展版：</p>
<ul>
<li>基础版只需学几个小时，就能写在简历上的小项目~</li>
<li>扩展版将是充满亮点的技术类项目，搭配一个业务项目，让简历更有竞争力。</li>
</ul>
<p>本项目虽然是以 Java 语言为主，但所有的设计思路和知识点是通用的，Go 或 C++ 等其他后端语言的同学也可以学习。</p>
<blockquote>
<p>代码开源地址：https://github.com/liyupi/yu-rpc</p>
<p>Gitee：https://gitee.com/liyupi/yu-rpc</p>
</blockquote>
<h3 id="免费试学" tabindex="-1"><a class="header-anchor" href="#免费试学"><span>免费试学</span></a></h3>
<p>感兴趣的同学可以 <strong>免费试看</strong> 第一期项目文字教程：https://mp.weixin.qq.com/s/lOm7k032II3gDG9xnEmpUg</p>
<h3 id="项目特点" tabindex="-1"><a class="header-anchor" href="#项目特点"><span>项目特点</span></a></h3>
<p>该项目是一个侧重技术架构的轮子类项目，区别于增删改查、泛滥的业务系统，能学到很多后端架构设计方面的知识技能，比如网络协议设计、注册中心、动态代理和 SPI 机制、多种设计模式、负载均衡、重试机制、容错机制等等。</p>
<p>区别于网上已有的 RPC 项目教程，鱼皮的 RPC 教程是真正 <strong>从 0 到 1、一步一步带大家思考并完成项目</strong>，而不是对着源码去讲解，更适合入门理解。而且，鱼皮的 RPC 教程选用了 <strong>Vert.x、Etcd、Kryo 等新颖的技术</strong>，并且从 0 带大家从入门到实践这些技术。<strong>做完这个项目，可能比看好多套教程带来的收获都大。</strong></p>
<blockquote>
<p>负责任地说，鱼皮决定带大家做这个项目前，把市面上几乎所有的 RPC 教程都看了，只为帮助大家更好地入门学习。</p>
</blockquote>
<p>因此，强烈建议所有后端方向的同学，跟着鱼皮的教程动手做个自己的 RPC 框架。</p>
<p>精心划分的目录结构，更适于学习：</p>
<p><img src="https://pic.yupi.icu/5563/202403171822575.png" alt=""></p>
<p>5 万多字、详细的保姆级图文教程，更适于技术类项目学习：</p>
<p><img src="https://pic.yupi.icu/5563/202403171822626.png" alt=""></p>
<p>跟着鱼皮做项目的收获：</p>
<p><img src="https://pic.yupi.icu/5563/202403171822662.png" alt=""></p>
<p>鱼皮的实战项目系列还会提供以下服务，详情见 <a href="https://yuyuanweb.feishu.cn/wiki/SePYwTc9tipQiCktw7Uc7kujnCd" target="_blank" rel="noopener noreferrer">项目实战 - 鱼皮原创项目教程系列<ExternalLinkIcon/></a> ：</p>
<ul>
<li>详细的直播笔记</li>
<li>完整的项目源码</li>
<li>答疑解惑</li>
<li>专属项目交流群</li>
<li>⭐️ 现成的简历写法（20 多个亮点，直接写满简历）</li>
<li>⭐️ 项目的扩展思路（拉开和其他人的差距）</li>
<li>⭐️ 项目相关面试题、题解和真实面经（几十道面试题，提前准备，面试不懵逼）</li>
<li>⭐️ 前端 + Java 后端万用项目模板（快速创建项目）</li>
</ul>
<h3 id="项目收获" tabindex="-1"><a class="header-anchor" href="#项目收获"><span>项目收获</span></a></h3>
<p>鱼皮给大家讲的都是通用的项目开发方法和架构设计套路，从这个项目中你可以学到：</p>
<ul>
<li>如何拆解需求，从 0 开始设计实现 RPC 框架？</li>
<li>如何运用设计模式 + SPI 机制扩展项目？</li>
<li>如何更优雅地加载和管理全局配置？</li>
<li>如何自定义高性能的 RPC 协议？</li>
<li>如何基于 Vert.x 设计实现 TCP 服务器和客户端？</li>
<li>如何基于 Etcd 设计高性能的注册中心？</li>
<li>如何设计实现负载均衡器，提高系统性能？</li>
<li>如何设计实现重试和容错机制，提高系统稳定性？</li>
<li>如何基于注解和 Spring Boot Starter 设计项目启动机制？</li>
<li>如何从多个角度分析优化项目？</li>
</ul>
<p>此外，还能学会很多作图、思考问题、对比方案的方法，提升排查问题、自主解决 Bug 的能力。</p>
<h3 id="本项目适合的同学" tabindex="-1"><a class="header-anchor" href="#本项目适合的同学"><span>本项目适合的同学</span></a></h3>
<p>本项目适合学过至少一门后端开发框架、并且能够独立完成 1 个增删改查项目的同学。相比于业务系统，做 RPC 框架这样的技术轮子类项目，能够快速补充知识点、并大幅提升系统架构设计能力，也能给简历增加很多亮点。</p>
<p>虽然项目是以 Java 语言为主，但所有的设计思路和知识点是通用的，Go 或 C++ 等其他后端语言的同学也可以学习。</p>
<p>如果你已经学习过至少一门 RPC 框架（比如 Dubbo），学这个项目会更加轻松。</p>
<p>更多项目学习建议，可以阅读 <a href="https://yuyuanweb.feishu.cn/wiki/Q4AdwjLDWiLZy0kAjHqcQinon8N" target="_blank" rel="noopener noreferrer">鱼皮项目学习建议<ExternalLinkIcon/></a>。</p>
<blockquote>
<p>⭐️ 加入项目系列学习：<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h2>
<h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h3>
<p>后端技术以 Java 为主，但所有的思想和设计都是可以复用到其他语言的，代码不同罢了。</p>
<ul>
<li>⭐️ Vert.x 框架</li>
<li>⭐️ Etcd 云原生存储中间件（jetcd 客户端）</li>
<li>ZooKeeper 分布式协调工具（curator 客户端）</li>
<li>⭐️ SPI 机制</li>
<li>⭐️ 多种序列化器
<ul>
<li>JSON 序列化</li>
<li>Kryo 序列化</li>
<li>Hessian 序列化</li>
</ul>
</li>
<li>⭐️ 多种设计模式
<ul>
<li>双检锁单例模式</li>
<li>工厂模式</li>
<li>代理模式</li>
<li>装饰者模式</li>
</ul>
</li>
<li>⭐️ Spring Boot Starter 开发</li>
<li>⭐️ 负载均衡、重试和容错机制</li>
<li>⭐️ 反射、动态代理和注解驱动</li>
<li>Guava Retrying 重试库</li>
<li>JUnit 单元测试</li>
<li>Logback 日志库</li>
<li>Hutool、Lombok 工具库</li>
</ul>
<h2 id="项目大纲" tabindex="-1"><a class="header-anchor" href="#项目大纲"><span>项目大纲</span></a></h2>
<p>这个项目内容非常多，大家可以看看有没有自己想学的知识点。</p>
<h3 id="第一章-rpc-框架简易版" tabindex="-1"><a class="header-anchor" href="#第一章-rpc-框架简易版"><span>第一章：RPC 框架简易版</span></a></h3>
<ol>
<li>RPC 基本概念和作用</li>
<li>RPC 框架实现思路 | 基本设计</li>
<li>RPC 框架实现思路 | 扩展设计</li>
<li>简易版 RPC 开发 | 项目初始化</li>
<li>简易版 RPC 开发 | web 服务器</li>
<li>简易版 RPC 开发 | 本地服务注册器</li>
<li>简易版 RPC 开发 | 序列化器</li>
<li>简易版 RPC 开发 | 请求处理器</li>
<li>简易版 RPC 开发 | 消费者代理</li>
<li>简易版 RPC 开发 | 测试验证</li>
</ol>
<h3 id="第二章-rpc-框架扩展版" tabindex="-1"><a class="header-anchor" href="#第二章-rpc-框架扩展版"><span>第二章：RPC 框架扩展版</span></a></h3>
<ol>
<li>全局配置加载 | 扩展版项目初始化</li>
<li>全局配置加载 | 配置加载实现</li>
<li>全局配置加载 | 维护全局配置对象</li>
<li>接口 Mock 设计实现</li>
<li>序列化器 | 主流序列化器对比</li>
<li>序列化器 | 多种序列化器实现</li>
<li>序列化器 | SPI 机制</li>
<li>序列化器 | 可扩展序列化器实现（SPI + 工厂模式）</li>
<li>注册中心 | 注册中心核心能力</li>
<li>注册中心 | 注册中心技术选型</li>
<li>注册中心 | Etcd 云原生中间件入门</li>
<li>注册中心 | 基于 Etcd 实现注册中心</li>
<li>注册中心 | 可扩展注册中心实现（SPI + 工厂模式）</li>
<li>注册中心优化 | 心跳检测和续期机制</li>
<li>注册中心优化 | 服务节点下线机制</li>
<li>注册中心优化 | 消费端服务缓存</li>
<li>注册中心优化 | 缓存更新（Etcd 监听机制）</li>
<li>注册中心优化 | ZooKeeper 注册中心实现</li>
<li>自定义协议 | 需求分析及方案设计</li>
<li>自定义协议 | 消息结构设计（参考 Dubbo）</li>
<li>自定义协议 | 网络传输设计（基于 Vert.x 实现 TCP 服务器）</li>
<li>自定义协议 | 编码 / 解码器</li>
<li>自定义协议 | TCP 请求处理器</li>
<li>自定义协议 | TCP 请求客户端</li>
<li>自定义协议 | 粘包半包问题分析</li>
<li>自定义协议 | 使用 Vert.x 解决粘包半包问题</li>
<li>自定义协议 | 客户端代码优化（装饰者模式）</li>
<li>负载均衡 | 负载均衡概念和常用算法</li>
<li>负载均衡 | 一致性 Hash</li>
<li>负载均衡 | 多种负载均衡器实现</li>
<li>负载均衡 | 可扩展负载均衡器实现（SPI + 工厂模式）</li>
<li>重试机制 | 重试等待策略</li>
<li>重试机制 | 重试方案设计</li>
<li>重试机制 | 多种重试策略实现</li>
<li>重试机制 | 可扩展重试策略实现（SPI + 工厂模式）</li>
<li>容错机制 | 容错策略和实现方式</li>
<li>容错机制 | 容错方案设计</li>
<li>容错机制 | 多种容错策略实现</li>
<li>容错机制 | 可扩展容错策略实现（SPI + 工厂模式）</li>
<li>启动机制 | 框架快速启动类</li>
<li>启动机制 | 注解驱动设计</li>
<li>启动机制 | Spring Boot Starter 注解驱动实现</li>
<li>项目扩展思路</li>
</ol>
<h2 id="项目资料" tabindex="-1"><a class="header-anchor" href="#项目资料"><span>项目资料</span></a></h2>
<h3 id="学习计划" tabindex="-1"><a class="header-anchor" href="#学习计划"><span>学习计划</span></a></h3>
<p>项目学习计划：https://bcdh.yuque.com/staff-wpxfif/resource/bhczlyo21xlg4l4y</p>
<p>密码见星球语雀知识库：https://t.zsxq.com/12nb1snxh（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="文字教程" tabindex="-1"><a class="header-anchor" href="#文字教程"><span>文字教程</span></a></h3>
<blockquote>
<p>非常详细，建议搭配视频教程一同使用</p>
</blockquote>
<p>项目完整文字教程：https://bcdh.yuque.com/staff-wpxfif/resource/gowqna5casecypkr</p>
<p>密码见星球语雀知识库：https://t.zsxq.com/12nb1snxh（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目笔记-持续更新中" tabindex="-1"><a class="header-anchor" href="#项目笔记-持续更新中"><span>项目笔记（持续更新中）</span></a></h3>
<p>鱼皮直播笔记：https://bcdh.yuque.com/staff-wpxfif/resource/gowqna5casecypkr（完整文字教程）</p>
<p>密码见星球语雀知识库：https://t.zsxq.com/12nb1snxh（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目源码" tabindex="-1"><a class="header-anchor" href="#项目源码"><span>项目源码</span></a></h3>
<p>项目完整源码：https://bcdh.yuque.com/staff-wpxfif/resource/dk66sg0lpd3hkosp</p>
<p>密码见星球语雀知识库：https://t.zsxq.com/12nb1snxh（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目答疑" tabindex="-1"><a class="header-anchor" href="#项目答疑"><span>项目答疑</span></a></h3>
<p>项目问答专区（请在 PC 端访问星球链接）：https://wx.zsxq.com/dweb2/index/tags/%E6%89%8B%E5%86%99RPC%E6%A1%86%E6%9E%B6/28881422128511</p>
<p>可以在星球中更好地解决项目中遇到的问题：<a href="https://yuyuanweb.feishu.cn/wiki/FY7DwfanEikgzuk3yJlcXRWLnZc" target="_blank" rel="noopener noreferrer">利用编程导航解决问题<ExternalLinkIcon/></a></p>
<p>项目问题答疑汇总：https://bcdh.yuque.com/staff-wpxfif/resource/suc9olh5pxvcvhx9</p>
<p>密码见星球语雀知识库：https://t.zsxq.com/12nb1snxh（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目交流群" tabindex="-1"><a class="header-anchor" href="#项目交流群"><span>项目交流群</span></a></h3>
<p>加群方式请见星球帖子：https://t.zsxq.com/11dtAMfs8（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="简历写法" tabindex="-1"><a class="header-anchor" href="#简历写法"><span>简历写法</span></a></h3>
<p>项目简历写法：https://bcdh.yuque.com/staff-wpxfif/resource/mnyr1qwvq56fexv9</p>
<p>密码见星球语雀知识库：https://t.zsxq.com/12nb1snxh（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h3 id="项目面试题" tabindex="-1"><a class="header-anchor" href="#项目面试题"><span>项目面试题</span></a></h3>
<p>项目面试题：https://bcdh.yuque.com/staff-wpxfif/resource/sak10cd1xd6wr925</p>
<p>密码见星球语雀知识库：https://t.zsxq.com/12nb1snxh（<a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> 后可见）</p>
<h2 id="学员反馈" tabindex="-1"><a class="header-anchor" href="#学员反馈"><span>学员反馈</span></a></h2>
<blockquote>
<p>展示部分学员的真实反馈，也欢迎星球鱼友私信星球管理或鱼皮反馈，认真完成项目会有小奖励哦 🧧！</p>
</blockquote>
<h3 id="项目总结-持续更新中" tabindex="-1"><a class="header-anchor" href="#项目总结-持续更新中"><span>项目总结（持续更新中）</span></a></h3>
<h3 id="上岸报喜-持续更新中" tabindex="-1"><a class="header-anchor" href="#上岸报喜-持续更新中"><span>上岸报喜（持续更新中）</span></a></h3>
<p>欢迎上岸的同学报喜，有奖励 🧧 ~</p>
<h3 id="学员评价-持续更新中" tabindex="-1"><a class="header-anchor" href="#学员评价-持续更新中"><span>学员评价（持续更新中）</span></a></h3>
<p>文章链接：https://t.zsxq.com/18yvUfERq</p>
<p><img src="https://pic.yupi.icu/5563/202403171822607.png" alt=""></p>
<p>文章链接：https://t.zsxq.com/16X5xh6V0</p>
<p><img src="https://pic.yupi.icu/5563/202403171822490.png" alt=""></p>
<p>文章链接：https://t.zsxq.com/16Rjoz0HP</p>
<p><img src="https://pic.yupi.icu/5563/202403171822503.png" alt=""></p>
<h3 id="成品展示-持续更新中" tabindex="-1"><a class="header-anchor" href="#成品展示-持续更新中"><span>成品展示（持续更新中）</span></a></h3>
<h2 id="更多项目" tabindex="-1"><a class="header-anchor" href="#更多项目"><span>更多项目</span></a></h2>
<p>请见：<a href="https://yuyuanweb.feishu.cn/wiki/SePYwTc9tipQiCktw7Uc7kujnCd" target="_blank" rel="noopener noreferrer">项目实战 - 鱼皮原创项目教程系列<ExternalLinkIcon/></a></p>
<h2 id="加入学习" tabindex="-1"><a class="header-anchor" href="#加入学习"><span>加入学习</span></a></h2>
<p>点击 <a href="https://yuyuanweb.feishu.cn/wiki/SDtMwjR1DituVpkz5MLc3fZLnzb" target="_blank" rel="noopener noreferrer">加入编程导航<ExternalLinkIcon/></a> ，鱼皮原创项目均可学习。</p>
</div></template>


