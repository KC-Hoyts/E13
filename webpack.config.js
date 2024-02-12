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
        hot: true,
        // open: true, // open the server page in browser
        watchFiles: ['src/*.html'],
    },
    plugins: [
                new MiniCssExtractPlugin(),
                new HtmlWebpackPlugin({
                                         template: "./src/index.html", inject: true}),
                new ESLintPlugin()
            ],
    module: {
        rules: [
            { test: /\.css$/,
            use: [{ loader: MiniCssExtractPlugin.loader, options: {
                                                                    esModule: true,
                                                                  }
                    }, 'css-loader'] 
            },
            {
                test: /\.html$/,
                loader: "html-loader",
              },
            
 
        ]
    },
};