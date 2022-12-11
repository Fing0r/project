import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'error' },
        };

        expect(getProfileError(state as StateSchema)).toBe('error');
    });

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
