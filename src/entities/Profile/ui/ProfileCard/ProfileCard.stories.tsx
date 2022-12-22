import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import AvatarImg from '@/shared/assets/tests/avatarForTest.webp';
import { ProfileCard } from './ProfileCard';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

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

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    data,
};

export const Dark = Template.bind({});
Dark.args = {
    data,
};
Dark.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    data,
    readonly: true,
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];

export const Error = Template.bind({});
Error.args = {
    error: 'Ошибка',
};
Error.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
];
