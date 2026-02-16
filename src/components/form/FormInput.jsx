import { forwardRef, useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import PropTypes from "prop-types";

const FormInput = forwardRef(
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
            className={`${containerClassName} h-12 flex items-center space-x-2 p-0 border-b-2 border-[#C4CAC8] overflow-hidden hover:border-lost-blue focus-within:border-lost-blue`}
          >
            <input
              {...rest}
              ref={forwardedRef}
              className={`${className} w-full h-full bg-lost-white outline-none text-sm py-1 mb-0 px-2 placeholder:text-xs focus:outline-none`}
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
            className={`${containerClassName} h-12 flex items-center space-x-2 p-0 border-b-2 border-[#C4CAC8] overflow-hidden hover:border-lost-blue focus-within:border-lost-blue`}
          >
            <input
              {...rest}
              ref={forwardedRef}
              className={`${className} w-full h-full bg-lost-white outline-none text-sm py-1 mb-0 px-2 placeholder:text-xs focus:outline-none`}
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

FormInput.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.displayName = "FormInput";

export default FormInput;
