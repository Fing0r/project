import RemovePropsBabelPlugin from '../../babel/removePropsBabelPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx: boolean;
}

const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    {
                        nsSeparator: '~',
                    },
                ],
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                ['@babel/plugin-transform-runtime'],
                isTsx && [
                    RemovePropsBabelPlugin,
                    {
                        props: ['data-testid'],
                    },
                ],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});

export { buildBabelLoader };
