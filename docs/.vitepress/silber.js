export default {
  '/learn/HTML': getLearnHTMLSidebar(),
  '/learn/CSS': getLearnCSSSidebar(),
  '/learn/CSS/效果提升': getLearnCSSLevelSidebar(),
  '/learn/CSS/咨询拓展': getLearnCSSThinkSidebar(),
  '/learn/Javascript': getLearnJsSidebar(),
  '/learn/vue2': getLearnVue2Sidebar(),
  '/learn/Vue3': getLearnVue3Sidebar(),
  '/learn/React': getLearnReactSidebar(),
  '/learn/TypeScript': getLearnTsSidebar(),
  '/learn/Node': getLearnNodeSidebar(),
  '/learn/杂技拾谈': getTalkSidebar(),
  '/learn/学而时习之': getLearnTimeSidebar(),
  '/learn/面试鸭': getLearnWatchSidebar(),
  '/project': [
    {
      text: '项目',
      items: [
        { text: '灵思', link: '/project/lingsi/' },
        { text: '自主学习', link: '/project/myself/' },
      ]
    }
  ],
  '/project/lingsi': getLingsiSidebar(),
  '/project/lingsi/sale': getSaleSidebar(),
  '/project/lingsi/职技网': getJobSidebar(),
  '/project/lingsi/水泥': getShuiniSidebar(),
  '/project/lingsi/music': getMusicSidebar(),
  '/project/lingsi/crm': getCRMSidebar(),
  '/project/lingsi/elk': getELKSidebar(),
  '/project/myself': getMyselfSidebar(),
  '/project/myself/小兔鲜': getMyRabbitSidebar(),
  '/project/myself/硅谷甄选': getMyCowSidebar(),
  '/vitePress': getVitePressSidebar(),
  '/about': getAboutSidebar(),
}

// 获取前端html的数组
function getLearnHTMLSidebar() {
  return [
    {
      text: "HTML",
      collapsible: true,
      items: [
        { text: "HTML", link: "/learn/HTML/" },
      ],
    },
  ]
}

// 获取前端css的数组
function getLearnCSSSidebar() {
  return [
    {
      text: "CSS",
      collapsible: true,
      items: [
        { text: "效果提升", link: "/learn/CSS/效果提升/空白节点" },
        { text: "咨询拓展", link: "/learn/CSS/咨询拓展/BEM" },
      ],
    }
  ]
}

// 获取前端css效果提升的数组
function getLearnCSSLevelSidebar() {
  return [
    {
      text: "效果提升",
      collapsible: true,
      items: [
        { text: "空白节点", link: "/learn/CSS/空白节点" },
        { text: '🗑 返回', link: '/learn/CSS/' },
      ],
    }
  ]
}

// 获取前端css咨询拓展的数组
function getLearnCSSThinkSidebar() {
  return [
    {
      text: "咨询拓展",
      collapsible: true,
      items: [
        { text: "BEM", link: "/learn/CSS/BEM" },
        { text: '🗑 返回', link: '/learn/CSS/' },
      ],
    }
  ]
}

// 获取前端js数组
function getLearnJsSidebar() {
  return [
    {
      text: "Javascript",
      collapsible: true,
      items: [
        { text: "Javascript", link: "/learn/Javascript/" },
        { text: "运算符", link: "/learn/Javascript/sort" },
        { text: "数据类型", link: "/learn/Javascript/type" },
        { text: "数组", link: "/learn/Javascript/array" },
        { text: "函数", link: "/learn/Javascript/function" },
        { text: "对象", link: "/learn/Javascript/object" },
        { text: "作用域与闭包", link: "/learn/Javascript/scope_closure" },
        { text: "原型与原型链", link: "/learn/Javascript/原型与原型链" },
        { text: "类", link: "/learn/Javascript/类" },
        { text: "模块化", link: "/learn/Javascript/模块化" },
        { text: "正则表达式", link: "/learn/Javascript/正则表达式" },
        { text: "Promise", link: "/learn/Javascript/Promise" },
        { text: "任务管理与Promise核心", link: "/learn/Javascript/Promise核心" },
        { text: "Set", link: "/learn/Javascript/set" },
        { text: "Map", link: "/learn/Javascript/map" },
        { text: "Symbol", link: "/learn/Javascript/symbol" },
      ],
    }
  ]
}

