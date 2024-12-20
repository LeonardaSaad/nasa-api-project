import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//* import i18n (needs to be bundled ;) )
import "./i18n.js";

import AppRouter from "./AppRouter.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
