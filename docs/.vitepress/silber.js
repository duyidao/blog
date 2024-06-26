/**
 * 公共函数方法，生成侧边栏数据 ************************************************************
 */
function generateSidebarItems(arr) {
  return arr.map(item => ({
    ...item,
    text: item.text,
    ...(item.link ? { link: item.link } : {}),
    ...(item.items ? { items: generateSidebarItems(item.items) } : {}),
  }));
}


/**
 * 学习模块 ************************************************************
 */
// 前端css的数组
const CssSidebar = [
  {
    text: "CSS",
    collapsible: true,
    items: [
      { text: "效果提升", link: "/learn/CSS/效果提升/巧用伪类" },
      { text: "知识拓展", link: "/learn/CSS/知识拓展/BEM" },
    ],
  }
]

// 前端css效果提升的数组
const CssLevelSidebar = [
  {
    text: "效果提升",
    collapsible: true,
    items: [
      { text: "巧用伪类", link: "/learn/CSS/效果提升/巧用伪类" },
      {
        text: "宽度适配内容",
        link: "/learn/CSS/效果提升/宽度适配内容",
      },
      {
        text: "文字适配背景",
        link: "/learn/CSS/效果提升/文字适配背景",
      },
      {
        text: "文字适应纹理",
        link: "/learn/CSS/效果提升/文字适应纹理",
      },
      {
        text: "文字连续光影特效",
        link: "/learn/CSS/效果提升/文字连续光影特效",
      },
      {
        text: "变量",
        link: "/learn/CSS/效果提升/变量",
      },
      {
        text: "渐变",
        link: "/learn/CSS/效果提升/渐变",
      },
      {
        text: "B站banner鼠标移动效果揭秘",
        link: "/learn/CSS/效果提升/B站banner鼠标移动效果揭秘",
      },
      {
        text: "filter",
        link: "/learn/CSS/效果提升/filter",
      },
      {
        text: "clip-path",
        link: "/learn/CSS/效果提升/clip-path",
      },
      { text: "vmin与vmax", link: "/learn/CSS/效果提升/vmin与vmax" },
      { text: "scroll-snap", link: "/learn/CSS/效果提升/scroll-snap" },
      { text: "下划线动画", link: "/learn/CSS/效果提升/下划线动画" },
      { text: "🗑 返回", link: "/learn/CSS/" },
    ],
  },
]

// 前端css知识拓展的数组
const CssKnowladgeSidebar = [
  {
    text: "知识拓展",
    collapsible: true,
    items: [
      { text: "BEM", link: "/learn/CSS/知识拓展/BEM" },
      { text: "空白节点", link: "/learn/CSS/知识拓展/空白节点" },
      { text: "粘性定位", link: "/learn/CSS/知识拓展/粘性定位" },
      { text: "🗑 返回", link: "/learn/CSS/" },
    ],
  },
]

// 前端js数组
const JsSidebar = [
  {
    text: "🖇 Javascript 基础知识",
    collapsible: true,
    collapsed: true,
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
      { text: "Promise", link: "/learn/Javascript/Promise" },
      {
        text: "任务管理与Promise核心",
        link: "/learn/Javascript/Promise核心",
      },
      { text: "Set", link: "/learn/Javascript/set" },
      { text: "Map", link: "/learn/Javascript/map" },
      { text: "Symbol", link: "/learn/Javascript/symbol" },
    ],
  },
  {
    text: "⚙ Web API",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "JavaScript『图片压缩』",
        link: "/learn/Javascript/webapi/JavaScript『图片压缩』",
      },
      {
        text: "取色器封装 EyeDropper",
        link: "/learn/Javascript/webapi/取色器封装",
      },
      {
        text: "网站访问用户文件夹 ShowDirectoryPicker",
        link: "/learn/Javascript/webapi/网站访问用户文件夹",
      },
      {
        text: "迅雷下载触发",
        link: "/learn/Javascript/webapi/迅雷下载触发",
      },
      {
        text: "resize函数封装 ResizeObserve",
        link: "/learn/Javascript/webapi/resize函数封装",
      },
      {
        text: "声音的分析和处理 Audio",
        link: "/learn/Javascript/webapi/声音的分析和处理",
      },
      {
        text: "网络状态监控 Navigator.connection",
        link: "/learn/Javascript/webapi/网络状态监控",
      },
      {
        text: "复制粘贴与内容设置 Clipboard",
        link: "/learn/Javascript/webapi/复制粘贴与内容设置",
      },
      {
        text: "页面自动检测更新",
        link: "/learn/Javascript/webapi/页面自动检测更新",
      },
      {
        text: "数字转中文",
        link: "/learn/Javascript/webapi/数字转中文",
      },
      {
        text: "拼音标注",
        link: "/learn/Javascript/webapi/拼音标注",
      },
      {
        text: "文字转语音播放",
        link: "/learn/Javascript/webapi/文字转语音播放",
      },
      {
        text: "地图数据展示",
        link: "/learn/Javascript/webapi/地图数据展示",
      },
    ],
  },
]

