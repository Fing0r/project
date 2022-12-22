import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import i18n from '@/shared/config/i18n/i18nForStorybook';
import { LoginForm } from './LoginForm';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: '',
        isLoading: false,
        error: '',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '',
            isLoading: false,
            error: '',
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: '123',
        isLoading: true,
        error: '',
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
            isLoading: false,
            error: i18n.t('неверный логин или пароль'),
        },
    }),
];
