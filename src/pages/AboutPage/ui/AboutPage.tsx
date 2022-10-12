import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

interface AboutPageProps {

}

const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О нас')}
            <Counter />
        </div>
    );
};

export default AboutPage;
