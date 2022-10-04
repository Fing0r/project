import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'Shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'AppLink',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'AppLink',
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'AppLink',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'AppLink',
};
SecondaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
