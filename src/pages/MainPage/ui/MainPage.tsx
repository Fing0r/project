import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonError } from 'shared/ui/ButtonError';

interface MainPageProps {

}

const MainPage: FC<MainPageProps> = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная')}
            <ButtonError />
        </div>
    );
};

export default MainPage;
