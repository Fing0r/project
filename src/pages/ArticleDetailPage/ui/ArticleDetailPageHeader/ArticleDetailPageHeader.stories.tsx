import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader';

export default {
    title: 'Shared/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
} as ComponentMeta<typeof ArticleDetailPageHeader>;

const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args) => <ArticleDetailPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
