1、 webpach.config.js 添加代码 devtool: 'inline-source-map'，错误映射到源代码

2、inline-source-map


3、npm install --save-dev webpack-dev-server webpack-dev-server 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能

4、webpack.config.js 添加代码
 devServer: {
    contentBase: './dist',
  },

5、以上配置告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下

6、package.json添加 "start": "webpack serve --open",

7、npm start本地运行代码

