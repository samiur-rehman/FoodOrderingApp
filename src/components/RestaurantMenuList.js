import React, { useState } from "react";
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import useFetchRestaurantsMenu from "./utils/useFetchRestaurantsMenu";
import RestaurantCatergory from "./RestaurantCatergory";
import { ShimmerMenuList } from "./Shimmer";

const RestaurantMenuList = () => {
  const { resId } = useParams();
  const menuDetails = useFetchRestaurantsMenu(resId);
  const {
    name: restaurantName,
    cuisines,
    sla: deliveryTime,
    avgRating,
    totalRatingsString,
    areaName,
    locality,
    city,
    feeDetails: additionalDeliveryFee,
  } = menuDetails?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info || {};

  const { cards: menuList } =
    menuDetails?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR || {};
  const arrayWithItemCards = menuList?.filter((obj) =>
    obj?.card?.card?.hasOwnProperty("itemCards")
  );

  const [showItem, setShowItem] = useState(null);

  return !menuDetails ? (
    <ShimmerMenuList />
  ) : (
    <>
      <div className="flex flex-col justify-center items-center mb-20">
        <div className="w-8/12 my-6 lg:my-12 container px-6 flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-600">
              {restaurantName}
            </h4>
            <ul className="flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
              <li className="flex items-center mr-4">
                <span>{cuisines?.join(", ")}</span>
              </li>
              <li className="flex items-center mr-4 mt-4 md:mt-0">
                <span>{`${areaName}, ${locality}, ${city}`}</span>
              </li>
              <li className="flex items-center mt-4 md:mt-0">
                <span className="text-orange-400">
                  {additionalDeliveryFee?.message
                    ? parse(additionalDeliveryFee?.message)
                    : null}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="flex flex-col justify-center w-[100px] h-24 rounded-xl border-gray-300 border-solid border-2 divide-y divide-gray-400 px-[0.5]">
              <div className="flex justify-center">
                <span> ⭐️ {avgRating}</span>
              </div>
              <div className="flex justify-center">
                <span>{totalRatingsString}</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-8/12 space-y-4">
          {arrayWithItemCards?.map((item, index) => {
            return (
              <RestaurantCatergory
                key={item?.card?.card?.title}
                catergory={item}
                showItems={index === showItem ? true : false}
                setShowItems={() => setShowItem(index)}
                setShowItem={setShowItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuList;
