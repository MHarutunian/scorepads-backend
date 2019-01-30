const path = require('path');

module.exports = {
  entry: {
    doppelkopf: './src/doppelkopf.js',
    doppelkopfSchreiben: './src/doppelkopfSchreiben.js',
    index: './src/index.js',
    jank: './src/jank.js',
    players: './src/players.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../web/js')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ['postcss-loader']
      }
    ]
  }
};
