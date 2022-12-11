import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import cls from './Tabs.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { Text, TextAlign } from '../Text/Text';

export interface TabItem<T extends string> {
    text: string;
    value: T;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    currentValue: T;
    onClickTab: (value: T) => void;
}

const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        currentValue,
        onClickTab,
    } = props;

    const onClick = useCallback((val: T) => () => {
        onClickTab(val);
    }, [onClickTab]);

    return (
        <HStack
            gap="16"
            align="start"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map(({ text, value }) => (
                <Button
                    className={cls.tabBtn}
                    key={value}
                    onClick={onClick(value)}
                    theme={value === currentValue ? ButtonTheme.OUTLINE : ButtonTheme.BACKGROUND_CARD}
                >
                    <Text align={TextAlign.CENTER} wrapper={text} />
                </Button>
            ))}
        </HStack>
    );
};
const MemoTabs = memo(Tabs) as typeof Tabs;
export { MemoTabs as Tabs };
