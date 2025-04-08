import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

// Hook
import useFetchAPI from "../hooks/useFetchAPI";

const DailySpaceView = () => {
  const env = import.meta.env;
  const url = `${env.VITE_API_URL_APOD}?api_key=${env.VITE_API_KEY}`;
  const { data, error, loading } = useFetchAPI(url);

  console.log(data);

  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="body-padding lg:!margin-0 flex flex-1 flex-col gap-16">
        <h2 className="text-cl-b0">Daily Space View</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="text-cl-b0 flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Day image by API. */}
            <img
              src={data.url}
              alt={data.title}
              className="h-fit rounded-md lg:w-[40%]"
            />
            {/* Image description */}
            <div className="flex flex-col gap-8 text-justify lg:justify-center">
              {/* Image title */}
              <div className="">
                <h4 className="text-center !text-lg">{data.title}</h4>
                <p className="text-font-gray !text-center !text-sm">
                  {data.copyright} • {data.date}
                </p>
              </div>
              {/* Image explanation */}
              <p>{data.explanation}</p>

              {/* Archive images link */}
              <p className="font-bold">
                Discover the previous images:{" "}
                <a
                  href="https://apod.nasa.gov/apod/archivepix.html"
                  target="_blank"
                  className="font-black"
                >
                  <span className="text-black underline underline-offset-2 hover:opacity-60">
                    archive
                  </span>
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DailySpaceView;
