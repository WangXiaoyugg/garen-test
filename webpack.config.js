const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
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
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test:/\.s[ac]ss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
}