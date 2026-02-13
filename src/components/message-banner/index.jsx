import { XCircleIcon } from "lucide-react";
import InfoIcon from "../../assets/icons/InfoIcon";
import { useHandleApiMessage } from "./hooks";

export const MessageBanner = () => {
  const { message, isError } = useHandleApiMessage();

  return (
    message && (
      <div
        className={`${isError ? "border-[#FF0000] text-[#FF0000]" : "border-lost-blue text-lost-blue"} absolute flex items-center space-x-2 right-2 top-2 z-[1000] p-2 text-sm bg-white border rounded-lg`}
      >
        <span>{isError ? <XCircleIcon /> : <InfoIcon />}</span>
        <span>{message}</span>
      </div>
    )
  );
};
