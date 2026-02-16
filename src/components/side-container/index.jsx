import PropTypes from "prop-types";

import BackIcon from "../../assets/icons/BackIcon";

const SideContainer = ({ type, children, isVisible, toggleContainer }) => {
  return (
    <div
      className={`${isVisible ? "scale-x-100" : "scale-x-0"} w-full h-screen fixed z-[300] top-[76px] flex items-end bg-black/50 md:top-[100px] lg:top-[0]`}
    >
      <div
        onClick={toggleContainer}
        className="hidden h-full cursor-pointer md:block md:w-1/2 lg:block lg:w-1/2"
      ></div>
      <div
        className={`w-full h-full right-0 bg-white px-4 py-2 rounded-l-lg shadow-lg transition-50 md:w-3/5 lg:w-1/2 lg:h-screen`}
      >
        <div className="flex items-center space-x-8">
          <span
            className="text-lost-blue cursor-pointer"
            onClick={toggleContainer}
          >
            <BackIcon />
          </span>{" "}
          <h1 className="text-lost-blue text-lg uppercase font-bold">
            {type === "found" ? "List a found item" : "Report a lost item"}
          </h1>
        </div>
        <div className="h-[90%] w-full pb-4 overflow-x-hidden overflow-y-auto lg:pb-0">
          {children}
        </div>
      </div>
    </div>
  );
};

SideContainer.propTypes = {
  type: PropTypes.oneOf(["lost", "found"]),
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  toggleContainer: PropTypes.func,
};

export default SideContainer;
