import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);

export { RouterDecorator };
