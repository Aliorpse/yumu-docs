import {defineUserConfig} from "vuepress";
import {viteBundler} from "@vuepress/bundler-vite";
import theme from "./theme";

export default defineUserConfig({
    base: "/",

    bundler: viteBundler(),

    lang: "zh-CN", title: "Yumu Docs", description: "Yumu Docs",

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
    head: [["link", {
        href: "/assets/font/AlibabaPuHuiTi-3-55-Regular.ttf", rel: "stylesheet",
    },], ["link", {
        href: "/assets/font/Torus-SemiBold.ttf", rel: "stylesheet",
    },],],
});
