const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js'
  },
    devServer: {
      static: './dist',
      hot: true,
    },
    plugins: [
            new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    devtool: 'inline-source-map',
  };