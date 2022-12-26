import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Select } from './Select';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Shared/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options = [
    { value: '1', text: '1' },
    { value: '2', text: '2' },
    { value: '3', text: '3' },
];

export const Light = Template.bind({});
Light.args = {
    label: 'Выберите значение',
    options,
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Выберите значение',
    options,
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
