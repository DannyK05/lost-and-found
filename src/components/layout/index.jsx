import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { LOST_AND_FOUND_TOKEN, LOST_AND_FOUND_USER } from "../../lib/constant";

import { removeFromLocalStorage } from "../../lib/storage";
import { removeCredentials } from "../../store/features/authSlice";
import { selectCurrentUser } from "../../store/selector";

import ProfileIcon from "../../assets/icons/ProfileIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import CloseXIcon from "../../assets/icons/CloseXIcon";

import { MessageBanner } from "../message-banner";
import RouteGuard from "../route-guard/RouteGuard";

import { navbarLinks } from "./data";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const firstName = currentUser ? currentUser.firstName : "Shawn";
  const lastName = currentUser ? currentUser.lastName : "Carter";

  const name = firstName + " " + lastName;
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = () => {
    removeFromLocalStorage(LOST_AND_FOUND_TOKEN);
    removeFromLocalStorage(LOST_AND_FOUND_USER);
    dispatch(removeCredentials());

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <RouteGuard>
      <main className="w-full h-[100vh]">
        <MessageBanner />

        <nav className="w-full fixed z-[100] flex items-center justify-between bg-[#010066] pt-4 pb-6 px-4">
          <h1 className="w-1/2 text-md text-white font-bold md:w-auto lg:text-2xl lg:w-1/4">
            Lost<span className="text-lost-accent-light">&</span>Found Hub
          </h1>
          <hr className="hidden w-[150px] absolute z-[10000] top-11 left-[19%] border-lost-accent-light border lg:block" />

          <ul
            className={`${
              isVisible ? "z-[100000] border-0" : "hidden"
            } max-w-1/2 h-screen absolute z-10 top-0 right-0 flex flex-col space-y-10 py-4 px-6 bg-lost-blue border border-lost-accent-light text-white md:w-3/5 md:h-auto md:static md:flex md:flex-row md:items-center md:space-y-0 md:space-x-8 md:rounded-lg md:text-sm md:shadow-lg lg:w-1/2 lg:h-auto lg:static lg:flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-12 lg:rounded-lg lg:shadow-lg`}
          >
            <span
              onClick={toggleVisibility}
              className="md:hidden lg:hidden cursor-pointer flex items-center justify-center text-white"
            >
              <CloseXIcon />
            </span>

            {navbarLinks.map(({ name, url }, id) => (
              <li
                key={id}
                className="text-xs active:text-lost-accent-light md:text-sm lg:text-sm lg:hover:text-lost-accent-light"
              >
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-lost-accent-light active-nav text-sm lg:text-md"
                        : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}

            {/* The profile box in mobile */}
            <div className="flex flex-col items-start space-y-4 z-[500] text-white cursor-pointer active:text-lost-accent-light active:fill-lost-accent-light md:hidden lg:hidden lg:hover:text-lost-accent-light lg:hover:fill-lost-accent-light">
              <div className="flex items-center space-x-2">
                <span className="fill-white">
                  <ProfileIcon />
                </span>
                <p className="text-xs">{name}</p>
              </div>

              <span
                onClick={handleLogout}
                className="text-lost-accent-light text-smactive:underline"
              >
                Log out
              </span>
            </div>
          </ul>

          <div className="hidden items-center md:flex md:w-1/5 md:space-x-2 lg:flex lg:w-1/5 lg:space-x-4">
            <div className="items-center text-white text-sm md:flex md:space-x-2 lg:flex lg:space-x-2 lg:hover:text-lost-accent-light lg:hover:fill-lost-accent-light">
              <span className="cursor-pointer fill-white">
                <ProfileIcon />{" "}
              </span>
              <p>{name}</p>
            </div>

            <span
              onClick={handleLogout}
              className="text-lost-accent-light text-sm cursor-pointer active:underline"
            >
              Log out
            </span>
          </div>

          <span
            onClick={toggleVisibility}
            className="text-white cursor-pointer md:hidden lg:hidden"
          >
            <MenuIcon />
          </span>
        </nav>

        <div className="pt-[75px] md:pt-[110px] lg:pt-[90px]">{children}</div>
      </main>
    </RouteGuard>
  );
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
