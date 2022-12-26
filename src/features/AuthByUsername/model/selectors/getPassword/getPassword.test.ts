import { getPassword } from './getPassword';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getPassword', () => {
    test('return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '123' },
        };

        expect(getPassword(state as StateSchema)).toBe('123');
    });

    test('empty password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPassword(state as StateSchema)).toBe('');
    });
});
