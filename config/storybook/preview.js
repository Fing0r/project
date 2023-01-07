import { addDecorator } from '@storybook/react';

import { I18nDecorator } from '../../src/shared/config/storybook/decorators/I18nDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { StylesDecorator } from '../../src/shared/config/storybook/decorators/StylesDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        onChange: ({ class: theme }) => {
            const iframeStorybook = document.getElementById('storybook-preview-iframe');
            const storybookHTMLElement = iframeStorybook.contentWindow.document.documentElement;
            storybookHTMLElement.dataset.theme = theme;
        },
        target: 'html',
        list: [
            { name: 'light', class: ThemeEnum.LIGHT, color: '#00aced' },
            { name: 'dark', class: ThemeEnum.DARK, color: '#0b6e4f' },
            { name: 'green', class: ThemeEnum.GREEN, color: '#a4aba4' },
        ],
    },
};

export const globalTypes = {
    locale: {
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', title: 'English' },
                { value: 'ru', title: 'Русский' },
            ],
            title: 'Locale',
        },
    },
};

addDecorator(SuspenseDecorator);
addDecorator(StylesDecorator);
addDecorator(I18nDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
