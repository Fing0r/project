import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AppImage } from './AppImage';

export default {
    title: 'Shared/AppImage',
    component: AppImage,
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
