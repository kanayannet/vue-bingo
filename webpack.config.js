const path = require('path');

module.exports = {
  mode: 'production',
  //mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common.js'
    }
  }
}
