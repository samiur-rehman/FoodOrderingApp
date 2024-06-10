import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./utils/constant";
import useOnlineStatus from "./utils/useOnlineStatus";
import userContext from "./utils/userContext";

const Header = () => {
  const [buttonTxt, setButtonTxt] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.item);
  return (
    <div className="flex pr-3 border-solid border-black justify-between bg-gray-100 shadow-md ">
      <div className="w-32">
        <img className="mx-4" alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-2">Online : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:underline">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 hover:underline">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-2 hover:underline">
            <Link to="/contact">Contact US </Link>
          </li>
          <li className="px-2 hover:underline">
            <Link to="/cart">
              Cart -({cartItems.length}
              {cartItems.length > 1 ? " items" : " item"})
            </Link>
          </li>
          <li className="px-2 hover:underline">{loggedInUser}</li>
          <li className="px-2">
            <button
              className="min-w-auto w-20 h-6 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold"
              onClick={() => {
                buttonTxt === "Login"
                  ? setButtonTxt("Logout")
                  : setButtonTxt("Login");
              }}
            >
              {buttonTxt}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
