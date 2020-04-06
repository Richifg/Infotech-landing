const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');

module.exports = () => ({
  entry: './src/ts/main.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src/ts'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractplugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractplugin.loader, 'css-loader'],
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractplugin()],
});
