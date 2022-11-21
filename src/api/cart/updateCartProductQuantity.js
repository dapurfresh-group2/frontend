import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const updateCartProductQuantity = createAsyncThunk(
  "cart/updateCart",
  async ({ id, quantity }) => {
    try {
      const res = await axios.post(
        `http://108.137.148.110/api/v1/cart/post-product/${id}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data.data;
    } catch (error) {
      return error;
    }
  }
);

export default updateCartProductQuantity;
