//const path = require('path');
//import * as path from 'path';
import path from 'path';
//const webpack = require('webpack');
import webpack from 'webpack';
//const HtmlWebpackPlugin = require('html-webpack-plugin');
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {buildPlugins} from "./config/build/buildPlugins";
import buildLoaders from "./config/build/buildLoaders";
import buildResolvers from "./config/build/buildResolvers";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildOptions, BuildPaths} from "./config/build/types/config";

//module.exports = {
/* const config: webpack.Configuration = {
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
  plugins: buildPlugins(),
  module: {
    //чтобы вебпак мог парсить typescript ыайлы
    rules: buildLoaders(),
  },
  //чтобы к файлам со скриптами не надо было каждый раз расширение указывать
  resolve: buildResolvers(),
}; */

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config;
}

