import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 서버에서 cartItems를 가져오는 비동기 Thunk 생성
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8080/musics");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 액션 생성장 createSlice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    status: "idle",
    error: null,
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
      if (item && item.amount > 1) {
        item.amount -= 1;
      } else if (item && item.amount === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
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
        quantity += item.amount;
        total += item.amount * item.price;
      });
      state.totalQuantity = quantity;
      state.totalPrice = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
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

// 액션 : 상태를 변화시키기 위한 정보 패킷
// type : 액션의 유형
// payload : 액션을 하기 위해 필요한 데이터
