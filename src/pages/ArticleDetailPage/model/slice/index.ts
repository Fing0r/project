import { combineReducers } from '@reduxjs/toolkit';
import { articleCommentListReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { ArticleDetailPageSchema } from '../types';

const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleCommentListReducer,
});

export { articleDetailsPageReducer };
