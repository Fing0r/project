import { addDecorator } from '@storybook/react';
import { StylesDecorator } from '../../src/shared/config/storybook/decorators/StylesDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '../../src/app/provider/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StylesDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
