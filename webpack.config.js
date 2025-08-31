const { watch } = require('fs');
const path = require('path'); // CommonJS

module.exports = {
  mode: 'development',
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "img/[name][text]"
        }
    }]
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  devtool: 'source-map',
  watch: true
};
