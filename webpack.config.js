var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './build/compiled/client/app'
  ],
  output: {
    path: __dirname + '/static/',
    filename: 'packed.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}
