const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true
          },
          output: {
            comments: false
          }
        }
      })
    ]
  },
  entry: Object.assign({},
    {
      src: path.join(__dirname, 'src')
    }
  ),
  output: {
    path: path.resolve(__dirname, 'dist/site'),
    chunkFilename: '[name].[chunkhash:12].js',
    filename: '[name].[chunkhash:12].js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[chunkhash:12].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      favicon: path.join(__dirname, 'public/favicon.ico'),
      chunks: ['src']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          // issues: [Symlinks in project - loader not working when using include](https://github.com/webpack/webpack/issues/1643)
          fs.realpathSync(__dirname + '/node_modules/ppfish') // 指定使用awesome-typescript-loader编译ppfish源码
        ],
        use: [{
          loader: 'awesome-typescript-loader'
        }]
      },
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