import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import cartItems from '../constants/cartItems';


export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:8080/musics');
    return response.data;
  } catch (error) {
    return rejectWithValue('데이터를 가져오는 중 에러가 발생했습니다. 잘못된 경로일 수 있습니다.');
  }
});


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    amount: 0,
    total: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    increase: (state, action) => {
      console.log('increase action called'); // 디버깅 로그 추가
      const cartItem = state.cartItems.find(item => item.id === action.payload);
      if (cartItem) {
        cartItem.amount += 1;
      }
    },
    decrease: (state, action) => {
      console.log('decrease action called'); // 디버깅 로그 추가
      const cartItem = state.cartItems.find(item => item.id === action.payload);
      if (cartItem) {
        cartItem.amount -= 1;
        if (cartItem.amount < 1) {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount * parseFloat(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;
        state.error = null;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});


export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
