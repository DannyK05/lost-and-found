import LoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import {
  useDeleteFoundItemByIdMutation,
  useGetAllUserFoundItemsMutation,
} from "../../../store/api/found";
import {
  useDeleteLostItemByIdMutation,
  useGetAllUserLostItemsMutation,
} from "../../../store/api/lost";
import UserItemCard from "./UserItemCard";

export default function ItemsListed() {
  const { data: lostItems, isLoading: loadingLostItems } =
    useGetAllUserLostItemsMutation();
  const { data: foundItems, isLoading: loadingFoundItems } =
    useGetAllUserFoundItemsMutation();

  const [deleteFoundItem] = useDeleteFoundItemByIdMutation({});
  const [deleteLostItem] = useDeleteLostItemByIdMutation({});

  const handleDeleteFoundItems = async (id) => {
    try {
      const response = await deleteFoundItem(id);
    } catch (err) {}
  };
  const handleDeleteLostItems = async (id) => {
    try {
      const response = await deleteLostItem(id);
    } catch (err) {}
  };
  return (
    <div className="w-full border-b-1 border-lost-blue">
      <div className="w-full border-b-1 border-lost-blue">
        <h1>Your Found Items</h1>
        <div className="flex items-center space-x-2">
          {loadingFoundItems ? (
            <div className=" w-full pt-[10%] flex items-center justify-center">
              <div className="flex flex-col items-center space-y-2">
                <span>
                  <LoadingSpinner />
                </span>
                <p className="text-sm">Loading found items</p>
              </div>
            </div>
          ) : foundItems ? (
            foundItems.map((items) => {
              <UserItemCard
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
                deleteCard={handleDeleteFoundItems(items.id)}
              />;
            })
          ) : (
            <p>No items have been listed</p>
          )}
        </div>
      </div>
      <div className="w-full border-b-1 border-lost-blue">
        <h1>Your Lost Items</h1>
        <div>
          {" "}
          {loadingLostItems ? (
            <div className=" w-full pt-[10%] flex items-center justify-center">
              <div className="flex flex-col items-center space-y-2">
                <span>
                  <LoadingSpinner />
                </span>
                <p className="text-sm">Loading lost items</p>
              </div>
            </div>
          ) : lostItems ? (
            lostItems.map((items) => {
              <UserItemCard
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
                deleteCard={handleDeleteLostItems(items.id)}
              />;
            })
          ) : (
            <p>No items have been listed</p>
          )}
        </div>
      </div>
    </div>
  );
}
