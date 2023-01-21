import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticlesPage } from './ArticlesPage';

// eslint-disable-next-line check-paths-for-fsd-methodology/public-api-imports
import { article } from '@/entities/Article/mocks';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'Pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articlesPageList: {
            entities: {
                a: { ...article, id: 'a' },
                b: { ...article, id: 'b' },
                c: { ...article, id: 'c' },
            },
            ids: ['a', 'b', 'c'],
        },
    }),
];
