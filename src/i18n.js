import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationEN from "./Translation/en.json";
import TranslationAR from "./Translation/ar.json";

const resources = {
  en: {
    translation: TranslationEN,
  },
  ar: {
    translation: TranslationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: window.localStorage.i18nextLng ?? "ar",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
