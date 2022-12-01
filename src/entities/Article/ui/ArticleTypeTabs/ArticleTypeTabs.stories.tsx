import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '../../model/types/article';

export default {
    title: 'Entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => {
    const [_, updateArgs] = useArgs();

    const onChange = (tab: ArticleType) => {
        updateArgs({ ...args, value: tab });
    };

    return <ArticleTypeTabs {...args} onChange={onChange} />;
};

export const Normal = Template.bind({});
Normal.args = {
    value: ArticleType.ALL,
};
