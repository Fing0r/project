import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import cls from './ProfilePage.module.scss';

import { getAuthData } from '@/entities/User';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id: userId } = useSelector(getAuthData) ?? {};

    const { id = __PROJECT__ === 'storybook' ? '1' : '' } = useParams<{id: string}>();

    if (!id) {
        return <Text titleVariant="h3" title={t('Не удалось загрузить профиль')} />;
    }

    const showRating = userId !== id;

    return (
        <Page data-testid="ProfilePage">
            <VStack gap="24" className={cls.ProfilePage}>
                <EditableProfileCard id={id} />
                {showRating ? <ProfileRating profileId={id} /> : null}
            </VStack>
        </Page>
    );
});

export { ProfilePage };
