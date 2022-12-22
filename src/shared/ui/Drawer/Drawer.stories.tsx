import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Drawer } from './Drawer';
import cls from './Drawer.module.scss';
import { Button } from '../Button/Button';

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
    isOpen: true,
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
    isOpen: true,
    children: [
        <div key="1">111</div>,
        <div key="2">222</div>,
        <div key="3">333</div>,
        <div key="4">444</div>,
    ],
    fullWidth: true,
    className: cls.storybook,
};
