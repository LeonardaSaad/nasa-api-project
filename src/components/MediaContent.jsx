import PropTypes from "prop-types";
import { MediaHeader } from "./MediaHeader";

export const MediaContent = ({ data, error, loading }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:!margin-0 flex flex-1 flex-col gap-16 xl:items-center">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
            <div className="text-black w-full xl:flex xl:flex-col xl:gap-7">
              {/* Image title */}
              <MediaHeader
                title={data.title}
                copyright={data.copyright}
                date={data.date}
              />
              <div className="flex flex-col gap-8 xl:flex-row">
                {data.media_type === "image" ? (
                  <img
                    src={data.url}
                    alt={data.title}
                    className="h-fit rounded-md xl:w-[40%]"
                  />
                ) : (
                  <iframe width="100%" height="500" src={data.url} allowFullScreen />
                )}
                {/* Image description */}
                <div className="flex flex-col gap-8 text-justify xl:justify-center">
                  {/* Image title */}
                  <MediaHeader
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
          Discover the previous images:{" "}
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
