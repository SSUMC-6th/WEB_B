import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems";

const initialState = cartItems;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, amount: e.amount + 1 } : e
      );
    },
    decrease: (state, action) => {
      const updatedList = state.map((e) =>
        e.id === action.payload ? { ...e, amount: e.amount - 1 } : e
      );
      return updatedList.filter((e) => e.amount > 0);
    },
    clearCart: () => {
      return [];
    },
    calculateTotals: (state, action) => {
      let total = 0;
      for (let t = 0; t < state.length; t++) {
        total += state.amount;
      }
      return total;
    },
  },
});

export const { increase, decrease, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
