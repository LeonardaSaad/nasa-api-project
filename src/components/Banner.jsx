import bannerImg from "../img/banner-bg.png";

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("header");

  return (
    <div className="z-0 relative flex items-center justify-center bg-clB0 h-40 min-h-28">
      {/* Banner background image */}
      <img
        className="w-full h-full object-cover"
        src={bannerImg}
        alt={t("banner.alt_img")}
      />
      {/* Banner welcome message */}
      <span className="absolute text-5xl text-white font-bold component-padding">
        {t("banner.title")}
      </span>
    </div>
  );
};

export default Banner;
