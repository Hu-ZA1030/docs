import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // frontEnd 前端
  '/frontEnd/html5/': require('../../frontEnd/html5/sidebar.cjs'),
  '/frontEnd/css3/': require('../../frontEnd/css3/sidebar.cjs'),
  '/frontEnd/JavaScript/': require('../../frontEnd/JavaScript/sidebar.cjs'),
  '/frontEnd/ECMAScript/': require('../../frontEnd/ECMAScript/sidebar.cjs'),
  '/frontEnd/vue/': require('../../frontEnd/vue/sidebar.cjs'),
  '/frontEnd/react/': require('../../frontEnd/react/sidebar.cjs'),

  // server 服务端
  '/server/': require('../../server/sidebar.cjs'),

  // others 其他
  '/others/git': require('../../others/git/sidebar.cjs'),
  '/others/axios/': require('../../others/axios/sidebar.cjs'),
  '/others/TypeScript/': require('../../others/TypeScript/sidebar.cjs'),

  // visual 可视化
  '/visual/canvas': require('../../visual/canvas/sidebar.cjs'),
  '/visual/pixiJs': require('../../visual/pixiJs/sidebar.cjs'),
  '/visual/threejs': require('../../visual/threejs/sidebar.cjs'),

  // 江西
  '/travel/江西': require('../../travel/江西/sidebar.cjs'),
}
