import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  LOST_AND_FOUND_TOKEN,
  LOST_AND_FOUND_USER,
} from "../../../lib/constant";

import { setCredentials } from "../../../store/features/authSlice";
import { setToLocalStorage } from "../../../lib/storage";
import { useRegisterMutation } from "../../../store/api/auth";

import SignupIllustration from "../../../assets/images/signup.png";
import FormLoadingSpinner from "../../../assets/icons/FormLoadingSpinner";

import FormInput from "../../../components/form/FormInput";
import FormButton from "../../../components/form/FormButton";

import { signupFormSchema } from "../formSchema";

export const SignupForm = ({ handleErrorMessage }) => {
  const [signup, { isLoading: isLoadingRegister }] = useRegisterMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupFormSchema) });

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
        handleErrorMessage(error);

        setTimeout(() => {
          handleErrorMessage(null);
        }, 2000);
      } else {
        handleErrorMessage(null);
      }
    }
  };
  return (
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
        className="flex w-3/5 flex-col items-center space-y-4"
      >
        <div className="flex w-full flex-col items-start space-y-4">
          <div className=" flex flex-col md:flex-row lg:flex-row items-start w-full space-y-4 md:space-x-4 lg:space-y-0 md:space-y-0 lg:space-x-4">
            <FormInput
              containerClassName=""
              {...register("firstName")}
              placeholder={"First Name"}
              errorMessage={errors.firstName?.message}
            />

            <FormInput
              containerClassName=""
              {...register("lastName")}
              placeholder={"Last Name"}
              errorMessage={errors.lastName?.message}
            />
          </div>

          <FormInput
            containerClassName="w-full"
            {...register("email")}
            placeholder={"Email Address"}
            errorMessage={errors.email?.message}
          />

          <FormInput
            containerClassName="w-full"
            {...register("phoneNumber")}
            placeholder={"Phone Number"}
            errorMessage={errors.phoneNumber?.message}
          />

          <FormInput
            containerClassName="w-full"
            {...register("password")}
            type="password"
            placeholder={"Password"}
            errorMessage={errors.password?.message}
          />

          <FormInput
            containerClassName="w-full"
            {...register("confirmPassword")}
            type="password"
            placeholder={"Confirm Password"}
            errorMessage={errors.confirmPassword?.message}
          />
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
  );
};

SignupForm.propTypes = {
  handleErrorMessage: PropTypes.func,
};
