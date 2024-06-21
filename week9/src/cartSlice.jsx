import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./constants/cartItems"; // cartItems의 경로 확인

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartItems, // 초기 상태를 cartItems로 설정
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount -= 1;
        if (item.amount < 1) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotals: (state) => {
      let total = 0;
      let quantity = 0;
      state.items.forEach((item) => {
        total += item.price * item.amount;
        quantity += item.amount;
      });
      state.totalPrice = total;
      state.totalQuantity = quantity;
    },
  },
});

export const {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
