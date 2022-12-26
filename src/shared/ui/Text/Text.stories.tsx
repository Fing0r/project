import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextTheme } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
    text: 'Тест',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
    text: 'Тест',
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Тест',
    text: 'Тест',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    theme: TextTheme.ERROR,
    title: 'Тест',
    text: 'Тест',
};
ErrorDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
};

OnlyTitleDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
};
OnlyTextDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
