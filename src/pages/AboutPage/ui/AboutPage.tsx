import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { VStack } from 'shared/ui/Stack';

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
