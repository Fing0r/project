import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';
import { ThemeEnum } from '../../const/theme';
import { ThemeContext } from '../context/ThemeContext';

interface UseThemeResult {
    theme: ThemeEnum;
    toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: ThemeEnum;
        switch (theme) {
        case ThemeEnum.LIGHT:
            newTheme = ThemeEnum.DARK;
            break;
        case ThemeEnum.DARK:
            newTheme = ThemeEnum.GREEN;
            break;
        case ThemeEnum.GREEN:
            newTheme = ThemeEnum.LIGHT;
            break;
        default:
            newTheme = ThemeEnum.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || ThemeEnum.LIGHT,
        toggleTheme,
    };
};

export { useTheme };
