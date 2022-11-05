import {
    ChangeEvent,
    memo,
    useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    value: string | number;
    text: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options: SelectOption[];
    onChange?: (value: string) => void;
    value?: string;
    disabled?: boolean
    selectName?: string;
}

const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        disabled,
        selectName,
    } = props;

    const optionsItems = useMemo(() => options.map(({ value, text }) => (
        <option value={value} key={value}>{text}</option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <label
            className={classNames(cls.label, {}, [className])}
            htmlFor={selectName}
        >
            <select
                onChange={onChangeHandler}
                className={cls.select}
                name={selectName}
                value={value}
                disabled={disabled}
            >
                {optionsItems}
            </select>
            {label && (
                <span className={cls.labelText}>
                    {label}
                </span>
            )}
        </label>
    );
});

export { Select };