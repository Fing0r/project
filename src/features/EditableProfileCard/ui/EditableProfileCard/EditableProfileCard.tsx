import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {
    getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getReadonly } from '../../model/selectors/getReadonly/getReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useDynamicModule(initialReducers, true);

    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const validateErrorsTranslated = {
        INCORRECT_USER_DATA: t('Имя и фамилия обязательны'),
        INCORRECT_USER_AGE: t('Укажите корректный возраст'),
        INCORRECT_USER_COUNTRY: t('Укажите корректную страну'),
        SERVER_ERROR: t('Серверная ошибка'),
        NO_DATA: t('Данные не указаны'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, id);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateFormData({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateFormData({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateFormData({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateFormData({ username: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateFormData({ city: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateFormData({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateFormData({ country }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        const number = Number(value);

        if (Number.isNaN(number)) {
            return;
        }

        dispatch(profileActions.updateFormData({ age: number || 0 }));
    }, [dispatch]);

    return (
        <VStack
            gap="16"
            data-testid="EditableProfileCard"
            className={className}
        >
            <Suspense fallback={<Loader />}>
                <EditableProfileCardHeader />
                {validateErrors?.length && (
                    validateErrors?.map((err) => (
                        <Text
                            text={validateErrorsTranslated[err]}
                            theme={TextTheme.ERROR}
                            key={err}
                            data-testid="EditableProfileCard.error"
                        />
                    ))
                )}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Suspense>
        </VStack>
    );
});
