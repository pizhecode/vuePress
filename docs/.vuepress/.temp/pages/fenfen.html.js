import comp from "C:/Users/MHMCX/Desktop/vuePress/vuepress-starter/docs/.vuepress/.temp/pages/fenfen.html.vue"
const data = JSON.parse("{\"path\":\"/fenfen.html\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Let's go!\",\"link\":\"/main.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":1,\"details\":\"PR将素材根据剧本进行整合\"},{\"title\":2,\"details\":\"导出音频放置AU中进行修音\"},{\"title\":3,\"details\":\"视频杂音较大将AU导出的视频放置达芬奇中进行音频降噪\"},{\"title\":4,\"details\":\"使用X8进行最后修音，并放到剪映中进行字幕生成\"},{\"title\":5,\"details\":\"将剪映的字幕和X8最终修音的音频都导入PR中，并进行字幕错字，位置不对等\"},{\"title\":6,\"details\":\"添加视频音乐和视频音效\"},{\"title\":7,\"details\":\"调色\"},{\"title\":\"008\",\"details\":\"尾帧\"},{\"title\":\"009\",\"details\":\"Demo\"}],\"footer\":\"MIT Licensed | Copyright © 2024 | by 峰峰pro\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"fenfen.md\"}")
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
