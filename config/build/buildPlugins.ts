import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(
    {
        paths,
        isDev,
        isAnalyze,
        apiUrl,
        project,
    }: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css',
        }));
    }

    if (isAnalyze) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }));
    }

    return plugins;
}
