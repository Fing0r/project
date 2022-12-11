import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileErrors } from '../../consts/consts';

const data = {
    age: 3,
    avatar: 'dfsafsadf',
    country: Country.Kazakhstan,
    first: 'Иван',
    city: 'Караганда',
    username: 'admin',
    lastname: 'Пупкин',
    currency: Currency.EUR,
};

describe('updateProfileData', () => {
    test('success update profile data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const response = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.api.put).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual(data);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('failed update profile data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const response = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.api.put).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
        expect(response.meta.requestStatus).toBe('rejected');
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data,
                    first: '',
                    lastname: '',
                },
            },
        });

        const response = await thunk.callThunk();

        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(thunk.api.put).toBeCalledTimes(0);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
        expect(response.meta.requestStatus).toBe('rejected');
    });
});
