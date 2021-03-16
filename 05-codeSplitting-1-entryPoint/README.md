1、webpack.config.js 入口代码修改
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
    },

2、webpack.config.js 出口代码修改   filename: '[name].bundle.js'