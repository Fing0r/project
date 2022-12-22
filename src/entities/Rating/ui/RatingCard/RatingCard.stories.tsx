import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'Entities/Rating/RatingCard',
    component: RatingCard,
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const HasRating = Template.bind({});
HasRating.args = {
    rating: 3,
};

export const NotRating = Template.bind({});
NotRating.args = {
    rating: 0,
    title: 'Поставьте оценку',
};
export const NotRatingWithFeedback = Template.bind({});
NotRatingWithFeedback.args = {
    rating: 0,
    feedbackTitle: 'Добавить комментрий',
    title: 'Поставьте оценку',
    feedbackPlaceholder: 'Написать комментарий...',
    hasFeedback: true,
};
