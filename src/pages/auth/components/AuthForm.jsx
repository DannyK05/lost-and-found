import { TextInput } from "../../../components/TextInput";

export const AuthForm = ({ type }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/3  text- white bg-[#009e61]">
        {type === "signup" ? (
          <>
            <span>Already have an account ?</span>
            <h1>Welcome back</h1>
            <p>Log in</p>
            <button>Sign in</button>
          </>
        ) : (
          <>
            <h1>Hello Friend</h1>
            <span>Don't have an account</span>
            <p>Sign up with us</p>
            <button> Sign Up</button>
          </>
        )}
      </div>
      <div className="w-2/3">
        <form className="">
          <TextInput />
        </form>
      </div>
    </div>
  );
};
