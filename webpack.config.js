const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
    },
    stats: {
        children: false,
        modules: false
    },
    devtool: 'inline-source-map',
    mode: "development",
    devServer: {
        static: './dist',
        port: 3000,
        hot: "only", // обязательно указать only, чтобы страница подтягивала изменения ч/з Websocket (а не перезагружалась как при true)
        // open: true, // open the server page in browser
    },
    plugins: [
                new MiniCssExtractPlugin(),
                new HtmlWebpackPlugin({ template: "./src/index.html"}), // указываем основной html-файл для отображения страницы в браузере
                new ESLintPlugin({emitWarning: true}),
            ],
    module: {
        rules: [
                { test: /\.css$/, use: [{ loader: MiniCssExtractPlugin.loader, options: {esModule: true,}}, 'css-loader']},
        ]
    },
};