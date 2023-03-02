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
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true
    },

    plugins: [ new HtmlWebpackPlugin({ template: "./src/index.html" }) ]
}