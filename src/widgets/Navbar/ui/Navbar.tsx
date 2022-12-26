import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

import { getAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { DropdownAvatar } from '@/features/DropdownAvatar';
import { NotificationsButton } from '@/features/NotificationsButton';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const authData = useSelector(getAuthData);

    const onCloseModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

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
                <HStack gap="16" align="center" className={cls.btns}>
                    <NotificationsButton />
                    <DropdownAvatar />
                </HStack>
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
