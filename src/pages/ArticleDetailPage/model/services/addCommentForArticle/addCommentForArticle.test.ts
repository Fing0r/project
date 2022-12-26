import { addCommentForArticle } from './addCommentForArticle';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
    articleId: '1',
    id: 'YwrZzbi',
    text: '321',
    userId: '1',
};

const state = {
    articleDetails: {
        data: {
            id: '1',
        },
    },
    user: {
        authData: {
            id: '1',
        },
    },
};

describe('addCommentForArticle', () => {
    test('should add comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);

        thunk.api.post.mockReturnValue(Promise.resolve({ data }));

        const response = await thunk.callThunk('321');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.api.post).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(3);

        expect(response.payload).toEqual(data);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('should end with a server error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const response = await thunk.callThunk('123');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.api.post).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Неудалось добавить комментарий');
        expect(response.meta.requestStatus).toBe('rejected');
    });

    test('should fail if missing text', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);

        const response = await thunk.callThunk(undefined);

        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(thunk.api.post).toBeCalledTimes(0);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Нет данных');
        expect(response.meta.requestStatus).toBe('rejected');
    });

    test('should fail if missing article', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            articleDetails: { data: undefined },
            user: { authData: { id: '1' } },
        });

        const response = await thunk.callThunk(undefined);

        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(thunk.api.post).toBeCalledTimes(0);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Нет данных');
        expect(response.meta.requestStatus).toBe('rejected');
    });

    test('should fail if missing authData', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            articleDetails: { data: { id: '1' } },
            user: { authData: undefined },
        });

        const response = await thunk.callThunk(undefined);

        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(thunk.api.post).toBeCalledTimes(0);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Нет данных');
        expect(response.meta.requestStatus).toBe('rejected');
    });
});
