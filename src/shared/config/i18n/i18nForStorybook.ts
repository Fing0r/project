import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        lng: 'ru',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        defaultNS: 'translation',
        lowerCaseLng: true,
        backend: {
            // loadPath: '/locales/{{lng}}/{{ns}}.json',
            addPath: '/public/locales/{{lng}}/{{ns}}.json',
            loadPath: (asd) => {
                const { host } = window.location;
                console.log(asd);
                console.log('----------');
                console.log({ host });
                console.log('----------');
                return '/locales/{{lng}}/{{ns}}.json';
            },
        },
        preload: ['ru', 'en'],
        load: 'currentOnly',
    });

export default i18n;
