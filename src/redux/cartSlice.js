// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import getActiveCart from "@Api/cart/getActiveCart";
import updateCartProductQuantity from "@Api/cart/updateCartProductQuantity";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  extraReducers: {
    [getActiveCart.fulfilled]: (state, action) => {
      if (action.payload === "cart active not found") {
        state.cart = [];
      } else {
        state.cart = action.payload;
      }
    },
    [updateCartProductQuantity.fulfilled]: (state, action) => {
      return;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, getCart } =
  cartSlice.actions;
