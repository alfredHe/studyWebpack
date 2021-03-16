1、 npm install --save-dev html-webpack-plugin

2、webpack.config.js添加代码
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],

3、执行 npm run build