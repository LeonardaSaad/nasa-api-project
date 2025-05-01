import { useState } from "react";
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

// Icons
import arrow from "../img/icon-right_arrow.svg";

import range from "lodash.range";
import Select from "react-select";

const { VITE_API_URL_APOD, VITE_API_KEY } = import.meta.env;

const SpaceOnYourDay = () => {
  const { t } = useTranslation(["soyd", "dateFormat"]);

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

  const getMonth = (date) => date.getMonth();
  const getYear = (date) => date.getFullYear();
  const years = range(1995, getYear(new Date()) + 1, 1);

  const monthOptions = t("months", {
    returnObjects: true,
    ns: "dateFormat",
  });
  const yearOptions = years.map((year) => ({ value: year, label: year }));

  return (
    <div className="flex h-full flex-col">
      <Header />

      <div className="body-padding flex flex-1 flex-col gap-10 text-black">
        <h2 className="text-cl-b0">{t("title", { ns: "soyd" })}</h2>
        <div className="flex flex-col gap-5">
          <label className="text-black">
            {t("content.label", { ns: "soyd" })}
          </label>
          <div className="flex flex-col">
            <DatePicker
              className="font-inter mb-2.5 w-full rounded border-1 border-black text-black"
              placeholderText={t("date", { ns: "dateFormat" })}
              dateFormat="dd/MM/yyyy"
              selected={selectedDate}
              onChangeRaw={(event) => {
                handleChangeRaw(event.target.value);
              }}
              onChange={(date) => setSelectedDate(date)}
              maxDate={new Date()}
              minDate={new Date(1995, 6, 16)}
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  className="m-2.5 flex flex-col justify-center gap-2"
                  style={{
                    margin: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="flex flex-row justify-between">
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      className="font-bold opacity-40"
                    >
                      <img src={arrow} className="rotate-y-180" />
                    </button>

                    <p className="font-bold">
                      {
                        (
                          t("months", {
                            returnObjects: true,
                            ns: "dateFormat",
                          }) || []
                        ).find((o) => o.value === getMonth(date))?.label
                      }{" "}
                      {date.getFullYear()}
                    </p>

                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      className="font-bold opacity-40"
                    >
                      <img src={arrow} />
                    </button>
                  </div>

                  <div className="flex flex-row justify-around">
                    <Select
                      options={yearOptions}
                      defaultValue={yearOptions.find(
                        (o) => o.value === getYear(date),
                      )}
                      onChange={(selected) => changeYear(selected.value)}
                      maxMenuHeight={160}
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: 30,
                        }),
                      }}
                    />

                    <Select
                      options={monthOptions}
                      defaultValue={t("months", {
                        returnObjects: true,
                        ns: "dateFormat",
                      }).find((o) => o.value === getMonth(date))}
                      onChange={(selected) => {
                        changeMonth(selected.value);
                      }}
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                          width: 100,
                        }),
                      }}
                    />
                  </div>
                </div>
              )}
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
