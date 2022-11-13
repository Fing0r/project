import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loader/buildCssLoader';
import { buildSvgLoader } from './loader/buildSvgLoader';
import { buildBabelLoader } from './loader/buildBabelLoader';
import { buildFileLoader } from './loader/buildFileLoader';
import { buildTypescriptLoader } from './loader/buildTypescriptLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = buildTypescriptLoader;

    const svgLoader = buildSvgLoader;

    const babelLoader = buildBabelLoader(options);

    const cssLoader = buildCssLoader(options);

    const fileLoader = buildFileLoader();

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
