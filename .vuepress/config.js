module.exports = {
  // head: [
  //   ['link', { rel: 'icon', href: '/favicon.ico' }]
  // ],
  title: "@alberttocastro - Web Developer",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("node-sass"),
            },
          },
        ],
      },
    ],
  },
  locales: {
    "/": {
      lang: "en-US",
      description: "My Web Developer website",
    },
    "/pt/": {
      lang: "pt-BR",
      description: "Meu site de Desenvolvedor Web",
    },
  },
  themeConfig: {
    locales: {
      "/pt/": {
        nav: [
          { link: "/pt/", text: "Sobre mim (CV)" },
          { link: "/pt/blog/", text: "Blog" },
        ],
      },
      "/": {
        nav: [
          { link: "/", text: "About me (CV)" },
          { link: "/blog/", text: "Blog" },
        ],
      },
    },
  },
};
