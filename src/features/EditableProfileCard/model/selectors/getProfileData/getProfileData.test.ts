import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

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

describe('getProfileData', () => {
    test('works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