// 获取Vue2数组
function getLearnVue2Sidebar() {
  return [
    {
      text: "Vue2",
      collapsible: true,
      items: [
        { text: "指令", link: "/learn/vue2/指令" },
        { text: "动态样式、计算属性、过滤器与侦听器", link: "/learn/vue2/动态样式、计算属性、过滤器与侦听器" },
        { text: "组件通信", link: "/learn/vue2/组件通信" },
        { text: "动态组件、插槽与自定义指令", link: "/learn/vue2/动态组件、插槽与自定义指令" },
      ],
    }
  ]
}

// 获取前端vue3数组
function getLearnVue3Sidebar() {
  return [{
    text: "Vue3",
    collapsible: true,
    items: [
      { text: "vue3项目创建", link: "/learn/Vue3/vue3项目创建" },
      { text: "vue3的使用", link: "/learn/Vue3/vue3的使用" },
      { text: "组件", link: "/learn/Vue3/组件" },
      { text: "插槽", link: "/learn/Vue3/插槽" },
      { text: "自定义指令", link: "/learn/Vue3/自定义指令" },
      { text: "内置组件", link: "/learn/Vue3/内置组件" },
      { text: "pinia", link: "/learn/Vue3/pinia" },
      { text: "源码", link: "/learn/Vue3/源码" },
    ],
  }]
}

// 获取前端react数组
function getLearnReactSidebar() {
  return [{
    text: "Vue3",
    collapsible: true,
    items: [
      { text: "无脚手架项目创建", link: "/learn/React/" },
      { text: "Diff算法", link: "/learn/React/react的diff算法" },
      { text: "脚手架项目创建", link: "/learn/React/index_new" },
      { text: "路由", link: "/learn/React/react路由" },
      { text: "redux", link: "/learn/React/redux" },
    ],
  }]
}

// 获取前端ts数组
function getLearnTsSidebar() {
  return [
    {
      text: "TypeScript",
      collapsible: true,
      items: [
        { text: "环境配置", link: "/learn/TypeScript/环境配置" },
        { text: "类型", link: "/learn/TypeScript/类型" },
        { text: "断言与枚举", link: "/learn/TypeScript/断言与枚举" },
        { text: "类与接口", link: "/learn/TypeScript/类与接口" },
        { text: "泛型", link: "/learn/TypeScript/泛型" },
        { text: "装饰器", link: "/learn/TypeScript/装饰器" },
      ],
    }
  ]
}

// 获取前端node数组
function getLearnNodeSidebar() {
  return [
    {
      text: 'node',
      collapsible: true,
      items: [
        { text: "node", link: "/learn/Node/" },
        { text: "fs", link: "/learn/Node/fs" },
        { text: "path", link: "/learn/Node/path" },
        { text: "http", link: "/learn/Node/http" },
        { text: "module", link: "/learn/Node/module" },
        { text: "express", link: "/learn/Node/express" },
        { text: "npm", link: "/learn/Node/npm" },
      ]
    }
  ]
}

// 获取杂技拾谈数组
function getTalkSidebar() {
  return [
    {
      text: '杂技拾谈',
      collapsible: true,
      items: [
        { text: 'vue3双向绑定proxy原理', link: '/learn/杂技拾谈/vue3双向绑定proxy原理' },
        { text: '数组对象遍历', link: '/learn/杂技拾谈/数组对象遍历' },
        { text: 'vue图片动态引入使用require', link: '/learn/杂技拾谈/vue图片动态引入使用require' },
        { text: 'vue项目打包后首页白屏总结', link: '/learn/杂技拾谈/vue项目打包后首页白屏总结' },
        { text: 'JavaScript『图片压缩』', link: '/learn/杂技拾谈/JavaScript『图片压缩』' },
        { text: '接口请求', link: '/learn/杂技拾谈/多接口请求' },
        { text: '设计模式', link: '/learn/杂技拾谈/设计模式' },
        { text: 'js执行顺序', link: '/learn/杂技拾谈/js执行顺序' },
      ]
    }
  ]
}

