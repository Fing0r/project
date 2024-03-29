import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentListSchema } from '../types/ArticleCommentListSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailComments || commentsAdapter.getInitialState(),
);

export const articleCommentListSlice = createSlice({
    name: 'articleCommentList',
    initialState: commentsAdapter.getInitialState<ArticleCommentListSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: articleCommentListActions,
    reducer: articleCommentListReducer,
} = articleCommentListSlice;
