module.exports = {
  title: "FFBLOG", // 设置网站标题
  description: "FF的博客",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "博文",
        items: [
          { text: "Android", link: "/android/" },
          { text: "Ios", link: "/ios/" },
        ],
      },

      { text: "关于", link: "/about/" },
      { text: "Github", link: "https://github.com/a674125938/myBlog" },
    ],
    sidebar: {
      "/": [
        {
          title: "Group 1", // 必要的
          path: "/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "apiword", //根目录创建 apiword.md文件
            "api", //根目录创建 api.md文件
            "error", //根目录创建 error.md文件
          ],
        },
        {
          title: "Group 2",
          children: ["web1"],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
      ],
      "/android/": ["android1"],
      "/ios/": ["ios1"],
      "/about/": ["about1"],
    },
    sidebarDepth: 2,
  },
};
