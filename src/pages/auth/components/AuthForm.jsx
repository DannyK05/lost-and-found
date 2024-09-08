import { FormButton } from "../../../components/form/FormButton";
import { FormInput } from "../../../components/form/FormInput";
import LoginIllustration from "../../../assets/images/login.png";
import SignupIllustration from "../../../assets/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, signupFormSchema } from "../../../data/formSchema";
import { useLoginMutation, useRegisterMutation } from "../../../store/api/auth";
import { useDispatch } from "react-redux";
import { setToLocalStorage } from "../../../utilities/storage";
import {
  LOST_AND_FOUND_TOKEN,
  LOST_AND_FOUND_USER,
} from "../../../utilities/constant";
import { setCredentials } from "../../../store/features/authSlice";
import FormLoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import InfoIcon from "../../../assets/icons/InfoIcon";
import { useState } from "react";
export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedSchema = type == "signup" ? signupFormSchema : loginFormSchema;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(selectedSchema) });
  const [errorMessage, setErrorMessage] = useState();
  const [login, { isLoading }] = useLoginMutation({});
  const [signup, { isLoading: isLoadingRegister }] = useRegisterMutation();

  const handleSignup = async (data) => {
    try {
      const response = await signup(data).unwrap();
      const token = response.data.accessToken;
      const user = response.data.user;

      setToLocalStorage(LOST_AND_FOUND_TOKEN, token);
      setToLocalStorage(LOST_AND_FOUND_USER, user);

      dispatch(setCredentials({ token, user }));
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (err) {
      if (err && err.data.message) {
        const error = err.data.message;
        setErrorMessage(error);
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
      } else {
        setErrorMessage(null);
      }
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await login(data).unwrap();
      const token = response.data.accessToken;
      const user = response.data.user;

      setToLocalStorage(LOST_AND_FOUND_TOKEN, token);
      setToLocalStorage(LOST_AND_FOUND_USER, user);
      dispatch(setCredentials({ token, user }));
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (err) {
      if (err && err.data.message) {
        const error = err.data.message;
        setErrorMessage(error);
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
      } else {
        setErrorMessage(null);
      }
    }
  };
  return (
    <div
      className={`${
        type === "signup" ? "flex-row-reverse" : ""
      } flex  relative w-full h-full md:full lg:w-3/4 md:w-full md:h-[60%] lg:h-[80%] items-center shadow-md `}
    >
      {errorMessage && (
        <div className="absolute text-xs flex items-center space-x-2 w-full bg-[#CA1C2D] text-white md:w-1/2 lg:w-1/2 right-0 top-0">
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
              <button className="w-1/3 md:w-1/2 active:bg-[#DBDBDB] duration-50 border-lost-white border-[1px] rounded-lg py-2 px-3 text-lost-white">
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
                Don't have an account?
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
              <button className="w-1/3 md:w-1/2 active:bg-[#C4C4C4] duration-50  border-lost-white border-[1px] rounded-lg py-2 px-3 text-lost-white">
                {" "}
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>

      <div className="w-full lg:w-3/5 md:w-3/5 h-full flex flex-col items-center py-10 space-y-6 rounded-r-lg p-5 bg-lost-white">
        {type === "signup" ? (
          //Signup page render
          <>
            <img
              className="md:hidden lg:hidden w-1/3"
              src={SignupIllustration}
              attributeName="Image by storyset on Freepik"
            />
            <h1 className="text-2xl text-lost-blue mb-6 font-bold">
              Sign Up with Lost<span className="text-lost-accent-light">&</span>
              Found Hub
            </h1>
            <form
              onSubmit={handleSubmit(handleSignup)}
              className="flex w-[60%] flex-col items-center space-y-4"
            >
              <div className="flex w-full flex-col items-center space-y-4">
                <div className=" flex flex-col md:flex-row lg:flex-row items-center w-full space-y-4 md:space-x-4 lg:space-y-0 md:space-y-0 lg:space-x-4">
                  <FormInput
                    containerClassName="w-full md:w-[45%] lg:w-[45%]"
                    {...register("firstName")}
                    placeholder={"First Name"}
                  />
                  {errors.firstName?.message && (
                    <span className="text-red-500 text-xs">
                      {errors.firstName.message}
                    </span>
                  )}
                  <FormInput
                    containerClassName="w-full md:w-[45%] lg:w-[45%]"
                    {...register("lastName")}
                    placeholder={"Last Name"}
                  />
                  {errors.lastName?.message && (
                    <span className="text-red-500 text-xs">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
                <FormInput
                  containerClassName="w-full"
                  {...register("email")}
                  placeholder={"Email Address"}
                />
                {errors.email?.message && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
                <FormInput
                  containerClassName="w-full"
                  {...register("password")}
                  type="password"
                  placeholder={"Password"}
                />
                {errors.password?.message && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
                <FormInput
                  containerClassName="w-full"
                  {...register("confirmPassword")}
                  type="password"
                  placeholder={"Confirm Password"}
                />
                {errors.confirmPassword?.message && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <FormButton
                disabled={isLoadingRegister}
                className="w-full md:w-[50%] lg:w-[50%]"
              >
                {isLoadingRegister ? (
                  <span className="fill-white w-full flex items-center justify-center">
                    <FormLoadingSpinner />
                  </span>
                ) : (
                  "Sign up"
                )}
              </FormButton>
              <Link to={"/"}>
                <button className="text-lost-blue text-sm md:hidden lg:hidden">
                  Already have an account? Sign in
                </button>
              </Link>
            </form>
          </>
        ) : (
          //Login page render
          <>
            <img
              className="md:hidden lg:hidden w-1/3"
              src={LoginIllustration}
              attributeName="Image by storyset on Freepik"
            />
            <h1 className="text-2xl text-lost-blue mb-6 font-bold">
              Sign In to Lost<span className="text-lost-accent-light">&</span>
              Found Hub
            </h1>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex w-full flex-col items-center mb-10 space-y-10"
            >
              <div className="flex w-full flex-col items-center space-y-4">
                <FormInput
                  containerClassName="w-full md:w-[60%] lg:w-[60%]"
                  {...register("email")}
                  type="email"
                  placeholder={"Email Address"}
                />
                {errors.email?.message && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
                <FormInput
                  containerClassName="w-full md:w-[60%] lg:w-[60%]"
                  {...register("password")}
                  type="password"
                  placeholder={"Password"}
                />
                {errors.password?.message && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <FormButton
                disabled={isLoading}
                className="w-full md:w-1/3 lg:w-1/3"
              >
                {isLoading ? (
                  <span className="fill-white w-full flex items-center justify-center">
                    <FormLoadingSpinner />
                  </span>
                ) : (
                  "Sign In"
                )}
              </FormButton>
              <Link to={"/signup"}>
                <button className="text-lost-blue text-sm md:hidden lg:hidden">
                  Don't have an account? Sign up
                </button>
              </Link>
            </form>
            <span className="text-lost-blue text-sm cursor-pointer hover:underline mt-10">
              Forgot Password ?
            </span>
          </>
        )}
      </div>
    </div>
  );
};
