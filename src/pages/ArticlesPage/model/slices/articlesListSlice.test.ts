import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageListActions, articlesPageListReducer } from './articlesListSlice';
import { ArticlesPageListSchema } from '../types/ArticlesPageListSchema';

const stateEntities = {
    1: {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        userId: '1',
        user: {
            id: '1',
            avatar: '',
            username: '',
        },
        type: [
            ArticleType.IT,
        ],
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'a',
                ],
            },
        ],
    },
};
const data: Article[] = [
    {
        id: '2',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        userId: '1',
        type: [
            ArticleType.IT,
        ],
        user: {
            id: '1',
            avatar: '',
            username: '',
        },
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'a',
                ],
            },
        ],
    },
];

describe('articlesListSlice', () => {
    test('should return default state when passed an empty action', () => {
        const result = articlesPageListReducer(undefined, { type: '' });

        expect(result).toEqual({
            entities: {},
            ids: [],
            isLoading: false,
            error: undefined,
            view: ArticleView.GRID,
            page: 1,
            hasMore: false,
            limit: 8,
        });
    });

    test('should change view with "setView" action', () => {
        const state: DeepPartial<ArticlesPageListSchema> = {
            view: ArticleView.LIST,
            limit: 8,
        };

        expect(
            articlesPageListReducer(
                state as ArticlesPageListSchema,
                articlesPageListActions.setView(ArticleView.GRID),
            ),
        ).toEqual({
            view: ArticleView.GRID,
            limit: 15,
        });
    });

    test('should change view with "setPage" action', () => {
        const state: DeepPartial<ArticlesPageListSchema> = {
            page: 1,
        };

        expect(
            articlesPageListReducer(
                state as ArticlesPageListSchema,
                articlesPageListActions.setPage(2),
            ),
        ).toEqual({
            page: 2,
        });
    });

    test('should change view with "initState" action', () => {
        const state: DeepPartial<ArticlesPageListSchema> = {
            view: ArticleView.GRID,
            limit: 8,
        };

        localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, ArticleView.LIST);

        expect(
            articlesPageListReducer(
                state as ArticlesPageListSchema,
                articlesPageListActions.initState(),
            ),
        ).toEqual({
            view: ArticleView.LIST,
            limit: 3,
        });
    });

    test('should change isLoading with "fetchArticlesList.pending" action', () => {
        const state: DeepPartial<ArticlesPageListSchema> = {
            isLoading: false,
        };
        const action = articlesPageListReducer(
            state as ArticlesPageListSchema,
            fetchArticlesList.pending(
                '',
                {},
            ),
        );

        expect(action).toEqual({ isLoading: true });
    });

    test('should change state with "fetchArticlesList.fulfilled" action, if return articles', () => {
        const state: DeepPartial<ArticlesPageListSchema> = {
            isLoading: false,
            ids: ['1'],
            entities: stateEntities,
        };
        const action = articlesPageListReducer(
            state as ArticlesPageListSchema,
            fetchArticlesList.fulfilled(
                data,
                '',
                {},
            ),
        );

        expect(action).toEqual({
            isLoading: false,
            hasMore: true,
            ids: ['1', '2'],
            entities: {
                ...stateEntities,
                2: data[0],
            },
        });
    });

    test('should change state with "fetchArticlesList.fulfilled" action, if not return articles', () => {
        const state: DeepPartial<ArticlesPageListSchema> = {
            isLoading: false,
            ids: ['1'],
            entities: stateEntities,
        };
        const action = articlesPageListReducer(
            state as ArticlesPageListSchema,
            fetchArticlesList.fulfilled(
                [],
                '',
                {},
            ),
        );

        expect(action).toEqual({
            isLoading: false,
            hasMore: false,
            ids: ['1'],
            entities: {
                ...stateEntities,
            },
        });
    });

    test('should change state with "fetchArticlesList.rejected" action', () => {
        const state: DeepPartial<ArticlesPageListSchema> = {
            isLoading: true,
        };
        const action = articlesPageListReducer(
            state as ArticlesPageListSchema,
            fetchArticlesList.rejected(
                new Error(),
                '',
                {},
                'Неудалось загрузить статьи',
            ),
        );

        expect(action).toEqual({
            isLoading: false,
            error: 'Неудалось загрузить статьи',
        });
    });
});
