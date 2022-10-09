import React, {
    FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
        children,
    } = props;

    const [isClosing, setClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setClosing(true);
            timerRef.current = setTimeout(() => {
                setClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    const onPressEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        window.addEventListener('keydown', onPressEscape);

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onPressEscape);
        };
    }, [isOpen, onPressEscape]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={classNames(cls.overlay)}
                    onClick={closeHandler}
                >
                    <div
                        className={classNames(cls.content)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export { Modal };
