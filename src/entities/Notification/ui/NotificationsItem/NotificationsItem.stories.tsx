import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationsItem } from './NotificationsItem';

export default {
    title: 'entities/Notification/NotificationsItem',
    component: NotificationsItem,
} as ComponentMeta<typeof NotificationsItem>;

const Template: ComponentStory<typeof NotificationsItem> = (args) => <NotificationsItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    notification: {
        title: 'title',
        description: 'description',
        id: '1',
        userId: '1',
    },
};
