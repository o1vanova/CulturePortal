import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import lang from './constants/languages';

i18n
  .use(Backend)
  .use(Cache)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: lang.EN,
    whitelist: [lang.EN, lang.BE, lang.RU],

    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  })
  .then((t): void => {
    t(lang.EN);
  });

export default i18n;
