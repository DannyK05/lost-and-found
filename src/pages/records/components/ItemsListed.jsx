import LoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import { useGetAllUserFoundItemsMutation } from "../../../store/api/found";
import { useGetAllUserLostItemsMutation } from "../../../store/api/lost";
import UserItemCard from "./UserItemCard";
import Phone from "../../../assets/images/phone.jpg";
import NoItems from "../../../assets/images/no-items.png";

const foundItems = [
  {
    id: 1,
    image: Phone,
    title: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 2,
    image: Phone,
    title: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
];
const lostItems = [
  {
    id: 1,
    image: Phone,
    title: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
  {
    id: 2,
    image: Phone,
    title: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
    itemBrand: "Tecno",
  },
];

export default function ItemsListed() {
  // const { data: lostItems, isLoading: loadingLostItems } =
  //   useGetAllUserLostItemsMutation();
  // const { data: foundItem, isLoading: loadingFoundItems } =
  //   useGetAllUserFoundItemsMutation();
  const loadingFoundItems = false;
  const loadingLostItems = false;
  return (
    <div className="w-full border-b-1 border-lost-blue">
      <div className="w-full flex-col flex items-center space-y-1 border-b-1 border-lost-blue">
        <h1 className="underline font-bold text-lost-blue">Your Found Items</h1>
        <div className="flex w-full items-center pb-4 flex-wrap space-x-2">
          {loadingFoundItems ? (
            <div className=" w-full  flex items-center justify-center">
              <div className="flex w-full flex-col items-center space-y-2">
                <span className="bg-lost-blue">
                  <LoadingSpinner />
                </span>
                <p className="text-sm">Loading found items</p>
              </div>
            </div>
          ) : foundItems && foundItems.length !== 0 ? (
            foundItems.map((items) => {
              return (
                <UserItemCard
                  key={items.id}
                  title={items.title}
                  image={items.image}
                  type={"found"}
                  category={items.category}
                  uniqueIdentifier={items.uniqueIdentifier}
                  description={items.description}
                  foundDate={items.foundDate}
                  location={items.foundAt}
                  id={items.id}
                  color={items.color}
                  itemBrand={items.itemBrand}
                />
              );
            })
          ) : (
            <div className=" w-full flex items-center justify-center">
              <div className="w-full flex items-center flex-col space-y-1">
                <p>No items have been listed</p>
                <img className="w-1/2" src={NoItems} alt="No items found" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex-col flex items-center space-y-1 border-b-1 border-lost-blue">
        <h1 className="underline font-bold text-lost-blue">Your Lost Items</h1>
        <div className="flex w-full items-center flex-wrap pb-4 space-x-2">
          {" "}
          {loadingLostItems ? (
            <div className=" w-full pt-[10%] flex items-center justify-center">
              <div className="flex w-full flex-col items-center space-y-2">
                <span className="bg-lost-blue">
                  <LoadingSpinner />
                </span>
                <p className="text-sm">Loading lost items</p>
              </div>
            </div>
          ) : lostItems && lostItems.length !== 0 ? (
            lostItems.map((items) => {
              return (
                <UserItemCard
                  key={items.id}
                  title={items.title}
                  image={items.image}
                  type={"lost"}
                  category={items.category}
                  uniqueIdentifier={items.uniqueIdentifier}
                  description={items.description}
                  foundDate={items.lostDate}
                  location={items.lostAt}
                  id={items.id}
                  color={items.color}
                  itemBrand={items.itemBrand}
                />
              );
            })
          ) : (
            <div className=" w-full flex items-center justify-center">
              <div className="w-full flex items-center flex-col space-y-1">
                <p>No items have been listed</p>
                <img className="w-1/2" src={NoItems} alt="No items found" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
