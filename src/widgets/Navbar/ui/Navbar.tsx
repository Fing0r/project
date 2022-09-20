import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <nav role='navigation' className={classNames(cls.links, {}, [className])}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О сайте</AppLink>
            </nav>
        </div>
    );
};

export {Navbar};
