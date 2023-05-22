//const path = require('path');
//import * as path from 'path';
import path from 'path';
//const webpack = require('webpack');
import webpack from 'webpack';
//const HtmlWebpackPlugin = require('html-webpack-plugin');
import HtmlWebpackPlugin from 'html-webpack-plugin';

//module.exports = {
const config: webpack.Configuration = {
  //при подключении ts не забыть поменять на js!
  //не забыть и расширение самого webpack.config поменыть на ts!
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    // генерим итоговое имя автоматически и меняем хэш при изменениях в сорсах
    // так браузер будет запоминать то что без измений в коде
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    // очищаем папку при пересборке
    clean: true,
  },
  //dev с удобствами для разработки, а prod голый и минимизированный
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin(
      {template: path.resolve(__dirname, 'public', 'index.html')}
    ),
    //The ProgressPlugin provides a way to customize how progress is reported during a compilation.
    //нафиг мы его добавили вообще?
    new webpack.ProgressPlugin()
  ],
  module: {
    //чтобы вебпак мог парсить typescript ыайлы
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  //чтобы к файлам со скриптами не надо было каждый раз расширение указывать
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
