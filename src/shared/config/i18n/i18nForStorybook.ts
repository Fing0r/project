import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';

export const resources = {
    en: { translation: en },
    ru: { translation: ru },
} as const;

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ru',
        lng: 'ru',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        ns: 'ru',
        defaultNS: 'translation',
        lowerCaseLng: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            addPath: '/public/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
