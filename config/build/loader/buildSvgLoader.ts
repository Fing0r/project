const buildSvgLoader = {
    test: /\.svg$/i,
    exclude: /node_modules/,
    issuer: /\.[jt]sx?$/,
    use: [{
        loader: '@svgr/webpack',
        options: {
            svgoConfig: {
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                // отключаем удаление viewBox
                                removeViewBox: false,
                            },
                        },
                    },
                ],
            },
        },
    }],
};

export { buildSvgLoader };
