import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isModalOpen, setModalOpen] = useState(false);

    const onModalToggle = () => {
        setModalOpen((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onModalToggle}>
                {t('Логин')}
            </Button>
            <Modal isOpen={isModalOpen} onClose={onModalToggle}>
                {t('Lorem')}
            </Modal>
        </div>
    );
};

export { Navbar };
