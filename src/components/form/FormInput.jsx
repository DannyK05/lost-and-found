import { forwardRef, useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";


export const FormInput = forwardRef(
  (
    {
      containerClassName = "",
      className = "",
      type = "text",
      placeholder,
      ...rest
    },
    forwardedRef,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibilty = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    return type == "password" ? (
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
    );
  },
);
