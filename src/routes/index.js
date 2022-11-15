import { createBrowserRouter } from "react-router-dom";
import Home from "@Pages/home";
import Login from "@Pages/login";
import Register from "@Pages/register";
import PageSearch from "@Pages/search";
import HistoryOrder from "@Pages/historyorder";
import HistoryOrderDetail from "@Pages/historyorderdetail";
import Profile from "@Pages/profile";
import EditProfile from "@Pages/editprofile";
import PopularProducts from "@Pages/popularproducts";
import CategoryList from "@Pages/categorylist";
import Checkout from "@Pages/checkout";
import checkLoggedMiddleware from "@Middleware/checkLoggedMiddleware";

const router = createBrowserRouter([
  {
    path: "/",
    element: checkLoggedMiddleware(<Home />),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: checkLoggedMiddleware(<PageSearch />),
  },
  {
    path: "/historyorder",
    element: checkLoggedMiddleware(<HistoryOrder />),
  },
  {
    path: "/historyorder/:id",
    element: checkLoggedMiddleware(<HistoryOrderDetail />),
  },
  {
    path: "/profile",
    element: checkLoggedMiddleware(<Profile />),
  },
  {
    path: "/editprofile",
    element: checkLoggedMiddleware(<EditProfile />),
  },
  {
    path: "/popularproducts",
    element: checkLoggedMiddleware(<PopularProducts />),
  },
  {
    path: "/categories",
    element: checkLoggedMiddleware(<CategoryList />),
  },
  {
    path: "/checkout",
    element: checkLoggedMiddleware(<Checkout />),
  },
]);

export default router;
