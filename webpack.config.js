const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index: './src/index.js',
      menu: './src/menu.js',
      contact: './src/contact.js'    
   },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Custom template',
          template: 'src/index.html',
          filename: 'index.html',
          inject: 'body',
  }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],  
  }
};