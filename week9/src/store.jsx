import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // cart 관련 상태를 cartReducer가 관리하도록 설정합니다. 이렇게 설정함으로써, 스토어는 cart 상태의 변경사항을 처리할 수 있게 됩니다.
  },
});
