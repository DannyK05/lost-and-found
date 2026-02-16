import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LoginIllustration from "../../assets/images/login.png";
import SignupIllustration from "../../assets/images/signup.png";

import { MessageBanner } from "../../components/message-banner";

import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";

const AuthPage = ({ type }) => {
  return (
    <div className="h-full flex-col items-center justify-center lg:flex lg:py-10">
      <div
        className={`${
          type === "signup" ? "flex-row-reverse" : ""
        } w-full h-full relative flex items-center justify-center shadow-md lg:w-3/4 lg:h-[600px]`}
      >
        <MessageBanner />

        <div
          className={`${type === "signup" ? "rounded-r-lg" : "rounded-l-lg"} hidden w-2/5 h-full flex flex-col items-center space-y-10 text-center text-lost-white bg-lost-blue p-10 lg:block`}
        >
          {type === "signup" ? (
            // Sign up page render
            <>
              <div className="flex flex-col items-center space-y-4 text-lost-white">
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
                <button className="w-2/5 border border-lost-white text-lost-white rounded-lg py-2 px-3 duration-50 active:bg-[#DBDBDB]">
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
                <button className="w-2/5 border border-lost-white text-lost-white rounded-lg py-2 px-3 duration-50 active:bg-[#DBDBDB]">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        <div
          className={`${type === "signup" ? "rounded-l-lg" : "rounded-r-lg"} w-full flex flex-col items-center space-y-6 bg-lost-white py-10 p-5 lg:w-3/5 lg:h-full`}
        >
          {type === "signup" ? <SignupForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

AuthPage.propTypes = {
  type: PropTypes.oneOf(["signup", "login"]),
};
