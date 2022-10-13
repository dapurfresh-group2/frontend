import { createBrowserRouter } from "react-router-dom";
import Home from "@Pages/home";
import Login from "@Pages/login";
import Register from "@Pages/register";
import PageSearch from "@Pages/search";
import NotFound from "@Pages/notfound";
import HistoryOrder from "@Pages/historyorder";

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
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/historyorder",
    element: <HistoryOrder />,
  },
]);

export default router;
