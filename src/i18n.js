import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// EN
import headerEn from "./locales/en/components/header.json";
import footerEn from "./locales/en/components/footer.json";
import homeEn from "./locales/en/pages/home.json";
import dateFormatEn from "./locales/en/components/date_format.json"

// PT
import headerPt from "./locales/pt/components/header.json";
import footerPt from "./locales/pt/components/footer.json";
import homePt from "./locales/pt/pages/home.json";
import dateFormatPt from "./locales/pt/components/date_format.json"

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en", // Default language
    ns: ["header", "footer", "home", "dateFormat"],
    defaultNS: "header",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { header: headerEn, footer: footerEn, home: homeEn, dateFormat: dateFormatEn },
      pt: { header: headerPt, footer: footerPt, home: homePt, dateFormat: dateFormatPt },
    },
  });

export default i18n;
