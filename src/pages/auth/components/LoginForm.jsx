import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  LOST_AND_FOUND_TOKEN,
  LOST_AND_FOUND_USER,
} from "../../../lib/constant";

import { useLoginMutation } from "../../../store/api/auth";
import { setToLocalStorage } from "../../../lib/storage";
import { setCredentials } from "../../../store/features/authSlice";

import LoginIllustration from "../../../assets/images/login.png";
import FormLoadingSpinner from "../../../assets/icons/FormLoadingSpinner";

import FormInput from "../../../components/form/FormInput";
import FormButton from "../../../components/form/FormButton";

import { loginFormSchema } from "../formSchema";

export const LoginForm = ({ handleErrorMessage }) => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "testuser@student.oauife.edu.ng",
      password: "test123",
    },
  });

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
        src={LoginIllustration}
        attributeName="Image by storyset on Freepik"
      />
      <h1 className="text-2xl text-lost-blue mb-6 font-bold">
        Sign In to Lost<span className="text-lost-accent-light">&</span>
        Found Hub
      </h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex w-3/5 flex-col items-center mb-10 space-y-10"
      >
        <div className="flex w-full flex-col items-start space-y-4">
          <FormInput
            containerClassName="w-full"
            {...register("email")}
            type="email"
            placeholder={"Email Address"}
            errorMessage={errors.email?.message}
          />

          <FormInput
            containerClassName="w-full"
            {...register("password")}
            type="password"
            placeholder={"Password"}
            errorMessage={errors.password?.message}
          />
        </div>

        <FormButton disabled={isLoading} className="w-full md:w-1/3 lg:w-1/3">
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
            Don &apos;t have an account? Sign up
          </button>
        </Link>
      </form>

      <span className="text-lost-blue text-sm cursor-pointer hover:underline mt-10">
        Forgot Password ?
      </span>
    </>
  );
};

LoginForm.propTypes = {
  handleErrorMessage: PropTypes.func,
};
