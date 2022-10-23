import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from 'entities/User';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;

            const authData = JSON.stringify(action.payload);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, authData);
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
        initAthData: (state) => {
            const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (authData) {
                state.authData = JSON.parse(authData);
            }
        },
    },
});

export const {
    reducer: userReducer,
    actions: userActions,
} = userSlice;
