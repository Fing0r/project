import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from '@/shared/assets/tests/avatarForTest.webp';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { CommentCard } from './CommentCard';

export default {
    title: 'Entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1', text: '123', user: { id: '1', avatar: AvatarImg, username: 'user' },
    },
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1', text: '123', user: { id: '1', avatar: AvatarImg, username: 'user' },
    },
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const NoComment = Template.bind({});
NoComment.args = {
    comment: undefined,
};
