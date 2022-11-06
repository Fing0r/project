import { createContext } from 'react';

enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light',
    GREEN = 'green',
}

interface ThemeContextProps {
    theme?: ThemeEnum;
    setTheme?: (theme: ThemeEnum) => void;
}

const ThemeContext = createContext<ThemeContextProps>({});

const LOCAL_STORAGE_THEME_KEY = 'theme';

export { ThemeEnum, ThemeContext, LOCAL_STORAGE_THEME_KEY };
