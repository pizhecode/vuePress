export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/YEAR/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/YEAR/index.html.js"), meta: {"title":"年度总结"} }],
  ["/PR/ALL.html", { loader: () => import(/* webpackChunkName: "ALL.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/PR/ALL.html.js"), meta: {"title":"集合"} }],
  ["/PR/PR.html", { loader: () => import(/* webpackChunkName: "PR.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/PR/PR.html.js"), meta: {"title":"短剧"} }],
  ["/WEB/BOOTSTRAP.html", { loader: () => import(/* webpackChunkName: "BOOTSTRAP.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/WEB/BOOTSTRAP.html.js"), meta: {"title":"BOOTSTRAP响应式"} }],
  ["/WEB/CSS.html", { loader: () => import(/* webpackChunkName: "CSS.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/WEB/CSS.html.js"), meta: {"title":"CSS"} }],
  ["/WEB/HTML.html", { loader: () => import(/* webpackChunkName: "HTML.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/WEB/HTML.html.js"), meta: {"title":"HTML基础"} }],
  ["/WEB/JS.html", { loader: () => import(/* webpackChunkName: "JS.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/WEB/JS.html.js"), meta: {"title":"JAVASCRIPT"} }],
  ["/WEB/NGINX.html", { loader: () => import(/* webpackChunkName: "NGINX.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/WEB/NGINX.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/24067/Desktop/MainCode/vuePress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
