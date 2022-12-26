import { getProfileFormData } from './getProfileFormData';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

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

describe('getProfileFormData', () => {
    test('works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { form: data },
        };

        expect(getProfileFormData(state as StateSchema)).toEqual(data);
    });

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFormData(state as StateSchema)).toBe(undefined);
    });
});