// 前端git的数组
const GitSidebar = [
  {
    text: "Git",
    collapsible: true,
    items: [
      {
        text: "潜在的BUG",
        collapsible: true,
        items: [
          { text: "大小写规则检测", link: "/learn/Git/潜在的BUG/大小写规则" },
        ],
      },
    ],
  },
]

// 前端正则表达式数组
const RegSidebar = [
  {
    text: "正则",
    collapsible: true,
    items: [
      {
        text: "知识点",
        collapsible: true,
        items: [
          { text: "正则表达式", link: "/learn/Reg/knowledge/index" },
          { text: "元子字符", link: "/learn/Reg/knowledge/元子字符" },
          { text: "模式修饰", link: "/learn/Reg/knowledge/模式修饰" },
          { text: "原子", link: "/learn/Reg/knowledge/原子" },
          { text: "匹配", link: "/learn/Reg/knowledge/匹配" },
          { text: "方法", link: "/learn/Reg/knowledge/方法" },
        ],
      },
      {
        text: "实操演练",
        collapsible: true,
        items: [
          {
            text: "运用前瞻实现密码强度检测",
            link: "/learn/Reg/do/运用前瞻实现密码强度检测",
          },
        ],
      },
      {
        text: "潜在BUG",
        collapsible: true,
        items: [
          { text: "正则中的lastIndex", link: "/learn/Reg/BUG/lastIndex" },
        ],
      },
    ],
  },
]

// 前端Vue2数组
const Vue2Sidebar = [
  {
    text: "Vue2",
    collapsible: true,
    items: [
      { text: "指令", link: "/learn/vue2/指令" },
      {
        text: "动态样式、计算属性、过滤器与侦听器",
        link: "/learn/vue2/动态样式、计算属性、过滤器与侦听器",
      },
      { text: "组件通信", link: "/learn/vue2/组件通信" },
      {
        text: "动态组件、插槽与自定义指令",
        link: "/learn/vue2/动态组件、插槽与自定义指令",
      },
      {
        text: "vue2核心源码及设计思想",
        link: "/learn/vue2/源码—vue2核心源码及设计思想",
      },
      {
        text: "从零手写VueRouter及Vuex",
        link: "/learn/vue2/源码—从零手写VueRouter及Vuex",
      },
      {
        text: "阅读框架源码方法",
        link: "/learn/vue2/源码—阅读框架源码方法",
      },
    ],
  },
]

// 前端Vue3数组
const Vue3Sidebar = [
  {
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
      { text: "Vue3新特性", link: "/learn/Vue3/Vue3新特性" },
      { text: "源码", link: "/learn/Vue3/源码" },
    ],
  },
]

// 前端react数组
const ReactSidebar = [
  {
    text: "React",
    collapsible: true,
    items: [
      { text: "无脚手架项目创建", link: "/learn/React/" },
      { text: "Diff算法", link: "/learn/React/react的diff算法" },
      { text: "脚手架项目创建", link: "/learn/React/index_new" },
      { text: "ReactRouter5", link: "/learn/React/react路由" },
      { text: "redux", link: "/learn/React/redux" },
      { text: "react拓展", link: "/learn/React/react拓展" },
      { text: "ReactRouter6", link: "/learn/React/ReactRouter6" },
    ],
  },
]

// 前端TypeScript数组
const TsSidebar = [
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
  },
]

// 前端node数组
const NodeSidebar = [
  {
    text: "node",
    collapsible: true,
    items: [
      { text: "node", link: "/learn/Node/" },
      { text: "fs", link: "/learn/Node/fs" },
      { text: "path", link: "/learn/Node/path" },
      { text: "http", link: "/learn/Node/http" },
      { text: "module", link: "/learn/Node/module" },
      { text: "express", link: "/learn/Node/express" },
      { text: "npm", link: "/learn/Node/npm" },
    ],
  },
]

// 学习数组
const StudySidebar = [
  {
    text: "🚴 学而时习之",
    collapsible: true,
    items: [
      { text: "引言", link: "/learn/study/" },
      { text: "学无止境", link: "/learn/study/knowledge/JS相关/垃圾回收与console.log内存泄漏.md" },
      {
        text: "实操训练",
        link: "/learn/study/operate/功能操作与实现/Canvas操作",
      },
      {
        text: "项目实战",
        link: "/learn/study/item/Echart/饼图中部内容自定义，支持轮播、点击图例中间内容修改",
      },
    ],
  },
]

