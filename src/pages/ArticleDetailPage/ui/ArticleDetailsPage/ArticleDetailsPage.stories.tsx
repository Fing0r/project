import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleDetailsPage } from './ArticleDetailsPage';

// eslint-disable-next-line check-paths-for-fsd-methodology/public-api-imports
import { article } from '@/entities/Article/mocks';
import AvatarImg from '@/shared/assets/tests/avatarForTest.jpeg';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
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

// const articleRecommendations = {
//     entities: {
//         a: { ...article, id: 'a' },
//         b: { ...article, id: 'b' },
//         c: { ...article, id: 'c' },
//         d: { ...article, id: 'd' },
//         f: { ...article, id: 'f' },
//     },
//     ids: ['a', 'b', 'c', 'd', 'f'],
// };

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
    articleDetailsPage: {
        comments: articleComment,
        // recommendations: articleRecommendations,
    },
})];
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    articleId: '1',
                    id: 5,
                    rating: 3,
                    userId: '1',
                },
            ],
        },
        {
            url: `${__API__}/articles?_limit=4&_expand=user`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: 1 },
                { ...article, id: 2 },
                { ...article, id: 3 },
                { ...article, id: 4 },
            ],
        },
    ],
};

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
        addCommentForm: {},
    }),
];
Loading.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            delay: 999999,
            status: 200,
            response: [],
        },
        {
            url: `${__API__}/articles?_limit=4&_expand=user`,
            method: 'GET',
            delay: 999999,
            status: 200,
            response: [],
        },
    ],
};
