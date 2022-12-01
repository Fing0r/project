import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: false },
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });
});
