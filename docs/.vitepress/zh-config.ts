import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        siteTitle: "InKCre 文档",
        
        // lastUpdated: true,
        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        editLink: {
            pattern: 'https://github.com/InKCre/InKCre-docu/edit/main/docs/:path',
            text: "在GitHub上编辑该页面"
        },

        nav: [
            { text: "主页", link: "/zh-cn/" },
            { text: "用户手册", link: "/zh-cn/user-guide/index" },
            { text: "开发手册", link: "/zh-cn/tech-guide/index" }
        ],
        sidebar: {
            "/zh-cn/user-guide/": [

            ],
            "/zh-cn/tech-guide/": [

            ]
        },
        outline: {
            level: "deep", 
            label: "文章目录", 
        },
        
        i18nRouting: true
    }
}