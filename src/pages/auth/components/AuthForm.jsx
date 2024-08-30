import { FormButton } from "../../../components/FormButton";
import { FormInput } from "../../../components/FormInput";
import LoginIllustration from "../../../assets/images/login.png";
import SignupIllustration from "../../../assets/images/signup.png";
export const AuthForm = ({ type }) => {
  return (
    <div
      className={`${
        type === "signup" ? "flex-row-reverse" : ""
      } flex w-3/4  h-[80vh] items-center shadow-md `}
    >
      <div className="w-2/5 h-full rounded-l-lg flex items-center flex-col space-y-10 text-center text-lost-white p-10 bg-lost-blue">
        {type === "signup" ? (
          <>
            <div className="flex flex-col items-center text-lost-white space-y-4">
              <span className="text-lost-accent-light text-sm">
                Already have an account?
              </span>
              <h1 className="text-2xl font-bold">Welcome back 👋</h1>
              <p className="text-sm">Log into your account</p>
              <img
                className="w-2/3"
                src={LoginIllustration}
                attributeName="Image by storyset on Freepik"
              />
            </div>
            <button className="w-1/3  active:bg-[#DBDBDB] duration-50 border-lost-white border-[1px] rounded-lg py-2 px-3 text-lost-white">
              Sign in
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-2xl font-bold">Hello Friend 🙋‍♂️</h1>
              <span className="text-lost-accent-light text-sm">
                Don't have an account?
              </span>
              <p className="text-sm">Sign up with us</p>
              <img
                className="w-2/3"
                src={SignupIllustration}
                attributeName="Image by storyset on Freepik"
              />
            </div>
            <button className="w-1/3 active:bg-[#C4C4C4] duration-50  border-lost-white border-[1px] rounded-lg py-2 px-3 text-lost-white">
              {" "}
              Sign Up
            </button>
          </>
        )}
      </div>
      <div className="w-3/5 h-full flex flex-col items-center py-10 space-y-6 rounded-r-lg p-5 bg-lost-white">
        {type === "signup" ? (
          <>
            <h1 className="text-2xl text-lost-blue mb-6 font-bold">
              Sign Up with Us
            </h1>
            <form className="flex w-[60%] flex-col items-center space-y-4">
              <div className="flex w-full flex-col items-center space-y-4">
                <div className="flex items-center w-full space-x-4">
                  <FormInput
                    containerClassName="w-[45%]"
                    placeholder={"First Name"}
                  />
                  <FormInput
                    containerClassName="w-[45%]"
                    placeholder={"Last Name"}
                  />
                </div>
                <FormInput
                  containerClassName="w-full"
                  type={"email"}
                  placeholder={"Email Address"}
                />
                <FormInput
                  containerClassName="w-full"
                  type="password"
                  placeholder={"Password"}
                />
                <FormInput
                  containerClassName="w-full"
                  type="password"
                  placeholder={"Confirm Password"}
                />
              </div>
              <FormButton className="w-[50%]">Sign Up</FormButton>
            </form>
          </>
        ) : (
          <>
            {" "}
            <h1 className="text-2xl text-lost-blue mb-6 font-bold">
              Sign In to Lost&Found Hub
            </h1>
            <form className="flex w-full flex-col items-center mb-10 space-y-10">
              <div className="flex w-full flex-col items-center space-y-4">
                <FormInput
                  containerClassName="w-[60%]"
                  type={"email"}
                  placeholder={"Email Address"}
                />
                <FormInput
                  containerClassName="w-[60%]"
                  type="password"
                  placeholder={"Password"}
                />
              </div>

              <FormButton className="w-1/3">Sign In</FormButton>
            </form>
            <span className="text-lost-accent-dark text-sm cursor-pointer hover:underline mt-10">
              Forgot Password ?
            </span>
          </>
        )}
      </div>
    </div>
  );
};
