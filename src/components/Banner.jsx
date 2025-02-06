import bannerImg from "../img/banner-bg.png";

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("header");

  return (
    <div
      className="h-40 relative bg-no-repeat bg-center border-0 lg:bg-cover" 
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="backdrop-blur-[2px] flex items-center justify-center w-full h-full">
        <span className="absolute span-title-size text-white font-bold block">
          {t("banner.title")}
        </span>
      </div>
    </div>
  );
};

export default Banner;
