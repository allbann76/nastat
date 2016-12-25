'use strict';

const {join} = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './static/script.js',
    output: {
        path: join(__dirname, 'static'),
        filename: 'dist/bundle.js',
    },

    module: {
        loaders: [
            {
                test: join(__dirname, 'static'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' +
                        '!postcss' +
                        '!autoprefixer-loader?safe=true&browsers=last 2 version'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/bundle.css', {allChunks: true})
    ],
    watch: process.env.BUILD_ENV !== 'prod'
};