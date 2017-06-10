var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: [
      './lib/relay/web/static/js/index.js',
      './lib/relay/web/static/css/app.css'
    ]
  },
  output: {
    path: __dirname + '/priv/static',
    filename: 'js/app.js',
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './lib/relay/web/static/assets/', to: '../' }]),
    new ExtractTextPlugin("css/app.css"),
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, './schema.graphql'), // or schema.json
      src: path.resolve(__dirname, './lib/relay/web/static/js/'),
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['relay']
        },
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ],
  },
}
