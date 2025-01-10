import { useTranslation } from "react-i18next";
import logoBraille from "../img/logo-braille.svg";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <div className="bg-clB0 text-gray w-screen component-padding-footer flex flex-col items-center gap-12 md:flex-row md:justify-between">
      <div className="flex gap-6 items-center justify-between md:justify-normal md:gap-4 ">
        {/* Braille logo with name initials. */}
        <div className="flex items-center justify-center w-1/3">
          <img src={logoBraille} alt={t("logo.alt_img")} />
          <p className="footer-logo-name absolute">LS</p>
        </div>
        {/* Navigation bar with the website pages */}
        <div className="flex flex-col gap-2">
          <a href="/" className="footer-nav-link">
            <h4>{t("navigation.home")}</h4>
          </a>
          <a href="/daily-space-view" className="footer-nav-link">
            <h4>{t("navigation.daily_space_view")}</h4>
          </a>
          <a href="space-on-your-day" className="footer-nav-link">
            <h4>{t("navigation.space_on_your_day")}</h4>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 md:flex-col md:items-start md:gap-3">
        {/* NOTE: This code are outdated with the design */}
        {/* TODO: redo all the section*/}
        <h4 className="text-bold">{t("contacts")}</h4>
        <div className="flex gap-2">
          <button className="btn-circle" alt="Github link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </button>
          <button className="btn-circle" alt="LinkedIn link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
              />
            </svg>
          </button>
          <button className="btn-circle" alt="Mail link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
