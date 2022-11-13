import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile, ValidateProfileErrors } from '../../types/profileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const formData = getProfileFormData(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const { data } = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
