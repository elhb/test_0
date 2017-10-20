const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
            }

        ]
    },

    plugins: [
                new HtmlWebpackPlugin(
                    {
                        filename: 'index.html',
                        title: 'test application 0'
                    }
                )
            ]

}