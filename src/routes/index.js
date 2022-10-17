import { createBrowserRouter } from "react-router-dom";
import Home from "@Pages/home";
import Login from "@Pages/login";
import Register from "@Pages/register";
import PageSearch from "@Pages/search";
import HistoryOrder from "@Pages/historyorder";
import HistoryOrderDetail from "@Pages/historyorderdetail";
import Profile from "@Pages/profile";

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
]);

export default router;
