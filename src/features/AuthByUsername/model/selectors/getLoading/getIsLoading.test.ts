import { StateSchema } from '@/app/providers/StoreProvider';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
    test('return loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };

        expect(getIsLoading(state as StateSchema)).toBe(true);
    });

    test('empty loading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getIsLoading(state as StateSchema)).toBe(false);
    });
});