// 学而时习之 - 学无止境数组
const StudyKnowledgeSidebar = [
  {
    text: "🔏 JS相关",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "垃圾回收与内存泄漏.md",
        link: "/learn/study/knowledge/JS相关/垃圾回收与console.log内存泄漏.md",
      },
      {
        text: "windoe.onstorage标签页通信",
        link: "/learn/study/knowledge/JS相关/windoe.onstorage标签页通信",
      },
      {
        text: "toFixed结果因精确度产生bug",
        link: "/learn/study/knowledge/JS相关/toFixed结果因精确度产生bug",
      },
      {
        text: "并发任务控制",
        link: "/learn/study/knowledge/JS相关/并发任务控制",
      },
      {
        text: "设计模式",
        link: "/learn/study/knowledge/JS相关/设计模式",
      },
      {
        text: "Proxy与defineProperty",
        link: "/learn/study/knowledge/JS相关/Proxy与defineProperty",
      },
      {
        text: "LocalStorage封装",
        link: "/learn/study/knowledge/JS相关/LocalStorage封装",
      },
      {
        text: "判断是否是数组",
        link: "/learn/study/knowledge/JS相关/判断是否是数组",
      },
    ],
  },
  {
    text: "🎡 Promise相关",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "Axios二次封装",
        link: "/learn/study/knowledge/Promise相关/Axios二次封装",
      },
      {
        text: "并发请求封装",
        link: "/learn/study/knowledge/Promise相关/并发请求封装",
      },
      {
        text: "多接口请求",
        link: "/learn/study/knowledge/Promise相关/多接口请求",
      },
      {
        text: "高量级任务执行优化",
        link: "/learn/study/knowledge/Promise相关/高量级任务执行优化",
      },
      {
        text: "消除异步传染性",
        link: "/learn/study/knowledge/Promise相关/消除异步传染性",
      },
    ],
  },
  {
    text: "☸️ Vue相关",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "$nexttick",
        link: "/learn/study/knowledge/Vue相关/$nexttick",
      },
      {
        text: "ref和reactive在使用上的区别",
        link: "/learn/study/knowledge/Vue相关/ref和reactive在使用上的区别",
      },
      {
        text: "Vue2 VS Vue3",
        link: "/learn/study/knowledge/Vue相关/Vue2 VS Vue3",
      },
      {
        text: "v-model双向绑定",
        link: "/learn/study/knowledge/Vue相关/v-model双向绑定",
      },
      {
        text: "vue图片动态引入使用require",
        link: "/learn/study/knowledge/Vue相关/vue图片动态引入使用require",
      },
      {
        text: "vue项目打包后首页白屏总结",
        link: "/learn/study/knowledge/Vue相关/vue项目打包后首页白屏总结",
      },
      {
        text: "Vue项目对render和jsx的妙用",
        link: "/learn/study/knowledge/Vue相关/Vue项目对render和jsx的妙用",
      },
      {
        text: "Vue项目中TS意义与麻烦",
        link: "/learn/study/knowledge/Vue相关/Vue项目中TS意义与麻烦",
      },
      {
        text: "灵活使用冻结对象提升代码效率",
        link: "/learn/study/knowledge/Vue相关/灵活使用冻结对象提升代码效率",
      },
    ],
  },
  {
    text: "📈 项目相关",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "HBuilder使用模拟器调试", link: "/learn/study/knowledge/项目相关/HBuilder使用模拟器调试" },
      {
        text: "import引入库引入的什么",
        link: "/learn/study/knowledge/项目相关/import引入库引入的什么",
      },
      {
        text: "sass加css变量实现现代前端换肤",
        link: "/learn/study/knowledge/项目相关/sass加css变量实现现代前端换肤",
      },
      {
        text: "绝对路径与相对路径",
        link: "/learn/study/knowledge/项目相关/绝对路径与相对路径",
      },
      {
        text: "前端环境变量使用和原理",
        link: "/learn/study/knowledge/项目相关/前端环境变量使用和原理",
      },
    ],
  },
  {
    text: "🚢 优化相关",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "打包优化",
        link: "/learn/study/knowledge/优化相关/打包优化",
      },
      {
        text: "项目速度优化",
        link: "/learn/study/knowledge/优化相关/项目速度优化",
      },
      {
        text: "性能优化",
        link: "/learn/study/knowledge/优化相关/性能优化",
      },
      {
        text: "页面加载慢排查与解决方案",
        link: "/learn/study/knowledge/优化相关/页面加载慢排查与解决方案",
      },
      {
        text: "资源加载优化",
        link: "/learn/study/knowledge/优化相关/资源加载优化",
      },
    ],
  },
  {
    text: "🗑 返回",
    link: "/learn/study/",
  },
]

// 学而时习之 - 项目实战数组
const StudyItemSidebar = [
  {
    text: "🎰 Echart",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "饼图中部内容自定义，支持轮播、点击图例修改中间内容",
        link: "/learn/study/item/Echart/饼图中部内容自定义，支持轮播、点击图例中间内容修改",
      },
      {
        text: "横向柱状图参数数量设置",
        link: "/learn/study/item/Echart/横向柱状图参数数量设置",
      },
      {
        text: "图表菜单项自定义",
        link: "/learn/study/item/Echart/图表菜单项自定义",
      },
      {
        text: "柱状图悬停文本自定义",
        link: "/learn/study/item/Echart/柱状图悬停文本自定义",
      },
      {
        text: "柱状图封装",
        link: "/learn/study/item/Echart/柱状图封装",
      },
    ],
  },
  {
    text: "👔 Js",
    collapsible: true,
    items: [
      {
        text: "数组对象遍历",
        link: "/learn/study/item/Js/数组对象遍历",
      },
    ],
  },
  {
    text: "🗑 返回",
    link: "/learn/study/",
  },
]

