import { createBrowserRouter } from "react-router-dom";
import Home from "@Pages/home";
import Login from "@Pages/login";
import Register from "@Pages/register";
import PageSearch from "@Pages/search";
import HistoryOrder from "@Pages/historyorder";
import HistoryOrderDetail from "@Pages/historyorderdetail";
import Profile from "@Pages/profile";
import EditProfil from "@Pages/editprofil";
import ProdukTerpopuler from "@Pages/produkterpopuler";
import ListKategori from "@Pages/listkategori";
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
    element: checkLoggedMiddleware(<EditProfil />),
  },
  {
    path: "/popularproducts",
    element: checkLoggedMiddleware(<ProdukTerpopuler />),
  },
  {
    path: "/categories",
    element: checkLoggedMiddleware(<ListKategori />),
  },
  {
    path: "/checkout",
    element: checkLoggedMiddleware(<Checkout />),
  },
]);

export default router;
