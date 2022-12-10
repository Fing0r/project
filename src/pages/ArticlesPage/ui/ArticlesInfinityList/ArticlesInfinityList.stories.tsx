import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { article } from 'entities/Article/mocks';
import { ArticlesInfinityList } from './ArticlesInfinityList';

export default {
    title: 'Shared/ArticlesInfinityList',
    component: ArticlesInfinityList,
} as ComponentMeta<typeof ArticlesInfinityList>;

const Template: ComponentStory<typeof ArticlesInfinityList> = (args) => <ArticlesInfinityList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articlesPageList: {
        entities: {
            a: { ...article, id: 'a' },
            b: { ...article, id: 'b' },
            c: { ...article, id: 'c' },
        },
        ids: ['a', 'b', 'c'],
    },
})];
