import { ReactNode, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { ThemeEnum } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) ||
    ThemeEnum.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: ThemeEnum;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;

    const [theme, setTheme] = useState<ThemeEnum>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    document.documentElement.dataset.theme = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };
