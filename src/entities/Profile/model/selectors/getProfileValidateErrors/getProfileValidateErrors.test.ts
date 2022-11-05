import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profileSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.INCORRECT_USER_DATA,
                    ValidateProfileErrors.INCORRECT_USER_COUNTRY,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_USER_COUNTRY,
        ]);
    });

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
