// React
import { NavLink } from "react-router-dom";
import { useState } from "react";

// i18next Translation
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

import "../index.css";

// icons
import menu from "../img/hamburger menu.png";
import cross from "../img/Cross.svg";
import Logo from "../img/nasa-logo.png";
import explore from "../img/circle-arrow.svg";

// Components
import Button from "../components/Button";

const Header = () => {
  // Call the translation
  const lang = i18next.language;
  const { t } = useTranslation("header");

  const [handleMenu, setHandleMenu] = useState(false);

  return (
    <div className="w-screen">
      <div className="bg-cl-b0 flex justify-between component-padding z-20 relative">
        {/* ANCHOR Mobile navigation menu */}
        <div className="flex items-center justify-center min-w-[30px] cursor-pointer transition-all transform md:hidden ">
          {!handleMenu ? (
            // When closed
            <img
              onClick={() => setHandleMenu(!handleMenu)}
              src={menu}
              alt={t("icon_navigation.alt_text")}
              className={`w-6 transition-opacity duration-300 transform md:hidden ${
                handleMenu ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            />
          ) : (
            // When opened
            <img
              onClick={() => setHandleMenu(!handleMenu)}
              src={cross}
              alt={t("icon_navigation.alt_text")}
              className={`size-5 transition-all duration-300 transform md:hidden ${
                !handleMenu ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            />
          )}
        </div>

        {/* ANCHOR Expanded navigation menu */}
        <div className="cursor-pointer transition-all transform hidden md:block">
          {!handleMenu ? (
            // When closed
            <Button
              type="no-border"
              inverted
              img={explore}
              imgAlt=""
              imgStyle="rotate-180"
              content="Explore"
              onClick={() => setHandleMenu(!handleMenu)}
            />
          ) : (
            // When opened
            <Button
              type="no-border"
              inverted
              img={explore}
              imgAlt=""
              content="Explore"
              onClick={() => setHandleMenu(!handleMenu)}
            />
          )}
        </div>

        {/* ANCHOR Nasa logo */}

        <a href="/nasa-api-project/" className="!h-11 !w-auto !inline-block">
          <img
            src={Logo}
            alt={t("logo.alt_text")}
            className="!w-auto !h-full !object-contain"
          />
        </a>

        {/* ANCHOR Button to change language */}
        <div className="flex items-center">
          {lang == "pt" ? (
            <Button
              type="no-border"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png"
              imgAlt="Brazil flag"
              onClick={() => changeLanguage("en")}
            />
          ) : (
            <Button
              type="no-border"
              img="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
              imgAlt="United State of America flag"
              onClick={() => changeLanguage("pt")}
            />
          )}
        </div>
      </div>

      {/* ANCHOR Nav menu */}
      <div
        className={`absolute z-10 mobile-nav w-screen transition-all duration-300 transform ${
          handleMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <nav
          className={`flex flex-col gap-4 py-2 px-4 bg-cl-b0 component-padding items-start`}
        >
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending a-hover"
                : isActive
                ? "active a-hover"
                : "a-hover"
            }
          >
            {t("navigation.home")}
          </NavLink>
          <NavLink
            to="/daily-space-view"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending a-hover"
                : isActive
                ? "active a-hover"
                : "a-hover"
            }
          >
            {t("navigation.daily_space_view")}
          </NavLink>
          <NavLink
            to="/space-on-your-day"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending a-hover"
                : isActive
                ? "active a-hover"
                : "a-hover"
            }
          >
            {t("navigation.space_on_your_day")}
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
