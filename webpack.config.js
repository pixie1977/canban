const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        modules: true,
                    },
                },
            },
            {
                test: /\.css$/i,
                loader: 'css-loader',
                options: {
                    import: true,
                    modules: true,
                },
            }
        ]
    }
};