import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Card } from './Card';

export default {
    title: 'Shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
