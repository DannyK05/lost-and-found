import { useState } from "react";
import LocationIcon from "../../assets/icons/LocationIcon";
import KeyIcon from "../../assets/icons/KeyIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import BagIcon from "../../assets/icons/BagIcon";
import { useClaimFoundItemMutation } from "../../store/api/found";
import { useClaimLostItemMutation } from "../../store/api/lost";
import LoadingSpinner from "../../assets/icons/FormLoadingSpinner";

export default function Card({
  type,
  image,
  category,
  uniqueIdentifier,
  description,
  date,
  location,
  title,
  id,
  color,
  itemBrand,
}) {
  const decodedDate = date.split("T")[0];
  const [claimFoundItem, { isLoading: loadingFoundClaim }] =
    useClaimFoundItemMutation();
  const [claimLostItem, { isLoading: loadingLostClaim }] =
    useClaimLostItemMutation();
  const [isVisible, setIsVisible] = useState(false);
  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };
  const handleFoundClaim = async () => {
    try {
      const response = await claimFoundItem(id);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLostClaim = async () => {
    try {
      const response = await claimLostItem(id);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClaim = type === "found" ? handleFoundClaim : handleLostClaim;
  const isLoading = type === "found" ? loadingFoundClaim : loadingLostClaim;
  return (
    <div
      key={id}
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
        <div className="text-lost-blue w-full text-xs px-2 lg:text-sm">
          <p className="">{description}</p>
          {color && <p>Color: {color}</p>}
          {itemBrand && <p>Brand: {itemBrand}</p>}
        </div>
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
              {decodedDate}
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
        <button
          onClick={handleClaim}
          className="flex items-center justify-center w-4/5 active:bg-white active:text-lost-blue md:w-[45%] lg:w-[45%] md:px-1 bg-lost-blue text-white border-2 shadow-lg rounded-lg lg:py-0 py-2"
        >
          {isLoading ? (
            <span className="fill-white w-full flex items-center py-2 justify-center">
              <LoadingSpinner />
            </span>
          ) : (
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
          )}
        </button>
      </div>
    </div>
  );
}
