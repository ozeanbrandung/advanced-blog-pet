//const path = require('path');
//import * as path from 'path';
import path from 'path';
//const webpack = require('webpack');
import webpack from 'webpack';
//const HtmlWebpackPlugin = require('html-webpack-plugin');
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths, Environment } from './config/build/types/config';

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
        src: path.resolve(__dirname, 'src'),
        config: path.resolve(__dirname, 'config'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        images: path.resolve(__dirname, 'public', 'imgs'),
        buildImages: path.resolve(__dirname, 'build', 'imgs'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const project = Environment.FRONTEND;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project,
    });

    return config;
};

