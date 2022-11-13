import { BuildOptions } from '../types/config';

const buildBabelLoader = ({ isDev }: BuildOptions) => ({
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                ['i18next-extract', { nsSeparator: '~' }],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});

export { buildBabelLoader };
