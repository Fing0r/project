import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Modal } from './Modal';

export default {
    title: 'Shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aut fugiat harum id iure odio pariatur sint voluptatem. Accusamus accusantium aliquam asperiores deserunt nisi officiis omnised. Optio, quo vero.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aut fugiat harum id iure odio pariatur sint voluptatem. Accusamus accusantium aliquam asperiores deserunt nisi officiis omnised. Optio, quo vero.',
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
