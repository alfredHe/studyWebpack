1、webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。 webpack-dev-server 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置

2、npm install --save-dev express webpack-dev-middleware

3、webpack.config.js 中output添加代码 publicPath: '/'

4、自定义一个express server: server.js

5、添加一个 npm script： "server": "node server.js"

6、执行 npm run server

