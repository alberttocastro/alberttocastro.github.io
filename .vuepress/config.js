module.exports = {
  title: "Work in progress",
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