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
    <div className="h-full">
      <Header />
      <div className="flex-1 component-margin flex flex-col gap-16">
        <h2 className="text-black">Daily Space View</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.menssage}</div>
        ) : (
          <div className="text-black flex flex-col gap-8">
            {/* Image */}
            <img src={data.url} alt={data.title} />
            {/* Description */}
            <div className="text-justify flex flex-col gap-8">
              {/* Title */}
              <h4 className="text-xl text-center">{data.title}</h4>
              {/* Explanation */}
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
