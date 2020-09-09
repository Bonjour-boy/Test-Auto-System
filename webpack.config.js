const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './src/Client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'Dist'),
        filename: 'bundle.js'
    },
    //webpack在构建包的时候会按目录的进行文件的查找
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        //自动打开浏览器
        open: true,
        //默认情况下，dev-server 通过 HTTP 提供服务
        https: false,
        host: "localhost",
        port: 3000,
        //单独的后端开发服务器，在同域名下发送 API 请求
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    plugins: [
        //自动删除webpack里的dist目录
        new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['outputDirectory'] }),
        //生成html文件
        new HtmlWebpackPlugin({
            template: './Build/index.html'
        })
    ]
}