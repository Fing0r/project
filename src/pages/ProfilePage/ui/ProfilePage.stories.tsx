import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/avatarForTest.webp';
import ProfilePage from './ProfilePage';

const data = {
    age: 3,
    avatar: AvatarImg,
    country: Country.Kazakhstan,
    first: 'Иван',
    city: 'Караганда',
    username: 'admin',
    lastname: 'Пупкин',
    currency: Currency.EUR,
};

export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        data,
        form: data,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
    profile: {
        data,
        form: data,
    },
})];

export const ReadOnly = Template.bind({});
ReadOnly.args = {};
ReadOnly.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
    profile: {
        data,
        form: data,
        readonly: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
    profile: {
        readonly: true,
        error: 'error',
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
    profile: {
        readonly: true,
        isLoading: true,
    },
})];
