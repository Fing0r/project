import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Input, InputTheme } from './Input';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Outline = Template.bind({});
Outline.args = {
    theme: InputTheme.OUTLINE,
    label: 'Input',
    value: 'Stories',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: InputTheme.OUTLINE,
    label: 'Input',
};
OutlineDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
