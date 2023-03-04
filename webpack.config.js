const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "bundle.js",
        publicPath: "/"
    },

    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },

            {
                test: /\.s[ac]ss$/i,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true
    },

    plugins: [ new HtmlWebpackPlugin({ template: "./src/index.html" }) ]
}