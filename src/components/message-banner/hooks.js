import { useContext } from "react";
import { ApiMessageContext } from "./context";

export function useHandleApiMessage() {
  const context = useContext(ApiMessageContext);

  if (!context) {
    throw new Error(
      "useHandleApiMessage must be called in its provider (ApiMessageProvider)",
    );
  }

  return context;
}
