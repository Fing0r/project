import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Dropdown } from './Dropdown';

import Logout from '@/shared/assets/icons/logout.svg';

export default {
    title: 'Shared/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => (
            <div
                style={{
                    height: '400px',
                    width: '100%',
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { content: 123, Icon: Logout },
        { content: 321, Icon: Logout },
    ],
    trigger: <button>Click</button>,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { content: 123, Icon: Logout },
        { content: 321, Icon: Logout },
    ],
    trigger: <button>Click</button>,
    direction: 'bottom-right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { content: 123, Icon: Logout },
        { content: 321, Icon: Logout },
    ],
    trigger: <button>Click</button>,
    direction: 'top-left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { content: 123, Icon: Logout },
        { content: 321, Icon: Logout },
    ],
    trigger: <button>Click</button>,
    direction: 'top-right',
};
