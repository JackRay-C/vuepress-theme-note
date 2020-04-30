module.exports = {
    title: 'Vuepress Theme Note',
    description: '记录学习生涯的各种笔记！',
    base: '/vuepress-theme-note/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    markdown: {
        lineNumbers: true
    },
    smoothScroll: true,
    port: 5000,
    evergreen: true,
    theme: 'vuepress-theme-note',
    plugins: {
        '@vuepress/medium-zoom': {
            selector: ".theme-note-content img",
            options: {
                margin: 0,
                background: 'rgba(0,0,0,.4)'
            }
        }
    },
    themeConfig: {
        smoothScroll: true,
        lastUpdated: '上次更新',
        repo: 'JackRay-c/vuepress-theme-note',

        docsBranch: 'gh-pages',

        editLinkText: '帮助我们改善此页面！',


        displayAllHeaders: true,
        activeHeaderLinks: false,

        // algolia: {
        //     apiKey: '005d7d949bd2c403ee056670a5c60044',
        //     indexName: ''
        // },
        nav: [
            { text: '指南', link: '/install/' },
            { text: '配置', link: '/config/' },
            { text: '案例', link: '/example/' },

        ],
        sidebar: {
            "/install/": [{
                    title: '上手指南', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 0, // 可选的, 默认值是 1
                    children: [
                        '',

                        '怎样记笔记',
                        'CHANGELOG',
                    ]
                },
                {
                    title: '插件配置',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        'mediumZoom',
                        'lastUpdated',
                        'nprogress',
                        'search'
                    ]
                }
            ],
        }
    },

}