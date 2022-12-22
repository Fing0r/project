import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import AvatarImg from '@/shared/assets/tests/avatarForTest.webp';
import { ProfilePage } from './ProfilePage';
import { ThemeEnum } from '@/shared/const/theme';

const data = {
    age: 3,
    avatar: AvatarImg,
    country: Country.Kazakhstan,
    first: 'Иван',
    city: 'Караганда',
    username: 'admin',
    lastname: 'Пупкин',
    currency: Currency.EUR,
    id: '1',
};

const profile = {
    data,
    form: data,
};

const user = { authData: { id: '1' } };

export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile,
    user,
})];

export const NoEdit = Template.bind({});
NoEdit.args = {};
NoEdit.decorators = [StoreDecorator({
    profile,
    user: { authData: { id: '2' } },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
    profile,
    user,
})];

export const ReadOnly = Template.bind({});
ReadOnly.args = {};
ReadOnly.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
    profile: {
        ...profile,
        readonly: true,
    },
    user,
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
