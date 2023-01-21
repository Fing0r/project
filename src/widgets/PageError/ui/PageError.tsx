import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

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
            <Button theme={ButtonTheme.OUTLINE} onClick={handleReload}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};

export { PageError };
