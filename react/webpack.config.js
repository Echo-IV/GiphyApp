const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: ['./src/index.js','./src/css/style.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test:/\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:['css-loader', "sass-loader"]
              })
            },
            {
              test:/\.(png|svg|jpg|gif)$/,
              use:['file-loader']
            }

        ]
    },
    plugins:[
      new ExtractTextPlugin({
        filename: '[name].css'
      })
    ]
};

module.exports = config;
