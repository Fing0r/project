import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { Tabs } from './Tabs';

const tabs = [
    { value: '1', text: '1' },
    { value: '2', text: '2' },
    { value: '3', text: '3' },
    { value: '4', text: '4' },
];

export default {
    title: 'Shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {
    tabs,
    currentValue: '1',
    onClickTab: action('onClickTab'),
};

export const Dark = Template.bind({});
Dark.args = {
    tabs,
    currentValue: '1',
    onClickTab: action('onClickTab'),
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Green = Template.bind({});
Green.args = {
    tabs,
    currentValue: '1',
    onClickTab: action('onClickTab'),
};
Green.decorators = [ThemeDecorator(ThemeEnum.GREEN)];
