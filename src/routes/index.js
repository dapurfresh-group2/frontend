import { createBrowserRouter } from "react-router-dom";
import Home from "@Pages/home";
import Login from "@Pages/login";
import Register from "@Pages/register";
import PageSearch from "@Pages/search";
import HistoryOrder from "@Pages/historyorder";
import Profil from "@Pages/profil";
import EditProfil from "@Pages/editprofil";

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
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/editprofil",
    element: <EditProfil />,
  },
]);

export default router;
