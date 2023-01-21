import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'Pages/ArticleDetailsPage/ArticleDetailPageHeader',
    component: ArticleDetailsPageHeader,
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
