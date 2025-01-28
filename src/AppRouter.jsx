import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useTranslation } from "react-i18next";

//* Pages
import Home from "./pages/Home.jsx";
import DailySpaceView from "./pages/DailySpaceView.jsx";
import SpaceOnYourDay from "./pages/SpaceOnYourDay.jsx";

const AppRouter = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home changeLanguage={changeLanguage} />,
      }, // Home page: About, Technologies, Creator
      {
        path: "/daily-space-view",
        element: <DailySpaceView changeLanguage={changeLanguage} />,
      }, // Page that return a photo taken today
      {
        path: "/space-on-your-day",
        element: <SpaceOnYourDay changeLanguage={changeLanguage} />,
      }, // Page that returns a photo with accordance with the past date
    ],
    { basename: " /nasa-api-project" }
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
