import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        //при подключении ts не забыть поменять на js!
        //не забыть и расширение самого webpack.config поменыть на ts!
        //entry: path.resolve(__dirname, 'src', 'index.ts'),
        entry: paths.entry,
        output: {
            // генерим итоговое имя автоматически и меняем хэш при изменениях в сорсах
            // так браузер будет запоминать то что без измений в коде
            filename: '[name].[contenthash].js',
            //path: path.resolve(__dirname, 'build'),
            path: paths.build,
            // очищаем папку при пересборке
            clean: true,
        },
        //для дебага - чтобы видеть в каком месте кода ошибка, отклбчаем если не дев
        //через && почему-то не работает
        devtool: isDev ? 'inline-source-map' : undefined,
        //dev с удобствами для разработки, а prod голый и минимизированный
        //mode: "development",
        mode: mode,
        plugins: buildPlugins(options),
        module: {
            //чтобы вебпак мог парсить typescript ыайлы
            rules: buildLoaders(options),
        },
        //чтобы к файлам со скриптами не надо было каждый раз расширение указывать
        resolve: buildResolvers(),
        //отключаем если не дев
        //через && почему-то не работает
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
