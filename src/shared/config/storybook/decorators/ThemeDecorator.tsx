import { Story } from '@storybook/react';

// eslint-disable-next-line check-paths-for-fsd-methodology/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ThemeEnum } from '@/shared/const/theme';

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
