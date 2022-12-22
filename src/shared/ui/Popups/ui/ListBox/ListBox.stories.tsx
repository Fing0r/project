import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ListBox } from './ListBox';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Shared/ListBox',
    component: ListBox,
} as ComponentMeta<typeof ListBox>;

const options = [
    { value: '1', text: '1' },
    { value: '2', text: '2' },
    { value: '3', text: '3' },
];

const Template: ComponentStory<typeof ListBox> = (args) => {
    const [_, updateArgs] = useArgs();

    const handle = (value: string) => {
        updateArgs({ ...args, value });
    };

    return <ListBox {...args} onChange={handle} />;
};

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

export const Green = Template.bind({});
Green.args = {
    label: 'Выберите значение',
    options,
};
Green.decorators = [ThemeDecorator(ThemeEnum.GREEN)];

export const WithValue = Template.bind({});
WithValue.args = {
    label: 'Выберите значение',
    options,
    value: '1',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Выберите значение',
    options,
    value: '1',
    disabled: true,
};
