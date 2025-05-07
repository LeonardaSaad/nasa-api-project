import PropTypes from "prop-types";
import { MediaTitle } from "./MediaTitle";
import { useState } from "react";

import cross from "../img/Cross.svg";

export const MediaContent = ({ data, error, loading }) => {
  const [showImgZoom, setShowImgZoom] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className={
          showImgZoom
            ? "xs:p-8 sm:-10 fixed top-0 z-30 flex h-screen w-screen flex-col items-center justify-center gap-5 p-5 md:p-15"
            : "hidden"
        }
      >
        <div className="z-40 flex w-full justify-end">
          <img
            src={cross}
            className="size-6 cursor-pointer opacity-60"
            onClick={() => setShowImgZoom(false)}
          />
        </div>
        <img
          src={data.url}
          alt={data.title}
          className="animation-zoomIn z-40 h-fit w-full rounded-md"
        />
        <div
          className="absolute top-0 z-30 h-screen w-screen cursor-zoom-out bg-black opacity-80"
          onClick={() => setShowImgZoom(false)}
        ></div>
      </div>
      <div className="lg:!margin-0 flex flex-1 flex-col gap-16 xl:items-center">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="w-full text-black xl:flex xl:flex-col xl:gap-7">
            {/* Image title */}
            <MediaTitle
              title={data.title}
              copyright={data.copyright}
              date={data.date}
            />
            <div className="flex flex-col gap-8 xl:flex-row">
              {data.media_type === "image" ? (
                <img
                  src={data.url}
                  alt={data.title}
                  className="h-fit cursor-zoom-in rounded-md hover:scale-101 xl:w-[40%]"
                  onClick={() => setShowImgZoom(true)}
                />
              ) : (
                <iframe
                  width="100%"
                  height="500"
                  src={data.url}
                  allowFullScreen
                />
              )}
              {/* Image description */}
              <div className="flex flex-col gap-8 text-justify xl:justify-center">
                {/* Image title */}
                <MediaTitle
                  title={data.title}
                  copyright={data.copyright}
                  date={data.date}
                  body
                />

                {/* Image explanation */}
                <p>{data.explanation}</p>
              </div>
            </div>
          </div>
        )}
        {/* Archive images link */}
        <p className="font-bold text-black">
          Discover the previous images:
          <a
            href="https://apod.nasa.gov/apod/archivepix.html"
            target="_blank"
            className=""
          >
            <span className="text-black underline underline-offset-2 hover:opacity-60">
              archive
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

MediaContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    copyright: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    explanation: PropTypes.string,
    media_type: PropTypes.string,
  }),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  loading: PropTypes.bool,
};
