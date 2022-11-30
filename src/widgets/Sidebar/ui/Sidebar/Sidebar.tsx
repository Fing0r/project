import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { HStack, VStack } from 'shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const itemsList = useMemo(() => (sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    ))), [collapsed, sidebarItemsList]);

    return (
        <VStack
            gap="16"
            align="center"
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
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
                <VStack gap="16">
                    {itemsList}
                </VStack>
            </nav>
            <HStack gap="16" justify="center" className={classNames(cls.switchers, {}, [className])}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </HStack>
        </VStack>
    );
});

export { Sidebar };
