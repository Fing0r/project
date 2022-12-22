import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'Shared/Popover',
    component: Popover,
    decorators: [
        (Story) => (
            <div style={{
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
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: [
        <div key="1">Text 1</div>,
        <div key="2">Text 2</div>,
        <div key="3">Text 3</div>,
        <div key="4">Text 4</div>,
    ],
    trigger: <button>Click</button>,
    direction: 'top-right',
};
