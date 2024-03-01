import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        siteTitle: "InKCre Document",

        // lastUpdated: true,
        lastUpdatedText: 'Last Updated',
        returnToTopLabel: 'Back to Top',
        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },
        editLink: {
            pattern: 'https://github.com/InKCre/.github/edit/main/docs/:path',
            text: "Edit this page on GitHub"
        },

        nav: [
            { text: "Home", link: "/" },
            { text: "User Manual", link: "/zh-cn/user-guide/index" },
            { text: "Tech Manual", link: "/zh-cn/tech-guide/index" }
        ],
        sidebar: {
            "/user-guide/": [

            ],
            "/tech-guide/": [

            ]
        },
        outline: {
            level: "deep", 
            label: "Content", 
        },
        
        i18nRouting: true
    }
}