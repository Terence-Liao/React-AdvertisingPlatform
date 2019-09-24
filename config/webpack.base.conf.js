const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HappyPack  = require('happypack');
const { HappyThreadPool } = require('happypack');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.resolve('./src'),
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve('./src'),
            },
            {
                test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/,
                include: path.resolve('./src'),
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
                include: path.resolve('./src'),
            },
            // {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.jsx?$/,
                use: [
                    {
                        // 一个loader对应一个id
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
            '@': resolve('src'),
            pages: resolve('src/pages'),
            components: resolve('src/components'),
            router: resolve('src/router')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new HappyPack({
            // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
            id:'JSX',
            // 如何处理.js文件，用法和Loader配置中一样
            loaders:['babel-loader?cacheDirectory']
        })
    ]
};
