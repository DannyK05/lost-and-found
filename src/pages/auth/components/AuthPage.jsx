import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LoginIllustration from "../../../assets/images/login.png";
import SignupIllustration from "../../../assets/images/signup.png";
import InfoIcon from "../../../assets/icons/InfoIcon";

import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";



export const AuthPage = ({ type }) => {
  const [errorMessage, setErrorMessage] = useState();

  const handleErrorMessage = (message) => setErrorMessage(message);
  return (
    <div
      className={`${
        type === "signup" ? "flex-row-reverse" : ""
      } flex relative w-full h-full items-center shadow-md md:w-full md:h-3/5 lg:w-3/4 lg:h-4/5`}
    >
      {errorMessage && (
        <div className="absolute py-2 text-xs flex items-center space-x-2 w-full bg-[#CA1C2D] text-white right-0 top-0 md:w-1/2 lg:w-1/2">
          <span>
            <InfoIcon />{" "}
          </span>{" "}
          <span>{errorMessage}</span>
        </div>
      )}
      <div className="w-2/5 hidden md:block lg:block h-full rounded-l-lg flex items-center flex-col space-y-10 text-center text-lost-white p-10 bg-lost-blue">
        {type === "signup" ? (
          // Sign up page render
          <>
            <div className="flex flex-col items-center text-lost-white space-y-4">
              <span className="text-lost-accent-light text-sm">
                Already have an account?
              </span>
              <h1 className="text-2xl font-bold">Welcome back 👋</h1>
              <p className="text-sm">Log into your account</p>
              <img
                width={219}
                height={219}
                src={LoginIllustration}
                alt="Login Illustration"
                attributeName="Image by storyset on Freepik"
              />
            </div>
            <Link to={"/"}>
              <button className="w-1/3 duration-50 border-lost-white border rounded-lg py-2 px-3 text-lost-white active:bg-[#DBDBDB] md:w-1/2">
                Sign in
              </button>
            </Link>
          </>
        ) : (
          // Login page render
          <>
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-2xl font-bold">Hello Friend 🙋‍♂️</h1>
              <span className="text-lost-accent-light text-sm">
                Don&apos;t have an account?
              </span>
              <p className="text-sm">Sign up with us</p>
              <img
                width={219}
                height={219}
                src={SignupIllustration}
                alt="Signup Illustration"
                attributeName="Image by storyset on Freepik"
              />
            </div>
            <Link to={"/signup"}>
              <button className="w-1/3 duration-50  border-lost-white border rounded-lg py-2 px-3 text-lost-white active:bg-[#C4C4C4] md:w-1/2">
                {" "}
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>

      <div className="w-full h-full flex flex-col items-center py-10 space-y-6 rounded-r-lg p-5 bg-lost-white md:w-3/5 lg:w-3/5">
        {type === "signup" ? (
          <SignupForm handleErrorMessage={handleErrorMessage} />
        ) : (
          <LoginForm handleErrorMessage={handleErrorMessage} />
        )}
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  type: PropTypes.oneOf(["signup", "login"]),
};
