import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailPageSchema } from '../types';

import { articleDetailCommentReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailCommentReducer,
});

export { articleDetailsPageReducer };
