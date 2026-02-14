import PropTypes from "prop-types";

import BackIcon from "../../assets/icons/BackIcon";

const SideContainer = ({ type, children, isVisible, toggleContainer }) => {
  return (
    <div
      className={`${isVisible ? "scale-x-100" : "scale-x-0"} fixed z-[300] w-full h-screen bg-black/50 flex  items-end top-[76px] lg:top-[0] md:top-[100px] `}
    >
      <div
        onClick={toggleContainer}
        className="hidden h-full cursor-pointer md:block md:w-1/2 lg:block lg:w-1/2"
      ></div>
      <div
        className={`bg-white transition-50 shadow-lg w-full md:w-3/5 lg:w-1/2 px-4 py-2 rounded-l-lg border-md lg:h-screen h-full  right-0`}
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
        <div className="h-[90%] pb-4 w-full overflow-x-hidden overflow-y-auto lg:pb-0">
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
