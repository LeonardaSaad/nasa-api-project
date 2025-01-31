import { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css";

/* Components */
import Button from "../components/Button.jsx";

/* IMAGES */
import react from "../img/React.svg";
import vite from "../img/vite.svg";
import tailwind from "../img/tailwind.svg";
import axios from "../img/axios.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";
import linkArrow from "../img/link arrow.svg";

function Home() {
  const { t } = useTranslation("home");

  const [topic, setTopic] = useState("about");

  return (
    <div className="flex start flex-col w-screen h-full">
      <Header />
      <Banner />
      <div className="flex-1 text-clB0 component-margin z-0">
        <div className="mb-14">
          <ul className="flex pb-3 gap-4 sm:gap-6">
            <li
              className={`topic-li ${
                topic === "about" ? "topic-li-active" : ""
              }`}
              onClick={() => setTopic("about")}
            >
              {t("about")}
            </li>
            <li
              className={`topic-li ${
                topic === "technologies" ? "topic-li-active" : ""
              }`}
              onClick={() => setTopic("technologies")}
            >
              {t("technologies")}
            </li>
            <li
              className={`topic-li ${
                topic === "creator" ? "topic-li-active" : ""
              }`}
              onClick={() => setTopic("creator")}
            >
              {t("creator")}
            </li>
          </ul>
          <div className="h-px bg-grayLightest"></div>
        </div>
        <div>
          <h2 className="mb-4">
            {topic == "about"
              ? t("about")
              : topic == "technologies"
              ? t("technologies")
              : t("creator")}
          </h2>
          <p className="font-bold mb-4">
            {topic == "about"
              ? t("about-subtitle")
              : topic == "technologies"
              ? t("technologies-subtitle")
              : t("creator-subtitle")}
          </p>
          {topic == "about" ? (
            <div>
              <p>{t("about-description.part1")} </p>
              <br />
              <p>{t("about-description.part2")} </p>
              <br />
              <p>{t("about-description.part3")}</p>
              <br />
              <div className="flex flex-col items-start">
                <a
                  className="min-h-10 hover:border-0"
                  href="https://github.com/LeonardaSaad/project-nasa-api"
                  target="_blank"
                >
                  <span className="text-clB0 font-bold mr-3">GitHub</span>
                  <img
                    className="size-5 -rotate-45"
                    src={linkArrow}
                    alt="Arrow into a orange circle"
                  />
                </a>
                <a
                  className="min-h-10 hover:border-0"
                  href="https://www.figma.com/design/ufIAA3A3F3ApYpAd0BFq73/Nasa-Api-Project?node-id=1-2&t=qoC30mC6noPx77wH-1"
                  target="_blank"
                >
                  <span className="text-clB0 font-bold mr-3">Figma</span>
                  <img
                    className="size-5 -rotate-45"
                    src={linkArrow}
                    alt="Arrow into a orange circle"
                  />
                </a>
              </div>
            </div>
          ) : topic == "technologies" ? (
            <div className="flex flex-col gap-10">
              <p>{t("technologies-description")}</p>
              <div className="flex gap-4 flex-wrap font-inter">
                <div className="flex items-center gap-2 py-2 px-10 border-2 border-primaryBlack">
                  <img className="w-6" src={react} alt="React icon" />
                  <span className="text-clB0">React</span>
                </div>
                <div className="flex items-center gap-2 py-2 px-10 border-2 border-primaryBlack">
                  <img className="w-6" src={vite} alt="Vite icon" />
                  <span className="text-clB0">Vite</span>
                </div>
                <div className="flex items-center gap-2 py-2 px-10 border-2 border-primaryBlack">
                  <img className="w-6" src={tailwind} alt="TailwindCSS icon" />
                  <span className="text-clB0">TailwindCSS</span>
                </div>
                <div className="flex items-center gap-2 py-2 px-10 border-2 border-primaryBlack">
                  <img className="w-6" src={axios} alt="Axios icon" />
                  <span className="text-clB0">Axios</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <p>{t("creator-description")}</p>

              <div className="flex gap-10 flex-wrap">
                <a
                  className="hover:border-0"
                  href="https://github.com/LeonardaSaad"
                  target="_blank"
                >
                  <img
                    className="size-6 mr-0.5"
                    src={github}
                    alt="GitHub logo"
                  />
                  <span className="text-clB0 font-bold mr-3">GitHub</span>
                  <img
                    className="size-5 -rotate-45"
                    src={linkArrow}
                    alt="Arrow into a orange circle"
                  />
                </a>
                <a
                  className="hover:border-0"
                  href="https://www.linkedin.com/in/leonarda-saad/"
                  target="_blank"
                >
                  <img
                    className="size-6 mr-0.5"
                    src={linkedin}
                    alt="LinkedIn logo"
                  />
                  <span className="text-clB0 font-bold mr-3">LinkedIn</span>
                  <img
                    className="size-5 -rotate-45"
                    src={linkArrow}
                    alt="Arrow into a orange circle"
                  />
                </a>
                <a
                  className="hover:border-0"
                  href="mailto:saad.leonarda@gmail.com"
                  target="_blank"
                >
                  <img className="size-6 mr-0.5" src={mail} alt="Mail icon" />
                  <span className="text-clB0 font-bold mr-3">Email</span>
                  <img
                    className="size-5 -rotate-45"
                    src={linkArrow}
                    alt="Arrow into a orange circle"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
