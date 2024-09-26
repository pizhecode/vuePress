import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'

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
  ],
  title: '无限进步',
  description: '皮喆',
  theme: defaultTheme({
    logo: '/images/pz.jpg',
    logoDark: '/images/pz.jpg',
    navbar: [
      { text: '首页', link: '/index' },
      { 
        text: '剪辑', 
        children: [
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
      { 
        text: '作者', 
        children: [
          { text: '自我介绍', link: 'https://kunkun.cool/name' },
          { text: '年度总结', link: '/YEAR/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/pizhecode'},
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
