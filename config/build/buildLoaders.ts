import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                //этот момент - вопрос вкуса, но мы генерим отдельные css файлы только для прода
                // TODO: почему так?
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                //"css-loader",
                {
                    loader: "css-loader",
                    options: {
                        //делаем так чтобы модули можно было использовать
                        //modules: true, - но это без настроек
                        modules: {
                            //применяем модули исклюбчительно на файлах со специальным расширением
                            auto: (resourcePath: string) => resourcePath.includes('.module.'),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                        },
                        sourceMap: isDev,
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }

    //порядок указания лоудеров в массиве имеет значение!!!
    return [
        typescriptLoader,
        cssLoaders,
    ]
}
