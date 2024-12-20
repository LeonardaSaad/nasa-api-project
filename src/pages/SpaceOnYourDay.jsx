import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SpaceOnYourDay = () => {
  const [dateValue, setDateValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dateValue);
  };

  return (
    <div>
      <Header />
      <div className="flex-1 component-margin flex flex-col gap-16">
        <h2 className="text-black">Space on Your Day</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="fdate" className="text-black text-lg ">
            Choose the data
          </label>
          <input
            type="date"
            className="w-full min-h-10 px-4 text-lg text-black bg-white border-2 rounded-md"
            id="fdate"
            name="fdate"
            onChange={(e) => setDateValue(e)}
          />
          <button type="submit" className="btn-black">
            Search
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SpaceOnYourDay;
