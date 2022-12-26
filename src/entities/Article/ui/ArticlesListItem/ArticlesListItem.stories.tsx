import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { article } from '../../mocks';
import { ArticleView } from '../../model/consts/articleConsts';

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
