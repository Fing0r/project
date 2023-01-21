import { memo } from 'react';

import cls from './Overlay.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface OverlayProps {
    className?: string;
    onClose: () => void;
}

const Overlay = memo((props: OverlayProps) => {
    const { className, onClose } = props;

    return (
        <div
            onClick={onClose}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
});

export { Overlay };
