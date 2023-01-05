const buildFileLoader = () => ({
    test: /\.(png|jpe?g|gif)$/i,
    exclude: /node_modules/,
    use: [
        {
            loader: 'file-loader',
        },
    ],
});

export { buildFileLoader };
