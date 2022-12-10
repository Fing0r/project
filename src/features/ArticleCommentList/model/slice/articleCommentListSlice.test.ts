import { ArticleCommentListSchema } from '../types/ArticleCommentListSchema';
import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleCommentListReducer } from './articleCommentListSlice';

const comments = [
    {
        articleId: '1',
        id: '1',
        text: 'asd',
        user: {
            avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-150138136.jpg',
            id: '1',
            password: '123',
            role: 'ADMIN',
            username: 'admin',
        },
        userId: '1',
    },
    {
        articleId: '1',
        id: '2',
        text: 'asd',
        user: {
            avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-150138136.jpg',
            id: '1',
            password: '123',
            role: 'ADMIN',
            username: 'admin',
        },
        userId: '1',
    },
];

describe('articleCommentListSlice', () => {
    test('should return default state when passed an empty action', () => {
        const result = articleCommentListReducer(undefined, { type: '' });

        expect(result).toEqual({
            entities: {},
            ids: [],
            isLoading: false,
            error: undefined,
        });
    });

    test('should change isLoading with "fetchCommentsByArticleId.pending" action', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {};
        const action = articleCommentListReducer(
            state as ArticleCommentListSchema,
            fetchCommentsByArticleId.pending(
                '',
                '',
            ),
        );

        expect(action).toEqual({ isLoading: true });
    });

    test('should change state with "fetchCommentsByArticleId.fulfilled" action', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {};

        const action = articleCommentListReducer(
            state as ArticleCommentListSchema,
            fetchCommentsByArticleId.fulfilled(
                comments,
                '',
                '',
            ),
        );

        const result = {
            entities: { 1: comments[0], 2: comments[1] },
            ids: ['1', '2'],
            isLoading: false,
        };

        expect(action).toEqual(result);
    });

    test('should return error with "fetchCommentsByArticleId.rejected" action', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {};
        const action = articleCommentListReducer(
            state as ArticleCommentListSchema,
            fetchCommentsByArticleId.rejected(
                new Error(),
                '',
                undefined,
                'Неудалось загрузить комментарии статьи',
            ),
        );

        const result = {
            isLoading: false,
            error: 'Неудалось загрузить комментарии статьи',
        };

        expect(action).toEqual(result);
    });
});
