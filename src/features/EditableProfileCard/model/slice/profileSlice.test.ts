import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    EditableProfileCardSchema,
    ValidateProfileErrors,
} from '../types/EditableProfileCardSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

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
        const state: DeepPartial<EditableProfileCardSchema> = {
            readonly: false,
        };

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
                profileActions.setReadonlyProfile(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });

    test('update form data profile', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            form: data,
        };

        expect(
            profileReducer(state as EditableProfileCardSchema, profileActions.updateFormData({
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
        const state: DeepPartial<EditableProfileCardSchema> = {
            data,
            form: { ...data, age: 5 },
            readonly: false,
            validateErrors: [ValidateProfileErrors.INCORRECT_USER_DATA],
        };

        expect(
            profileReducer(state as EditableProfileCardSchema, profileActions.cancelEditingFormData()),
        ).toEqual({
            data,
            form: data,
            readonly: true,
        });
    });

    test('fetchProfileData pending', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            error: '123',
        };

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
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
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
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
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
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
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.NO_DATA],
        };

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
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
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            readonly: false,
        };

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
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
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
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
