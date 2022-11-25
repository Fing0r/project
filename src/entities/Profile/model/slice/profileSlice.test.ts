import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileErrors } from '../types/profileSchema';

const data = {
    age: 3,
    avatar: 'dfsafsadf',
    country: Country.Kazakhstan,
    first: 'Иван',
    city: 'Караганда',
    username: 'admin',
    lastname: 'Пупкин',
    currency: Currency.EUR,
    id: '1',
};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonlyProfile(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });

    test('update form data profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.updateFormData({
                ...data, age: 5,
            })),
        ).toEqual({
            form: {
                ...data,
                age: 5,
            },
        });
    });

    test('cancel update form data profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { ...data, age: 5 },
            readonly: false,
            validateErrors: [ValidateProfileErrors.INCORRECT_USER_DATA],
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEditingFormData()),
        ).toEqual({
            data,
            form: data,
            readonly: true,
        });
    });

    test('fetchProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: '123',
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.pending(
                    '',
                    undefined,
                ),
            ),
        ).toEqual({
            isLoading: true,
        });
    });

    test('fetchProfileData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.fulfilled(
                    data,
                    '',
                    '',
                ),
            ),
        ).toEqual({
            data,
            form: data,
            isLoading: false,
        });
    });

    test('fetchProfileData rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.rejected(
                    new Error(),
                    '',
                    undefined,
                    'Неудалось загрузить данные профиля',
                ),
            ),
        ).toEqual({
            isLoading: false,
            error: 'Неудалось загрузить данные профиля',
        });
    });

    test('updateProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.NO_DATA],
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending(
                    '',
                    undefined,
                ),
            ),
        ).toEqual({
            isLoading: true,
        });
    });

    test('updateProfileData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(
                    data,
                    '',
                ),
            ),
        ).toEqual({
            data,
            form: data,
            isLoading: false,
            readonly: true,
        });
    });

    test('updateProfileData rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.rejected(
                    new Error(),
                    '',
                    undefined,
                    [ValidateProfileErrors.NO_DATA],
                ),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: [ValidateProfileErrors.NO_DATA],
        });
    });
});
