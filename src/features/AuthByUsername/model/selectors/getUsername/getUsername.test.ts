import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername', () => {
    test('return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123' },
        };

        expect(getUsername(state as StateSchema)).toBe('123');
    });

    test('empty username', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUsername(state as StateSchema)).toBe('');
    });
});
