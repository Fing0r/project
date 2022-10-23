import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </BrowserRouter>
);

export { RouterDecorator };
