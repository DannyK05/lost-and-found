import Card from "../../components/card";
import Layout from "../../layout";
import CloseXIcon from "../../assets/icons/CloseXIcon";
import { useState } from "react";
import { SideContainer } from "../../components/side-container";
import FoundItemForm from "./components/FoundItemForm";
import {
  useClaimItemMutation,
  useGetAllFoundItemsMutation,
} from "../../store/api/found";
import LoadingSpinner from "../../assets/icons/FormLoadingSpinner";
// const foundItems = [
//   {
//     id: 1,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
//   {
//     id: 2,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
//   {
//     id: 3,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
//   {
//     id: 4,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
//   {
//     id: 5,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
//   {
//     id: 6,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
//   {
//     id: 7,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
//   {
//     id: 8,
//     imageUrl: Phone,
//     name: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//   },
// ];
export default function ViewItemsPage() {
  const [isTagVisible, setIsTagVisible] = useState(false);
  const toggleTagVisibility = () => {
    setIsTagVisible(!isTagVisible);
  };
  const { data: foundItems, isLoading } = useGetAllFoundItemsMutation();
  console.log("found items", foundItems);
  const [claimItem, { isLoading: loadingClaim }] = useClaimItemMutation();

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
                <span>
                  <LoadingSpinner />
                </span>
                <p className="text-sm">Loading found items</p>
              </div>
            </div>
          ) : foundItems ? (
            foundItems.data.map((item) => (
              <Card
                key={item.id}
                type={"found"}
                image={item.imageUrl}
                description={item.description}
                title={item.name}
                category={item.category}
                location={item.foundAt}
                uniqueIdentifier={item.uniqueIdentifier}
                foundDate={item.foundDate}
              />
            ))
          ) : (
            <div className=" w-full pt-[10%] flex items-center justify-center">
              <p className="text-2xl">No items found</p>
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
          <FoundItemForm />
        </SideContainer>
      </Layout>
    </>
  );
}
