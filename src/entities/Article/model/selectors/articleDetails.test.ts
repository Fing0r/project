import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailData,
    getArticleDetailIsLoading,
    getArticleDetailError,
} from './articleDetails';

describe('getArticleDetailData', () => {
    test('getArticleDetailData works with the correct state', () => {
        const data = {
            title: 'qwe',
            views: 432,
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: { data },
        };

        expect(getArticleDetailData(state as StateSchema)).toEqual(data);
    });

    test('getArticleDetailData works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailData(state as StateSchema)).toBe(undefined);
    });

    test('getArticleDetailIsLoading works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(true);
    });

    test('getArticleDetailIsLoading works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailIsLoading(state as StateSchema)).toBe(false);
    });

    test('getArticleDetailError works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailError(state as StateSchema)).toEqual('error');
    });

    test('getArticleDetailError works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailError(state as StateSchema)).toBe(undefined);
    });
});
