import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions, BuildPaths} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    //просто возвращает массив плагинов
    return [
        new HtmlWebpackPlugin({
            //template: path.resolve(__dirname, 'public', 'index.html')
            template: paths.html,
        }),
        //The ProgressPlugin provides a way to customize how progress is reported during a compilation.
        //нафиг мы его добавили вообще?
        new webpack.ProgressPlugin()
    ]
}
