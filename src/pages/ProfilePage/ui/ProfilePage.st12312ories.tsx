// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
// import { ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';
// import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
// import { Country, Currency } from 'shared/const/common';
// import ProfilePage from './ProfilePage';
//
// export default {
//     title: 'Pages/ProfilePage',
//     component: ProfilePage,
// } as ComponentMeta<typeof ProfilePage>;
//
// const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;
//
// export const Light = Template.bind({});
// Light.args = {};
// Light.decorators = [StoreDecorator({
//     profile: {
//         data: {
//             username: 'asd',
//             first: 'asd',
//             city: 'asd',
//             avatar: 'asd',
//             lastname: 'asd',
//             age: 31,
//             country: Country.Belarus,
//             currency: Currency.EUR,
//         },
//         error: undefined,
//         isLoading: false,
//         readonly: true,
//     },
// })];
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
//     profile: {
//         data: {
//             username: 'asd',
//             first: 'asd',
//             city: 'asd',
//             avatar: 'asd',
//             lastname: 'asd',
//             age: 31,
//             country: Country.Belarus,
//             currency: Currency.EUR,
//         },
//         error: undefined,
//         isLoading: false,
//         readonly: true,
//     },
// })];
