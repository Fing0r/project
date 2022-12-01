import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { ArticleView } from '../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'Entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => {
    const [_, updateArgs] = useArgs();

    const onViewClick = (view: ArticleView) => {
        updateArgs({ ...args, currentView: view });
    };

    return <ArticleViewSelector {...args} onViewClick={onViewClick} />;
};

export const Normal = Template.bind({});
Normal.args = {
    currentView: ArticleView.GRID,
};
