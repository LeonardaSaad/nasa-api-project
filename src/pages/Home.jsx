import { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css";

/* IMAGES */
import react from "../img/React-svg.svg";
import vite from "../img/vite svg.svg";
import tailwind from "../img/tailwind svg.svg";
import axios from "../img/axios svg.svg";
import github from "../img/github-svg.svg";
import linkedin from "../img/linkedin-svg.svg";
import mail from "../img/mail-svg.svg";

function Home() {
  const { t } = useTranslation('home');

  const [topic, setTopic] = useState("about");

  return (
    <div className="flex start flex-col h-full">
      <Header />
      <Banner />
      <div className="flex-1 text-black component-margin">
        <div className="mb-14">
          
          <div className=" flex flex-wrap items-start pb-3 gap-4 sm:items-center sm:gap-6">
            <button
              className={
                topic == "about"
                  ? "btn-b-outline btn-b-outline-active"
                  : "btn-b-outline"
              }
              onClick={() => setTopic("about")}
            >
              {t("about")}
            </button>
            <button
              className={
                topic == "technologies"
                  ? "btn-b-outline btn-b-outline-active"
                  : "btn-b-outline"
              }
              onClick={() => setTopic("technologies")}
            >
              {t("technologies")}
            </button>
            <button
              className={
                topic == "contacts"
                  ? "btn-b-outline btn-b-outline-active"
                  : "btn-b-outline"
              }
              onClick={() => setTopic("contacts")}
            >
              {t("contacts")}
            </button>
          </div>
          <div className="h-px bg-grayLightest"></div>
        </div>
        <div>
          <h2 className="mb-4">
            {topic == "about"
              ? t("about")
              : topic == "technologies"
                ? t("technologies")
                : t("contacts")}
          </h2>
          <p className="font-bold mb-4">
            {topic == "about"
              ? t("about-subtitle")
              : topic == "technologies"
                ? t("technologies-subtitle")
                : t("contacts-subtitle")}
          </p>
          {topic == "about" ? (
            <div>
              <p>{t("about-description.part1")} </p>
              <br />
              <p>{t("about-description.part2")} </p>
            </div>
          ) : topic == "technologies" ? (
            <div>
              <p className="mb-10">{t("technologies-description")}</p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn-outline">
                  <img src={react} alt="React icon" />
                  React
                </button>
                <button className="btn-outline">
                  <img src={vite} alt="Vite icon" />
                  Vite
                </button>
                <button className="btn-outline">
                  <img src={tailwind} alt="Tailwind icon" />
                  Tailwind
                </button>
                <button className="btn-outline ">
                  <img src={axios} alt="Axios icon" />
                  Axios
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-10">{t("contacts-description")} </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn-outline">
                  <img src={github} alt="Github icon" />
                  Github
                </button>
                <button className="btn-outline">
                  <img src={linkedin} alt="LinkedIn icon" />
                  LinkedIn
                </button>
                <button className="btn-outline">
                  <img src={mail} alt="Email icon" />
                  Email
                </button>
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
