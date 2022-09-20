import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTheme} from "app/provider/ThemeProvider";
import ThemeIcon from "shared/assets/icons/theme.svg"

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <ThemeIcon className={classNames(cls.ThemeSwitcher, {}, [cls[theme], className])}/>
        </Button>
    );
};

export {ThemeSwitcher};
