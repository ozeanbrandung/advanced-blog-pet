import { ResolveOptions } from 'webpack';
import {BuildOptions} from './types/config';

export default function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        //из каких папок мы импортим абсолютно
        // (node_modules и так был по умолчанию, но все равно надо прописать)
        modules: [options.paths.src, 'node_modules', options.paths.config],
        alias: {},
        mainFiles: ['index'],
    };
}
