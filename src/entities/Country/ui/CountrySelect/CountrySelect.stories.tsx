import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { Country } from '../../model/consts/constsCountry';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'Entities/CountrySelect',
    component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => {
    const [_, updateArgs] = useArgs();

    const onChange = (county: Country) => {
        updateArgs({ ...args, value: county });
    };

    return <CountrySelect {...args} onChange={onChange} />;
};

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
