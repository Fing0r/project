import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <VStack
            gap="16"
            align="center"
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                className={classNames(cls.toggle)}
                data-testid="toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
                type="button"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <nav role="navigation" className={classNames('', {}, [className])}>
                <VStack gap="16">{itemsList}</VStack>
            </nav>
            <HStack
                gap="16"
                justify="center"
                className={classNames(cls.switchers, {}, [className])}
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </HStack>
        </VStack>
    );
});

export { Sidebar };
