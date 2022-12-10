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

    const codeTsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

    const cssLoader = buildCssLoader(options);

    const fileLoader = buildFileLoader();

    return [
        svgLoader,
        fileLoader,
        codeBabelLoader,
        codeTsxBabelLoader,
        cssLoader,
    ];
}
