export interface LoginByUsernameVariantWithoutClass {
    id: string
}

// import { Dispatch } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { StateSchema } from 'app/providers/StoreProvider';
// import { getAuthData, userActions } from 'entities/User';
// import { loginByUsername } from './loginByUsername';
//
// jest.mock('axios');
//
// const mockedAxios = jest.mocked(axios, true);
//
// describe('loginByUsername', () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;
//
//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     });
//
//     test('success login', async () => {
//         const userData = { id: 1, username: 'admin' };
//         const authData = { username: '123', password: '123' };
//
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
//         const action = loginByUsername(authData);
//         const response = await action(dispatch, getState, undefined);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(mockedAxios.post).toBeCalledTimes(1);
//
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//         expect(dispatch).toBeCalledTimes(4);
//
//         expect(response.payload).toEqual(userData);
//         expect(response.meta.requestStatus).toBe('fulfilled');
//     });
//
//     test('failed login', async () => {
//         const userData = { id: 1, username: 'admin' };
//         const authData = { username: '123', password: '123' };
//
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//
//         const action = loginByUsername(authData);
//         const response = await action(dispatch, getState, undefined);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(mockedAxios.post).toBeCalledTimes(1);
//
//         expect(dispatch).toBeCalledTimes(2);
//
//         expect(response.payload).toBe('неверный логин или пароль');
//         expect(response.meta.requestStatus).toBe('rejected');
//     });
// });
