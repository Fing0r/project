import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
    test('success fetch profile data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const response = await thunk.callThunk(data.id);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toEqual(data);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });

    test('failed fetch profile data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const response = await thunk.callThunk(data.id);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.api.get).toBeCalledTimes(1);

        expect(thunk.dispatch).toBeCalledTimes(2);

        expect(response.payload).toBe('Неудалось загрузить данные профиля');
        expect(response.meta.requestStatus).toBe('rejected');
    });
});
