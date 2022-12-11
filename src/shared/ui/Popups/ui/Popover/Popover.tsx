import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DirectionOptions } from '@/shared/types/ui';
import { directionClasses } from '../../styles/consts';
import popups from '../../styles/Popups.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
    direction?: DirectionOptions;
}

const Popover = memo((props: PopoverProps) => {
    const {
        className,
        trigger,
        direction = 'bottom-left',
        children,
    } = props;

    const directionClass = [directionClasses[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popups.popup])}
        >
            <HPopover.Button className={popups.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, directionClass)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});

export { Popover };
