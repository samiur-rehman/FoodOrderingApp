import { IMG_URL } from "./utils/constant";

const ResturantCard = ({ restaurant }) => {
  // console.log("restaurant", restaurant);
  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    cuisines,
    sla: deliveryTime,
    totalRatingsString,
    areaName,
    locality,
  } = restaurant?.info;

  return (
    <div className=" w-[400px] relative block rounded-lg p-4 shadow-sm shadow-indigo-100 overflow-hidden border border-gray-100 hover:border-gray-400 hover:border-x-1 hover:border-t-1 hover:border-b-0">
      <img
        alt="Home"
        src={IMG_URL + cloudinaryImageId}
        className="h-56 w-full rounded-md object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">{costForTwo}</dd>
          </div>

          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">{name}</dd>
          </div>
        </dl>

        <div className="mt-2 flex flex-wrap gap-1">
          {cuisines
            ?.filter((i, index) => index < 4)
            .map((item, key) => (
              <span
                key={key}
                className="whitespace-nowrap rounded-full bg-purple-50 px-2.5 py-0.5 text-xs text-purple-500"
              >
                {item}
              </span>
            ))}
        </div>

        <div className="mt-4 flex items-center gap-[1.2rem] text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">{totalRatingsString} reviews </p>

              <p className="font-medium">{avgRating} Out of 5.0</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Delivery</p>

              <p className="font-medium">
                {deliveryTime?.deliveryTime} minutes
              </p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="11" r="3" />{" "}
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">{areaName}</p>

              <p className="font-medium">{locality}</p>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
    </div>
  );
};

export default ResturantCard;
