import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getProfileError, getReadonly, profileActions } from 'entities/Profile';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getReadonly);
    const profileData = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const userData = useSelector(getAuthData);
    const canEdit = profileData?.id === userData?.id && !error;

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
        <HStack
            justify="between"
            align="center"
            gap="16"
            className={classNames('', {}, [className])}
        >
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            type="button"
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="16" max>
                            <Button
                                type="button"
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                type="button"
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>

                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
});

export { ProfilePageHeader };
