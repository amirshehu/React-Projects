const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                use: [{
                    loader: 'babel-loader'

                }],
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.s?css$/i
            }]
    },
    devtool: 'eval-cheap-module-source-map',
    /// client side routing
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
///server routing
    // devServer: {
    //     contentBase: path.join(__dirname, 'public')
    // }
}