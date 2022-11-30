import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown, DropdownItem } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Logout from 'shared/assets/icons/logout.svg';
import User from 'shared/assets/icons/user.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const authData = useSelector(getAuthData);
    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const dropDownItems = useMemo<DropdownItem[]>(() => ([
        {
            content: t('Профиль'),
            href: `${RoutePath.profile}${authData?.id}`,
            Icon: User,
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
            Icon: Logout,
        },
    ]), [authData?.id, onLogout, t]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.title}
                    size={TextSize.M}
                    title={t('Моё приложение')}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    className={cls.logoutBtn}
                    trigger={(
                        <Avatar size={30} src={authData.avatar} />
                    )}
                    items={dropDownItems}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Логин')}
            </Button>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={onCloseModal}
            />
        </header>
    );
});

export { Navbar };
