import { useEffect, useState } from "react";
import { Menu_API, proxyUrl } from "./constant";

export const useFetchRestaurantsMenu = (resId) => {
  const [menuDetails, setMenuDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(proxyUrl + Menu_API + resId);
    const dataInJson = await data.json();
    setMenuDetails(dataInJson?.data);
  };
  return menuDetails;
};

export default useFetchRestaurantsMenu;
