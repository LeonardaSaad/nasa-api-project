/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SpaceOnYourDay = () => {
  // const [selectedDate, setSelectedDate] = useState("Pick a date");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(selectedDate);
  // };

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="body-padding flex flex-1 flex-col gap-16">
        <h2 className="text-cl-b0">Space on Your Day</h2>

        <div className="relative max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            datepicker="true"
            id="default-datepicker"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Select date"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpaceOnYourDay;
