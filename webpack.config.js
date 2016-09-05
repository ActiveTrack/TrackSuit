module.exports = {
  devtool: 'source-map', 
  entry: [
    './public/app/app.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/,
        loader: 'raw',
        exclude: /public\/temp/
      },
      { test: /\.css/, loader: 'style!css', exclude: /public\/temp/ },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}