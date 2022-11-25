import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from '../../model/types/article';
import { article } from '../../mocks';
import { ArticlesListItem } from './ArticlesListItem';

export default {
    title: 'Entities/Article/ArticlesListItem',
    component: ArticlesListItem,
} as ComponentMeta<typeof ArticlesListItem>;

const Template: ComponentStory<typeof ArticlesListItem> = (args) => <ArticlesListItem {...args} />;

export const Grid = Template.bind({});
Grid.args = {
    article,
    view: ArticleView.GRID,
};

export const List = Template.bind({});
List.args = {
    article,
    view: ArticleView.LIST,
};
