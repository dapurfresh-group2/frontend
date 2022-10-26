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
import middleware from "../middleware";

const router = createBrowserRouter([
  {
    path: "/",
    element: middleware(<Home />),
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
    element: middleware(<PageSearch />),
  },
  {
    path: "/historyorder",
    element: middleware(<HistoryOrder />),
  },
  {
    path: "/historyorder/:id",
    element: middleware(<HistoryOrderDetail />),
  },
  {
    path: "/profile",
    element: middleware(<Profile />),
  },
  {
    path: "/editprofile",
    element: middleware(<EditProfil />),
  },
  {
    path: "/popularproducts",
    element: middleware(<ProdukTerpopuler />),
  },
  {
    path: "/categories",
    element: middleware(<ListKategori />),
  },
  {
    path: "/checkout",
    element: middleware(<Checkout />),
  },
]);

export default router;
