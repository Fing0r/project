import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AdminPanelPage } from './AdminPanelPage';

export default {
    title: 'Pages/AdminPanelPage',
    component: AdminPanelPage,
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
