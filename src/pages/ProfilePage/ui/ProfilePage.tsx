import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    const { id = __PROJECT__ === 'storybook' ? '1' : '' } = useParams<{id: string}>();

    if (!id) {
        return <Text titleVariant="h3" title={t('Не удалось загрузить профиль')} />;
    }

    return (
        <Page>
            <div className={cls.ProfilePage}>
                <EditableProfileCard id={id} />
            </div>
        </Page>
    );
});

export { ProfilePage };
