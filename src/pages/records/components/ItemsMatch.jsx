import LoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import NoItems from "../../../assets/images/no-items.png";

import { UserItemCard } from "./UserItemCard";

const matchedItems = [];

export const ItemsMatch = () => {
  const loadingMatchedItems = false;

  return (
    <div className="w-full flex flex-col items-center space-y-1 border-b-1 border-lost-blue">
      <h1 className="underline font-bold text-lost-blue">
        Here are your matches
      </h1>

      <div className="w-full grid grid-cols-2 pb-4 gap-x-2 gap-y-4 lg:grid-cols-4">
        {loadingMatchedItems ? (
          <div className="w-full flex items-center justify-center col-span-2 pt-8 lg:col-span-4">
            <div className="flex w-full flex-col items-center space-y-2">
              <span className="p-2 rounded-full bg-lost-blue">
                <LoadingSpinner />
              </span>
              <p className="text-sm">Loading lost items</p>
            </div>
          </div>
        ) : matchedItems && matchedItems.length !== 0 ? (
          matchedItems.map((items) => {
            return (
              <UserItemCard
                key={items.id}
                title={items.title}
                image={items.imageUrl}
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
              <p>No Match Found</p>
              <img className="w-1/5" src={NoItems} alt="No Match found" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
