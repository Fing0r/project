import { createContext } from 'react';
import { ThemeEnum } from '@/shared/const/theme';

interface ThemeContextProps {
    theme?: ThemeEnum;
    setTheme?: (theme: ThemeEnum) => void;
}

const ThemeContext = createContext<ThemeContextProps>({});

export { ThemeContext };
