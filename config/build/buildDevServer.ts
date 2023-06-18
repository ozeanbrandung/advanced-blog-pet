import {BuildOptions} from './types/config';
import {Configuration as DevServerConfig} from 'webpack-dev-server';

export default function buildDevServer(options: BuildOptions):DevServerConfig {
    return {
        // static: {
        //     directory: options.paths.static,
        // },
        port: options.port,
        open: true,
        //если послать запрос на другой урл кроме / то будет cannot get
        //а эта опция вот от этого
        historyApiFallback: true,
        //только в деве используем хот релоуд
        hot: options.isDev,
    };
}
