import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Skeleton } from './Skeleton';

export default {
    title: 'Shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {
    width: '30%',
    height: 50,
    borderRadius: 30,
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(ThemeEnum.GREEN)];

export const Circle = Template.bind({});
Circle.args = {
    width: 200,
    height: 200,
    borderRadius: '50%',
};