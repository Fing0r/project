import { Additional, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export const enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export const enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    wrapper?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        wrapper,
        className,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const additional: Additional = [
        cls[theme],
        cls[align],
        cls[size],
        className,
    ];

    return (
        <div
            className={classNames('', {}, additional)}
        >
            {title && (
                <h2
                    className={classNames(cls.Title, {}, [])}
                >
                    {title}
                </h2>
            )}
            {text && (
                <p className={classNames(cls.Text, {}, [])}>
                    {text}
                </p>
            )}
            {wrapper && (
                <span className={classNames(cls.Wrapper, {}, [])}>
                    {wrapper}
                </span>
            )}
        </div>
    );
});

export { Text };
