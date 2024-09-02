import { AuthForm } from "../components/AuthForm";

export const Login = () => {
  return (
    <>
      <div className="pl-2 pt-2 mb-0 hidden md:block lg:block fixed">
        <h1 className="text-2xl text-lost-blue font-bold">
          Lost<span className="text-lost-accent-light">&</span>Found Hub
        </h1>
      </div>
      <div className="md:flex lg:flex flex-col h-full items-center justify-center">
        <AuthForm type={"login"} />{" "}
      </div>
    </>
  );
};
