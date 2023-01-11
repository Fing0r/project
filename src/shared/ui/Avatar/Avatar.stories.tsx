import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';

import AvatarImg from '@/shared/assets/tests/avatarForTest.jpeg';

export default {
    title: 'Shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarBig = Template.bind({});
AvatarBig.args = {
    size: 150,
    src: AvatarImg,
};

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
    src: AvatarImg,
};

export const AvatarLittle = Template.bind({});
AvatarLittle.args = {
    size: 50,
    src: AvatarImg,
};
