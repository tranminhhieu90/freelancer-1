import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import jp from './jp.json';

i18n.use(initReactI18next).init({
  // lng: 'en',
  fallbackLng: localStorage.getItem('lang') || 'en',
  resources: {
    en: {
      translation: en,
    },
    jp: {
      translation: jp,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
