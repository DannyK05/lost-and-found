import { useState } from "react";
import { useGetAllLostItemsQuery } from "../../store/api/lost";

import CloseXIcon from "../../assets/icons/CloseXIcon";
import NoItems from "../../assets/images/no-items.png";
import LoadingSpinner from "../../assets/icons/FormLoadingSpinner";

import SideContainer from "../../components/side-container";
import Layout from "../../components/layout";
import Card from "../../components/card";

import { LostItemForm } from "./components/LostItemForm";

const LostItemsPage = () => {
  const { data: lostItems, isLoading } = useGetAllLostItemsQuery();

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
        <h1 className="text-center text-lg lg:text-xl mt-4 text-[#010066]">
          Lost Items
        </h1>

        <div className="w-full grid grid-cols-2 gap-x-2 gap-y-3 py-4 px-2 lg:grid-cols-4">
          {isLoading ? (
            <div className="w-full h-[calc(100vh-300px)] pt-[10%] col-span-2 flex items-center justify-center lg:col-span-4">
              <div className="flex flex-col items-center space-y-2">
                <span className="bg-lost-blue p-2 rounded-full">
                  <LoadingSpinner />
                </span>
                <p className="text-sm text-lost-blue">Fetching lost items</p>
              </div>
            </div>
          ) : lostItems ? (
            lostItems.data.allLostItemData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                type={"lost"}
                image={item.imageUrl}
                description={item.description}
                title={item.title}
                category={item.category}
                location={item.lostAt}
                uniqueIdentifier={item.uniqueIdentifier}
                date={item.lostDate}
                color={item.color}
                itemBrand={item.itemBrand}
              />
            ))
          ) : (
            <div className=" w-full flex flex-col items-center ">
              <p className="text-2xl text-lost-blue">No items found</p>
              <img src={NoItems} alt="No items found" />
            </div>
          )}
        </div>

        <button
          aria-label="List lost item"
          role="toggle form"
          onClick={toggleSidebarVisibility}
          onMouseEnter={toggleTagVisibility}
          onMouseLeave={toggleTagVisibility}
          className={`flex ${
            isTagVisible ? "bg-lost-blue" : ""
          } items-center space-x-2 transition-50 p-2 fixed z-[100] right-0 bottom-[120px] `}
        >
          <span className="text-white p-2 bg-lost-blue rounded-full rotate-45 ">
            <CloseXIcon />
          </span>
          <p
            className={`${
              isTagVisible ? "lg:block md:block" : ""
            } hidden text-white`}
          >
            List a lost item
          </p>
        </button>

        <SideContainer
          type={"lost"}
          isVisible={isSidebarVisible}
          toggleContainer={toggleSidebarVisibility}
        >
          <LostItemForm toggleContainer={toggleSidebarVisibility} />
        </SideContainer>
      </Layout>
    </>
  );
};

export default LostItemsPage;
