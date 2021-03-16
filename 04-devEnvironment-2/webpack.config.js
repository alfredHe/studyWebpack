const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          title: '开发环境',
        }),
    ],
    devServer: {
        contentBase: './dist'
    },
}