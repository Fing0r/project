import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';

const data = [
    {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        userId: '1',
        type: [
            'IT',
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'a',
                ],
            },
        ],
    },
    {
        id: '2',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        userId: '1',
        type: [
            'IT',
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'a',
                ],
            },
        ],
    },
    {
        id: '3',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        userId: '1',
        type: [
            'IT',
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'a',
                ],
            },
        ],
    },
];

describe('fetchArticlesList', () => {
    test('should fetch articles', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPageList: {
                page: 1,
                limit: 3,
                isLoading: false,
                hasMore: true,
                ids: [],
                entities: {},
            },
        });

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const response = await thunk.callThunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);
        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual(data);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('should end with a server error', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPageList: {
                page: 1,
                limit: 3,
                isLoading: false,
                hasMore: true,
                ids: [],
                entities: {},
            },
        });

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const response = await thunk.callThunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);
        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Неудалось загрузить статьи');
        expect(response.meta.requestStatus).toBe('rejected');
    });

    test('should fetch articles if missing page number', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPageList: {
                page: 1,
                limit: 3,
                isLoading: false,
                hasMore: true,
                ids: [],
                entities: {},
            },
        });

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const response = await thunk.callThunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual(data);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });
});
