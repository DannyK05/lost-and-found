import * as React from "react";

export const FormInput = React.forwardRef(
  (
    {
      containerClassName = "",
      className = "",
      type = "text",
      placeholder,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <div
        className={`${containerClassName} border-b-2 border-[#C4CAC8] pb-0  h-12 overflow-hidden hover:border-lost-blue focus-within:border-lost-blue p-0`}
      >
        <input
          {...rest}
          ref={forwardedRef}
          className={`${className} outline-none text-sm w-full h-full placeholder:text-xs bg-lost-white py-1 mb-0 px-2 focus:outline-none  `}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
);
