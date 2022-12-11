import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getAuthData } from '@/entities/User';
import { getArticleDetailData } from '@/entities/Article';
import {
    fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string | undefined, ThunkConfig<string>>(
    'articleCommentList/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            rejectWithValue,
            extra,
            getState,
            dispatch,
        } = thunkAPI;

        const article = getArticleDetailData(getState());
        const user = getAuthData(getState());

        if (!text || !article || !user) {
            return rejectWithValue('Нет данных');
        }

        try {
            const { data } = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: user?.id,
                text,
            });

            if (!data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return data;
        } catch (e) {
            return rejectWithValue('Неудалось добавить комментарий');
        }
    },
);
