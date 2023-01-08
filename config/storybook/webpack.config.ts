import path from 'path';

import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loader/buildCssLoader';
import { buildFileLoader } from '../build/loader/buildFileLoader';
import { buildSvgLoader } from '../build/loader/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    const rules = config.module!.rules as RuleSetRule[];
    // Убрали стандарнытный webpack svg-loader, чтобы дальше заменть на свой
    config.module!.rules = rules.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.(png|svg|jpe?g|gif)$/i,
            };
        }
        return rule;
    });

    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };

    // Помогло решить проблему с ошибкой сторибука, когда он обращался внутрь node_modules
    config.resolve!.modules = [paths.src, 'node_modules'];
    config.resolve?.extensions?.push('.ts', '.tsx');

    config.module?.rules.push(buildFileLoader);
    // @ts-ignore
    config.module?.rules.push(buildCssLoader({ isDev: true }));
    config.module?.rules.push(buildSvgLoader);

    config.plugins!.push(
        // Помогло рещить ошибку с глобальными переменными
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
