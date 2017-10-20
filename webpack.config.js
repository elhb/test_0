const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, 'client', 'js', 'index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ]
    },

    plugins: [
                new HtmlWebpackPlugin(
                    title: 'test application 0'
                )
            ]

}