const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist-prod"),
        filename: "main.js",
    },
    // output: {
    //     filename: "main.js",
    // },
    mode: "production",
    devServer: {
        static: './dist-prod',
        open: true,
        hot: false, 
        liveReload: false,
    },
    plugins: [
                new MiniCssExtractPlugin(),
                new HtmlWebpackPlugin({ template: "./src/index.html"}), // указываем основной html-файл для отображения страницы в браузере
            ],
    module: {
        rules: [
                { test: /\.css$/, use: [{ loader: MiniCssExtractPlugin.loader, options: {esModule: true,}}, 'css-loader']},
        ]
    },
};