import PropTypes from "prop-types";

const FormButton = ({ children, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`${className} ${
        disabled && "cursor-progress"
      } duration-50 bg-lost-blue text-white border-2 border-white rounded-lg py-2 px-3 active:bg-white active:text-lost-blue active:border-lost-blue`}
    >
      {children && children}
    </button>
  );
};

FormButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FormButton;
