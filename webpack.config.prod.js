const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'main.js'
  },
    devServer: {
      static: './dist',
    },
    plugins: [
            new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    devtool: 'inline-source-map',
  };