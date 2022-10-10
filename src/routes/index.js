import { createBrowserRouter } from "react-router-dom";
import About from "@Pages/about";
import Home from "@Pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  }
]);

export default router;
