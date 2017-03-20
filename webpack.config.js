var webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'assets/bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".json"]
    },
    resolveLoader: {
        moduleExtensions: ['*', '-loader']
    },
    module: {
        loaders:[
            {
                test: /\.(js|jsx)$/,
                exclude: 'node_modules',
                loaders: ['babel']
            },
            {
                test: /\.json$/,
                include: /src\/data/,
                loader: 'file?name=assets/[name].[ext]'
            }
        ],
        //noParse: /\/node_modules\/(lodash)/
    },
    devServer: {
        hot:true
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlPlugin({
            name: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.template.html'),
            inject: 'body',
            title: 'Friends Module'
        }),
        //new webpack.NoErrorsPlugin(),//deprecated
        new webpack.HotModuleReplacementPlugin()
    ]
};