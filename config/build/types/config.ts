
export type BuildMode = 'production' | 'development';

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildPaths {
    //entry нашего приложение
    entry: string;
    //путь до билда
    build: string;
    //путь до html шаблончика
    html: string;
    //путь до корневой папки
    src: string;
    //
    config: string;
}

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
    port: number;
}
