// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import updateCartProductQuantity from "@Api/cart/updateCartProductQuantity";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: async (state, action) => {
      try {
        let { id, quantity } = action.payload;
        quantity++;

        console.log(id, quantity);
        // const { cart } = state;

        const res = await updateCartProductQuantity(id, { quantity });
        console.log(res);
        // const itemInCart = state.cart.find(
        //   (item) => item.id === action.payload.id
        // );
        // if (itemInCart) {
        //   itemInCart.quantity++;
        // } else {
        //   state.cart.push({ ...action.payload, quantity: 1 });
        // }
      } catch (e) {
        console.log(e);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
