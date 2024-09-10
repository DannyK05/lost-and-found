import LoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import { useGetAllUserFoundItemsQuery } from "../../../store/api/found";
import { useGetAllUserLostItemsQuery } from "../../../store/api/lost";
import UserItemCard from "./UserItemCard";
import Phone from "../../../assets/images/phone.jpg";
import NoItems from "../../../assets/images/no-items.png";

// const foundItems = [
//   {
//     id: 1,
//     image: Phone,
//     title: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//     itemBrand: "Tecno",
//   },
//   {
//     id: 2,
//     image: Phone,
//     title: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     foundAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     foundDate: "02/09/2024",
//     color: "Brown",
//     itemBrand: "Tecno",
//   },
// ];
// const lostItems = [
//   {
//     id: 1,
//     image: Phone,
//     title: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     lostAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     lostDate: "02/09/2024",
//     color: "Brown",
//     itemBrand: "Tecno",
//   },
//   {
//     id: 2,
//     image: Phone,
//     title: "A Tecno Phone",
//     category: "Electronics",
//     description: "A black tecno camon with brown pouch",
//     lostAt: "Odlt",
//     uniqueIdentifier: "Demonslayer Wallpaper",
//     lostDate: "02/09/2024",
//     color: "Brown",
//     itemBrand: "Tecno",
//   },
// ];

export default function ItemsListed() {
  const { data: lostItems, isLoading: loadingLostItems } =
    useGetAllUserLostItemsQuery();
  console.log(lostItems);
  const { data: foundItems, isLoading: loadingFoundItems } =
    useGetAllUserFoundItemsQuery();
  console.log(foundItems);

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
          ) : foundItems && foundItems.data.foundItems.length !== 0 ? (
            foundItems.data.foundItems.map((items) => {
              return (
                <UserItemCard
                  key={items.id}
                  title={items.title}
                  image={items.imageUrl}
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
                <img className="w-1/5" src={NoItems} alt="No items found" />
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
          ) : lostItems && lostItems.data.lostItemslength !== 0 ? (
            lostItems.data.lostItems.map((items) => {
              return (
                <UserItemCard
                  key={items.id}
                  title={items.title}
                  image={items.imageUrl}
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
                <img className="w-1/5" src={NoItems} alt="No items found" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
