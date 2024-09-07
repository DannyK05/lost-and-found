import { useState } from "react";
import ProfileIcon from "../assets/icons/ProfileIcon";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "../assets/icons/MenuIcon";
import CloseXIcon from "../assets/icons/CloseXIcon";
import { removeFromLocalStorage } from "../utilities/storage";
import {
  LOST_AND_FOUND_TOKEN,
  LOST_AND_FOUND_USER,
} from "../utilities/constant";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleLogout = () => {
    removeFromLocalStorage(LOST_AND_FOUND_TOKEN);
    removeFromLocalStorage(LOST_AND_FOUND_USER);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <main className="w-full h-[100vh]">
      <nav className="z-[1000] flex items-center fixed w-full bg-[#010066] pt-4 pb-6 px-4 justify-between md:justify-between lg:justify-between">
        <h1 className="text-2xl w-1/4 text-white font-bold">
          Lost<span className="text-lost-accent-light">&</span>Found Hub
        </h1>
        <hr className=" hidden lg:block border-lost-accent-light border-[1px] absolute  z-[10000] top-11 left-[20%] w-[15%]" />
        <ul
          className={`${
            isVisible ? "" : "hidden"
          } px-6 py-4 z-10  md:pl-4 md:flex border-lost-accent-light border-[1px] lg:flex flex lg:space-x-12 md:space-x-8 flex-col absolute h-[100vh] md:h-auto lg:h-auto md:w-2/5 lg:w-2/5 lg:flex-row md:flex-row md:static lg:static md:rounded-lg lg:rounded-lg md:shadow-lg lg:shadow-lg bg-lost-blue top-10 right-0 space-y-10 md:space-y-0 lg:space-y-0 text-white md:items-center lg:items-center  md:text-sm`}
        >
          <span
            onClick={toggleVisibility}
            className="md:hidden lg:hidden cursor-pointer flex items-center justify-center text-white"
          >
            <CloseXIcon />
          </span>

          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              `${isActive ? "text-lost-accent-light active-nav" : ""}`
            }
          >
            <li className="active:text-lost-accent-light lg:hover:text-lost-accent-light">
              Home
            </li>
          </NavLink>
          <NavLink
            to={"/lost-items"}
            className={({ isActive }) =>
              `${isActive ? "text-lost-accent-light active-nav" : ""}`
            }
          >
            <li className="active:text-lost-accent-light lg:hover:text-lost-accent-light">
              Lost Items
            </li>
          </NavLink>
          <NavLink
            to={"/view-items"}
            className={({ isActive }) =>
              `${isActive ? "text-lost-accent-light active-nav" : ""}`
            }
          >
            <li className="active:text-lost-accent-light lg:hover:text-lost-accent-light">
              Found Items
            </li>
          </NavLink>
          <NavLink
            to={"/about-us"}
            className={({ isActive }) =>
              `${isActive ? "text-lost-accent-light active-nav" : ""}`
            }
          >
            <li className="active:text-lost-accent-light lg:hover:text-lost-accent-light">
              About Us
            </li>
          </NavLink>
          {/* The profile box in mobile */}
          <div className="md:hidden space-y-2 flex-col lg:hidden flex items-center text-white active:text-lost-accent-light active:fill-lost-accent-light lg:hover:text-lost-accent-light lg:hover:fill-lost-accent-light space-x-2">
            <span className="cursor-pointer  fill-white">
              <ProfileIcon />{" "}
            </span>
            <p>Shawn Carter</p>
            <span
              onClick={handleLogout}
              className="text-lost-accent-light cursor-pointer active:underline"
            >
              Log out
            </span>
          </div>
        </ul>
        <div className=" hidden flex  items-center md:w-1/5 lg:w-1/5 md:flex-row lg:flex-row md:flex lg:flex  lg:space-x-4 md:space-x-2">
          <div className=" md:flex lg:flex items-center text-white hover:text-lost-accent-light hover:fill-lost-accent-light text-sm space-x-2">
            <span className="cursor-pointer fill-white">
              <ProfileIcon />{" "}
            </span>
            <p>Shawn Carter</p>
          </div>
          <span
            onClick={handleLogout}
            className="text-lost-accent-light text-sm cursor-pointer active:underline"
          >
            Log out
          </span>
        </div>
        {isVisible ? (
          <></>
        ) : (
          <span
            onClick={toggleVisibility}
            className={`${
              isVisible ? "hidden" : ""
            } md:hidden lg:hidden cursor-pointer text-white`}
          >
            <MenuIcon />{" "}
          </span>
        )}
      </nav>
      <div className="pt-[110px] lg:pt-[90px] md:pt-[78px]">{children}</div>
    </main>
  );
}
