import {
    CSSProperties,
    memo,
} from 'react';

import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

import UserIcon from '@/shared/assets/icons/user-filled.svg';
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

    const fallback = <Skeleton width={size} height={size} borderRadius={50} />;
    const errorFallback = <Icon Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.avatar, {}, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
});

export { Avatar };
