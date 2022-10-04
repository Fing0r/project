import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = () => {
    const { t } = useTranslation();
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError)}>
            <h1>{t('Что-то не так.')}</h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={handleReload}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};

export { PageError };