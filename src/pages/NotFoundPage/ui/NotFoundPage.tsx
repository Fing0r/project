import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

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
