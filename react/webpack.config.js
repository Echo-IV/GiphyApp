const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:['./assets/js/app.js','./assets/css/app.scss'],
  output:{
    filename:'[name].js',
    publicPath: "/assets/",
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './',
    port: 3000
  },
  watch:true,
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader','sass-loader']
        })
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins:[
     new ExtractTextPlugin({
       filename: '[name].css'
     })
  ]
};
