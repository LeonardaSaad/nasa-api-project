import { Header } from "../components/Header";
import { Banner } from "../components/Banner.jsx";
import "../index.css";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("about");

  return (
    <>
      <Header />
      <Banner />
      <div className="text-black">
        <div className="w-full flex items-center py-20 px-40">
          <button
            className={
              topic == "about"
                ? "btn-b-outline btn-b-outline-active"
                : "btn-b-outline"
            }
            onClick={() => setTopic("about")}
          >
            About
          </button>
          <button
            className={
              topic == "technologies"
                ? "btn-b-outline btn-b-outline-active"
                : "btn-b-outline"
            }
            onClick={() => setTopic("technologies")}
          >
            Technologies
          </button>
          <button
            className={
              topic == "contacts"
                ? "btn-b-outline btn-b-outline-active"
                : "btn-b-outline"
            }
            onClick={() => setTopic("contacts")}
          >
            Contacts
          </button>
        </div>
        <div className="w-full h-0.5 mx-40 bg-black"></div>
      </div>
    </>
  );
}

export default App;
