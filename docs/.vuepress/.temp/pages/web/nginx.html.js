import comp from "E:/999-github/vuePress/docs/.vuepress/.temp/pages/WEB/NGINX.html.vue"
const data = JSON.parse("{\"path\":\"/WEB/NGINX.html\",\"title\":\"Nginx\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726491624000,\"contributors\":[{\"name\":\"皮喆\",\"email\":\"pizhecode@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"WEB/NGINX.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
