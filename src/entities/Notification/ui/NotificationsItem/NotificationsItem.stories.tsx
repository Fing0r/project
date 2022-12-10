import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationsItem } from './NotificationsItem';

export default {
    title: 'Shared/NotificationsItem',
    component: NotificationsItem,
} as ComponentMeta<typeof NotificationsItem>;

const Template: ComponentStory<typeof NotificationsItem> = (args) => <NotificationsItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
