import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesInfinityList } from './ArticlesInfinityList';

export default {
    title: 'Shared/ArticlesInfinityList',
    component: ArticlesInfinityList,
} as ComponentMeta<typeof ArticlesInfinityList>;

const Template: ComponentStory<typeof ArticlesInfinityList> = (args) => <ArticlesInfinityList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