// 学而时习之 - 实操训练数组
const StudyOperateeSidebar = [
  {
    text: "⚙ 功能操作与实现",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "Canvas操作",
        link: "/learn/study/operate/功能操作与实现/Canvas操作",
      },
      {
        text: "Vue项目权限控制",
        link: "/learn/study/operate/功能操作与实现/Vue项目权限控制",
      },
      {
        text: "摆脱手动依赖引入，自动引入依赖",
        link: "/learn/study/operate/功能操作与实现/摆脱手动依赖引入，自动引入依赖",
      },
      {
        text: "操作内嵌ifrname与传递消息",
        link: "/learn/study/operate/功能操作与实现/操作内嵌ifrname与传递消息",
      },
      {
        text: "从一个需求出发如何更优雅写代码",
        link: "/learn/study/operate/功能操作与实现/从一个需求出发如何更优雅写代码",
      },
      {
        text: "富文本编辑器",
        link: "/learn/study/operate/功能操作与实现/富文本编辑器",
      },
      {
        text: "前端操作excel与word",
        link: "/learn/study/operate/功能操作与实现/前端操作excel与word",
      },
      {
        text: "前端文件上传与相关操作",
        link: "/learn/study/operate/功能操作与实现/前端文件上传与相关操作",
      },
      {
        text: "前端下载后端传输的文件",
        link: "/learn/study/operate/功能操作与实现/前端下载后端传输的文件",
      },
      {
        text: "移动端大屏端布局适配",
        link: "/learn/study/operate/功能操作与实现/移动端大屏端布局适配",
      },
      {
        text: "视频提取画面帧",
        link: "/learn/study/operate/功能操作与实现/视频提取画面帧",
      },
    ],
  },
  {
    text: "🎁 组件封装与二开",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "vue重复小组件处理经验",
        link: "/learn/study/operate/组件封装与二开/vue重复小组件处理经验",
      },
      {
        text: "vue组件设计技巧",
        link: "/learn/study/operate/组件封装与二开/vue组件设计技巧",
      },
      {
        text: "对话框弹窗组件",
        link: "/learn/study/operate/组件封装与二开/对话框弹窗组件",
      },
      {
        text: "输入框组件封装",
        link: "/learn/study/operate/组件封装与二开/输入框组件封装",
      },
      {
        text: "通过el-calendar实现业务",
        link: "/learn/study/operate/组件封装与二开/通过el-calendar实现业务",
      },
      {
        text: "通过el-select实现多个省略学习如何改造第三方组件满足自己的要求",
        link: "/learn/study/operate/组件封装与二开/通过el-select实现多个省略学习如何改造第三方组件满足自己的要求",
      },
      {
        text: "通过el-table实现多数据完美无限滚动效果",
        link: "/learn/study/operate/组件封装与二开/通过el-table实现多数据完美无限滚动效果",
      },
      {
        text: "页码列表组件封装思路",
        link: "/learn/study/operate/组件封装与二开/页码列表组件封装思路",
      },
      {
        text: "组件库搭建",
        link: "/learn/study/operate/组件封装与二开/组件库搭建",
      },
    ],
  },
  {
    text: "🗑 返回",
    link: "/learn/study/",
  },
]

/**
 * 项目模块 ************************************************************
 */
// 项目的数组
const ProjectSidebar = [
  {
    text: "项目",
    items: [
      { text: "🧟 灵思", link: "/project/lingsi/" },
      { text: "⛷️百度外包", link: "/project/baidu/" },
      { text: "🔪 刀刀小站", link: "/project/daodao/" },
      { text: "📜 自主学习", link: "/project/myself/" },
    ],
  },
]

// 灵思的数组
const LingsiSidebar = [
  {
    text: "🧟 灵思",
    items: [
      { text: "🎶 音果云音", link: "/project/lingsi/music/" },
      { text: "🔧 职技网", link: "/project/lingsi/职技网/" },
      { text: "💴 视频分销", link: "/project/lingsi/sale/" },
      { text: "🧫 华润水泥", link: "/project/lingsi/水泥/" },
      { text: "🔍 CRM", link: "/project/lingsi/crm/" },
      { text: "🎲 ELK", link: "/project/lingsi/elk/" },
      { text: "🗑 返回", link: "/project/" },
    ],
  },
]

