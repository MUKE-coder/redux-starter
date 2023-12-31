import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = [
  {
    id: 1,
    title: "Camera 1",
    price: 300,
    qty: 1,
  },
];

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, qty } = action.payload;
      state.push({ id, title, price, qty });
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id === cartId);
    },
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
