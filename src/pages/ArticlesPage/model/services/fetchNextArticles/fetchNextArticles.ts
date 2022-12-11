import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlesPageListActions } from '../../slices/articlesListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageListHasMore,
    getArticlesPageListIsLoading,
    getArticlesPageListNumPage,
} from '../../selectors/getArticlesPageList';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPageList/fetchNextArticles',
    async (_, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;

        const isLoading = getArticlesPageListIsLoading(getState());
        const hasMore = getArticlesPageListHasMore(getState());
        const page = getArticlesPageListNumPage(getState());

        if (!isLoading && hasMore) {
            dispatch(articlesPageListActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
