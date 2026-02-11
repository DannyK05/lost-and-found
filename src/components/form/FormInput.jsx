import { forwardRef, useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

import PropTypes from "prop-types";

FormInput.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
};

export const FormInput = forwardRef(
  (
    {
      containerClassName = "",
      className = "",
      type = "text",
      errorMessage = undefined,
      placeholder,
      ...rest
    },
    forwardedRef,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibilty = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <div className="w-full flex flex-col items-start">
        {type == "password" ? (
          <div
            className={`${containerClassName} flex items-center space-x-2 border-b-2 border-[#C4CAC8] pb-0  h-12 overflow-hidden hover:border-lost-blue focus-within:border-lost-blue p-0`}
          >
            <input
              {...rest}
              ref={forwardedRef}
              className={`${className} outline-none text-sm w-full h-full placeholder:text-xs bg-lost-white py-1 mb-0 px-2 focus:outline-none`}
              type={isPasswordVisible ? "text" : "password"}
              placeholder={placeholder}
            />
            <span
              onClick={togglePasswordVisibilty}
              className="text-lost-blue cursor-pointer"
            >
              {isPasswordVisible ? <EyeIcon /> : <EyeClosedIcon />}
            </span>
          </div>
        ) : (
          <div
            className={`${containerClassName} border-b-2 border-[#C4CAC8] pb-0  h-12 overflow-hidden hover:border-lost-blue focus-within:border-lost-blue p-0`}
          >
            <input
              {...rest}
              ref={forwardedRef}
              className={`${className} outline-none text-sm w-full h-full placeholder:text-xs bg-lost-white py-1 mb-0 px-2 focus:outline-none`}
              type={type}
              placeholder={placeholder}
            />
          </div>
        )}

        {errorMessage && (
          <span className="text-red-500 text-xs">{errorMessage}</span>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
