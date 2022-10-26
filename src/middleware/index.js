import { Navigate } from "react-router-dom";

export default function middleware(page) {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" replace />;
    } else {
      return page;
    }
  } catch (error) {}
}
