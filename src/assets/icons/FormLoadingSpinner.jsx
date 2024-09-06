import { Audio } from "react-loader-spinner";
export default function LoadingSpinner() {
  return (
    <Audio
      height="20"
      width="20"
      radius="9"
      color="white"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
