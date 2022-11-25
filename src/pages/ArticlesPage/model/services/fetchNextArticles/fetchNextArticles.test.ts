import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageListActions } from '../../slices/articlesListSlice';
import { fetchNextArticles } from './fetchNextArticles';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticles', () => {
    test('should ended with call fetchArticlesList', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPageList: {
                page: 1,
                limit: 3,
                isLoading: false,
                hasMore: true,
                ids: [],
                entities: {},
            },
        });

        const response = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledWith(articlesPageListActions.setPage(2));
        expect(fetchArticlesList).toHaveBeenCalledWith({});

        expect(thunk.dispatch).toBeCalledTimes(4);

        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('should ended without not call fetchArticlesList, when isLoading = true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPageList: {
                page: 1,
                limit: 3,
                isLoading: true,
                hasMore: true,
                ids: [],
                entities: {},
            },
        });

        const response = await thunk.callThunk();

        expect(thunk.dispatch).not.toHaveBeenCalledWith(articlesPageListActions.setPage(2));
        expect(fetchArticlesList).not.toHaveBeenCalled();

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('should ended without not call fetchArticlesList, when hasMore = false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPageList: {
                page: 1,
                limit: 3,
                isLoading: false,
                hasMore: false,
                ids: [],
                entities: {},
            },
        });

        const response = await thunk.callThunk();

        expect(thunk.dispatch).not.toHaveBeenCalledWith(articlesPageListActions.setPage(2));
        expect(fetchArticlesList).not.toHaveBeenCalled();

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.meta.requestStatus).toBe('fulfilled');
    });
});
