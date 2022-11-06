import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StylesDecorator = (StoryComponent: Story) => (
    <div id="#loki">
        <StoryComponent />
    </div>
);
