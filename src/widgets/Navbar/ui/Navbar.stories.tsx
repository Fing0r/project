import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Navbar } from './Navbar';
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
LightAuth.decorators = [StoreDecorator({
    user: {
        authData: {
            username: 'admin',
            id: '1',
        },
    },
})];

export const LightNotAuth = Template.bind({});
LightNotAuth.args = {};
LightNotAuth.decorators = [StoreDecorator({
    user: {
        authData: undefined,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator(initialState)];
