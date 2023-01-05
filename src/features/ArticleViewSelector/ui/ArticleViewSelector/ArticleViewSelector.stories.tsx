import { useArgs } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleViewSelector } from './ArticleViewSelector';

import { ArticleView } from '@/entities/Article';

export default {
    title: 'Features/ArticleViewSelector',
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
