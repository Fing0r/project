import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getReadonly, profileActions } from 'entities/Profile';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonlyProfile(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEditingFormData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text
                className={cls.title}
                title={t('Профиль')}
            />
            <div className={cls.btns}>
                {readonly ? (
                    <Button
                        type="button"
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                        className={cls.btn}
                    >
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <>
                        <Button
                            type="button"
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                            className={cls.btn}
                        >
                            {t('Сохранить')}
                        </Button>
                        <Button
                            type="button"
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                            className={cls.btn}
                        >
                            {t('Отменить')}
                        </Button>

                    </>
                )}
            </div>
        </div>
    );
};

export { ProfilePageHeader };
