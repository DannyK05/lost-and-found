import { useState } from "react";

import { useGetAllFoundItemsQuery } from "../../store/api/found";

import CloseXIcon from "../../assets/icons/CloseXIcon";
import LoadingSpinner from "../../assets/icons/FormLoadingSpinner";
import NoItems from "../../assets/images/no-items.png";

import Card from "../../components/card";
import Layout from "../../components/layout";
import SideContainer from "../../components/side-container";

import { FoundItemForm } from "./components/FoundItemForm";

const ViewItemsPage = () => {
  const { data: foundItems, isLoading } = useGetAllFoundItemsQuery();

  const [isTagVisible, setIsTagVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleTagVisibility = () => {
    setIsTagVisible(!isTagVisible);
  };

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Layout>
        <h1 className="orbitron mt-4 text-center text-lg text-lost-blue font-semibold lg:text-xl">
          Found Items
        </h1>

        <div className="w-full grid grid-cols-2 gap-x-2 gap-y-3 py-4 px-2 lg:grid-cols-4">
          {" "}
          {isLoading ? (
            <div className="w-full h-[calc(100vh-300px)] flex items-center justify-center pt-[10%] col-span-2 lg:col-span-4">
              <div className="flex flex-col items-center space-y-2">
                <span className="bg-lost-blue p-2 rounded-full">
                  <LoadingSpinner />
                </span>
                <p className="text-sm text-lost-blue">Fetching found items</p>
              </div>
            </div>
          ) : foundItems ? (
            foundItems.data.allFoundItemData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                type={"found"}
                image={item.imageUrl}
                description={item.description}
                title={item.title}
                category={item.category}
                location={item.foundAt}
                uniqueIdentifier={item.uniqueIdentifier}
                date={item.foundDate}
                color={item.color}
                itemBrand={item.itemBrand}
              />
            ))
          ) : (
            <div className="w-full flex flex-col items-center col-span-2 lg:col-span-4">
              <p className="text-2xl text-lost-blue">No items found</p>
              <img src={NoItems} alt="No items found" />
            </div>
          )}
        </div>

        <button
          aria-label="List found item"
          role="toggle form"
          onClick={toggleSidebarVisibility}
          onMouseEnter={toggleTagVisibility}
          onMouseLeave={toggleTagVisibility}
          className={`${
            isTagVisible ? "bg-lost-blue" : ""
          } fixed z-[100] right-0 bottom-[120px] flex items-center space-x-2 p-2 transition-50`}
        >
          <span className="text-white p-2 bg-lost-blue rounded-full rotate-45 ">
            <CloseXIcon />
          </span>
          <p
            className={`${
              isTagVisible ? "lg:block md:block" : ""
            } hidden text-white`}
          >
            List a found item
          </p>
        </button>

        <SideContainer
          type={"found"}
          isVisible={isSidebarVisible}
          toggleContainer={toggleSidebarVisibility}
        >
          <FoundItemForm toggleContainer={toggleSidebarVisibility} />
        </SideContainer>
      </Layout>
    </>
  );
};

export default ViewItemsPage;
