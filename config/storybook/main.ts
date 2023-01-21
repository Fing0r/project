export default {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    reactDocgen: false,
    core: {
        builder: 'webpack5',
    },
    staticDirs: ['../../public'],
};
