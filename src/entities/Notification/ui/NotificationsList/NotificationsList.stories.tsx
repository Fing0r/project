import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationsList } from './NotificationsList';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationsList',
    component: NotificationsList,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    title: 'title 1',
                    description: 'description 1',
                    id: '1',
                    userId: '1',
                },
                {
                    title: 'title 2',
                    description: 'description 2',
                    id: '2',
                    userId: '1',
                },
                {
                    title: 'title 3',
                    description: 'description 3',
                    id: '3',
                    userId: '1',
                },
            ],
        },
    ],
};

export const NoData = Template.bind({});
NoData.args = {};
NoData.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {};
Loading.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            delay: 999999,
            response: [],
            status: 200,
        },
    ],
};
