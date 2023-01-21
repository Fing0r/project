import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonError } from '@/shared/ui/ButtonError';
import { Page } from '@/widgets/Page';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid="MainPage">
            {t('Главная')}
            <ButtonError />
        </Page>
    );
};

export { MainPage };
