import { createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageListSchema } from '../types/ArticlesPageListSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article, ArticleFieldSort, ArticleType, ArticleView,
} from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { buildSlice } from '@/shared/lib/store';
import { SortOrder } from '@/shared/types/sort';

const articlesPageListAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticlesPageList = articlesPageListAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPageList || articlesPageListAdapter.getInitialState(),
);

export const articlesPageListSlice = buildSlice({
    name: 'articlesPageList',
    initialState: articlesPageListAdapter.getInitialState<ArticlesPageListSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: undefined,
        view: ArticleView.GRID,
        page: 1,
        hasMore: false,
        limit: 9,
        _inited: false,
        order: 'asc',
        sort: ArticleFieldSort.CREATED,
        search: '',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            state.limit = action.payload === ArticleView.LIST ? 3 : 6;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleFieldSort>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view ?? ArticleView.LIST;
            state.limit = view === ArticleView.LIST ? 3 : 6;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    articlesPageListAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload?.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesPageListAdapter.setAll(state, action.payload);
                } else {
                    articlesPageListAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: articlesPageListActions,
    reducer: articlesPageListReducer,
    useActions: useArticlesPageListActions,
} = articlesPageListSlice;
