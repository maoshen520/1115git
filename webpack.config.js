
//导入路径处理模块
let path = require('path');

//导入插件
let MIN_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');

//导入处理html模板插件
let htmlWebpackPlugin = require('html-webpack-plugin');

//暴露文件
module.exports = {
    //配置模式  development：开发模式   production:生产模式
    mode: 'development',

    //配置入口
    entry: {
        app: './app/app.js'
    },

    //配置输出文件路径
    output:{

        //打包输出的文件路径
        path: path.resolve(__dirname + '/build'),

        // 打包输出文件重命名
        filename: '[name].min.js'
    },

    //配置loader
    //处理css, less
    module:{

        //定义loader规则
        rules: [

            //每一个对象就是一个loader规则
            //处理css
            {
                //匹配文件规则
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },

            //处理less
            {
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},         
                    {loader:'less-loader'}

                ]
            },
            // // 处理图片
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            //如果图片小于等于1000B，图片被转为base64
                            limit:1000

                        }
                    }
                ]
            },

            //处理html模板的图片
            {
                test: /\.html?$/,
                use: [
                    {loader: 'html-withing-loader'}
                ]
            }
        ]

    },

    // //配置插件
    plugins: [
        //实例化分离css
        new MIN_CSS_EXTRACT_PLUGIN({

            // 文件名
            filename: '[name].min.css'
        }),

        //实例化处理html模板插件
        new htmlWebpackPlugin({

            //处理模板的路径
            template: 'app.html',

            inject: 'body',

            //最小化
            minify:{

                //是否移除注释
                removeComments:true,


                //是否移除标签属性的引号
                removeAttributeQuotes: true,

                //是否移除html文件的空白符
                collapseWhitespace: true
            },

            //输出文件重命名
            filename: 'app.min.html'
        })
    ]
};


