import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleCommentList/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        if (!articleId) {
            return rejectWithValue('Неудалось загрузить комментарии статьи');
        }

        try {
            const { data } = await extra.api.get<Comment[]>('/comments/', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue('Неудалось загрузить комментарии статьи');
        }
    },
);
