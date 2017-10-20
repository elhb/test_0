const path = require('path')
const webpack = require('webpack')
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, 'client', 'js', 'index.js'),

    output: {
        filename: path.join('js','bundle.js'),
        path: path.resolve(__dirname, 'dist'),
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
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: ['file-loader?name=images/[name].[ext]']
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['file-loader?name=fonts/[name]-[hash:6].[ext]']
            }
        ]
    },

    plugins: [
//            new HtmlWebpackPlugin(
//                {
//                    filename: 'index.html',
//                    title: 'test application 0'
//                }
//            )
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            })
    ]
}