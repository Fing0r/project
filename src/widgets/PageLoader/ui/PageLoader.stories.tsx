import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PageLoader } from './PageLoader';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Widgets/PageLoader',
    component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
    <PageLoader {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
