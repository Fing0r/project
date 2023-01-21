import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('counterSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {};

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setAuthUsername('123123'),
            ),
        ).toEqual({
            username: '123123',
        });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {};

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setAuthPassword('123123'),
            ),
        ).toEqual({
            password: '123123',
        });
    });

    test('test reset auth data', () => {
        const state: DeepPartial<LoginSchema> = {};

        expect(
            loginReducer(state as LoginSchema, loginActions.resetAuthData()),
        ).toEqual({
            username: '',
            password: '',
        });
    });

    test('test isLoading in fulfilled', () => {
        const state: DeepPartial<LoginSchema> = {};

        expect(
            loginReducer(
                state as LoginSchema,
                loginByUsername.fulfilled({ username: '', id: '1' }, '', {
                    username: '',
                    password: '',
                }),
            ),
        ).toEqual({
            isLoading: false,
        });
    });

    test('test isLoading and error in pending', () => {
        const state: DeepPartial<LoginSchema> = {};

        expect(
            loginReducer(
                state as LoginSchema,
                loginByUsername.pending(
                    '',
                    { username: '', password: '' },
                    undefined,
                ),
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test isLoading and error in rejected', () => {
        const state: DeepPartial<LoginSchema> = {};

        expect(
            loginReducer(
                state as LoginSchema,
                loginByUsername.rejected(
                    new Error(),
                    '',
                    { username: '123', password: '123' },
                    'неверный логин или пароль',
                ),
            ),
        ).toEqual({
            error: 'неверный логин или пароль',
            isLoading: false,
        });
    });
});
