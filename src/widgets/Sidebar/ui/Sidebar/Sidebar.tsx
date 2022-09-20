import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const { t } = useTranslation();

     const onToggle = () => {
         setCollapsed(prev => !prev)
     }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t("Переключить")}</button>
            <div className={classNames(cls.switchers, {}, [className])}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

export {Sidebar};
