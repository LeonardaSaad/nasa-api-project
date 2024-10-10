import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./pages/App.jsx";
import { PictureOfTheDay } from "./pages/PictureOfTheDay.jsx";
import { YourDayPicture } from "./pages/YourDayPicture.jsx";
   
const router = createBrowserRouter([
  { path: "/", element: <App /> }, 
  {path: "/picture-of-the-day", element: <PictureOfTheDay />},
  { path: "/your-day-picture", element: <YourDayPicture />}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
