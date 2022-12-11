import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <h1 className={classNames(cls.NotFoundPage)}>
                {t('Страница не найдена')}
            </h1>
        </Page>
    );
};

export { NotFoundPage };