// 音果云音的数组
const MusicSidebar = [
  {
    text: "📱 APP",
    collapsible: true,
    items: [
      { text: "登录", link: "/project/lingsi/music/APP/login" },
      { text: "tabbar", link: "/project/lingsi/music/APP/tabbar" },
      { text: "详情", link: "/project/lingsi/music/APP/detail" },
      { text: "分享", link: "/project/lingsi/music/APP/share" },
      { text: "测试", link: "/project/lingsi/music/APP/test" },
      { text: "操作", link: "/project/lingsi/music/APP/do" },
      { text: "商品", link: "/project/lingsi/music/APP/sku" },
      { text: "支付", link: "/project/lingsi/music/APP/pay" },
      { text: "更新", link: "/project/lingsi/music/APP/update" },
      { text: "个人", link: "/project/lingsi/music/APP/userinfo" },
    ],
  },
  {
    text: "💻 H5",
    collapsible: true,
    items: [
      { text: "海报页", link: "/project/lingsi/music/H5/" },
      { text: "🗑 返回", link: "/project/lingsi/" },
    ],
  },
]

// 职技网的数组
const JobSidebar = [
  {
    text: "🔧 职技网",
    collapsible: true,
    items: [
      { text: "介绍", link: "/project/lingsi/职技网/" },
      { text: "项目创建", link: "/project/lingsi/职技网/项目创建" },
      {
        text: "vant组件二次封装",
        link: "/project/lingsi/职技网/vant组件二次封装",
      },
      { text: "微信授权", link: "/project/lingsi/职技网/微信授权" },
      { text: "下载附件", link: "/project/lingsi/职技网/下载附件" },
      { text: "🗑 返回", link: "/project/lingsi/" },
    ],
  },
]

// 视频分销的数组
const SaleSidebar = [
  {
    text: "💴 视频分销",
    collapsible: true,
    items: [
      { text: "简介", link: "/project/lingsi/sale/" },
      { text: "请求封装", link: "/project/lingsi/sale/request" },
      { text: "token刷新", link: "/project/lingsi/sale/token" },
      { text: "微信授权快捷登录", link: "/project/lingsi/sale/获取手机号" },
      { text: "附件下载", link: "/project/lingsi/sale/preview" },
      { text: "分享", link: "/project/lingsi/sale/分享" },
      { text: "商城", link: "/project/lingsi/sale/商城" },
      { text: "视频轮播", link: "/project/lingsi/sale/video" },
      { text: "图片上传组件封装", link: "/project/lingsi/sale/upload" },
      { text: "关注公众号", link: "/project/lingsi/sale/关注公众号" },
      { text: "🗑 返回", link: "/project/lingsi/" },
    ],
  },
]

// 华润水泥的数组
const CementSidebar = [
  {
    text: "🧫 华润水泥",
    collapsible: true,
    items: [
      { text: "引言", link: "/project/lingsi/水泥/" },
      {
        text: "图片对比可拖拽轮子",
        link: "/project/lingsi/水泥/图片对比可拖拽轮子",
      },
      { text: "vue_color", link: "/project/lingsi/水泥/vue_color" },
      {
        text: "🎭 jeecg",
        collapsible: true,
        items: [
          {
            text: "表格行选中",
            link: "/project/lingsi/水泥/jeecg/表格行选中",
          },
          {
            text: "树组件默认展开",
            link: "/project/lingsi/水泥/jeecg/树组件默认展开",
          },
          {
            text: "j-vxe-table搭配其他组件",
            link: "/project/lingsi/水泥/jeecg/j-vxe-table搭配其他组件",
          },
        ],
      },
      { text: "🗑 返回", link: "/project/lingsi/" },
    ],
  },
]

// ELK的数组
const ELKSidebar = [
  {
    text: "🎲 ELK",
    collapsible: true,
    items: [
      { text: "简介", link: "/project/lingsi/elk/" },
      {
        text: "接收后端返回的二进制流文件",
        link: "/project/lingsi/elk/blob",
      },
      { text: "vue-core的使用", link: "/project/lingsi/elk/vue_core" },
      { text: "Canvas绘制表格图", link: "/project/lingsi/elk/canvas_table" },
      { text: "DIV可编辑文本", link: "/project/lingsi/elk/edit_div" },
      { text: "JSON编辑器", link: "/project/lingsi/elk/edit_JSON" },
      { text: "导出PDF", link: "/project/lingsi/elk/pdf" },
      { text: "🗑 返回", link: "/project/" },
    ],
  },
]

// CRM的数组
const CRMSidebar = [
  {
    text: "🔍 crm",
    collapsible: true,
    items: [
      { text: "简介", link: "/project/lingsi/crm/" },
      { text: "拨打电话", link: "/project/lingsi/crm/call" },
      { text: "navigateBack传参", link: "/project/lingsi/crm/navigateBack" },
      { text: "域名配置", link: "/project/lingsi/crm/部署" },
      { text: "微信授权", link: "/project/lingsi/crm/微信授权" },
      { text: "🗑 返回", link: "/project/lingsi/" },
    ],
  },
]

// 刀刀小站的数组
const DaodaoSidebar = [
  {
    text: "🔪 刀刀小站",
    collapsible: true,
    items: [
      { text: "🔪 引言", link: "/project/daodao/" },
      { text: "🦌 自动路由", link: "/project/daodao/router" },
      { text: "🌺 自动导入", link: "/project/daodao/自动导入" },
      { text: "📈 svg封装", link: "/project/daodao/svg" },
      { text: "🦩 适应性布局", link: "/project/daodao/适应性布局" },
      { text: "🗑 返回", link: "/project/" },
    ],
  },
]

