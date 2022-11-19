import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageListLimit, getArticlesPageListNumPage,
    getArticlesPageListOrder,
    getArticlesPageListSort,
} from '../../selectors/getArticlesPageList';

interface Args {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], Args, ThunkConfig<string>>(
    'articlesPageList/fetchArticlesList',
    async (args, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const limit = getArticlesPageListLimit(getState());
        const order = getArticlesPageListOrder(getState());
        const sort = getArticlesPageListSort(getState());
        const page = getArticlesPageListNumPage(getState());

        try {
            addQueryParams({
                sort,
                order,
            });

            const { data } = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                },
            });
            console.log(data);
            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue('Неудалось загрузить статьи');
        }
    },
);
