import { Story } from '@storybook/react';
import { ThemeEnum } from 'app/provider/ThemeProvider/lib/ThemeContext';

const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);

export { ThemeDecorator };
