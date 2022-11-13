import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const StylesDecorator = (StoryComponent: Story) => (
    <div id="#loki">
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </div>
);
