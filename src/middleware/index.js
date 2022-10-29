import { Navigate } from "react-router-dom";

// Penamaan file kalau bisa dispesifikasiin jangan hanya index
// misalnya di middleware ini namanya checkLoggedMiddleware.js

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
