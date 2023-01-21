import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './DropdownAvatar.module.scss';

import {
    getAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import AdminPanelIcon from '@/shared/assets/icons/admin-panel.svg';
import Logout from '@/shared/assets/icons/logout.svg';
import User from '@/shared/assets/icons/user.svg';
import { getRouteAdmitPanel, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown, DropdownItemProps } from '@/shared/ui/Popups';

interface DropdownAvatarProps {
    className?: string;
}

export const DropdownAvatar = memo((props: DropdownAvatarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getAuthData);
    const dispatch = useAppDispatch();

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    const dropDownItems = useMemo<DropdownItemProps[]>(
        () => [
            {
                content: t('Профиль'),
                href: authData?.id ? getRouteProfile(authData.id) : '',
                Icon: User,
            },
            ...(isAdminPanelAvailable
                ? [
                      {
                          content: t('Админка'),
                          href: getRouteAdmitPanel(),
                          Icon: AdminPanelIcon,
                      },
                  ]
                : []),
            {
                content: t('Выйти'),
                onClick: onLogout,
                Icon: Logout,
            },
        ],
        [authData?.id, isAdminPanelAvailable, onLogout, t],
    );

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames(cls.avatar, {}, [className])}
            optionsClass={cls.options}
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={dropDownItems}
        />
    );
});
