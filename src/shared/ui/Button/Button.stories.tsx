import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'Shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Button',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    theme: ButtonTheme.CLEAR_INVERTED,
    children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
};
OutlineDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    children: 'Button',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    children: 'Button',
};

export const Background = Template.bind({});
Background.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Button',
};

export const Square = Template.bind({});
Square.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
    children: '>',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};

export const Disabled = Template.bind({});
Disabled.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
    disabled: true,
};
