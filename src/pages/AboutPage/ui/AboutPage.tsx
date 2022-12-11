import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface AboutPageProps {

}

const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О нас')}
        </Page>
    );
};

export { AboutPage };
