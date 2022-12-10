import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownAvatar } from './DropdownAvatar';

export default {
    title: 'features/DropdownAvatar',
    component: DropdownAvatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropdownAvatar>;

const Template: ComponentStory<typeof DropdownAvatar> = (args) => <DropdownAvatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
