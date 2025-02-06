import { useTranslation } from "react-i18next";
import logoBraille from "../img/logo-braille.svg";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <div className="bg-cl-b0 w-screen component-padding-footer flex flex-col items-center gap-7 justify-between md:gap-10 lg:flex-row lg:gap-20">
      
      <div className="flex flex-wrap gap-6 items-center justify-between lg:flex-nowrap lg:justify-normal">
        {/* ANCHOR Braille logo with name initials. */}
        <div className="flex items-center justify-center max-w-32 ">
          <img src={logoBraille} alt={t("logo.alt_img")} className="min-w-20" />
          <p className="footer-logo-name absolute">LS</p>
        </div>

        {/* Navigation bar with the website pages */}
        <div className="flex flex-col gap-2 text-nowrap">
          <a href="/nasa-api-project/">
            <span className="!text-sm">{t("navigation.home")}</span>
          </a>
          <a href="/nasa-api-project/daily-space-view">
            <span className="!text-sm">{t("navigation.daily_space_view")}</span>
          </a>
          <a href="/nasa-api-project/space-on-your-day">
            <span className="!text-sm">{t("navigation.space_on_your_day")}</span>
          </a>
        </div>
      </div>

      {/* ANCHOR  Contacts and Credits*/}
      <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row lg:flex-col lg:items-start lg:w-fit">
        {/* NOTE: This code are outdated with the design */}
        {/* TODO: redo all the section*/}
        <div className="flex gap-3 items-center">
          <h4 className="text-gray font-bold">{t("contacts")}</h4>
          <div className="flex gap-2">
            <a
              href="https://github.com/LeonardaSaad/nasa-api-project"
              target="_blank"
              className="bg-gray-dark !min-h-2.5 !min-w-2.5 rounded-full !p-1 flex justify-center items-center "
            >
              <svg
                className="size-6"
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
            </a>
            <a
              href="https://www.linkedin.com/in/leonarda-saad/"
              target="_blank"
              className="bg-gray-dark !min-h-2.5 !min-w-2.5 rounded-full !p-1 flex justify-center items-center"
            >
              <svg
                className="size-6"
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
            </a>
            <a
              href="mailto:saad.leonarda@gmail.com"
              target="_blank"
              className="bg-gray-dark !min-h-2.5 !min-w-2.5 rounded-full !p-1 flex justify-center items-center"
            >
              <svg
                className="size-6"
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
            </a>
          </div>
        </div>
        <p className="font-inter !text-sm">
          by <span className="font-bold !text-sm">LEONARDA SAAD</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
