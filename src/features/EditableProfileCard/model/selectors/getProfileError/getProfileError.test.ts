import { getProfileError } from './getProfileError';

import { StateSchema } from '@/app/providers/StoreProvider';

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
