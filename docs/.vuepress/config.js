module.exports = {
    title: '首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '前端记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    // head: [
    //     ['link', { rel: 'icon', href: '/egg.png' }],  //浏览器的标签栏的网页图标
    // ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        // logo: '/egg.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '学习手册',
                ariaLabel: '分类',
                items: [
                    { text: '笔记', link: '/pages/basics/css3.md' },
                    { text: '工具', link: '/pages/folder1/test1.md' },
                    { text: '插件', link: '/pages/folder2/test4.md' },
                    { text: '兴趣', link: '/pages/folder2/test5.md' },
                ]
            },
            { text: '功能演示', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://github.com/a674125938' },
        ],
        sidebar: {
            '/pages/basics/':[
                {
                    title: '笔记',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['css3.md', 'CSS'],
                        ['html5.md', 'HTML'],
                        ['js.md', 'JS'],
                        ['vue.md', 'VUE'],
                        ['react.md', 'react'],
                        ['git.md', 'Git'],
                        ['webpack.md', 'Webpack'],
                        ['internet.md', 'Internet'],
                    ]
                },
                {
                    title: '进阶',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['ts.md', 'Typescript'],
                        ['nodejs.md', 'NodeJS'],
                        ['nginx.md', 'Nginx'],
                        ['animation.md', '动画'],
                        ['multiMedia.md', '多媒体'],
                        ['algorithm.md', '算法'],
                        ['interView.md', 'interView'],
                    ]
                }
            ],
            '/pages/folder1/':[
                {
                    title: '工具',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1'],
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '插件',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
            '/pages/folder2/':[
                {
                    title: '基础',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test4.md', '子菜单1'],
                        ['test5.md', '子菜单2']
                    ]
                },
            ],
        }
    }
}