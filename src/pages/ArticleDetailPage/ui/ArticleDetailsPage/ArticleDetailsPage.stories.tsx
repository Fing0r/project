import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { article } from 'entities/Article/mocks';
import AvatarImg from 'shared/assets/tests/avatarForTest.webp';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ArticleDetailsPage } from './ArticleDetailsPage';

export default {
    title: 'Pages/ArticleDetails/ArticleDetailsPage',
    component: ArticleDetailsPage,
} as ComponentMeta<typeof ArticleDetailsPage>;

const articleComment = {
    entities: {
        a: { id: 'a', text: '123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
        b: { id: 'b', text: '123123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
        c: { id: 'c', text: '234324', user: { id: '1', avatar: AvatarImg, username: 'user' } },
    },
    ids: ['a', 'b', 'c'],
};

const articleRecommendations = {
    entities: {
        a: { ...article, id: 'a' },
        b: { ...article, id: 'b' },
        c: { ...article, id: 'c' },
        d: { ...article, id: 'd' },
        f: { ...article, id: 'f' },
    },
    ids: ['a', 'b', 'c', 'd', 'f'],
};

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
    articleDetailsPage: {
        comments: articleComment,
        recommendations: articleRecommendations,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsPage: {
            comments: articleComment,
            recommendations: articleRecommendations,
        },
    }),
];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [
    ThemeDecorator(ThemeEnum.GREEN),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsPage: {
            comments: articleComment,
            recommendations: articleRecommendations,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    ThemeDecorator(ThemeEnum.GREEN),
    StoreDecorator({
        articleDetails: {
            data: article,
            isLoading: true,
        },
        articleDetailsPage: {
            comments: { ...articleComment, isLoading: true },
            recommendations: { ids: [], entities: {}, isLoading: true },
        },
    }),
];
