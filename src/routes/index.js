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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <PageSearch />,
  },
  {
    path: "/historyorder",
    element: <HistoryOrder />,
  },
  {
    path: "/historyorder/:id",
    element: <HistoryOrderDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editprofile",
    element: <EditProfil />,
  },
  {
    path: "/popularproducts",
    element: <ProdukTerpopuler />,
  },
  {
    path: "/categories",
    element: <ListKategori />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

export default router;
