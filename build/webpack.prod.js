"use strict"
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //入口
    entry: path.join(__dirname, '..', 'src/main.ts'),
    //输出
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    //打包时需要的块
    module: {
        //指定加载器
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_module/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers:'last 2 version'
                                        },
                                    ]
                                ]
                            }

                        }
                    },
                    'less-loader'
                ],
                exclude: /node_module/
            }
        ]
    },
    //插件  
    plugins: [
        //清除dist 保持最新的包
        new CleanWebpackPlugin(),
        //自动引入js 自定义html模板
        new HTMLWebpackPlugin({
            template: path.join(__dirname, '..', "public/index.html")
        })
    ],
    //设置模块如何被解析
    resolve: {
        extensions: ['.ts', '...'],
        alias: {
            "@": path.resolve(__dirname, '..', 'src')
        }
    },
    //开发服务
    devServer: {
        port: '8080',//端口
        compress: true,//
        hot: true//热模块替换
    },
    mode: 'production',

}
