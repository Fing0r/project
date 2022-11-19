import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModule } from 'shared/lib/hooks/useDynamicModule';
import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo, Suspense, useCallback } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import {
    getProfileValidateErrors,
} from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    useDynamicModule(initialReducers, true);

    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams();

    const validateErrorsTranslated = {
        INCORRECT_USER_DATA: t('Имя и фамилия обязательны'),
        INCORRECT_USER_AGE: t('Укажите корректный возраст'),
        INCORRECT_USER_COUNTRY: t('Укажите корректную страну'),
        SERVER_ERROR: t('Серверная ошибка'),
        NO_DATA: t('Данные не указаны'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
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
        <Page>
            <div className={cls.profileCard}>
                <Suspense fallback={<Loader />}>
                    <ProfilePageHeader />
                    {validateErrors?.length && (
                        validateErrors?.map((err) => (
                            <Text
                                text={validateErrorsTranslated[err]}
                                theme={TextTheme.ERROR}
                                key={err}
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
            </div>
        </Page>
    );
});

export { ProfilePage };
