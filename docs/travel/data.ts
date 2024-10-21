import type { NavType } from './components/type'

type NavData = {
  title: string
  icon: String
  isShow: Boolean
  items: NavType[]
}
const base = '/docs'
export const NAV_DATA: NavData[] = [
  // 常用工具
  {
    title: '江西',
    icon: './images/icon/ganIcon.png',
    isShow: true,
    items: [
      {
        title: '南昌',
        icon: './images/icon/nachang.png',
        desc: '物华天宝，人杰地灵，天下英雄城',
        link: `${base}/travel/江西/南昌`,
        isTrip: true,
      },
      {
        title: '景德镇',
        icon: './images/icon/jingdezheng.png',
        desc: '世界瓷都,天下景德',
        link: `${base}/travel/江西/景德镇`,
        isTrip: true,
      },
      {
        title: '萍乡',
        icon: './images/icon/pingxiang.png',
        desc: '萍水乡逢,缘聚天下',
        link: ' ',
        isTrip: false,
      },
      {
        title: '九江',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '大山大水，大九江',
        link: ' ',
        isTrip: false,
      },
      {
        title: '新余',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '仙女下凡地，抱石故园人',
        link: ' ',
        isTrip: false,
      },
      {
        title: '鹰潭',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '闻说仙家眷此城',
        link: ' ',
        isTrip: false,
      },
      {
        title: '赣州',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '红色故都·客家摇篮',
        link: ' ',
        isTrip: false,
      },
      {
        title: '吉安',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '红色摇篮，山水吉安',
        link: ' ',
        isTrip: false,
      },
      {
        title: '宜春',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '一年四季在宜春',
        link: '',
        isTrip: false,
      },
      {
        title: '抚州',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '抚州一个有梦有戏的地方',
        link: '',
        isTrip: false,
      },
      {
        title: '上饶',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '上乘富饶、生态之都',
        link: `${base}/travel/江西/上饶`,
        isTrip: true,
      },
    ],
  },
  {
    title: '广东',
    icon: './images/icon/yueIcon.png',
    isShow: true,
    items: [
      {
        title: '广州',
        icon: './images/icon/xiaomanyao.png',
        desc: '羊城风华，珠江璀璨，广州欢迎您',
        link:  `${base}/travel/广东/广州`,
        isTrip: true,
      },
      {
        title: '深圳',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '珠海',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '汕头',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '佛山',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '韶关',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '湛江',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '肇庆',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '江门',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '茂名',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '惠州',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '梅州',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '汕尾',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '河源',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '阳江',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '清远',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '东莞',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '中山',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '潮州',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '揭阳',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
      {
        title: '云浮',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '最美英雄城南昌',
        link: '',
        isTrip: false,
      },
    ],
  },
  {
    title: '湖南',
    icon: './images/icon/xiangIcon.png',
    isShow: true,
    items: [
      {
        title: '长沙',
        icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
        desc: '星辰大海,天下长沙',
        link: `${base}/travel/湖南/长沙`,
        isTrip: true,
      },
    ],
  },
  {
    title: '湖北',
    icon: './images/icon/eIcon.png',
    isShow: true,
    items: [
      {
        title: '武汉',
        icon: '',
        desc: '友好武汉,‘童’样精彩',
        link: `${base}/travel/湖北/武汉`,
        isTrip: true,
      },
    ],
  },
  {
    title: '四川',
    icon: './images/icon/chuangIcon.png',
    isShow: true,
    items: [
      {
        title: '重庆',
        icon: '',
        desc: '长江之畔,魔幻之都——重庆',
        link: `${base}/travel/四川/重庆`,
        isTrip: true,
      },
    ],
  },
  {
    title: '浙江',
    icon: './images/icon/zheIcon.png',
    isShow: true,
    items: [
      {
        title: '杭州',
        icon: '',
        desc: '魅力杭州,湖山名城',
        link: `${base}/travel/浙江/杭州`,
        isTrip: true,
      },
    ],
  },
  {
    title: '福建',
    icon: './images/icon/minIcon.png',
    isShow: true,
    items: [
      {
        title: '厦门',
        icon: '',
        desc: '温馨厦门,大爱之城',
        link: `${base}/travel/福建/厦门`,
        isTrip: true,
      },
    ],
  },
  {
    title: '江苏',
    icon: './images/icon/suIcon.png',
    isShow: true,
    items: [
      {
        title: '南京',
        icon: '',
        desc: '千年古都,文化名城',
        link: `${base}/travel/江苏/南京`,
        isTrip: true,
      },
    ],
  },
]
