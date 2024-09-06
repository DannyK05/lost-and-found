export const FormButton = ({ children, className = "", disabled }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`${className} ${
        disabled && "cursor-progress"
      } duration-50 active:bg-white active:text-[#191970] active:border-[#191970] border-white border-2 bg-[#191970] rounded-lg py-2 px-3 text-white`}
    >
      {children && children}
    </button>
  );
};