// 百度的数组
const BaiduSidebar = [
  {
    text: "⛷️ 百度",
    collapsible: true,
    items: [
      { text: "⛷️ 引言", link: "/project/baidu/" },
      { text: "🗺 图层", link: "/project/baidu/layer/index" },
      { text: "🎞️ 佛开LED", link: "/project/baidu/fokai/index" },
      { text: "🗑 返回", link: "/project/" },
    ],
  },
]

// 图层的数组
const LayerSidebar = [
  {
    text: "🗺 图层",
    collapsible: true,
    items: [
      { text: "💡 介绍", link: "/project/baidu/layer/index" },
      { text: "📦 封装", link: "/project/baidu/layer/封装" },
      { text: "⛑️ 规范", link: "/project/baidu/layer/规范" },
      { text: "🌊 样式", link: "/project/baidu/layer/样式" },
      { text: "🗺 MapVThree", link: "/project/baidu/layer/MapVThree" },
      { text: "🪜 优化", link: "/project/baidu/layer/优化" },
      { text: "⚙️ 功能", link: "/project/baidu/layer/功能" },
      { text: "🕶️ BUG", link: "/project/baidu/layer/bug" },
      { text: "🗑 返回", link: "/project/baidu/" },
    ],
  },
]

// 佛开的数组
const FokaiSidebar = [
  {
    text: "🎞️ 佛开LED",
    collapsible: true,
    items: [
      { text: "💡 介绍", link: "/project/baidu/fokai/index" },
      { text: "🟥 样式", link: "/project/baidu/fokai/style" },
      { text: "🛑 覆盖物", link: "/project/baidu/fokai/overlay" },
      { text: "💻 Ws", link: "/project/baidu/fokai/ws" },
      { text: "📦 打包", link: "/project/baidu/fokai/build" },
      { text: "🗑 返回", link: "/project/baidu/" },
    ],
  },
]

// 自主学习的数组
const SelfstudySidebar = [
  {
    text: "📕 自主学习",
    collapsible: true,
    items: [
      { text: "📕 引言", link: "/project/myself/" },
      { text: "🐇 小兔鲜", link: "/project/myself/小兔鲜/inweb/all" },
      { text: "🐂 硅谷甄选", link: "/project/myself/硅谷甄选/" },
      { text: "⛑ 尚医通", link: "/project/myself/尚医通/" },
      { text: "🎎 react后台", link: "/project/myself/react后台/" },
      { text: "📰 知乎日报", link: "/project/myself/知乎日报/react版/" },
      { text: "👨‍⚕️ 优医问诊", link: "/project/myself/优医问诊/" },
      { text: "🗑 返回", link: "/project/" },
    ],
  },
]

// 小兔鲜的数组
const RabitSidebar = [
  {
    text: "🐇 小兔鲜",
    collapsible: true,
    items: [
      {
        text: "💻 Web 端",
        collapsible: true,
        items: [
          { text: "项目介绍", link: "/project/myself/小兔鲜/inweb/all" },
          { text: "项目创建", link: "/project/myself/小兔鲜/inweb/" },
          { text: "Layout", link: "/project/myself/小兔鲜/inweb/layout" },
          { text: "Home", link: "/project/myself/小兔鲜/inweb/home" },
          { text: "分类", link: "/project/myself/小兔鲜/inweb/一级分类" },
          { text: "详情", link: "/project/myself/小兔鲜/inweb/detail" },
          { text: "登录", link: "/project/myself/小兔鲜/inweb/login" },
          { text: "购物车", link: "/project/myself/小兔鲜/inweb/购物车" },
          { text: "Sku思路", link: "/project/myself/小兔鲜/inweb/sku" },
        ],
      },
      {
        text: "📱 uniapp 跨端",
        collapsible: true,
        items: [
          { text: "项目初始化", link: "/project/myself/小兔鲜/inuni/" },
          { text: "首页", link: "/project/myself/小兔鲜/inuni/home" },
          { text: "猜你喜欢", link: "/project/myself/小兔鲜/inuni/guess" },
          { text: "登录", link: "/project/myself/小兔鲜/inuni/login" },
          { text: "分包", link: "/project/myself/小兔鲜/inuni/pagesmember" },
          { text: "订单详情", link: "/project/myself/小兔鲜/inuni/detail" },
          { text: "打包", link: "/project/myself/小兔鲜/inuni/build" },
        ],
      },
      { text: "🗑 返回", link: "/project/myself/" },
    ],
  },
]

// 硅谷甄选的数组
const SelectSidebar = [
  {
    text: "🐂 硅谷甄选",
    collapsible: true,
    items: [
      { text: "项目初始化", link: "/project/myself/硅谷甄选/" },
      { text: "路由模块", link: "/project/myself/硅谷甄选/路由" },
      { text: "状态管理", link: "/project/myself/硅谷甄选/状态管理" },
      { text: "属性管理", link: "/project/myself/硅谷甄选/属性管理" },
      { text: "SPU管理", link: "/project/myself/硅谷甄选/SPU管理" },
      { text: "设置", link: "/project/myself/硅谷甄选/设置" },
      { text: "数据大屏", link: "/project/myself/硅谷甄选/数据大屏" },
      { text: "🗑 返回", link: "/project/myself/" },
    ],
  },
]

