import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
                {t('Логин')}
            </Button>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={onCloseModal}
            />
        </div>
    );
};

export { Navbar };
