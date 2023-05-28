import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',

        // have a common namespace used around the full app
        //TODO: что это
        // ns: ['translationsNS'],
        // defaultNS: 'translationsNS',

        //debug: true,

        // interpolation: {
        //     escapeValue: false, // not needed for react!!
        // },

        resources: {
            en: {},
            de: {}
        }
    });

export {i18n as i18nTestConfig};
