const path = require('path');

module.exports = {
  'entry': './src/js/App.js',
  'output': {
    'filename': 'app.js',
    'path': path.resolve(__dirname, 'dist')
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': /(node_modules)/
        // 'use': {
        //   'loader': 'babel-loader',
        //   'options': {
        //     'presets': ['env']
        //   }
        // }
      }
    ]
  },
  devtool: 'source-map',
  'devServer': {
    'contentBase': path.join(__dirname, "dist"),
    'compress': true,
    'port': 9000
  }
};