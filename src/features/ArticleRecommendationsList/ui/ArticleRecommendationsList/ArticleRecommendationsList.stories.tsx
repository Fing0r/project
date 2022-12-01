import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { article } from 'entities/Article/mocks';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const articles = new Array(4).fill(0).map((item, index) => ({ ...article, id: String(index) }));

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetailsPage: {
        recommendations: {
            ids: ['0', '1', '2', '3'],
            entities: {
                0: articles[0],
                1: articles[1],
                2: articles[2],
                3: articles[3],
            },
        },
    },
})];
