module.exports = {
    context: __dirname + "/src/js",
    entry: {
        main: "./main"
    },
    output: {
        path: __dirname + "/public/js",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};