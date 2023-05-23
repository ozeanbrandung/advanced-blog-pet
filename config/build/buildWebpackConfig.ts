import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

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
        //dev с удобствами для разработки, а prod голый и минимизированный
        //mode: "development",
        mode: mode,
        plugins: buildPlugins(options),
        module: {
            //чтобы вебпак мог парсить typescript ыайлы
            rules: buildLoaders(),
        },
        //чтобы к файлам со скриптами не надо было каждый раз расширение указывать
        resolve: buildResolvers(),
    };
}
