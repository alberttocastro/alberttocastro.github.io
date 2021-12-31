module.exports = {
  // head: [
  //   
  // ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-54JWFMN1CR",
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-54JWFMN1CR');",
      ],
    ],
  ],
  plugins: [
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
            layout: "PostIndex",
          },
          {
            id: "publicacoes",
            dirname: "pt/blog",
            path: "/pt/blog/",
            itemPermalink: "/blog/:year/:slug",
            itemLayout: "Post",
            layout: "PostIndex",
          },
          // {
          //   id: "knowledgebase",
          //   dirname: "kb",
          //   path: "/kb/",
          //   itemPermalink: "/kb/:slug",
          //   itemLayout: "Post",
          //   layout: "PostIndex"
          // }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag"],
            path: "/tags/",
            scopeLayout: "PostIndex",
          },
        ],
      },
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: "img.zoom-custom-imgs",
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
    [
      "social-share",
      {
        networks: ["twitter", "facebook", "telegram", "whatsapp", "linkedin"],
        twitterUser: "alberttocastro",
        autoQuote: true,
        isPlain: true,
        noGlobalSocialShare: true,
        extendsNetworks: {
          linkedin: {
            sharer:
              "https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",
            type: "popup",
            color: "#1786b1",
            icon:
              '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
          },
        },
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        // set `platform` rather than `api`
        platform: "github",

        // all other options of Vssue are allowed
        owner: "alberttocastro",
        repo: "alberttocastro.github.io",
        clientId: "23fcfe530f5643cb9e01",
        clientSecret: "1a9ad71a088cee0f07f36ee2137e63e68054f050",
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
          { link: "/pt/", text: "Início" },
          { link: "/pt/curriculum", text: "Sobre mim (CV)" },
          { link: "/pt/blog/", text: "Artigos" },
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
          { link: "/", text: "Home" },
          { link: "/curriculum", text: "About me (CV)" },
          { link: "/blog/", text: "Articles" },
        ],
      },
    },
  },
  markdown: {
    anchor: {
      permalinkSymbol: ''
    }
  }
};
