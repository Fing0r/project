import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleType } from '../../model/consts/articleConsts';

import { ArticleTypeTabs } from './ArticleTypeTabs';

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
