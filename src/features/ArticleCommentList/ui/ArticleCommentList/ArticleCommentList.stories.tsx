import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import AvatarImg from 'shared/assets/tests/avatarForTest.webp';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ArticleCommentList } from './ArticleCommentList';

const articleCommentList = {
    entities: {
        a: { id: 'a', text: '123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
        b: { id: 'b', text: '123123', user: { id: '1', avatar: AvatarImg, username: 'user' } },
        c: { id: 'c', text: '234324', user: { id: '1', avatar: AvatarImg, username: 'user' } },
    },
    ids: ['a', 'b', 'c'],
};

export default {
    title: 'Features/ArticleCommentList',
    component: ArticleCommentList,
} as ComponentMeta<typeof ArticleCommentList>;

const Template: ComponentStory<typeof ArticleCommentList> = (args) => <ArticleCommentList {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    articleCommentList,
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({ articleCommentList }),
    ThemeDecorator(ThemeEnum.DARK),
];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [
    StoreDecorator({ articleCommentList }),
    ThemeDecorator(ThemeEnum.GREEN),
];

export const Empty = Template.bind({});
Empty.args = {};
Empty.decorators = [StoreDecorator({})];
