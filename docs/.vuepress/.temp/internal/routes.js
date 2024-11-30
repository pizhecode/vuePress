export const redirects = JSON.parse("{\"/Api/C++/c++.html\":\"/Api/C__/c__.html\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/PR/ALL.html", { loader: () => import(/* webpackChunkName: "ALL.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/PR/ALL.html.js"), meta: {"title":"集合"} }],
  ["/PR/PR.html", { loader: () => import(/* webpackChunkName: "PR.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/PR/PR.html.js"), meta: {"title":"短剧"} }],
  ["/YEAR/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/YEAR/index.html.js"), meta: {"title":"年度总结"} }],
  ["/WEB/BOOTSTRAP.html", { loader: () => import(/* webpackChunkName: "BOOTSTRAP.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/BOOTSTRAP.html.js"), meta: {"title":"BOOTSTRAP响应式"} }],
  ["/WEB/CSS.html", { loader: () => import(/* webpackChunkName: "CSS.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/CSS.html.js"), meta: {"title":"CSS"} }],
  ["/WEB/HTML.html", { loader: () => import(/* webpackChunkName: "HTML.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/HTML.html.js"), meta: {"title":"HTML基础"} }],
  ["/WEB/JS.html", { loader: () => import(/* webpackChunkName: "JS.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/JS.html.js"), meta: {"title":"JAVASCRIPT"} }],
  ["/WEB/react.html", { loader: () => import(/* webpackChunkName: "react.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/react.html.js"), meta: {"title":"React"} }],
  ["/WEB/uniapp.html", { loader: () => import(/* webpackChunkName: "uniapp.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/uniapp.html.js"), meta: {"title":"Uniapp"} }],
  ["/WEB/vue.html", { loader: () => import(/* webpackChunkName: "vue.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/vue.html.js"), meta: {"title":"Vue"} }],
  ["/Api/C/c.html", { loader: () => import(/* webpackChunkName: "c.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/Api/C/c.html.js"), meta: {"title":"C"} }],
  ["/Api/Go/go.html", { loader: () => import(/* webpackChunkName: "go.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/Api/Go/go.html.js"), meta: {"title":"Go"} }],
  ["/Api/C__/c__.html", { loader: () => import(/* webpackChunkName: "c__.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/Api/C__/c__.html.js"), meta: {"title":"C++"} }],
  ["/Api/Java/java.html", { loader: () => import(/* webpackChunkName: "java.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/Api/Java/java.html.js"), meta: {"title":"JAVA"} }],
  ["/Api/Nginx/nginx.html", { loader: () => import(/* webpackChunkName: "nginx.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/Api/Nginx/nginx.html.js"), meta: {"title":"Nginx"} }],
  ["/Api/NodeJS/nodejs.html", { loader: () => import(/* webpackChunkName: "nodejs.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/Api/NodeJS/nodejs.html.js"), meta: {"title":"NodeJS"} }],
  ["/Api/Python/Python.html", { loader: () => import(/* webpackChunkName: "Python.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/Api/Python/Python.html.js"), meta: {"title":"Python"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/999-github/vuePress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
