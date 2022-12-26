import { useGlobals } from '@storybook/client-api';
import { Story } from '@storybook/react';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n/i18nForStorybook';

const I18nDecorator = (StoryComponent: Story) => {
    const [{ locale }] = useGlobals();

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <I18nextProvider i18n={i18n}>
            <StoryComponent />
        </I18nextProvider>
    );
};

export { I18nDecorator };
