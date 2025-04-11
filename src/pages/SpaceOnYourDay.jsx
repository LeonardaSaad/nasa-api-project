import { useEffect, useState } from "react";
import { format } from "date-fns";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Components
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";

// Hooks
import useFetchAPI from "../hooks/useFetchAPI";
import { useTranslation } from "react-i18next";
import { MediaContent } from "../components/MediaContent";

const { VITE_API_URL_APOD, VITE_API_KEY } = import.meta.env;

const SpaceOnYourDay = () => {
  const { t } = useTranslation("dateFormat");

  const [selectedDate, setSelectedDate] = useState("");
  const [url, setUrl] = useState("");

  const { data, error, loading } = useFetchAPI(url);

  /**
   * The handleClick function formats a selected date and sets a URL with the formatted date for an API
   * request.
   * @returns The `handleClick` function is being returned.
   */
  const handleClick = () => {
    if (!selectedDate) return;
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    setUrl(
      `${VITE_API_URL_APOD}?api_key=${VITE_API_KEY}&date=${formattedDate}`,
    );
  };

  const handleChangeRaw = (date) => {
    if (!date || date.length != 8) return;

    const day = date.substring(0, 2);
    const month = date.substring(2, 4) - 1;
    const year = date.substring(4, 8);

    const newDate = new Date(year, month, day);
    newDate.toLocaleDateString("pt-BR"); // 04/12/2003
    newDate.toISOString().slice(0, 10); // 2003-12-04 (UTC)

    setSelectedDate(newDate);
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div className="flex h-full flex-col">
      <Header />

      <div className="body-padding flex flex-1 flex-col gap-10 text-black">
        <h2 className="text-cl-b0">Space on Your Day</h2>
        <div className="flex flex-col gap-5">
          <label className="text-black">Pick a date:</label>
          <div className="flex flex-col">
            <DatePicker
              className="font-inter mb-2.5 w-full rounded border-1 border-black text-black"
              placeholderText={t("date")}
              dateFormat="dd/MM/yyyy"
              selected={selectedDate}
              onChangeRaw={(event) => {
                handleChangeRaw(event.target.value);
              }}
              onChange={(date) => setSelectedDate(date)}
              maxDate={new Date()}
              showIcon // *NOTE - I will use this?
              showYearDropdown
              showMonthDropdown
            />
            <Button
              type="black"
              content="Search"
              onClick={handleClick}
            ></Button>
          </div>
        </div>

        {data ? (
          <MediaContent data={data} error={error} loading={loading} />
        ) : (
          <div></div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SpaceOnYourDay;
