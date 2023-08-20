import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {DefinePlugin} from 'webpack';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import path from "path";
import CopyPlugin from "copy-webpack-plugin";


export function buildPlugins(
    {paths, isDev, apiUrl, project}: BuildOptions
): webpack.WebpackPluginInstance[] {
    let dotenv;

    if (isDev) {
        dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../../', '.env')})
    }

    console.log(dotenv);

    const definePluginConfig = {
        //'process.env': JSON.stringify(dotenv.parsed),
        //чтобы в коде приложения эта переменная конфигурации была доступна
        __IS_DEV__: isDev, //JSON.stringify?
        //вот тут без json stringify добавление переменной происходит так: baseURL: http://localhost:8000, типа не строкой а просто
        __API__: JSON.stringify(apiUrl),
        __PROJECT__: JSON.stringify(project),
        //__PUBLIC_URL__: JSON.stringify(dotenv.parsed.PUBLIC_URL),
        //...dotenv.parsed,
    }

    if (isDev) {
        // @ts-ignore
        definePluginConfig['process.env'] = JSON.stringify(dotenv.parsed);
        // @ts-ignore
        definePluginConfig.__PUBLIC_URL__ = JSON.stringify(dotenv.parsed.PUBLIC_URL);
    }

    const plugins = [
        new HtmlWebpackPlugin({
            //template: path.resolve(__dirname, 'public', 'index.html')
            template: paths.html,
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
                { from: paths.images, to: paths.buildImages },
                // { from: paths.public, to: paths.buildPublic },
            ],
        }),
        //The ProgressPlugin provides a way to customize how progress is reported during a compilation.
        //нафиг мы его добавили вообще?
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            //когда разобьем файлы на чанки которые асинхронно будут подгружаться
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin(definePluginConfig),
        new ReactRefreshPlugin(),
    ];

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
    }

    //просто возвращает массив плагинов
    return plugins;
}
