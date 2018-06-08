/* jshint esversion: 6 */
// webpack.config.js WEBPACK 配置文件
//声明基础依赖
const path = require('path');
const webpack = require('webpack');
//引入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
// 设置环境判断依据
const isDev = process.env.NODE_ENV === 'development';
//基础配置
const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'), //入口
  output: { //出口
    filename: 'build.js',
    path: path.join(__dirname, 'dist')
  },
  module: { //加载器
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.styl/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }, {
      test: /\.(jpg|png|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'br-[name].[ext]'
        }
      }]
    }]
  },
  plugins: [ //插件
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
};
// 开发环境配置
if (isDev) {
  config.devtool = '#cheap-module-eval-source-map';
  config.devServer = {
    port: 666,
    host: 'Localhost',
    overlay: {
      error: true
    },
    hot: true
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}
//启动配置
module.exports = config;