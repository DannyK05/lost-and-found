import { AuthForm } from "../components/AuthForm";

export const Signup = () => {
  return (
    <div className="md:flex lg:flex h-full items-center justify-center">
      <AuthForm type={"signup"} />{" "}
    </div>
  );
};
