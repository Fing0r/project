import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { article } from '../../mocks/index';

import { ArticleDetails } from './ArticleDetails';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Entities/Article/ArticleDetails',
    component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [
    ThemeDecorator(ThemeEnum.GREEN),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];
