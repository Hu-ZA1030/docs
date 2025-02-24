import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'
import { resolve } from 'path'
// 引入搜索插件
import { SearchPlugin } from 'vitepress-plugin-search'
import flexSearchIndexOptions from 'flexsearch'

// 预览demo
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

const base = '/docs/'

var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: '搜索',
  placeholder: '请输入关键词',
}

export default defineConfig({
  outDir: '../dist',

  base,
  title: '小苏 blog',
  description: '学习并分享各类前端的项目和知识',
  head: [
    // 打包后使用
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    // 本地开发用
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
    // @vitepress-demo-preview的配置
    config(md) {
      // 支持区块内的方式展示 demo 和示例代码
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  themeConfig: {
    siteTitle: 'H-blog', //左上角的
    logo: '/HIcon.png', //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    // 最后更新时间
    lastUpdatedText: '上次更新',

    socialLinks: [{ icon: 'github', link: 'https://github.com/Hu-ZA1030' }],

    // 页脚配置
    footer: {
      message: 'xiaosu personal blog.',
      copyright: 'Copyright © 2024-present xiaosu',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    // 仅移动端生效
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
  },
  vite: {
    resolve: {
      alias: {
        // 别名
        '@': resolve(__dirname, '../'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },

    plugins: [SearchPlugin(options)] as any,
  },
})
