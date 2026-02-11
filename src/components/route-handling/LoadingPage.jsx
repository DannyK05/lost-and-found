import { Audio } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="flex items-center bg-lost-white w-full justify-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#191970"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default LoadingPage;
