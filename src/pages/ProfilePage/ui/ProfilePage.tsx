import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import cls from './ProfilePage.module.scss';
import { ProfileRating } from '@/features/ProfileRating';
import { VStack } from '@/shared/ui/Stack';
import { getAuthData } from '@/entities/User';

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
        <Page>
            <VStack gap="24" className={cls.ProfilePage}>
                <EditableProfileCard id={id} />
                {showRating ? <ProfileRating profileId={id} /> : null}
            </VStack>
        </Page>
    );
});

export { ProfilePage };
