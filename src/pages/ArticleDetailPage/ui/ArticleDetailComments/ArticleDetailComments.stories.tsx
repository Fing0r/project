import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import AvatarImg from '@/shared/assets/tests/avatarForTest.webp';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'Pages/ArticleDetailsPage/ArticleDetailComments',
    component: ArticleDetailsComments,
} as ComponentMeta<typeof ArticleDetailsComments>;

const articleComment = {
    entities: {
        a: { id: 'a', text: '123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
        b: { id: 'b', text: '123123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
        c: { id: 'c', text: '234324', user: { id: '1', avatar: AvatarImg, username: 'user' } },
    },
    ids: ['a', 'b', 'c'],
};

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetailsPage: {
        comments: articleComment,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetailsPage: {
        comments: {
            ids: [],
            entities: {},
            isLoading: true,
        },
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetailsPage: {
        comments: {
            ids: [],
            entities: {},
            error: 'ошибка',
        },
    },
})];
