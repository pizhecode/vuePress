import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { seoPlugin } from '@vuepress/plugin-seo'

export default defineUserConfig({
  lang: 'zh-CN',
  hostname:'https://kunkun.cool',
  plugins: [
    searchPlugin({
      locales: {
        '/index': {
          placeholder: '搜索',
        },
      },
    }),
    copyrightPlugin({
      global:true,
      disableCopy:true,
      disableSelection:true
    }),
    photoSwipePlugin({
      scrollToClose:true
    }),
    seoPlugin({hostname:'短剧笔记', title: '短剧笔记',description: '短剧笔记',author: '短剧笔记',keywords: ['短剧', 'PR', 'AU','达芬奇'],
  // image: '/path/to/your/image.jpg',
  siteName: '笔记',
  // twitter: {
  //   cardType: 'summary_large_image',
  //   site: '@yourtwitter',
  //   creator: '@yourtwitter',
  // },
  og: {
    type: 'website',
    url: 'https://kunkun.cool',
    title: 'pizhe',
    description: 'pizhe',
    image: '/images/pz.jpg',
  },
    }),
  ],
  title: '快乐起来',
  description: '皮喆',
  theme: defaultTheme({
    logo: '/images/pz.jpg',
    logoDark: '/images/pz.jpg',
    navbar: [
      { text: '首页', link: '/index' },
      { 
        text: '剪辑', 
        children: [
          // { text: 'PR', link: '/PR/PR' },
          { text: 'ALL', link: '/PR/ALL' },
        ]
      },
      { 
        text: 'WEB', 
        children: [
          { text: 'HTML', link: '/WEB/HTML' },
          { text: 'CSS', link: '/WEB/CSS' },
          { text: 'BOOTSTRAP', link: '/WEB/BOOTSTRAP' },
          { text: 'JS', link: '/WEB/JS' },
          { text: 'NGINX', link: '/WEB/NGINX' }
        ]
      },
      { text: 'URL', link: 'https://kunkun.cool/url' },
      // { text: 'GPT3.5', link: 'https://chat18.aichatos8.com/' },
      { text: '作者', link: 'https://kunkun.cool/name' },
      // { text: '加入我们', link: 'https://yc.kunkun.cool/recruit.html' }
      { text: '年度总结', link: '/YEAR/' }
    ]
    
   
  }),
  bundler: viteBundler(),
  head: [
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() { 
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4dfe1994bb09cf41c864c6880c61bcaa";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `],
  ],
})
