import {
    useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    animationDelay: number;
    onClose: () => void;
    isOpen: boolean;
}

export const useModal = ({ animationDelay, onClose, isOpen }: UseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onPressEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            window.addEventListener('keydown', onPressEscape);
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, 100);
        }

        return () => {
            setIsOpening(false);
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onPressEscape);
        };
    }, [isOpen, onPressEscape]);

    return {
        isClosing,
        isOpening,
        isMounted,
        close,
    };
};
