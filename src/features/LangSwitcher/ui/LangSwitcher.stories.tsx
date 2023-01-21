import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LangSwitcher } from './LangSwitcher';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Shared/LangSwitcher',
    component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => (
    <LangSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
