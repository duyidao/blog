export default [
  {
    text: "💻 前端知识",
    items: [
      { text: "HTML & CSS", link: "/learn/HTML/" },
      { text: "JavaScript", link: "/learn/Javascript/" },
      { text: "Node", link: "/learn/Node/" },
    ],
  },
  {
    text: "📖 项目总结",
    items: [
      { text: "🎶 音果云音", link: "/project/lingsi/music/" },
      { text: "💴 视频分销", link: "/project/lingsi/sale/" },
      {
        items: [
          {
            text: '🎒 项目学习',
            link: '/knowledgePoint/'
          }
        ]
      }
    ],
  },
  {
    text: "🧊 部署",
    items: [{ text: "🌩️ VitePress", link: "/vitePress/" }],
  },
  {
    text: "⭐ 关于",
    items: [
      { text: "⭐ 关于我", link: "/about/" },
      { text: "🔪 关于刀刀小站", link: "/about/blog" }
    ],
  }
]