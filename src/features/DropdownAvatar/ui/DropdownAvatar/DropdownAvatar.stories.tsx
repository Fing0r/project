import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { DropdownAvatar } from './DropdownAvatar';
import cls from './DropdownAvatar.module.scss';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'features/DropdownAvatar',
    component: DropdownAvatar,
    argTypes: {
        backgroundColor: { control: 'color' },
        display: 'flex',
    },
} as ComponentMeta<typeof DropdownAvatar>;

const Template: ComponentStory<typeof DropdownAvatar> = (args) => <DropdownAvatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    className: cls.storybook,
};
Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            roles: ['ADMIN'],
            avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-150138136.jpg',
        },
    },
})];
