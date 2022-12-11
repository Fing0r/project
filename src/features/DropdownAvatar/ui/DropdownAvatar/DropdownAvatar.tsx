import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown, DropdownItemProps } from '@/shared/ui/Popups/ui';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import User from '@/shared/assets/icons/user.svg';
import AdminPanelIcon from '@/shared/assets/icons/admin-panel.svg';
import Logout from '@/shared/assets/icons/logout.svg';
import {
    getAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './DropdownAvatar.module.scss';

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

    const dropDownItems = useMemo<DropdownItemProps[]>(() => ([
        {
            content: t('Профиль'),
            href: `${RoutePath.profile}${authData?.id}`,
            Icon: User,
        },
        ...(isAdminPanelAvailable ? [{
            content: t('Админка'),
            href: RoutePath.admin_panel,
            Icon: AdminPanelIcon,
        }] : []),
        {
            content: t('Выйти'),
            onClick: onLogout,
            Icon: Logout,
        },
    ]), [authData?.id, isAdminPanelAvailable, onLogout, t]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            optionsClass={cls.options}
            trigger={(
                <Avatar size={30} src={authData.avatar} />
            )}
            items={dropDownItems}
        />
    );
});
