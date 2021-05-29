module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  title: "@alberttocastro - Web Developer",
  themeConfig: {
    sidebar: [
      ['/', 'About me (CV)']
    ]
  },
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
};
