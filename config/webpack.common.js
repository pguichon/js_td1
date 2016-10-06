/**
 * Created by paulguichon on 06/10/2016.
 */
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
const autoprefixer = require('autoprefixer');


module.exports = {
    entry: {
        'font-awesome-loader': 'font-awesome-loader',
        'vendor': './src/vendor.js',
        'app': './src/main.js'
    },

    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },

            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.(png|jpe?g|gif|svg|woff|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            // {
            //     test: /\.css$/,
            //     include: helpers.root('src'),
            //     loader: 'raw'
            // },
            // {
            //     test: /\.css$/,
            //     loaders: ['to-string-loader', 'css-loader']
            // },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },

            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    postcss: [ autoprefixer ]
};