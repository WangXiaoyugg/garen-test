const path = require('path')
const base = require('./webpack.config.js');
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = Object.assign({}, base, {
    mode: "development",
    entry: {
        example: "./example.tsx",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "GarenUI",
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    devServer: {
        open: true,
        port: 8888,
    },    
})