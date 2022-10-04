import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
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
            <button
                data-testid="toggle"
                type="button"
                onClick={onToggle}
            >
                {t('Переключить')}
            </button>
            <div className={classNames(cls.switchers, {}, [className])}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export { Sidebar };
