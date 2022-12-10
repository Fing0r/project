import { Fragment, memo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import Chevron from 'shared/assets/icons/chevron-up-down.svg';
import { useFloating, flip } from '@floating-ui/react-dom';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import popups from '../../styles/Popups.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxOption<T extends string> {
    value: T;
    text: string;
    unavailable?: boolean
}

export interface ListBoxProps<T extends string> {
    className?: string;
    label?: string;
    options: ListBoxOption<T>[];
    onChange: (value: T) => void;
    value?: T;
    disabled?: boolean
    name?: string;
}

const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        label,
        className,
        options,
        onChange,
        value,
        disabled,
        name,
    } = props;

    const { y, reference, floating } = useFloating({
        middleware: [flip()],
    });

    const positionVertical = (y && (y + (y > 0 ? 10 : -10))) ?? 0;

    return (
        <HListBox
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={name}
        >
            {({ open }) => (
                <div className={classNames(cls.ListBox, {}, [className, popups.popup])}>
                    {label && (
                        <HListBox.Label
                            className={classNames(cls.label, {
                                [cls.labelWhenNotDisabled]: !disabled,
                                [cls.labelWithValue]: value,
                                [cls.labelWhenOpen]: open,
                            })}
                            htmlFor={name}
                        >
                            {label}
                        </HListBox.Label>
                    )}
                    <HListBox.Button as="div" ref={reference} className={cls.buttonWrapper}>
                        <Button
                            type="button"
                            max
                            theme={ButtonTheme.OUTLINE}
                            textAlign="left"
                            className={classNames(cls.button, {
                                [cls.btnWhenOpen]: open,
                            })}
                            disabled={disabled}
                            border
                        >
                            {value ?? ''}
                            <Icon Svg={Chevron} className={cls.chevron} />
                        </Button>
                    </HListBox.Button>
                    <HListBox.Options
                        className={cls.options}
                        ref={floating}
                        style={{
                            top: positionVertical,
                        }}
                    >
                        {options.map((option) => (
                            <HListBox.Option
                                key={option.value}
                                value={option.value}
                                disabled={option.unavailable}
                                as={Fragment}
                            >
                                {({ active, selected, disabled }) => (
                                    <li
                                        className={classNames(cls.option, {
                                            [popups.selected]: selected,
                                            [popups.active]: active,
                                            [cls.disabled]: disabled,
                                        }, [])}
                                    >
                                        {option.text}
                                    </li>
                                )}
                            </HListBox.Option>
                        ))}
                    </HListBox.Options>
                </div>
            )}
        </HListBox>
    );
};

const MemoListBox = memo(ListBox) as typeof ListBox;

export { MemoListBox as ListBox };
