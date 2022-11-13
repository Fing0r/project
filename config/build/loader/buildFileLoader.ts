const buildFileLoader = () => ({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
});

export { buildFileLoader };
