export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "CDP",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    // 添加其他自定义样式文件，如果有的话
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  //css: ["@/assets/css/global.css"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


};
