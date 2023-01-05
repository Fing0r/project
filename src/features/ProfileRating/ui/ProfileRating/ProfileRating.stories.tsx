import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ProfileRating } from './ProfileRating';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    profileId: '1',
};

Normal.decorators = [StoreDecorator({
    user: {
        authData: { id: '1' },
    },
})];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?profileId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    profileId: '1',
                    id: 5,
                    rating: 3,
                    userId: '1',
                },
            ],
        },
    ],
};
