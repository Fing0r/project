import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../consts/consts';

export interface EditableProfileCardSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileErrors[]
}