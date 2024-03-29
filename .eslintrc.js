module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'check-paths-for-fsd-methodology',
        'unused-imports',
        'import',
    ],
    rules: {
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
            },
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'align',
                    'target',
                    'gap',
                    'align',
                    'justify',
                    'direction',
                    'wrap',
                    'titleVariant',
                    'tag',
                    'as',
                    'textAlign',
                    'aria-label',
                ],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error',
        // Checks effect dependencies
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-param-reassign': 'off',
        'react/button-has-type': 'off',
        // Отключаем дефолтное правило и включаем правило для ts, чтобы не ругался на enum
        'no-unused-vars': 'off',
        'lines-between-class-members': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'arrow-body-style': 'off',
        'check-paths-for-fsd-methodology/absolute-and-relative-path-checker': [
            'error',
            {
                alias: '@',
            },
        ],
        'check-paths-for-fsd-methodology/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.stories.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'check-paths-for-fsd-methodology/layer-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'no-redeclare': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: [
                '**/src/**/*.{test,stories}.{ts,tsx}',
                '**/src/**/mocks/*.{ts,tsx}',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
