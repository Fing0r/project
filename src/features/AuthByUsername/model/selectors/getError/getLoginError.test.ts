import { StateSchema } from 'app/providers/StoreProvider';
import { getError } from './getError';

describe('getError', () => {
    test('return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };

        expect(getError(state as StateSchema)).toBe('error');
    });

    test('empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getError(state as StateSchema)).toBe(undefined);
    });
});
