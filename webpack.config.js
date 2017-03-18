const { resolve } = require('path')
const webpack = require('webpack')
const DirectoryNamedPlugin =  require('directory-named-webpack-plugin')

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ /\/node_modules\// ],
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.css*/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    plugins: [
      new DirectoryNamedPlugin()
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/'
  },
  stats: {
    children: false
  }
}
