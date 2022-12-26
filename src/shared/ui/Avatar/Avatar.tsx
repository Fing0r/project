import {
    CSSProperties,
    memo,
} from 'react';

import cls from './Avatar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { usePxToRem } from '@/shared/lib/hooks/usePxToRem';

interface AvatarProps {
    className?: string;
    size?: string | number;
    src?: string;
    alt?: string;
}

const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
    } = props;

    const pxToRem = usePxToRem;

    const sizeInRem = `${pxToRem(size)}rem`;

    const styles: CSSProperties = {
        width: sizeInRem,
        height: sizeInRem,
    };

    return (
        <img
            className={classNames(cls.avatar, {}, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
});

export { Avatar };
