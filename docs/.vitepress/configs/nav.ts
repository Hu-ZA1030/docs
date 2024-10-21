import type { DefaultTheme } from 'vitepress'

// import JS from '../../JavaScript/sidebar.cjs'
// import ES6 from '../../ECMAScript/sidebar.cjs'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '驴友导航', link: '/travel/' },
  { text: '前端导航', link: '/nav/' },
  // 前端 frontEnd
  {
    text: '前端',
    items: [
      {
        text: '基础',
        items: [
          {
            text: 'HTML5',
            link: '/frontEnd/html5/base/',
            activeMatch: '^/frontEnd/html5',
          },
          { text: 'CSS3', link: '/frontEnd/css3/base/css选择器', activeMatch: '^/frontEnd/css3' },
          {
            text: 'JavaScript',
            link: '/frontEnd/JavaScript/base/',
            activeMatch: '^/frontEnd/JavaScript',
          },
          {
            text: 'ECMAScript',
            link: '/frontEnd/ECMAScript/es6/',
            activeMatch: '^/frontEnd/ECMAScript',
          },
        ],
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/frontEnd/vue/base/', activeMatch: '^/frontEnd/vue' },
          { text: 'React', link: '/frontEnd/react/', activeMatch: '^/frontEnd/react' },
        ],
      },
    ],
    activeMatch: '^/frontEnd',
  },

  // 服务端 server
  {
    text: '服务端',
    items: [
      {
        text: 'Node',
        items: [
          { text: 'NodeJs', link: '/server/nodejs/', activeMatch: '^/server/nodejs' },
          { text: 'NPM', link: '/server/npm/', activeMatch: '^/server/npm' },
        ],
      },
      {
        text: '数据库',
        items: [{ text: 'MySQL', link: '/server/mysql/', activeMatch: '^/server/mysql' }],
      },
    ],
    activeMatch: '^/server',
  },

  // 其他 others
  {
    text: '其他',
    items: [
      { text: 'Git', link: '/others/git/install', activeMatch: '^/others/git' },
      { text: 'Axios', link: '/others/axios/', activeMatch: '^/others/axios' },
      {
        text: 'TypeScript',
        link: '/others/TypeScript/',
        activeMatch: '^/others/TypeScript',
      },
    ],
    activeMatch: '^/others',
  },

  // 可视化 visual
  {
    text: '可视化',
    items: [
      {
        text: '2d',
        items: [
          {
            text: 'Canvas',
            link: '/visual/canvas/base/初识Canvas',
            activeMatch: '^/visual/canvas',
          },
          { text: 'Svg', link: '/visual/svg/', activeMatch: '^/visual/svg' },
          { text: 'PixiJs', link: '/visual/pixiJs/初识PixiJs', activeMatch: '^/visual/pixi' },
        ],
      },
      {
        text: '3d',
        items: [
          { text: 'ThreeJs', link: '/visual/threejs/base/', activeMatch: '^/visual/threejs' },
        ],
      },
    ],
    activeMatch: '^/visual',
  },

  // 项目 project
  {
    text: '项目',
    items: [
      {
        items: [
          {
            text: '项目配置',
            link: '/project/configuration',
            activeMatch: '^/project/configuration',
          },
        ],
      },
    ],
    activeMatch: '^/project',
  },
]
