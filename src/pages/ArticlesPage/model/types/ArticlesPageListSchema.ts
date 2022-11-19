import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleFieldSort } from 'entities/Article/model/types/article';

export interface ArticlesPageListSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    page?: number;
    limit: number;
    hasMore?: boolean;
    // filters
    order: SortOrder;
    sort: ArticleFieldSort;
    // inited
    _inited: boolean
}
