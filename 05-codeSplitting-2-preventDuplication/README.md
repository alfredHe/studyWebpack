1、webpack.config.js 入口代码修改
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        another: {
        import: './src/another-module.js',
        dependOn: 'shared',
        },
        shared: 'lodash',
    },

2、webpack.config.js 一个 HTML 页面上使用多个入口时
   optimization: {
     splitChunks: {
       chunks: 'all',
     },
   },