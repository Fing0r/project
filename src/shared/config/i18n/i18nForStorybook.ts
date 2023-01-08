import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => {
        return import(`./locales/${language}/${namespace}.json`);
    }))
    .init({
        // resources,
        fallbackLng: 'ru',
        lng: 'ru',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        defaultNS: 'translation',
        lowerCaseLng: true,
        // backend: {
        //     loadPath: '/locales/{{lng}}/{{ns}}.json',
        //     addPath: '/public/locales/{{lng}}/{{ns}}.json',
        // },
        preload: ['ru', 'en'],
        load: 'currentOnly',
    });

export default i18n;
