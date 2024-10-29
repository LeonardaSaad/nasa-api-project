import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./pages/App.jsx";
import { PictureOfTheDay } from "./pages/PictureOfTheDay.jsx";
import { YourDayPicture } from "./pages/YourDayPicture.jsx";
   
const router = createBrowserRouter([
  { path: "/", element: <App /> }, // Home page: About, Technologies, Creator 
  { path: "/picture-of-the-day", element: <PictureOfTheDay /> },  // Page that return a photo taken today 
  { path: "/your-day-picture", element: <YourDayPicture /> }  // Page that returns a photo with accordance with the past date
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
