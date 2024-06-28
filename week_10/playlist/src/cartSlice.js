import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    loading: false,
    error: null,
};

// createAsyncThunk를 사용하여 서버로부터 데이터를 받아오는 비동기 함수 생성
export const fetchCartItems = createAsyncThunk(
    "cart/fetchCartItems",
    async () => {
        try {
            const response = await axios.get("http://localhost:8080/musics");
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                throw new Error("404: Not Found");
            } else {
                throw new Error("Failed to fetch cart items");
            }
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increase: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload
            );
            if (item) {
                item.amount++;
            }
        },
        decrease: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload
            );
            if (item) {
                item.amount--;
                if (item.amount < 1) {
                    state.cartItems = state.cartItems.filter(
                        (cartItem) => cartItem.id !== item.id
                    );
                }
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        calculateTotals: (state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
                total += item.price * item.amount;
                quantity += item.amount;
            });
            state.totalAmount = total;
            state.totalQuantity = quantity;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.loading = false;
                state.cartItems = action.payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
    cartSlice.actions;

export default cartSlice.reducer;
