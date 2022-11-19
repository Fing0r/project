import {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
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

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
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
