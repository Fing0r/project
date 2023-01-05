import {
    ImgHTMLAttributes, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

const AppImage = (props: AppImageProps) => {
    const {
        className,
        alt = 'image',
        src,
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? '';

        image.onload = () => {
            setIsLoading(false);
        };

        image.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            {...otherProps}
            alt={alt}
            src={src}
            className={className}
        />
    );
};

export { AppImage };
