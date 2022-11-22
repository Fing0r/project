import { ActionCreatorWithPayload, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleFieldSort, ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { articlesPageListActions, articlesPageListSlice } from '../../slices/articlesListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageListInited } from '../../selectors/getArticlesPageList';

export const initArticlesPageList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPageList/initArticlesPageList',
    async (searchParams, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;

        const sort = searchParams.get('sort') as ArticleFieldSort;
        const order = searchParams.get('order') as SortOrder;
        const search = searchParams.get('q');
        const type = searchParams.get('type') as ArticleType;

        if (sort) {
            dispatch(articlesPageListActions.setSort(sort));
        }

        if (order) {
            dispatch(articlesPageListActions.setOrder(order));
        }

        if (search) {
            dispatch(articlesPageListActions.setSearch(search));
        }

        if (type) {
            dispatch(articlesPageListActions.setType(type));
        }

        const inited = getArticlesPageListInited(getState());

        if (!inited) {
            dispatch(articlesPageListActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
