/* eslint-disable no-console */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
    // and https://webpack.github.io/docs/configuration.html#devtool
    devtool: 'cheap-module-source-map',
    entry: Object.assign({},
        {
            src: [
                'webpack-dev-server/client?http://localhost:5000',
                'webpack/hot/only-dev-server',
                'react-hot-loader/patch',
                './src/index'
            ],
        }
    ),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            chunks: ['src']
        })],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     include: [
            //         path.resolve(__dirname, 'src'),
            //         // issues: [Symlinks in project - loader not working when using include](https://github.com/webpack/webpack/issues/1643)
            //         fs.realpathSync(__dirname + '/node_modules/ppfish') // 指定使用awesome-typescript-loader编译ppfish源码
            //     ],
            //     use: [{
            //         loader: 'awesome-typescript-loader'
            //     }]
            // },
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    // issues: [Symlinks in project - loader not working when using include](https://github.com/webpack/webpack/issues/1643)
                    fs.realpathSync(__dirname + '/node_modules/ppfish') // 指定使用babel-loader编译ppfish
                ],
                // exclude: /(node_modules|vendor)\/(?!(ppfish)\/).*/, // 优先于include，排除ppfish
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(woff|woff2)$/,
                use: [{
                    loader: 'url-loader?limit=100000'
                }]
            },
            {
                test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
                use: [{
                    loader: 'file-loader?limit=10000&mimetype=application/octet-stream'
                }]
            },
            {
                test: /\.svg(\?v=\d+.\d+.\d+)?$/,
                use: [{
                    loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
                }]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.ico$/,
                use: [{
                    loader: 'file-loader?name=[name].[ext]'
                }]
            },
            {
                test: /\.css$/,
                include: [
                  path.resolve(__dirname, 'src'),
                ],
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader?',
                    options: {
                        minimize: false
                    }
                }, {
                    loader: 'postcss-loader?'
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader?'
                }, {
                    loader: 'postcss-loader?'
                }, {
                    loader: 'less-loader?',
                }]
            },
            {
                test: /(\.html)$/,
                use: [{
                    loader: 'ejs-loader'
                }]
            }
        ]
    },
    // 定义loader从哪里搜索
    resolveLoader: {
        modules: [
            'node_modules',
        ]
    }
};
