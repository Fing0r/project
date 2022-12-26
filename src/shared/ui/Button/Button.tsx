import { ButtonHTMLAttributes, memo } from 'react';

import cls from './Button.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export const enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    BACKGROUND_CARD = 'backgroundCard',
}

export const enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

type Align = 'left' | 'center' | 'right';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    max?: boolean;
    border?: boolean;
    disabled?: boolean;
    textAlign?: Align;
}

const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        max,
        border,
        textAlign = 'center',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: theme,
        [cls.square]: square,
        [cls[size]]: size,
        [cls[size]]: size,
        [cls.disabled]: disabled,
        [cls.max]: max,
        [cls.border]: border,
    };

    return (
        <button
            {...otherProps}
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[textAlign]])}
        >
            {children}
        </button>
    );
});

export { Button };
