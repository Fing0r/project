import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useGuardPercentCSSProperty } from '@/shared/lib/hooks/useGuardPercentCSSProperty';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
}

const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        borderRadius,
    } = props;

    const convertProperty = useGuardPercentCSSProperty;

    const styles: CSSProperties = {
        maxWidth: convertProperty(width),
        height: convertProperty(height),
        borderRadius: convertProperty(borderRadius),
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};

export { Skeleton };
