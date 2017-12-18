"use strict";
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    entry: ['./app/src/init.js', './app/css/autocomplete.base.css', './app/css/autocomplete.theme.css'],

    output: {path: __dirname + '/build', filename: "autocompletewoosmap.js", publicPath: "/"},

    module: {
        loaders: []
    },

    devServer: {
        disableHostCheck: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'sample/index.html',
            inject: 'head'
        }),
        new ExtractTextPlugin("autocompletewoosmap.css")
    ]
};
webpackConfig.module.loaders.push({
    test: /\.js$/,
    loader: "eslint-loader",
    exclude: /node_modules/
});
webpackConfig.module.loaders.push({
    test: /\.css$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
});

if (process.env.DEBUG === 'yes') {
    webpackConfig.devtool = 'source-map';
}
else {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

module.exports = webpackConfig;
