import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const [t] = useTranslation();

    return (
        <h1 className={classNames(cls.NotFoundPage)}>
            {t('Страница не найдена')}
        </h1>
    );
};

export { NotFoundPage };
