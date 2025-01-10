import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'

export default defineUserConfig({
  lang: 'zh-CN',
  hostname:'https://wuxinjinbu.cn',
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
    logo: 'https://s21.ax1x.com/2024/11/04/pAsFmxP.md.jpg',
    logoDark: 'https://s21.ax1x.com/2024/11/04/pAsFmxP.md.jpg',
    navbar: [
      { text: '首页', link: '/index' },
      { 
        text: '剪辑', 
        children: [
          { text: 'ALL', link: '/PR/ALL' },
        ]
      },
      { 
        text: '前端', 
        children: [
          { text: 'HTML', link: '/WEB/HTML' },
          { text: 'CSS', link: '/WEB/CSS' },
          { text: 'BOOTSTRAP', link: '/WEB/BOOTSTRAP' },
          { text: 'JS', link: '/WEB/JS' },
          { text: 'Vue', link: '/WEB/vue' },
          { text: 'React', link: '/WEB/react' },
          { text: 'Uniapp', link: '/WEB/uniapp' },
        ]
      },
      { 
        text: '后端', 
        children: [
          { text: 'JAVA', link: '/Api/Java/java' },
          { text: 'NodeJS', link: '/Api/NodeJS/nodejs' },
          { text: 'GO', link: '/Api/Go/go' },
          { text: 'C', link: '/Api/C/c' },
          { text: 'C++', link: '/Api/C++/c++' },
          { text: 'Python', link: '/Api/Python/Python' },
          { text: 'Nginx', link: '/Api/Nginx/nginx' },
        ]
      },
      { text: 'URL', link: 'https://blog.wuxinjinbu.cn/url.html' },
      { 
        text: '作者', 
        children: [
          { text: '自我介绍', link: 'https://blog.wuxinjinbu.cn/about.html' },
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
