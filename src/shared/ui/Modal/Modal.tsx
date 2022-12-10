import React, { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '../../lib/hooks/useModal';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    contentClassName?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
    children: ReactNode;
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
    const {
        className,
        contentClassName,
        isOpen,
        onClose,
        children,
        lazy,
    } = props;

    const {
        isMounted,
        isOpening,
        isClosing,
        close,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });

    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClose={close} />
                <div className={classNames(cls.content, {}, [contentClassName])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export { Modal };
