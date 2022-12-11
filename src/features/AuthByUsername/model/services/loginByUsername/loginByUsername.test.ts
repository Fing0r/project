import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
    test('success login', async () => {
        const userData = { id: '1', username: 'admin' };
        const authData = { username: '123', password: '123' };

        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

        const response = await thunk.callThunk(authData);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.api.post).toBeCalledTimes(1);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toBeCalledTimes(3);

        expect(response.payload).toEqual(userData);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('failed login', async () => {
        const authData = { username: '123', password: '123' };

        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const response = await thunk.callThunk(authData);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.api.post).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('неверный логин или пароль');
        expect(response.meta.requestStatus).toBe('rejected');
    });
});
