import { RuleSetRule } from 'webpack';

const buildFileLoader: RuleSetRule = {
    test: /\.(png|webp|jpe?g|gif)$/i,
    exclude: /node_modules/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            },
        },
    ],
};

export { buildFileLoader };
