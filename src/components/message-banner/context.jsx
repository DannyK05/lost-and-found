import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ApiMessageContext = createContext(undefined);

export const ApiMessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState(undefined);
  const [isError, setIsError] = useState(false);

  const handleApiMessage = (message, error = false) => {
    setMessage(message);
    setIsError(error);
    console.log("Message-", message);
    setTimeout(() => setMessage(undefined), 4000);
  };

  return (
    <ApiMessageContext.Provider value={{ handleApiMessage, message, isError }}>
      {children}
    </ApiMessageContext.Provider>
  );
};

ApiMessageContextProvider.propTypes = { children: PropTypes.node };
