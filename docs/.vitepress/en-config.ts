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
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/InKCre/.github/edit/main/docs/:path',
            text: "Edit this page on GitHub"
        },

        nav: [
            { text: "Home", link: "/" },
            { text: "Efforts", link: "/efforts" },
            {
                text: "About",
                items: [
                    {
                        text: "Our Mission",
                        link: "/about/mission",
                        activeMatch: "/about/mission",
                    },
            
                    {
                        text: "Join Us",
                        link: "/about/join",
                        activeMatch: "/about/join",
                    },

                    {
                        text: "About Us",
                        link: "/about/who-are-we",
                        activeMatch: "/about/who-are-we"
                    },
                ]
            }
        ],
        sidebar: [
        ],
        outline: {
            level: "deep", 
            label: "Content", 
        },
        
        i18nRouting: true
    }
}