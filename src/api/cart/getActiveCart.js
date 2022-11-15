import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getActiveCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const res = await axios.get("http://108.137.148.110/api/v1/cart", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export default getActiveCart;
