"use strict";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    node: {
        fs: "empty"
    },
    entry: ['./app/src/init.js', './app/css/autocomplete.base.css', './app/css/autocomplete.theme.css'],

    output: {path: __dirname + '/build', filename: "autocompletewoosmap.js", publicPath: "/"},

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },

    devServer: {
        disableHostCheck: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'sample/index.html'
        }),
        new ExtractTextPlugin("autocompletewoosmap.css")
    ]
};

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
