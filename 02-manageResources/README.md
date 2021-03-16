//加载css
1、npm install --save-dev style-loader css-loader

2、 webpack.config.js添加：
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
}

3、应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后

4、创建一个元素方便查看样式效果

5、执行 npm run build


// 加载 images 图像
1、加载 images图像，在webpack5中使用内置的Asset Modules

2、webpack.config.js添加代码
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

3、创建一个Images对象

4、执行 npm run build