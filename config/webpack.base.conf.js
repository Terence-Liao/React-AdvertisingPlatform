const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.(eot|woff|ttf|woff2|svg|gif)(\?|$)/,
                    loader: 'file-loader?name=[hash].[ext]'
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=1200&name=[hash].[ext]'
                }
            ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};
