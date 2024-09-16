import Card from "../../components/card";
import Layout from "../../layout";
import CloseXIcon from "../../assets/icons/CloseXIcon";
import { useEffect, useState } from "react";
import { SideContainer } from "../../components/side-container";
import FoundItemForm from "./components/FoundItemForm";
import { useGetAllFoundItemsQuery } from "../../store/api/found";
import LoadingSpinner from "../../assets/icons/FormLoadingSpinner";
import NoItems from "../../assets/images/no-items.png";

export default function ViewItemsPage() {
  const [isTagVisible, setIsTagVisible] = useState(false);
  const toggleTagVisibility = () => {
    setIsTagVisible(!isTagVisible);
  };
  const { data: foundItems, isLoading } = useGetAllFoundItemsQuery();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Layout>
        <h1 className="text-center text-lg text-[#010066] mt-4">Found Items</h1>
        <div className="card_container flex w-full flex-wrap items-center space-x-3 space-y-2 px-2 py-4 ">
          {isLoading ? (
            <div className=" w-full pt-[10%] flex items-center justify-center">
              <div className="flex flex-col items-center space-y-2">
                <span className="bg-lost-blue p-2 rounded-full">
                  <LoadingSpinner />
                </span>
                <p className="text-sm">Loading found items</p>
              </div>
            </div>
          ) : foundItems ? (
            foundItems.data.allFoundItemData.map((item) => (
              <Card
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
            <div className=" w-full flex flex-col items-center ">
              <p className="text-2xl">No items found</p>
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
}