// 获取学而时习之数组
function getLearnTimeSidebar() {
  return [
    {
      text: '🔏 前端组件封装系列',
      collapsible: true,
      items: [
        { text: 'Vue组件设计技巧', link: '/learn/学而时习之/前端组件封装实例/vue组件设计技巧' },
        { text: '对话框弹窗组件', link: '/learn/学而时习之/前端组件封装实例/对话框弹窗组件' },
        { text: '输入框组件封装', link: '/learn/学而时习之/前端组件封装实例/输入框组件封装' },
      ]
    },
    {
      text: '🎡 前端第三方组件修改案例学习',
      collapsible: true,
      items: [
        { text: '通过el-select实现多个省略学习如何改造第三方组件满足自己的要求', link: '/learn/学而时习之/前端第三方组件修改案例学习/通过el-select实现多个省略学习如何改造第三方组件满足自己的要求' },
        { text: '通过el-table实现多数据完美无限滚动效果', link: '/learn/学而时习之/前端第三方组件修改案例学习/通过el-table实现多数据完美无限滚动效果' },
        { text: '通过el-calendar实现业务', link: '/learn/学而时习之/前端第三方组件修改案例学习/通过el-calendar实现业务' },
      ]
    },
    {
      text: '✨ 前端功能操作模块',
      collapsible: true,
      items: [
        { text: '前端文件上传与相关操作', link: '/learn/学而时习之/前端功能操作模块/前端文件上传与相关操作' },
        { text: '前端下载后端传输的文件', link: '/learn/学而时习之/前端功能操作模块/前端下载后端传输的文件' },
        { text: '前端操作excel与word', link: '/learn/学而时习之/前端功能操作模块/前端操作excel与word' },
        { text: '富文本编辑器', link: '/learn/学而时习之/前端功能操作模块/富文本编辑器' },
      ]
    },
    {
      text: '🎿 更上一层楼',
      collapsible: true,
      items: [
        { text: '前端性能优化方案', link: '/learn/学而时习之/更上一层楼/前端性能优化方案' },
        { text: 'Axios二次封装', link: '/learn/学而时习之/更上一层楼/Axios二次封装' },
        { text: 'Vue项目权限控制', link: '/learn/学而时习之/更上一层楼/Vue项目权限控制' },
      ]
    },
    {
      text: '学而时习之',
      collapsible: true,
      items: [
        { text: '操作内嵌ifrname与传递消息', link: '/learn/学而时习之/操作内嵌ifrname与传递消息' },
      ]
    }
  ]
}

// 获取面试鸭的数组
function getLearnWatchSidebar() {
  return [
    {
      text: '🦆 面试鸭',
      collapsible: true,
      items: [
        { text: '(a==1&&a==2&&a==3)', link: '/learn/面试鸭/(a==1&&a==2&&a==3)' },
        { text: '数组方法手写原理', link: '/learn/面试鸭/数组方法手写原理' },
        { text: '关于forEach使用break跳出循环', link: '/learn/面试鸭/关于forEach使用break跳出循环' },
        { text: '手写封装AJAX', link: '/learn/面试鸭/手写封装AJAX' },
        { text: '数组去重', link: '/learn/面试鸭/数组去重' },
      ]
    }
  ]
}

// 获取灵思的数组
function getLingsiSidebar() {
  return [
    {
      text: '灵思',
      items: [
        { text: '🎶 音果云音', link: '/project/lingsi/music/' },
        { text: '🔧 职技网', link: '/project/lingsi/职技网/' },
        { text: '💴 视频分销', link: '/project/lingsi/sale/' },
        { text: '🧫 华润水泥', link: '/project/lingsi/水泥/' },
        { text: '🔍 CRM', link: '/project/lingsi/crm/' },
        { text: '🎲 ELK', link: '/project/lingsi/elk/' },
        { text: '🗑 返回', link: '/project/' },
      ]
    },
  ]
}

