import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ForbiddenPage } from './ForbiddenPage';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'Pages/ForbiddenPage',
    component: ForbiddenPage,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
