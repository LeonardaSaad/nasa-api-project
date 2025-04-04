import bannerImg from "../img/banner-bg.png";

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("header");

  return (
    <div
      className="relative h-40 border-0 bg-center bg-no-repeat lg:bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="flex h-full w-full items-center justify-center backdrop-blur-[2px]">
        <span className="span-title-size absolute block font-bold text-white">
          {t("banner.title")}
        </span>
      </div>
    </div>
  );
};

export default Banner;
