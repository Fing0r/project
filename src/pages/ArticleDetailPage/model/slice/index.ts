import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailCommentReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { ArticleDetailPageSchema } from '../types';

const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailCommentReducer,
});

export { articleDetailsPageReducer };
