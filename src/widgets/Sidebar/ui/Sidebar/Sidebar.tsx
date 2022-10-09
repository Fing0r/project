import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                className={classNames(cls.toggle)}
                data-testid="toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
                type="button"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <nav role="navigation" className={classNames(cls.links, {}, [className])}>
                <AppLink
                    className={classNames(cls.link)}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <HomeIcon />
                    <span
                        className={classNames(cls.linkText)}
                    >
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    className={classNames(cls.link)}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    <AboutIcon />
                    <span
                        className={classNames(cls.linkText)}
                    >
                        {t('О нас')}
                    </span>
                </AppLink>
            </nav>
            <div className={classNames(cls.switchers, {}, [className])}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};

export { Sidebar };
