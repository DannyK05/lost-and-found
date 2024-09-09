import { useState } from "react";
import LocationIcon from "../../assets/icons/LocationIcon";
import KeyIcon from "../../assets/icons/KeyIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import BagIcon from "../../assets/icons/BagIcon";

export default function Card({
  type,
  image,
  category,
  uniqueIdentifier,
  description,
  foundDate,
  location,
  title,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div
      onMouseLeave={() => {
        if (isVisible === true) {
          toggleDetails();
        }
      }}
      className="card w-[46%] lg:w-[24%] md:w-[23%] relative p-2 bg-white shadow-sm rounded-lg flex flex-col items-center space-y-4"
    >
      <span
        className={` ${
          type === "lost" ? "px-4" : ""
        } absolute rotate-[-40deg] uppercase text-sm lg:text-lg top-6 left-0 text-lost-blue border-[#A48433] border-[1px] bg-[#FFCD50]  rounded-lg py-1 px-2`}
      >
        {type === "lost" ? "Lost" : "Found"}
      </span>
      <img
        className="rounded-lg"
        src={image}
        alt={title}
        width={299}
        height={168}
      />
      <div className="w-full flex flex-col md:flex-row lg:flex-row items-start lg:items-center md:items-center justify-between">
        <h1 className="text-sm text-center lg:text-lg font-bold text-lost-blue">
          {title}
        </h1>
        <div className="flex items-center text-xs lg:text-sm text-lost-blue space-x-2">
          <span className="">
            <LocationIcon />
          </span>
          <span>{location}</span>
        </div>
      </div>
      {isVisible ? (
        <p className="text-lost-blue text-xs lg:text-sm">{description}</p>
      ) : (
        <div className="w-full">
          <div className="flex items-center space-x-2">
            <span className="text-lost-blue">
              <BagIcon />
            </span>
            <p className="text-xs lg:text-sm text-lost-blue font-semi-bold">
              {category}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lost-blue">
              <KeyIcon />
            </span>
            <p className="text-xs lg:text-sm text-lost-blue font-semi-bold">
              {uniqueIdentifier}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lost-blue">
              <CalendarIcon />
            </span>
            <p className="text-xs lg:text-sm fill-lost-blue text-lost-blue font-semi-bold">
              {foundDate}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex lg:flex-row lg:space-y-0 md:flex-row md:space-y-0 items-center lg:justify-between md:justify-between">
        <button
          onClick={toggleDetails}
          className={`${
            isVisible ? "bg-lost-blue " : ""
          } w-2/5 flex items-center justify-center space-x-2 md:w-[45%] lg:w-2/5  border-lost-blue text-lost-blue shadow-sm border-2 rounded-lg px-4 py-2`}
        >
          <p
            className={`${
              isVisible ? "text-white" : ""
            } hidden md:block lg:block text-xs lg:text-sm`}
          >
            Details
          </p>
          <span className={`${isVisible ? "text-white " : ""}`}>
            <InfoIcon />
          </span>
        </button>{" "}
        <button className="flex items-center justify-center w-4/5 active:bg-white active:text-lost-blue md:w-[45%] lg:w-[45%] md:px-1 bg-lost-blue text-white border-2 shadow-lg rounded-lg py-2">
          <div className="flex items-center space-x-1 lg:py-3">
            {" "}
            <p className="text-xs lg:text-sm">
              {type == "lost" ? "Found" : "Claim"}
            </p>{" "}
            <span>
              {" "}
              <CheckIcon />{" "}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
