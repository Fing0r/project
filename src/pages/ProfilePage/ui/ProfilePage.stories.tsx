import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ProfilePage } from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/avatarForTest.webp';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
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
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?profileId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        profileId: '1',
                        id: 5,
                        rating: 3,
                        userId: '1',
                    },
                ],
            },
        ],
    },
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
