import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

// Hook
import useFetchAPI from "../hooks/useFetchAPI";

const DailySpaceView = () => {
  const env = import.meta.env;
  const url = `${env.VITE_API_URL_APOD}?api_key=${env.VITE_API_KEY}`;
  const { data, error, loading } = useFetchAPI(url);

  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="component-margin flex flex-1 flex-col gap-16">
        <h2 className="text-cl-b0">Daily Space View</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="text-cl-b0 flex flex-col gap-8">
            {/* Day image by API. */}
            <img src={data.url} alt={data.title} />
            {/* Image description */}
            <div className="flex flex-col gap-8 text-justify">
              {/* Image title */}
              <h4 className="text-center text-xl">{data.title}</h4>
              {/* Image explanation */}
              <p>{data.explanation}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DailySpaceView;
