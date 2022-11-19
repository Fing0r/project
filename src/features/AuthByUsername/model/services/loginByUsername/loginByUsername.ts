import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { loginActions } from '../../slice/loginSlice';

export interface LoginAuthProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginAuthProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;

        try {
            const { data } = await extra.api.post<User, AxiosResponse<User>, LoginAuthProps>('/login', authData);

            if (!data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(data));
            dispatch(loginActions.resetAuthData());

            return data;
        } catch (e) {
            return rejectWithValue('неверный логин или пароль');
        }
    },
);
