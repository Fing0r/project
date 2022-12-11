import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const data: Article = {
    type: [],
    createdAt: '10-10-2022',
    img: 'asdasd',
    id: '1',
    views: 111,
    title: 'dasd',
    subtitle: 'asdsad',
    blocks: [],
    user: {
        id: '1',
        avatar: '',
        username: 'asdasd',
    },
    userId: '1',
};

describe('fetchProfileData', () => {
    test('success fetch article data', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const response = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual(data);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('failed fetch article data', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const response = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Неудалось загрузить статью');
        expect(response.meta.requestStatus).toBe('rejected');
    });
});
