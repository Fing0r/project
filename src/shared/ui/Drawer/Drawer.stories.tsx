import { useArgs } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../Button/Button';

import { Drawer } from './Drawer';
import cls from './Drawer.module.scss';

export default {
    title: 'Shared/Drawer',
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
    const [allArgs, updateArgs] = useArgs();
    const onClose = () => {
        updateArgs({
            ...allArgs,
            isOpen: false,
        });
    };
    const onOpen = () => {
        updateArgs({
            ...allArgs,
            isOpen: true,
        });
    };

    return (
        <>
            <Button onClick={onOpen}>Click</Button>
            <Drawer {...args} onClose={onClose} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    // isOpen: true,
    children: [
        <div key="1">111</div>,
        <div key="2">222</div>,
        <div key="3">333</div>,
        <div key="4">444</div>,
    ],
    className: cls.storybook,
};
export const Full = Template.bind({});
Full.args = {
    // isOpen: true,
    children: [
        <div key="1">111</div>,
        <div key="2">222</div>,
        <div key="3">333</div>,
        <div key="4">444</div>,
    ],
    fullWidth: true,
    className: cls.storybook,
};
