import bannerImg from "../img/banner-bg.png";

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("header");

  return (
    <div className="relative flex items-center justify-center bg-black h-40 min-h-28">
      <img
        className="w-full h-full object-cover"
        src={bannerImg}
        alt={t("banner.alt_img")}
      />
      <span className="absolute text-5xl text-white component-padding">
        {t("banner.title")}
      </span>
    </div>
  );
};

export default Banner;