// 尚医通的数组
const DoctorSidebar = [
  {
    text: "⛑ 尚医通",
    collapsible: true,
    items: [
      { text: "项目初始化", link: "/project/myself/尚医通/" },
      { text: "🗑 返回", link: "/project/myself/" },
    ],
  },
]

// react后台的数组
const BackstageSidebar = [
  {
    text: "🎎 react后台",
    collapsible: true,
    items: [
      { text: "项目初始化", link: "/project/myself/react后台/" },
      { text: "菜单栏配置", link: "/project/myself/react后台/menu" },
      { text: "仓库配置", link: "/project/myself/react后台/redux" },
      { text: "路由守卫", link: "/project/myself/react后台/守卫" },
      { text: "🗑 返回", link: "/project/myself/" },
    ],
  },
]

// 知乎日报的数组
const PaperSidebar = [
  {
    text: "📰 知乎日报",
    collapsible: true,
    items: [
      {
        text: "React版",
        collapsible: true,
        items: [
          { text: "项目初始化", link: "/project/myself/知乎日报/react版/" },
          {
            text: "路由配置",
            link: "/project/myself/知乎日报/react版/router",
          },
          {
            text: "仓库配置",
            link: "/project/myself/知乎日报/react版/redux",
          },
          { text: "接口配置", link: "/project/myself/知乎日报/react版/api" },
          { text: "组件配置", link: "/project/myself/知乎日报/react版/组件" },
        ],
      },
      {
        text: "Vue3+TS版",
        collapsible: true,
        items: [],
      },
      { text: "🗑 返回", link: "/project/myself/" },
    ],
  },
]

// 优医问诊的数组
const ConsultationSidebar = [
  {
    text: "👨‍⚕️ 优医问诊",
    collapsible: true,
    items: [
      { text: "项目初始化", link: "/project/myself/优医问诊/" },
      { text: "登录模块", link: "/project/myself/优医问诊/login" },
      { text: "用户模块", link: "/project/myself/优医问诊/user" },
      { text: "🗑 返回", link: "/project/myself/" },
    ],
  },
]


/**
 * 阅读模块 ************************************************************
 */
// 阅读数组
const ReadSidebar = [
  {
    text: "📖 阅读",
    collapsible: true,
    items: [
      { text: "✨ 索引", link: "/read/" },
      {
        text: "Javascript",
        collapsible: true,
        items: [
          {
            text: "ES6标准入门",
            collapsible: true,
            collapsed: true,
            items: [
              { text: "索引", link: "/read/javascript/ES6标准入门/index" },
              { text: "第一章 ECMAScript6简介", link: "/read/javascript/ES6标准入门/1" },
              { text: "第二章 Let 和 const 命令", link: "/read/javascript/ES6标准入门/2" },
              { text: "第三章 变量的解构赋值", link: "/read/javascript/ES6标准入门/3" },
              { text: "第四章 字符串的扩展", link: "/read/javascript/ES6标准入门/4" },
              { text: "第五章 正则的扩展", link: "/read/javascript/ES6标准入门/5" },
              { text: "第六章 数值的扩展", link: "/read/javascript/ES6标准入门/6" },
              { text: "第七章 函数的扩展", link: "/read/javascript/ES6标准入门/7" },
              { text: "第八章 数组的扩展", link: "/read/javascript/ES6标准入门/8" },
              { text: "第九章 对象的扩展", link: "/read/javascript/ES6标准入门/9" },
            ],
          },
        ],
      },
      {
        text: "Vue",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Vue.js设计与实现", link: "/read/Vue/Vue.js设计与实现.md" },
        ],
      },
    ],
  },
]

/**
 * 部署模块 ************************************************************
 */
// 部署数组
const VitePressSidebar = [
  {
    text: "🧊 部署",
    collapsible: true,
    items: [
      { text: "🌩️ 引言", link: "/vitePress/" },
      { text: "🧩 搭建", link: "/vitePress/Dev" },
      { text: "🎁 打包", link: "/vitePress/Build" },
      { text: "⏳ 部署", link: "/vitePress/Deploy" },
      { text: "✨ 拓展", link: "/vitePress/Know" },
    ],
  },
]


/**
 * 帮助模块 ************************************************************
 */
// 帮助数组
const HelpSidebar = [
  {
    text: "📴 有用的帮助",
    collapsible: true,
    items: [
      { text: "🎃 开发帮助", link: "/help/" },
      { text: "📕 官方文档", link: "/help/官方文档" },
    ],
  },
]


/**
 * 关于模块 ************************************************************
 */
