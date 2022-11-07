// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import getActiveCart from "@Api/cart/getActiveCart";
import updateCartProductQuantity from "@Api/cart/updateCartProductQuantity";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  extraReducers:
   {
    [getActiveCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [updateCartProductQuantity.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
console.log(cartSlice.reducer);
export const { addToCart, incrementQuantity, decrementQuantity, getCart } =
  cartSlice.actions;
