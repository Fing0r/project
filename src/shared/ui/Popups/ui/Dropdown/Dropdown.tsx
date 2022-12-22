import { Menu } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DirectionOptions } from '@/shared/types/ui';
import { directionClasses } from '../../styles/consts';
import popups from '../../styles/Popups.module.scss';
import cls from './Dropdown.module.scss';
import { Icon as IconWrapper } from '../../../Icon/Icon';

export interface DropdownItemProps {
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const renderItem = ({
    href, disabled, content, onClick, Icon,
}: DropdownItemProps, index: number) => {
    const itemContent = (
        <>
            <span className={cls.icon}>
                {Icon && <IconWrapper Svg={Icon} />}
            </span>
            {content}
        </>
    );

    return (
        <Menu.Item as={Fragment} key={index}>
            {({ active }) => (
                href ? (
                    <Link
                        to={href}
                        className={classNames(cls.item, { [popups.active]: active })}
                    >
                        {itemContent}
                    </Link>
                ) : (
                    <button
                        type="button"
                        onClick={onClick}
                        disabled={disabled}
                        className={classNames(cls.item, { [popups.active]: active })}
                    >
                        {itemContent}
                    </button>
                )
            )}
        </Menu.Item>
    );
};

interface DropdownProps {
    className?: string;
    optionsClass?: string;
    trigger: ReactNode;
    items: DropdownItemProps[];
    direction?: DirectionOptions;
}

const Dropdown = (props: DropdownProps) => {
    const {
        className,
        trigger,
        optionsClass,
        items,
        direction = 'bottom-left',
    } = props;

    const directionClass = [directionClasses[direction]];

    return (
        <Menu
            as="div"
            className={classNames('', {}, [className, popups.popup])}
        >
            <Menu.Button className={popups.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.items, {}, [...directionClass, optionsClass])}
            >
                {items.map(renderItem)}
            </Menu.Items>
        </Menu>
    );
};

export { Dropdown };
