import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <nav role="navigation" className={classNames(cls.links, {}, [className])}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О нас')}</AppLink>
            </nav>
        </div>
    );
};

export { Navbar };
