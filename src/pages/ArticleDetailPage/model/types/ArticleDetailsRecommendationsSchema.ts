import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    data?: Article;
    isLoading?: boolean;
    error?: string;
}
