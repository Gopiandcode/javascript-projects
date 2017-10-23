var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './js/app.js'
    ],
    devtool: 'source-map',
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.js$|\.jsx$)/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    configFile: '.eslintrc.yml'
                }
            },
            { test: /\..jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.woff2?$/, loader: "url-loader?limit=2500"},
            { test: /\.(eot|svg|tff)?$/, loader: "file-loader"},
            { test: /\.scss$/, loader: 'style!css!sass' }

        ],
        loaders: [
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};