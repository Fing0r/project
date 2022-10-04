import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export const enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            {...otherProps}
            type="button"
            className={classNames(cls.Button, {}, [cls[theme], className])}
        >
            {children}
        </button>
    );
};

export { Button };
