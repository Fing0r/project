import { Story } from '@storybook/react';
import { ThemeEnum } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: Story) => {
    document.documentElement.dataset.theme = theme;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};

export { ThemeDecorator };
