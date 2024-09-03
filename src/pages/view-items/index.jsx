import Card from "../../components/card";
import Layout from "../../layout";
import Phone from "../../assets/images/phone.jpg";
import CloseXIcon from "../../assets/icons/CloseXIcon";
import { useState } from "react";
const foundItems = [
  {
    id: 1,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
  {
    id: 2,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
  {
    id: 3,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
  {
    id: 4,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
  {
    id: 5,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
  {
    id: 6,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
  {
    id: 7,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
  {
    id: 8,
    imageUrl: Phone,
    name: "A Tecno Phone",
    category: "Electronics",
    description: "A black tecno camon with brown pouch",
    foundAt: "Odlt",
    uniqueIdentifier: "Demonslayer Wallpaper",
    foundDate: "02/09/2024",
    color: "Brown",
  },
];
export default function ViewItemsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Layout>
        <h1>View Items</h1>
        <div className="flex w-full flex-wrap items-center space-x-3 space-y-2 px-2 py-4 ">
          {" "}
          {foundItems ? (
            foundItems.map((item) => (
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
            <div className="flex items-center justify-center">
              <p>No items found</p>
            </div>
          )}
        </div>
        <button
          onMouseEnter={toggleVisibility}
          onMouseLeave={toggleVisibility}
          className={`flex ${
            isVisible ? "" : "rounded-full"
          } items-center space-x-2  p-2 fixed z-[10000] right-0 bottom-1 bg-lost-blue`}
        >
          <span className="text-white rounded-full rotate-45 ">
            <CloseXIcon />
          </span>
          <p className={`${isVisible ? "" : "hidden"} text-white`}>
            List a found item
          </p>
        </button>
      </Layout>
    </>
  );
}
