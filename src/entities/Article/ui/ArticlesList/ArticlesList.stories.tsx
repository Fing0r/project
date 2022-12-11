import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticleView } from '../../model/consts/articleConsts';
import { article } from '../../mocks';
import { ArticlesList } from './ArticlesList';

const articles = new Array(9).fill(0).map((item, index) => ({ ...article, id: String(index) }));

export default {
    title: 'Entities/Article/ArticlesList',
    component: ArticlesList,
} as ComponentMeta<typeof ArticlesList>;

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList {...args} />;

export const Grid = Template.bind({});
Grid.args = {
    view: ArticleView.GRID,
    articles,
};
Grid.decorators = [StoreDecorator({})];

export const List = Template.bind({});
List.args = {
    view: ArticleView.LIST,
    articles,
};
List.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    view: ArticleView.GRID,
    articles: [],
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
