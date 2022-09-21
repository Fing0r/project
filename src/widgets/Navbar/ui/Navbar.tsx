import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <nav role="navigation" className={classNames(cls.links, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </nav>
    </div>
);

export { Navbar };
