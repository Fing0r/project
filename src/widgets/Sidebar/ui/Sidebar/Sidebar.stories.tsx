import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Sidebar } from './Sidebar';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Widgets/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: {
        authData: {},
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
        user: {
            authData: undefined,
        },
    }),
];
