import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationsList } from './NotificationsList';

export default {
    title: 'Shared/NotificationsList',
    component: NotificationsList,
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
