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
        <div className="">
          <button onClick={setTopic("about")}>About</button>
        </div>
      </div>
    </>
  );
}

export default App;
