import { useState } from "react";
import PropTypes from "prop-types";

import { useDeleteFoundItemByIdMutation } from "../../../store/api/found";
import { useDeleteLostItemByIdMutation } from "../../../store/api/lost";

import BagIcon from "../../../assets/icons/BagIcon";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import CheckIcon from "../../../assets/icons/CheckIcon";
import FormLoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import InfoIcon from "../../../assets/icons/InfoIcon";
import KeyIcon from "../../../assets/icons/KeyIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";

import PlaceholderImage from "../../../assets/images/image-placeholder.webp";
import { useHandleApiMessage } from "../../../components/message-banner/hooks";
import { shortenString } from "../../../utils";

export const UserItemCard = ({
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
}) => {
  const [deleteFoundItem, { isLoading: loadingDeleteFound }] =
    useDeleteFoundItemByIdMutation();
  const [deleteLostItem, { isLoading: loadingDeleteLost }] =
    useDeleteLostItemByIdMutation();

  const { handleApiMessage } = useHandleApiMessage();

  const decodedDate = date.split("T")[0];
  const [isVisible, setIsVisible] = useState(false);
  const isLoading = type === "found" ? loadingDeleteFound : loadingDeleteLost;

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };

  const handleDeleteFoundItems = async (id) => {
    try {
      const response = await deleteFoundItem(id);
      handleApiMessage(response.message);
    } catch (err) {
      if (err && err.data.message) {
        const error = err.data.message;
        handleApiMessage(error, true);
      }
    }
  };

  const handleDeleteLostItems = async (id) => {
    try {
      const response = await deleteLostItem(id);
      handleApiMessage(response.message);
    } catch (err) {
      if (err && err.data.message) {
        const error = err.data.message;
        handleApiMessage(error, true);
      }
    }
  };

  return (
    <div
      key={id}
      onMouseLeave={() => {
        if (isVisible === true) {
          toggleDetails();
        }
      }}
      className="min-h-[310px] relative flex flex-col items-center space-y-4 p-2 bg-white border shadow-sm rounded-lg"
    >
      <span
        className={` ${
          type === "lost" ? "px-6" : "px-4"
        } absolute top-6 left-0 rotate-[-40deg] py-1 capitalize bg-lost-accent-light text-xs text-lost-blue border border-lost-accent-dark-2 rounded-lg lg:text-lg`}
      >
        {type}
      </span>

      <img
        className="size-[100px] rounded-lg object-cover md:size-[200px] lg:size-[200px]"
        src={image ?? PlaceholderImage}
        alt={title}
        width={299}
        height={168}
      />

      <div className="w-full flex flex-col items-start justify-between md:flex-row md:items-center lg:items-center lg:flex-row">
        <h1 className="text-sm text-center text-lost-blue capitalize font-bold lg:text-lg">
          {shortenString(title, 10)}
        </h1>
        <div className="flex items-center space-x-2 text-xs text-lost-blue lg:text-sm">
          <span className="">
            <LocationIcon />
          </span>
          <span className="capitalize text-xs">
            {shortenString(location, 8)}
          </span>
        </div>
      </div>

      {isVisible ? (
        <div className="w-full px-2 text-lost-blue text-xs capitalize lg:text-sm">
          <p>
            Description: <br />
            {description}
          </p>
          {color && <p>Color: {color}</p>}
          {itemBrand && <p>Brand: {itemBrand}</p>}
        </div>
      ) : (
        <div className="w-full">
          <div className="flex items-center space-x-2">
            <span className="text-lost-blue">
              <BagIcon />
            </span>
            <p className="text-xs text-lost-blue capitalize font-semibold lg:text-sm ">
              {category}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lost-blue">
              <KeyIcon />
            </span>
            <p className="text-xs text-lost-blue capitalize font-semibold lg:text-sm">
              {uniqueIdentifier}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lost-blue">
              <CalendarIcon />
            </span>
            <p className="text-xs fill-lost-blue text-lost-blue font-semibold lg:text-sm ">
              {decodedDate}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex items-center md:flex-row md:space-y-0 md:justify-between lg:flex-row lg:space-y-0 lg:justify-between">
        <button
          onClick={toggleDetails}
          className={`${
            isVisible ? "bg-lost-blue " : ""
          } w-2/5 flex items-center justify-center space-x-2 px-4 py-2 border-2 border-lost-blue shadow-sm rounded-lg text-lost-blue md:w-[45%] lg:w-2/5`}
        >
          <p
            className={`${
              isVisible ? "text-white" : ""
            } hidden text-xs md:block lg:block lg:text-sm`}
          >
            Details
          </p>
          <span className={`${isVisible ? "text-white " : ""}`}>
            <InfoIcon />
          </span>
        </button>

        <button
          onClick={() => {
            type === "found"
              ? handleDeleteFoundItems(id)
              : handleDeleteLostItems(id);
          }}
          className="w-4/5 flex items-center justify-center py-2 border-2 bg-lost-blue shadow-lg rounded-lg text-white active:bg-white active:text-lost-blue md:px-1 md:w-[45%] lg:w-[45%] lg:py-0"
        >
          {isLoading ? (
            <span className="w-full flex items-center justify-center py-2 fill-white">
              <FormLoadingSpinner />
            </span>
          ) : (
            <div className="flex items-center space-x-1 lg:py-3">
              {" "}
              <p className="text-xs lg:text-sm">Delete</p>{" "}
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
};

UserItemCard.propTypes = {
  type: PropTypes.oneOf(["lost", "found"]),
  image: PropTypes.string,
  category: PropTypes.string,
  uniqueIdentifier: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  color: PropTypes.string,
  itemBrand: PropTypes.string,
};
