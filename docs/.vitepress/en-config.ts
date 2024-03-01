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
            { text: "User Manual", link: "/user-guide/index" },
            { text: "Tech Manual", link: "/tech-guide/index" }
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

        footer: {
            message: 'Released under CC-BY-SA-4.0 license',
            copyright: 'Copyright © 2024-present InKCreThing'
        },
        
        lastUpdated: {
            text: "Last updated at",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium"
            }
        },
        i18nRouting: true,
    }
}