import Layout from "../../layout";
import Card from "../../components/card";
import Phone from "../../assets/images/phone.jpg";
import CloseXIcon from "../../assets/icons/CloseXIcon";
import { useState } from "react";
import { SideContainer } from "../../components/side-container";
import LostItemForm from "./components/LostItemForm";
import { useGetAllLostItemsMutation } from "../../store/api/lost";
import NoItems from "../../assets/images/no-items.png";
const lostItems = [
  {
    id: 1,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 2,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 3,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 4,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 5,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 6,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 7,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 8,
    image: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    lostAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    lostDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
];
export default function LostItemsPage() {
  // const { data: lostItems, isLoading } = useGetAllLostItemsMutation();
  // console.log(lostItems);
  const isLoading = false;
  const [isTagVisible, setIsTagVisible] = useState(false);
  const toggleTagVisibility = () => {
    setIsTagVisible(!isTagVisible);
  };

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Layout>
        <h1 className="text-center text-lg lg:text-xl mt-4 text-[#010066]">
          Lost Items
        </h1>
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
          ) : lostItems ? (
            lostItems.map((item) => (
              <Card
                id={item.id}
                type={"lost"}
                image={item.image}
                description={item.description}
                title={item.name}
                category={item.category}
                location={item.lostAt}
                uniqueIdentifier={item.uniqueIdentifier}
                foundDate={item.lostDate}
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
          <LostItemForm />
        </SideContainer>
      </Layout>
    </>
  );
}