// 获取音果云音的数组
function getMusicSidebar() {
  return [
    {
      text: " 📱 APP",
      collapsible: true,
      items: [
        { text: '登录', link: "/project/lingsi/music/APP/login" },
        { text: 'tabbar', link: "/project/lingsi/music/APP/tabbar" },
        { text: '详情', link: "/project/lingsi/music/APP/detail" },
        { text: '分享', link: "/project/lingsi/music/APP/share" },
        { text: '测试', link: "/project/lingsi/music/APP/test" },
        { text: '操作', link: "/project/lingsi/music/APP/do" },
        { text: '商品', link: "/project/lingsi/music/APP/sku" },
        { text: '支付', link: "/project/lingsi/music/APP/pay" },
        { text: '更新', link: "/project/lingsi/music/APP/update" },
        { text: '个人', link: "/project/lingsi/music/APP/userinfo" },
      ]
    },
    {
      text: '💻 H5',
      collapsible: true,
      items: [
        { text: '海报页', link: '/project/lingsi/music/H5/' },
        { text: '🗑 返回', link: '/project/lingsi/' },
      ]
    },
  ]
}

// 获取职技网的数组
function getJobSidebar() {
  return [
    {
      text: "🔧 职技网",
      collapsible: true,
      items: [
        { text: '介绍', link: "/project/lingsi/职技网/" },
        { text: '项目创建', link: "/project/lingsi/职技网/项目创建" },
        { text: 'vant组件二次封装', link: "/project/lingsi/职技网/vant组件二次封装" },
        { text: '微信授权', link: "/project/lingsi/职技网/微信授权" },
        { text: '下载附件', link: "/project/lingsi/职技网/下载附件" },
        { text: '🗑 返回', link: '/project/lingsi/' },
      ]
    }
  ]
}

// 获取自主学习的数组
function getMyselfSidebar() {
  return [
    {
      text: "📕 自主学习",
      collapsible: true,
      items: [
        { text: '📕 引言', link: "/project/myself/" },
        { text: '🐇 小兔鲜', link: "/project/myself/小兔鲜/all" },
        { text: '🐂 硅谷甄选', link: "/project/myself/硅谷甄选/" },
        { text: '🗑 返回', link: '/project/' },
      ]
    }
  ]
}

// 获取小兔鲜项目的数组
function getMyRabbitSidebar(params) {
  return [
    {
      text: "🐇 小兔鲜",
      collapsible: true,
      items: [
        { text: '项目介绍', link: "/project/myself/小兔鲜/all" },
        { text: '项目创建', link: "/project/myself/小兔鲜/" },
        { text: 'Layout', link: "/project/myself/小兔鲜/layout" },
        { text: 'Home', link: "/project/myself/小兔鲜/home" },
        { text: '分类', link: "/project/myself/小兔鲜/一级分类" },
        { text: '详情', link: "/project/myself/小兔鲜/detail" },
        { text: '登录', link: "/project/myself/小兔鲜/login" },
        { text: '购物车', link: "/project/myself/小兔鲜/购物车" },
        { text: 'Sku思路', link: "/project/myself/小兔鲜/sku" },
        { text: '🗑 返回', link: '/project/myself/' },
      ]
    }
  ]
}

// 获取硅谷甄选项目的数组
function getMyCowSidebar(params) {
  return [
    {
      text: "🐂 硅谷甄选",
      collapsible: true,
      items: [
        { text: '项目初始化', link: "/project/myself/硅谷甄选/" },
        { text: '路由模块', link: "/project/myself/硅谷甄选/路由" },
        { text: '状态管理', link: "/project/myself/硅谷甄选/状态管理" },
        { text: '属性管理', link: "/project/myself/硅谷甄选/属性管理" },
        { text: 'SPU管理', link: "/project/myself/硅谷甄选/SPU管理" },
        { text: '🗑 返回', link: '/project/myself/' },
      ]
    }
  ]
}

