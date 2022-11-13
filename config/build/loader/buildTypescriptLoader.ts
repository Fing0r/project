const buildTypescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
};

export { buildTypescriptLoader };
