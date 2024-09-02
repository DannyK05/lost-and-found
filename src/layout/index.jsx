import { useState } from "react";
import ProfileIcon from "../assets/icons/ProfileIcon";
import { NavLink } from "react-router-dom";
import MenuIcon from "../assets/icons/MenuIcon";
import CloseXIcon from "../assets/icons/CloseXIcon";

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <main className="w-full h-[100vh]">
      <nav className="flex items-center fixed w-full bg-lost-blue pt-4 pb-6 px-4 justify-between md:justify-normal lg: justify-normal">
        <h1 className="text-2xl w-1/5 text-white font-bold">
          Lost<span className="text-lost-accent-light">&</span>Found Hub
        </h1>
        <ul
          className={`${
            isVisible ? "" : "hidden"
          } px-8 py-2 z-10 md:p-0 md:flex lg:flex flex lg:space-x-12 md:space-x-8 flex-col absolute h-[100vh] md:h-auto lg:h-auto md:w-3/5 lg:3/5 lg:flex-row md:flex-row md:static lg:static bg-lost-blue top-10 right-0 space-y-10 md:space-y-0 lg:space-y-0 text-white items:end md:items-center lg:items-center  md:text-sm`}
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
              Report Lost Items
            </li>
          </NavLink>
          <NavLink
            to={"/view-items"}
            className={({ isActive }) =>
              `${isActive ? "text-lost-accent-light active-nav" : ""}`
            }
          >
            <li className="active:text-lost-accent-light lg:hover:text-lost-accent-light">
              View Items
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

          <div className="md:hidden lg:hidden flex items-center text-white active:text-lost-accent-light active:fill-lost-accent-light lg:hover:text-lost-accent-light lg:hover:fill-lost-accent-light space-x-2">
            <span className="cursor-pointer  fill-white">
              <ProfileIcon />{" "}
            </span>
            <p>Shawn Carter</p>
          </div>
        </ul>
        <div className="flex items-center md:w-1/5 lg:w-1/5 justify-center">
          <div className="hidden md:flex lg:flex items-center text-white hover:text-lost-accent-light hover:fill-lost-accent-light text-sm space-x-2">
            <span className="cursor-pointer fill-white">
              <ProfileIcon />{" "}
            </span>
            <p>Shawn Carter</p>
          </div>
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
      <div className="pt-[78px]">{children}</div>
    </main>
  );
}
