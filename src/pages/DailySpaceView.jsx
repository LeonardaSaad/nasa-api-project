import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

// Hook
import useFetchAPI from "../hooks/useFetchAPI";
import { MediaContent } from "../components/MediaContent";

const DailySpaceView = () => {
  const env = import.meta.env;
  const url = `${env.VITE_API_URL_APOD}?api_key=${env.VITE_API_KEY}`;
  const { data, error, loading } = useFetchAPI(url);

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
          <MediaContent data={data} error={error} loading={loading} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DailySpaceView;
