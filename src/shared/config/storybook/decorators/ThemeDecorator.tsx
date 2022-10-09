import { Story } from '@storybook/react';
import { ThemeEnum } from 'app/provider/ThemeProvider/lib/ThemeContext';

const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: Story) => {
    document.documentElement.dataset.theme = theme;

    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};

export { ThemeDecorator };
