import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short: boolean;
}

const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Сокращенный язык' : 'Язык')}
        </Button>
    );
});

export { LangSwitcher };
