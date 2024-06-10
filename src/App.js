import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenuList from "./components/RestaurantMenuList";
import { ShimmerCard } from "./components/Shimmer";
const GroceryModule = lazy(() => import("./components/grocery/Grocery"));
const Contact = lazy(() => import("./components/Contact"));
import userContext from "./components/utils/userContext";
import { Provider } from "react-redux";
import storeApp from "./components/store/storeApp";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function AppLayOut() {
  const [userName, setUserName] = useState();

  useEffect(() => setUserName("Sami ur Rehman"), []);

  return (
    <Provider store={storeApp}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </userContext.Provider>
    </Provider>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenuList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <GroceryModule />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
