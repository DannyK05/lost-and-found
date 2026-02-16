import { Audio } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="w-full flex items-center justify-center bg-lost-white">
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
