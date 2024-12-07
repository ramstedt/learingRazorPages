const path = require('path');

module.exports = {
  entry: './ClientApp/index.jsx',
  output: {
    path: path.resolve(__dirname, 'wwwroot/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'wwwroot'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
    open: true,
  },
  mode: 'development',
};
