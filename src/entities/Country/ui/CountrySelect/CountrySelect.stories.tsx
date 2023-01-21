import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CountrySelect } from './CountrySelect';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Entities/CountrySelect',
    component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

// const Template: ComponentStory<typeof CountrySelect> = (args) => {
//     const [_, updateArgs] = useArgs();
//
//     const onChange = (county: Country) => {
//         updateArgs({ ...args, value: county });
//     };
//
//     return <CountrySelect {...args} onChange={onChange} />;
// };

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
