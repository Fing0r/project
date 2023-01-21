import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../../types/article';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
        const { data } = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!data) {
            throw new Error();
        }

        return data;
    } catch (e) {
        return rejectWithValue('Неудалось загрузить статью');
    }
});
