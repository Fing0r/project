import { EntityState } from '@reduxjs/toolkit';

import {
    Article, ArticleFieldSort, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

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
