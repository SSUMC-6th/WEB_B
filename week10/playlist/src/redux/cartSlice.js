import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMusicData = createAsyncThunk(
  "fetch/fetchMusicData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/musics");
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 404) {
        return response.message;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  data: [],
  status: "",
  error: "none",
  total: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.data.find((e) => e.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.data.find((e) => e.id === action.payload);
      if (item) {
        item.amount -= 1;
      }
      state.data = state.data.filter((e) => e.amount > 0);
    },
    clearCart: (state) => {
      state.data = [];
    },
    calculateTotals: (state, action) => {
      state.total = state.data.reduce((acc, item) => acc + item.amount, 0);
      state.totalPrice = state.data.reduce(
        (acc, item) => acc + item.amount * item.price,
        0
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMusicData.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchMusicData.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
      cartSlice.caseReducers.calculateTotals(state);
    });
    builder.addCase(fetchMusicData.rejected, (state, action) => {
      state.status = "failed";
      state.error = "error";
      alert(action.payload.message);
    });
  },
});

export const { increase, decrease, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
