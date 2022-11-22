import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleFieldSort } from 'entities/Article/model/types/article';

export interface ArticlesPageListSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    page?: number;
    limit: number;
    hasMore?: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleFieldSort;
    search: string;
    type: ArticleType;
    // inited
    _inited: boolean
}
