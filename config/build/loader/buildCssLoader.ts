import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from '../types/config';

const buildCssLoader = ({ isDev }: BuildOptions) => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (
                        (resourcePath: string) => Boolean(resourcePath.includes('.module.'))
                    ),
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:5]'
                        : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
    ],
});

export { buildCssLoader };
