import comp from "D:/00a/piZhe/First/vuePress/docs/.vuepress/.temp/pages/all.html.vue"
const data = JSON.parse("{\"path\":\"/all.html\",\"title\":\"集合\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"PR\",\"slug\":\"pr\",\"link\":\"#pr\",\"children\":[]},{\"level\":2,\"title\":\"PS\",\"slug\":\"ps\",\"link\":\"#ps\",\"children\":[]},{\"level\":2,\"title\":\"AU\",\"slug\":\"au\",\"link\":\"#au\",\"children\":[]},{\"level\":2,\"title\":\"达芬奇\",\"slug\":\"达芬奇\",\"link\":\"#达芬奇\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"all.md\"}")
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
