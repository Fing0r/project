import { ChangeEvent, memo, useMemo } from 'react';

import cls from './Select.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export interface SelectOption<T extends string> {
    value: T;
    text: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options: SelectOption<T>[];
    onChange?: (value: T) => void;
    value?: T;
    disabled?: boolean;
    selectName?: string;
}

const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, onChange, value, disabled, selectName } =
        props;

    const optionsItems = useMemo(
        () =>
            options.map(({ value, text }) => (
                <option value={value} key={value}>
                    {text}
                </option>
            )),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
            {label && <span className={cls.labelText}>{label}</span>}
        </label>
    );
};

const MemoSelect = memo(Select) as typeof Select;

export { MemoSelect as Select };
