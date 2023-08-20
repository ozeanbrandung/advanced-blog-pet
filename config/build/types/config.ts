
export type BuildMode = 'production' | 'development';

export enum Environment {
    FRONTEND = 'FRONTEND',
    STORYBOOK = 'STORYBOOK',
    JEST = 'JEST'
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
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
    locales: string;
    buildLocales: string;
    images: string;
    buildImages: string;
}

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: Environment,
}
