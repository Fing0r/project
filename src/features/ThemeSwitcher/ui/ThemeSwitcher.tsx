import { memo } from 'react';

import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <ThemeIcon
                className={classNames(cls.ThemeSwitcher, {}, [
                    cls[theme],
                    className,
                ])}
            />
        </Button>
    );
});

export { ThemeSwitcher };