// 关于数组
const AboutSidebar = [
  {
    text: "⭐ 关于",
    collapsible: true,
    items: [
      { text: "🧑 关于我", link: "/about/" },
      { text: "🔪 关于刀刀小站", link: "/about/blog" },
      { text: "📑 关于学习准则", link: "/about/furtrue" },
      { text: "🧟 关于灵思", link: "/about/lingsi" },
      { text: "⛷️ 关于百度", link: "/about/baidu" },
    ],
  },
]


/**
 * 面试模块 ************************************************************
 */
// 面试典数组
const DictionarySidebar = [
  {
    text: "📔 面试典",
    collapsible: true,
    items: [
      {
        text: "Javascript",
        collapsible: true,
        items: [
          {
            text: "(a==1&&a==2&&a==3)",
            link: "/面试鸭/面试典/js/(a==1&&a==2&&a==3)",
          },
          {
            text: "数组方法手写原理",
            link: "/面试鸭/面试典/js/数组方法手写原理",
          },
          {
            text: "关于forEach使用break跳出循环",
            link: "/面试鸭/面试典/js/关于forEach使用break跳出循环",
          },
          { text: "手写封装AJAX", link: "/面试鸭/面试典/js/手写封装AJAX" },
          { text: "数组去重", link: "/面试鸭/面试典/js/数组去重" },
          { text: "js执行顺序", link: "/面试鸭/面试典/js/js执行顺序" },
        ]
      },
      {
        text: "项目",
        collapsible: true,
        items: [
          {
            text: "前端面试项目亮点和难点",
            link: "/面试鸭/面试典/project/前端面试项目亮点和难点",
          },
        ]
      },
    ],
  },
]

// 面试问数组
const AskSidebar = [
  {
    text: "👨‍⚖️ 面试问",
    collapsible: true,
    items: [
      {
        text: "面试历程",
        link: "/面试鸭/面试问/index",
      },
      {
        text: "印萌",
        link: "/面试鸭/面试问/印萌",
      },
      {
        text: "百度",
        link: "/面试鸭/面试问/百度",
      },
    ],
  },
]


/**
 * 最终导出 ************************************************************
 */
export default {
  "/learn/CSS": generateSidebarItems(CssSidebar),
  "/learn/CSS/效果提升": generateSidebarItems(CssLevelSidebar),
  "/learn/CSS/知识拓展": generateSidebarItems(CssKnowladgeSidebar),
  "/learn/Javascript": generateSidebarItems(JsSidebar),
  "/learn/Reg": generateSidebarItems(RegSidebar),
  "/learn/vue2": generateSidebarItems(Vue2Sidebar),
  "/learn/Vue3": generateSidebarItems(Vue3Sidebar),
  "/learn/React": generateSidebarItems(ReactSidebar),
  "/learn/TypeScript": generateSidebarItems(TsSidebar),
  "/learn/Node": generateSidebarItems(NodeSidebar),
  "/learn/Git": generateSidebarItems(GitSidebar),
  "/learn/study": generateSidebarItems(StudySidebar),
  "/learn/study/knowledge": generateSidebarItems(StudyKnowledgeSidebar),
  "/learn/study/item": generateSidebarItems(StudyItemSidebar),
  "/learn/study/operate": generateSidebarItems(StudyOperateeSidebar),
  "/面试鸭/面试典": generateSidebarItems(DictionarySidebar),
  "/面试鸭/面试问": generateSidebarItems(AskSidebar),
  "/project": generateSidebarItems(ProjectSidebar),
  "/project/lingsi": generateSidebarItems(LingsiSidebar),
  "/project/lingsi/sale": generateSidebarItems(SaleSidebar),
  "/project/lingsi/职技网": generateSidebarItems(JobSidebar),
  "/project/lingsi/水泥": generateSidebarItems(CementSidebar),
  "/project/lingsi/music": generateSidebarItems(MusicSidebar),
  "/project/lingsi/elk": generateSidebarItems(ELKSidebar),
  "/project/lingsi/crm": generateSidebarItems(CRMSidebar),
  "/project/daodao": generateSidebarItems(DaodaoSidebar),
  "/project/baidu": generateSidebarItems(BaiduSidebar),
  "/project/baidu/layer": generateSidebarItems(LayerSidebar),
  "/project/baidu/fokai": generateSidebarItems(FokaiSidebar),
  "/project/myself": generateSidebarItems(SelfstudySidebar),
  "/project/myself/小兔鲜": generateSidebarItems(RabitSidebar),
  "/project/myself/硅谷甄选": generateSidebarItems(SelectSidebar),
  "/project/myself/尚医通": generateSidebarItems(DoctorSidebar),
  "/project/myself/react后台": generateSidebarItems(BackstageSidebar),
  "/project/myself/知乎日报": generateSidebarItems(PaperSidebar),
  "/project/myself/优医问诊": generateSidebarItems(ConsultationSidebar),
  "/vitePress": generateSidebarItems(VitePressSidebar),
  "/help": generateSidebarItems(HelpSidebar),
  "/about": generateSidebarItems(AboutSidebar),
  "/read": generateSidebarItems(ReadSidebar),
};
