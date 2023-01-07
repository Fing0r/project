// eslint-disable-next-line check-paths-for-fsd-methodology/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StylesDecorator = (StoryComponent: Story) => (
    <div style={{ padding: '1rem' }}>
        <StoryComponent />
    </div>
);
