import {createContext} from "react";

export enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

interface ThemeContextProps {
    theme?: ThemeEnum;
    setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme'
