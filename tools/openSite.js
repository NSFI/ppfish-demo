/* eslint import/no-extraneous-dependencies: ["off"] */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.dev');
const reportURL = require('report-url');
const PORT = 5566;
const bundler = webpack(webpackConfig);
reportURL({
    tip: '可用的内网网址',
    port: PORT,
    search: ''
});

new WebpackDevServer(bundler, {
    publicPath: '/',
    hot: true,
    historyApiFallback: {
        index: '/site/'
    },
    stats: {colors: true},
    open: true,
}).listen(PORT, '0.0.0.0', error => {
    if (error) {
        throw error;
    }
});
