// eslint-disable-next-line check-paths-for-fsd-methodology/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const StylesDecorator = (StoryComponent: Story) => (
    <div id="#loki" style={{ padding: '1rem' }}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </div>
);
