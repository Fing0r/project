import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Page } from './Page';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Widgets/Page',
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'test Page',
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    children: 'test Page',
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(ThemeEnum.DARK)];

export const Green = Template.bind({});
Green.args = {
    children: 'test Page',
};
Green.decorators = [StoreDecorator({}), ThemeDecorator(ThemeEnum.GREEN)];
