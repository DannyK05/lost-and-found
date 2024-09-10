import LoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import UserItemCard from "./UserItemCard";
import Phone from "../../../assets/images/phone.jpg";
import NoItems from "../../../assets/images/no-items.png";

const matchedItems = [
  // {
  //   id: 1,
  //   image: Phone,
  //   title: "A Tecno Phone",
  //   category: "Electronics",
  //   description: "A black tecno camon with brown pouch",
  //   lostAt: "Odlt",
  //   uniqueIdentifier: "Demonslayer Wallpaper",
  //   lostDate: "02/09/2024",
  //   color: "Brown",
  //   itemBrand: "Tecno",
  // },
  // {
  //   id: 2,
  //   image: Phone,
  //   title: "A Tecno Phone",
  //   category: "Electronics",
  //   description: "A black tecno camon with brown pouch",
  //   lostAt: "Odlt",
  //   uniqueIdentifier: "Demonslayer Wallpaper",
  //   lostDate: "02/09/2024",
  //   color: "Brown",
  //   itemBrand: "Tecno",
  // },
];
export default function ItemsMatch() {
  const loadingMatchedItems = false;
  return (
    <div className="w-full flex-col flex items-center space-y-1 border-b-1 border-lost-blue">
      <h1 className="underline font-bold text-lost-blue">
        Here are your matches
      </h1>
      <div className="flex w-full items-center flex-wrap space-x-2">
        {" "}
        {loadingMatchedItems ? (
          <div className=" w-full pt-[10%] flex items-center justify-center">
            <div className="flex w-full flex-col items-center space-y-2">
              <span className="bg-lost-blue">
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
                image={items.image}
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
          <div className=" w-full bg-white py-2 flex items-center justify-center">
            <div className="w-full flex items-center flex-col space-y-1">
              <p>No Match Found</p>
              <img className="w-1/2" src={NoItems} alt="No Match found" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
