import { useEffect } from 'react';
import { Story } from '@storybook/react';
import i18n from 'shared/config/i18n/i18nForStorybook';
import { I18nextProvider } from 'react-i18next';
import { useGlobals } from '@storybook/client-api';

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
