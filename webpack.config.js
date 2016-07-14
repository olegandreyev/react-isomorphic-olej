/**
 * Created by Olejka on 11.07.2016.
 */

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env ? process.env : 'development';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context:path.join(__dirname,'src','common'),
    entry:'./main.js',
    output:{
        path: path.join( __dirname,'src','client'),
        publicPath:'/dist/',
        filename:'bundle.js'
    },
    devtool:NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
    plugins:[
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV:JSON.stringify(NODE_ENV),
            'process.env.BROWSER':JSON.stringify(true)
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src','common')],
                loader: 'babel',
                query: {
                    presets: ['es2015','react','stage-0']
                }
            },
            {
                test: /(\.css|\.scss)$/,
                loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap")
            }
        ]
    }
};