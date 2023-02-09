export default {
  '/learn': getLearnSidebar(),
  '/learn/Javascript': getLearnJsSidebar(),
  '/learn/Node': getLearnNodeSidebar(),
  '/knowledgePoint': getKnowledgePointSidebar(),
  '/project/lingsi/sale': getSaleSidebar(),
  '/project/lingsi/music': getMusicSidebar(),
  '/project/lingsi/crm': getCRMSidebar(),
  '/project/lingsi/elk': getELKSidebar(),
  '/vitePress': getVitePressSidebar(),
  '/about': getAboutSidebar(),
}

// 获取前端的数组
function getLearnSidebar() {
  return [
    {
      text: "HTML",
      collapsible: true,
      items: [
        { text: "HTML", link: "/learn/HTML/" },
      ],
    },
    {
      text: "CSS",
      collapsible: true,
      items: [
        { text: "CSS", link: "/learn/CSS/" },
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
      ]
    }
  ]
}

// 获取音果云音的数组
function getMusicSidebar() {
  return [
    {
      text: "🎶 音果云音",
      collapsible: true,
      items: [
        {
          text: "🎶 音果云音",
          // collapsible: true,
          link: "/project/lingsi/music/",
          items: [
            {
              text: " APP",
              collapsible: true,
              items: [
                { text: '登录页', link: "/project/lingsi/music/APP/login" },
                { text: 'tabbar页', link: "/project/lingsi/music/APP/tabbar" },
                { text: '详情页', link: "/project/lingsi/music/APP/detail" },
                { text: '分享页', link: "/project/lingsi/music/APP/share" },
                { text: '测试页', link: "/project/lingsi/music/APP/test" },
                { text: '操作页', link: "/project/lingsi/music/APP/do" },
                { text: '支付页', link: "/project/lingsi/music/APP/pay" },
              ]
            },
            {
              text: 'H5',
              collapsible: true,
              items: [
                { text: '海报页', link: '/project/lingsi/music/H5/'}
              ]
            }
          ],
        }
      ],
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
        { text: '视频轮播', link: '/project/lingsi/sale/video' },
        { text: '图片上传组件封装', link: '/project/lingsi/sale/upload' },
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
        { text: 'navigateBack传参', link: '/project/lingsi/crm/navigateBack' }
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

// 获取项目学习的数组
function getKnowledgePointSidebar() {
  return [
    {
      text: '🎒 项目学习',
      collapsible: true,
      items: [
        { text: "🌩️ 引言", link: "/knowledgePoint/" },
        { text: "🧩 vue-color的使用", link: "/knowledgePoint/vue_color" },
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