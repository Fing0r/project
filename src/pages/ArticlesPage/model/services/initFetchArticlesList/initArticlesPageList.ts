import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleFieldSort } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { articlesPageListActions } from '../../slices/articlesListSlice';
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

        if (sort) {
            dispatch(articlesPageListActions.setSort(sort));
        }

        if (order) {
            dispatch(articlesPageListActions.setOrder(order));
        }

        const inited = getArticlesPageListInited(getState());

        if (!inited) {
            dispatch(articlesPageListActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
