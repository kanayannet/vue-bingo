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
  }
};