// 获取水泥数组
function getShuiniSidebar(params) {
  return [
    {
      text: "🧫 华润水泥",
      collapsible: true,
      items: [
        { text: '引言', link: "/project/lingsi/水泥/" },
        { text: '图片对比可拖拽轮子', link: "/project/lingsi/水泥/图片对比可拖拽轮子" },
        { text: 'vue_color', link: "/project/lingsi/水泥/vue_color" },
        {
          text: '🎭 jeecg',
          collapsible: true,
          items: [
            { text: '表格行选中', link: '/project/lingsi/水泥/jeecg/表格行选中' },
            { text: '树组件默认展开', link: '/project/lingsi/水泥/jeecg/树组件默认展开' },
            { text: 'j-vxe-table搭配其他组件', link: '/project/lingsi/水泥/jeecg/j-vxe-table搭配其他组件' },
          ]
        },
        { text: '🗑 返回', link: '/project/lingsi/' },
      ]
    }
  ]
}

// 获取分销的数组
function getSaleSidebar() {
  return [
    {
      text: '💴 视频分销',
      collapsible: true,
      items: [
        { text: '简介', link: '/project/lingsi/sale/' },
        { text: '请求封装', link: '/project/lingsi/sale/request' },
        { text: 'token刷新', link: '/project/lingsi/sale/token' },
        { text: '微信授权快捷登录', link: '/project/lingsi/sale/获取手机号' },
        { text: '附件下载', link: '/project/lingsi/sale/preview' },
        { text: '分享', link: '/project/lingsi/sale/分享' },
        { text: '视频轮播', link: '/project/lingsi/sale/video' },
        { text: '图片上传组件封装', link: '/project/lingsi/sale/upload' },
        { text: '关注公众号', link: '/project/lingsi/sale/关注公众号' },
        { text: '🗑 返回', link: '/project/lingsi/' },
      ]
    }
  ]
}

// 获取elk的数组
function getELKSidebar() {
  return [
    {
      text: '🎲 ELK',
      collapsible: true,
      items: [
        { text: '简介', link: '/project/lingsi/elk/' },
        { text: '接收后端返回的二进制流文件', link: '/project/lingsi/elk/blob' },
        { text: 'vue-core的使用', link: '/project/lingsi/elk/vue_core' },
        { text: 'Canvas绘制表格图', link: '/project/lingsi/elk/canvas_table' },
        { text: 'DIV可编辑文本', link: '/project/lingsi/elk/edit_div' },
        { text: 'JSON编辑器', link: '/project/lingsi/elk/edit_JSON' },
        { text: '导出PDF', link: '/project/lingsi/elk/pdf' },
        { text: '🗑 返回', link: '/project/lingsi/' },
      ]
    }
  ]
}

// 获取crm的数组
function getCRMSidebar() {
  return [
    {
      text: '🔍 crm',
      collapsible: true,
      items: [
        { text: '简介', link: '/project/lingsi/crm/' },
        { text: '拨打电话', link: '/project/lingsi/crm/call' },
        { text: 'navigateBack传参', link: '/project/lingsi/crm/navigateBack' },
        { text: '域名配置', link: '/project/lingsi/crm/部署' },
        { text: '微信授权', link: '/project/lingsi/crm/微信授权' },
        { text: '🗑 返回', link: '/project/lingsi/' },
      ]
    }
  ]
}

// 获取vitePress部署的数组
function getVitePressSidebar() {
  return [
    {
      text: '🧊 部署',
      collapsible: true,
      items: [
        { text: "🌩️ 引言", link: "/vitePress/" },
        { text: "🧩 搭建", link: "/vitePress/Dev" },
        { text: "🎁 打包", link: "/vitePress/Build" },
        { text: "⏳ 部署", link: "/vitePress/Deploy" },
        { text: "✨ 拓展", link: "/vitePress/Know" },
      ]
    }
  ]
}

// 获取关于的数组
function getAboutSidebar() {
  return [
    {
      text: '⭐ 关于',
      collapsible: true,
      items: [
        { text: '🧑 关于我', link: '/about/' },
        { text: '🔪 关于刀刀小站', link: '/about/blog' }
      ]
    }
  ]
}