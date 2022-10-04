import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from './Button';

export default {
    title: 'Shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
    children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
};
OutlineDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
