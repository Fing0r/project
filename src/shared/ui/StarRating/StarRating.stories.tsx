import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StarRating } from './StarRating';

export default {
    title: 'Shared/StarRating',
    component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
