import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    author: "YumuMuzi",
    copyright: "YumuBot",
    darkmode: "switch",

    favicon: "/favicon.ico",

    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

    logo: "/favicon.ico",

    repo: "https://github.com/yumu-bot/yumu-docs",

    repoLabel: "GitHub",

    repoDisplay: true,

    editLinkPattern: ":repo/blob/:branch/:path",

    docsRepo: "https://github.com/yumu-bot/yumu-docs",

    docsDir: "src", // navbar
    navbar,

    // sidebar
    sidebar,

    footer: "Yumu Docs",

    displayFooter: true,

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    // page meta
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    plugins: {
        components: {
            components: [
                "Badge",
                "VPCard",
                "VidStack",
            ],
        },

        // You should generate and use your own comment service
        comment: {
            provider: "Giscus",
            repo: "SIyuyuko/yumu-docs",
            repoId: "R_kgDOKOF_ag",
            category: "Announcements",
            categoryId: "DIC_kwDOKOF_as4CZA6x",
        },

        slimsearch: true,

        search: false,

        icon: {
            assets: "fontawesome", prefix: ""
        },
    },


    markdown: {
        align: true,
        attrs: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        playground: {
            presets: ["ts", "vue"],
        },
        stylize: [{
            matcher: "Recommended", replacer: ({tag}) => {
                if (tag === "em") return {
                    tag: "Badge", attrs: {type: "tip"}, content: "Recommended",
                };
            },
        },],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
    },

});
