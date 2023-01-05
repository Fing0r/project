import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/avatarForTest.webp';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

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

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
    profile,
    user: { authData: { id: '1' } },
})];

export const NoEdit = Template.bind({});
NoEdit.args = {
};
NoEdit.decorators = [StoreDecorator({
    profile: {
        form: data,
        readonly: true,
    },
    user: { authData: { id: '2' } },
})];
