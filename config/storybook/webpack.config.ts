import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loader/buildCssLoader';
import { buildSvgLoader } from '../build/loader/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    const rules = config.module!.rules as RuleSetRule[];
    // Убрали стандарнытный webpack svg-loader, чтобы дальше заменть на свой
    config.module!.rules = rules.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });

    // Помогло решить проблему с ошибкой сторибука, когда он обращался внутрь node_modules
    config.resolve!.modules = [paths.src, 'node_modules'];
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules.push(buildCssLoader(true));
    config.module?.rules.push(buildSvgLoader);

    config.plugins!.push(
        // Помогло рещить ошибку с глобальными переменными
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
        }),
    );

    return config;
};
