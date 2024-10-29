import { NavLink } from "react-router-dom";
import "../index.css";
import Logo from "../img/nasa-logo.png";

export const Header = () => {
  return (
    <div className="w-screen font-inter px-40 bg-[#000]">
      <div className="flex items-center gap-5 mb-2">
        <img src={Logo} alt="Logo da nasa" className="size-16" />
        <p className="font-bold text-xl font-inter">NASA API Project</p>
      </div>
      <nav className="w-full flex gap-8 py-4">
        <NavLink
          to="/"
          className={({ isActive, isPeding }) =>
            isPeding ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/picture-of-the-day"
          className={({ isActive, isPeding }) =>
            isPeding ? "pending" : isActive ? "active" : ""
          }
        >
          Picture Of The Day
        </NavLink>
         <NavLink
          to="/your-day-picture"
          className={({ isActive, isPeding }) =>
            isPeding ? "pending" : isActive ? "active" : ""
          }
        >
          Your Day Picture
        </NavLink>
     </nav>
    </div>
  );
};
