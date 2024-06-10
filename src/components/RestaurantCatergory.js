import React from "react";
import ItemList from "./ItemList";

const RestaurantCatergory = ({
  catergory,
  showItems,
  setShowItems,
  setShowItem,
}) => {
  const handleClick = () => {
    setShowItems();
    if (showItems) {
      setShowItem(false);
    }
  };
  return (
    <div>
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg rounded-b-none bg-gray-100 p-4 text-gray-900"
        onClick={handleClick}
      >
        <span className="font-medium">
          {`${catergory?.card?.card?.title} (${catergory?.card?.card?.itemCards?.length})`}
        </span>

        <svg
          className={
            showItems
              ? "h-5 w-5 shrink-0 transition duration-300"
              : "h-5 w-5 shrink-0 transition duration-300 rotate-180"
          }
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      {showItems && <ItemList menu={catergory?.card?.card?.itemCards} />}
    </div>
  );
};

export default RestaurantCatergory;
