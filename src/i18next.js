import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json"
import mm from "./locales/mm/translation.json"
import cn from "./locales/cn/translation.json"

const localLanguage = localStorage.getItem("language");  

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
        en: { translation: en },
        mm: { translation: mm },
        cn: { translation: cn }
      },
      lng: localLanguage || 'en', // Default language
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      }
  });

  export default i18n;