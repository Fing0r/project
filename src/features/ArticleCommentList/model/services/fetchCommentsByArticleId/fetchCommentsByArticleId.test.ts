import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data = [
    {
        articleId: '1',
        id: 'bwAvpj3',
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

describe('fetchCommentsByArticleId', () => {
    test('should fetch comments article by id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const response = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual(data);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('should end with a server error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const response = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Неудалось загрузить комментарии статьи');
        expect(response.meta.requestStatus).toBe('rejected');
    });

    test('should fail if missing article id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

        const response = await thunk.callThunk(undefined);

        expect(thunk.api.get).not.toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(0);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Неудалось загрузить комментарии статьи');
        expect(response.meta.requestStatus).toBe('rejected');
    });
});
