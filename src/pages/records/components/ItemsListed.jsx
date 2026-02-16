import { useGetAllUserFoundItemsQuery } from "../../../store/api/found";
import { useGetAllUserLostItemsQuery } from "../../../store/api/lost";

import LoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import NoItems from "../../../assets/images/no-items.png";

import { UserItemCard } from "./UserItemCard";

export const ItemsListed = () => {
  const { data: lostItems, isLoading: loadingLostItems } =
    useGetAllUserLostItemsQuery();
  const { data: foundItems, isLoading: loadingFoundItems } =
    useGetAllUserFoundItemsQuery();

  return (
    <div className="w-full border-b-1 border-lost-blue">
      <div className="w-full flex-col flex items-center space-y-1 border-b-1 border-lost-blue">
        <h1 className="underline font-bold text-lost-blue">Your Found Items</h1>

        <div className="w-full grid grid-cols-2 pb-4 gap-x-2 gap-y-4 lg:grid-cols-4">
          {loadingFoundItems ? (
            <div className="w-full flex items-center justify-center col-span-2 lg:col-span-4">
              <div className="w-full flex flex-col items-center space-y-2">
                <span className="p-2 rounded-full bg-lost-blue">
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
                  date={items.foundDate}
                  location={items.foundAt}
                  id={items.id}
                  color={items.color}
                  itemBrand={items.itemBrand}
                />
              );
            })
          ) : (
            <div className="w-full flex items-center justify-center col-span-2 lg:col-span-4">
              <div className="w-full flex items-center flex-col space-y-1">
                <p>No items have been listed</p>
                <img className="w-1/5" src={NoItems} alt="No items found" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col items-center space-y-1 border-b-1 border-lost-blue">
        <h1 className="text-lost-blue font-bold underline ">Your Lost Items</h1>
        <div className="w-full grid grid-cols-2 pb-4 gap-x-2 gap-y-4 lg:grid-cols-4">
          {loadingLostItems ? (
            <div className="w-full flex items-center justify-center col-span-2 pt-8 lg:col-span-4">
              <div className="w-full flex flex-col items-center space-y-2">
                <span className="p-2 bg-lost-blue rounded-full">
                  <LoadingSpinner />
                </span>
                <p className="text-sm">Loading lost items</p>
              </div>
            </div>
          ) : lostItems && lostItems.data.lostItems.length !== 0 ? (
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
                  date={items.lostDate}
                  location={items.lostAt}
                  id={items.id}
                  color={items.color}
                  itemBrand={items.itemBrand}
                />
              );
            })
          ) : (
            <div className=" w-full flex items-center justify-center col-span-2 lg:col-span-4">
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
};
