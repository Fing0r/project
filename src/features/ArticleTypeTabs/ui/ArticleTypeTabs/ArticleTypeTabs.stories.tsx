import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

import { ArticleType } from '@/entities/Article';

export default {
    title: 'Features/ArticleTypeTabs',
    component: ArticleTypeTabs,
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => {
    const { value } = args;
    const [localValue, setValue] = useState<ArticleType>(value);
    // const [allArgs, updateArgs] = useArgs();

    const onChange = (tab: ArticleType) => {
        // updateArgs({ ...allArgs, value: tab });
        setValue(tab);
    };

    return <ArticleTypeTabs {...args} onChange={onChange} value={localValue} />;
};

// const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: ArticleType.ALL,
    // onChange: action('onChange'),
};
