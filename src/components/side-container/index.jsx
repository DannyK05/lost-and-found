import BackIcon from "../../assets/icons/BackIcon";

export function SideContainer({ type, children, isVisible, toggleContainer }) {
  return (
    <div
      className={`${
        isVisible ? "scale-x-100" : "scale-x-0"
      }  bg-white fixed transition-50 shadow-lg w-full md:w-[60%] lg:w-1/2 px-4 py-2 rounded-lg border-md top-[76px] h-[95vh] z-[10000] right-0`}
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
      <div>{children}</div>
    </div>
  );
}
