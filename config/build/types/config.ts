
export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    //entry нашего приложение
    entry: string;
    //путь до билда
    build: string;
    //путь до html шаблончика
    html: string;
}

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
}
