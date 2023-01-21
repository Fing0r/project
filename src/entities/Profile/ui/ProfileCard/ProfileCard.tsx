import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Profile } from '../../model/types/profileSchema';

import cls from './ProfileCard.module.scss';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    readonly?: boolean;
    error?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (county: Country) => void;
}

const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        readonly,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        onChangeCity,
    } = props;

    const { first, lastname, age, username, avatar, currency, country, city } =
        data ?? {};

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <form className={classNames(cls.ProfileCard, {}, [cls.center])}>
                <Loader />
            </form>
        );
    }

    if (error) {
        return (
            <form
                className={classNames(cls.ProfileCard, {}, [
                    cls.center,
                    cls.error,
                ])}
            >
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t(error)}
                    text={t('Попробуйте перезагрузить страницу')}
                />
            </form>
        );
    }

    if (!data) {
        return null;
    }

    return (
        <form
            className={classNames(
                cls.ProfileCard,
                { [cls.editable]: !readonly },
                [className],
            )}
        >
            <VStack gap="16">
                <HStack justify="center">
                    <Avatar
                        size={150}
                        src={avatar}
                        alt={t('аватарка пользователя')}
                    />
                </HStack>
                <Input
                    theme={InputTheme.OUTLINE}
                    label={t('Ваше имя')}
                    value={first}
                    disabled={readonly}
                    onChange={onChangeFirstname}
                    data-testid="EditableProfileCard.firstName"
                />
                <Input
                    theme={InputTheme.OUTLINE}
                    label={t('Ваша фамилия')}
                    value={lastname}
                    disabled={readonly}
                    onChange={onChangeLastname}
                    data-testid="EditableProfileCard.lastName"
                />
                <Input
                    theme={InputTheme.OUTLINE}
                    label={t('Ваш возраст')}
                    value={age}
                    disabled={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    theme={InputTheme.OUTLINE}
                    label={t('Ваше имя на сайте')}
                    value={username}
                    disabled={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    theme={InputTheme.OUTLINE}
                    label={t('Ваш аватар')}
                    value={avatar}
                    disabled={readonly}
                    onChange={onChangeAvatar}
                />
                <Input
                    theme={InputTheme.OUTLINE}
                    label={t('Ваш город')}
                    value={city}
                    disabled={readonly}
                    onChange={onChangeCity}
                />
                <CurrencySelect
                    readonly={readonly}
                    value={currency}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    readonly={readonly}
                    value={country}
                    onChange={onChangeCountry}
                />
            </VStack>
        </form>
    );
});

export { ProfileCard };
