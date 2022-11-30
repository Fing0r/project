import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'Shared/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowJustifyStart = Template.bind({});
RowJustifyStart.args = {
    justify: 'start',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowJustifyEnd = Template.bind({});
RowJustifyEnd.args = {
    justify: 'end',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowJustifyBetween = Template.bind({});
RowJustifyBetween.args = {
    justify: 'between',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowJustifyEvenly = Template.bind({});
RowJustifyEvenly.args = {
    justify: 'evenly',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowJustifyAround = Template.bind({});
RowJustifyAround.args = {
    justify: 'around',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowGap24 = Template.bind({});
RowGap24.args = {
    gap: '24',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const ColumnDefault = Template.bind({});
ColumnDefault.args = {
    direction: 'column',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
    direction: 'column',
    align: 'start',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    direction: 'column',
    gap: '4',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};
export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    direction: 'column',
    gap: '8',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};
export const ColumnGap12 = Template.bind({});
ColumnGap12.args = {
    direction: 'column',
    gap: '12',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};
export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};
export const ColumnGap24 = Template.bind({});
ColumnGap24.args = {
    direction: 'column',
    gap: '24',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};
export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
    children: (
        <>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </>
    ),
};
