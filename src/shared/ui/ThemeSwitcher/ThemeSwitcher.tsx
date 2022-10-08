import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/provider/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <ThemeIcon
                className={
                    classNames(
                        cls.ThemeSwitcher,
                        {},
                        [cls[theme], className],
                    )
                }
            />
        </Button>
    );
};

export { ThemeSwitcher };
