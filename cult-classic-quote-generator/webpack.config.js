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
                use: [{
                    loader: 'style-loader',
                    loader: 'css-loader'
                }],
                test: /\.css$/i
            }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}