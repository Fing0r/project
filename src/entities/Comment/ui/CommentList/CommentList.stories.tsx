import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentList } from './CommentList';

import AvatarImg from '@/shared/assets/tests/avatarForTest.jpeg';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

const comments = [
    { id: '1', text: '123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
    { id: '2', text: '123123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
    { id: '3', text: '234324', user: { id: '1', avatar: AvatarImg, username: 'user' } },
];

export default {
    title: 'Entities/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = {
    comments,
};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const NoComments = Template.bind({});
NoComments.args = {
    comments: [],
};
