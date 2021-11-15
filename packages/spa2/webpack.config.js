const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index',
  output: {
    publicPath: 'auto', // New
  },
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: 'spa2',
      library: { type: 'var', name: 'spa2' },
      filename: 'remoteEntry.js',
      exposes: {
        './SayHelloFromSPA2': './src/app',
      },
      remotes: {
        'spa1': 'spa1',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};