import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Navbar } from './Navbar';

import { StateSchema } from '@/app/providers/StoreProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const initialState: DeepPartial<StateSchema> = {
    user: {
        authData: {
            username: 'admin',
            id: '1',
        },
    },
};

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [
    StoreDecorator({
        user: {
            authData: {
                username: 'admin',
                id: '1',
            },
        },
    }),
];

export const LightNotAuth = Template.bind({});
LightNotAuth.args = {};
LightNotAuth.decorators = [
    StoreDecorator({
        user: {
            authData: undefined,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator(initialState),
];
