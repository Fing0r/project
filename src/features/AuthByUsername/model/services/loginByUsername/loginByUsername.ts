import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { User, userActions } from 'entities/User';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

interface LoginAuthProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginAuthProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const url = 'http://localhost:8000/login';
            const response = await axios.post<User, AxiosResponse<User>, LoginAuthProps>(url, authData);

            if (!response.data) {
                throw new Error();
            }

            const { username, id } = response.data;
            thunkAPI.dispatch(userActions.setAuthData({ username, id }));
            thunkAPI.dispatch(loginActions.resetAuthData());

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('неверный логин или пароль');
        }
    },
);
