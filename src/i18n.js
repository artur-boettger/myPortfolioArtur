import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importe seus arquivos de tradução
import { data as dataEN } from './locale/en/translation';
import { data as dataPT } from './locale/pt/translation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: dataEN
      },
      pt: {
        translation: dataPT
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;