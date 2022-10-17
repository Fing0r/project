import React, {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export const enum InputTheme {
    OUTLINE = 'outline',
}

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends InputHTMLProps {
    className?: string;
    label?: string;
    inputName?: string;
    theme?: InputTheme;
    autofocus?: boolean;
    onChange?: (val: string) => void;
    value?: string;
}

const Input = memo((props:InputProps) => {
    const {
        className,
        label,
        inputName,
        type = 'text',
        theme,
        autofocus,
        value,
        onChange,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setTimeout(() => {
                ref.current.focus();
            }, 100);
        }
    }, [autofocus]);

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods = {
        [cls[theme]]: theme,
    };

    return (
        <label
            htmlFor={inputName}
            className={classNames(cls.label, {}, [className])}
        >
            <input
                {...otherProps}
                className={classNames(cls.input, mods, [className])}
                type={type}
                value={value}
                onChange={onChangeValue}
                name={inputName}
                required
                ref={ref}
            />
            {label && (
                <span
                    className={classNames(cls.labelText, {}, [className])}
                >
                    {label}
                </span>
            )}
        </label>
    );
});

export { Input };
