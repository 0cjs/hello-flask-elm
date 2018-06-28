var path = require("path");

module.exports = {
  entry: {
    app: [
      './app/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + 'server/static/dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test:    /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader:  'elm-webpack-loader?verbose=true&warn=true',
      }
    ],

    noParse: /\.elm$/,
  },

  devServer: {
    inline: true,
    stats: { colors: true },
  },

};
