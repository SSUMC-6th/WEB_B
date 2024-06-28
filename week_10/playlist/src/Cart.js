import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchCartItems,
    increase,
    decrease,
    clearCart,
    calculateTotals,
} from "./cartSlice";
import { CartIcon, ChevronDown, ChevronUp } from "./icons";

const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems, totalAmount, totalQuantity, loading, error } =
        useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems, dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        if (error === "404: Not Found") {
            alert("404 Error: The requested resource was not found.");
        }
        return (
            <div>
                <h1>Error Occurred</h1>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Cart Items</h1>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>Singer: {item.singer}</p>
                        <p>Price: {item.price}</p>
                        <img src={item.img} alt={item.title} width="100" />
                        <div>
                            <button onClick={() => dispatch(increase(item.id))}>
                                <ChevronUp />
                            </button>
                            <span>{item.amount}</span>
                            <button onClick={() => dispatch(decrease(item.id))}>
                                <ChevronDown />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Total Quantity: {totalQuantity}</h2>
                <h2>Total Amount: {totalAmount}</h2>
            </div>
        </div>
    );
};

export default Cart;
