const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "development",
    entry: {
        index: './lib/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        library: 'GarenUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
               test: /\.tsx?$/,
               loader: 'awesome-typescript-loader',     
            }
        ]
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
    }
}