import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
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

describe('profileSlice.test', () => {
    test('fetchArticleById pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: '123',
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending(
                    '',
                    '1',
                ),
            ),
        ).toEqual({
            isLoading: true,
        });
    });

    test('fetchProfileData fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(
                    data,
                    '',
                    '',
                ),
            ),
        ).toEqual({
            data,
            isLoading: false,
        });
    });

    test('fetchProfileData rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected(
                    new Error(),
                    '',
                    '',
                    'Неудалось загрузить статью',
                ),
            ),
        ).toEqual({
            isLoading: false,
            error: 'Неудалось загрузить статью',
        });
    });
});
