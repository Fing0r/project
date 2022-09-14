import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum} from "./ThemeContext";

interface UseThemeResult {
    theme: ThemeEnum;
    toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}

export {useTheme}
