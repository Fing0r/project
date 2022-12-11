import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData', () => {
    test('all field correct', async () => {
        const errors = validateProfileData(data);

        expect(errors).toEqual([]);
    });

    test('empty profile data', async () => {
        const errors = validateProfileData(undefined);

        expect(errors).toEqual([ValidateProfileErrors.NO_DATA]);
    });

    test('without first and lastname', async () => {
        const errors = validateProfileData({
            ...data,
            first: undefined,
            lastname: undefined,
        });

        expect(errors).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const errors = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(errors).toEqual([ValidateProfileErrors.INCORRECT_USER_AGE]);
    });

    test('incorrect country', async () => {
        const errors = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(errors).toEqual([ValidateProfileErrors.INCORRECT_USER_COUNTRY]);
    });

    test('incorrect all', async () => {
        const errors = validateProfileData({});

        expect(errors).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_USER_AGE,
            ValidateProfileErrors.INCORRECT_USER_COUNTRY,
        ]);
    });
});
