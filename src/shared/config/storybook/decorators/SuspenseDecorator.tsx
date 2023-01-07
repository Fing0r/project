import { Story } from '@storybook/react';
import { Suspense } from 'react';

const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);

export { SuspenseDecorator };
