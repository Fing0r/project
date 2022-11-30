import { Menu } from '@headlessui/react';
import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DirectionOptions } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { Icon as IconWrapper } from '../Icon/Icon';

export interface DropdownItem {
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const renderItem = ({
    href, disabled, content, onClick, Icon,
}: DropdownItem, index: number) => {
    const itemContent = (
        <>
            <span className={cls.icon}>
                {Icon && <IconWrapper Svg={Icon} />}
            </span>
            {content}
        </>
    );

    return (
        <Menu.Item as="div" key={index} className={cls.wrapperItem}>
            {({ active }) => (
                href ? (
                    <AppLink
                        to={href}
                        className={classNames(cls.item, { [cls.active]: active })}
                    >
                        {itemContent}
                    </AppLink>
                ) : (
                    <button
                        type="button"
                        onClick={onClick}
                        disabled={disabled}
                        className={classNames(cls.item, { [cls.active]: active })}
                    >
                        {itemContent}
                    </button>
                )
            )}
        </Menu.Item>
    );
};

const directionClasses: Record<DirectionOptions, string> = {
    'top-left': cls.directionTopLeft,
    'top-right': cls.directionTopRight,
    'bottom-left': cls.directionBottomLeft,
    'bottom-right': cls.directionBottomRight,
};

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItem[];
    direction?: DirectionOptions;
}

const Dropdown = (props: DropdownProps) => {
    const {
        className,
        trigger,
        items,
        direction = 'bottom-left',
    } = props;

    const directionClass = [directionClasses[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button className={cls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items as="div" className={classNames(cls.items, {}, directionClass)}>
                {items.map(renderItem)}
            </Menu.Items>
        </Menu>
    );
};

export { Dropdown };
