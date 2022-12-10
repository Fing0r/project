import { Story } from '@storybook/react';
import { Suspense } from 'react';

const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense fallback="">
        <StoryComponent />
    </Suspense>
);

export { SuspenseDecorator };
