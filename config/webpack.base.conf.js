const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const  HappyPack  = require('happypack');
const { HappyThreadPool } = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports= {
    entry: './src/index.jsx',
    output:{
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.(c|sc)ss$/,
                use: ["happypack/loader?id=styles"],
                include: path.resolve('./src'),
            },
            {
                test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images/',
                        }
                    },
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                use: [
                    {
                        loader: "happypack/loader?id=JSX"
                    }
                ],
                exclude: /node_modules/,
                include: path.resolve('./src'),
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.scss', '.eot', '.ttf', '.svg', '.woff'],
        alias: {
            "@":path.resolve("src"),
            'pages': path.resolve('src/pages'),
            'components': path.resolve('src/component'),
            'router': path.resolve('src/router')
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new HappyPack({
            // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
            id:'JSX',
            threadPool: happyThreadPool,
            // 如何处理.js文件，用法和Loader配置中一样
            loaders:['cache-loader','babel-loader?cacheDirectory']
        }),
        new HappyPack({
            // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
            id:'styles',
            threadPool: happyThreadPool,
            // 如何处理.js文件，用法和Loader配置中一样
            loaders:['cache-loader','style-loader', 'css-loader', 'sass-loader']
        })
    ]
};
