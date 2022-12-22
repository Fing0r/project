import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
// eslint-disable-next-line check-paths-for-fsd-methodology/public-api-imports
import { article } from '@/entities/Article/mocks';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],

} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4&_expand=user`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: 1 },
                { ...article, id: 2 },
                { ...article, id: 3 },
                { ...article, id: 4 },
                { ...article, id: 5 },
                { ...article, id: 6 },
            ],
        },
    ],
};

export const NoData = Template.bind({});
NoData.args = {};
NoData.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4&_expand=user`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
