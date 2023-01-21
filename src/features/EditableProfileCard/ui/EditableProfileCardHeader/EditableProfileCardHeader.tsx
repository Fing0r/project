import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getReadonly } from '../../model/selectors/getReadonly/getReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { getAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

const EditableProfileCardHeader = memo(
    ({ className }: ProfilePageHeaderProps) => {
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
                                data-testid="EditableProfileCard.edit"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="16" max>
                                <Button
                                    type="button"
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfileCard.save"
                                >
                                    {t('Сохранить')}
                                </Button>
                                <Button
                                    type="button"
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCard.cancel"
                                >
                                    {t('Отменить')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        );
    },
);

export { EditableProfileCardHeader };
