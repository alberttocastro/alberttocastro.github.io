module.exports = {
  // head: [
  //   ['link', { rel: 'icon', href: '/favicon.ico' }]
  // ],
  plugins: [
    ['@vuepress/google-analytics', {'ga': 'G-54JWFMN1CR'}],
    ['@vssue/vuepress-plugin-vssue', {
      // set `platform` rather than `api`
      platform: 'github',

      // all other options of Vssue are allowed
      owner: 'alberttocastro',
      repo: 'alberttocastro.github.io',
      clientId: '23fcfe530f5643cb9e01',
      clientSecret: '1a9ad71a088cee0f07f36ee2137e63e68054f050',
    }],
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "blog",
            path: "/blog/",
            itemPermalink: "/blog/:year/:slug",
            itemLayout: "Post",
            layout: "PostIndex"
          },
          {
            id: "publicacoes",
            dirname: "pt/blog",
            path: "/pt/blog/",
            itemPermalink: "/blog/:year/:slug",
            itemLayout: "Post",
            layout: "PostIndex"
          },
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag'],
            path: '/tags/',
            scopeLayout: 'PostIndex'
          }
        ]
      },
    ],
  ],
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
        // text for the language dropdown
        selectText: "Idiomas",
        // label for this locale in the language dropdown
        label: "Português",
        // Aria Label for locale in the dropdown
        ariaLabel: "Idiomas",
        nav: [
          { link: "/pt/", text: "Sobre mim (CV)" },
          { link: "/pt/blog/", text: "Blog" },
        ],
      },
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // Aria Label for locale in the dropdown
        ariaLabel: "Languages",
        nav: [
          { link: "/", text: "About me (CV)" },
          { link: "/blog/", text: "Blog" },
        ],
      },
    },
  },
};
