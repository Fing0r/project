import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemType } from '../../model/types/SidebarItem';

import cls from './SidebarItem.module.scss';

import { getAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;

    const isAuth = useSelector(getAuthData);
    const { t } = useTranslation();

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon />
            <span className={classNames(cls.linkText)}>{t(item.text)}</span>
        </AppLink>
    );
});

export { SidebarItem };
