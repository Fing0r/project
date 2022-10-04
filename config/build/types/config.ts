export type BuildMode = 'development' | 'production';

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    analize: boolean;
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    isAnalize: boolean
}
