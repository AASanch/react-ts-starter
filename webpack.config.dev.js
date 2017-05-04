var htmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.css', 'scss'],
    },
    entry: [
        "./src/index"
    ],
    target: "web",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            //Typescript loader.
            {
                test: /\.tsx?$/,
                use: [
                    { loader: "babel-loader" },
                    { loader: "awesome-typescript-loader" }
                ]
            },

            //TSLint
            {
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
                use: { loader: "tslint-loader" }
            },

            //SCSS loader
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" }
                ]
            },

            //Images
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: "url-loader?limit=8192" }
                ]
            },

            //Fonts
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        },
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin())
    ]
}
