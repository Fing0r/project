import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { profileActions } from 'entities/Profile';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getReadonly } from '../../model/selectors/getReadonly/getReadonly';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { first, lastname } = useSelector(getProfileData) ?? {};
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getReadonly);

    const onEditProfile = () => {
        dispatch(profileActions.setReadonlyProfile(false));
    };

    const onSaveProfile = () => {
        dispatch(profileActions.setReadonlyProfile(true));
    };

    return (
        <form className={classNames(cls.ProfileCard, {}, [className])}>
            <Text title={t('Профиль')} />
            <Input
                theme={InputTheme.OUTLINE}
                label={t('Введите имя')}
                value={first}
                disabled={readonly}
            />
            <Input
                theme={InputTheme.OUTLINE}
                label={t('Ваше имя')}
                value={lastname}
                disabled={readonly}
            />
            {readonly ? (
                <Button
                    type="button"
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditProfile}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <Button
                    type="button"
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSaveProfile}
                >
                    {t('Сохранить')}
                </Button>
            )}

        </form>
    );
});

export { ProfileCard };
