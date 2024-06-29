import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  calculateTotals,
} from "./cartSlice.jsx";
import { CartIcon, ChevronUp, ChevronDown } from "./constants/icons";
import "./App.css"; // CSS 파일 임포트

function App() {
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCartItems());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart, dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = (
      <div className="playlist-container">
        {cart.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt={item.title} />
            <div className="info">
              <h3>
                {item.title} | {item.singer}
              </h3>
              <p>{item.price}원</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                <ChevronDown />
              </button>
              <span>{item.amount}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                <ChevronUp />
              </button>
              <button onClick={() => dispatch(removeItem(item.id))}>
                제거
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <div className="header">
        <h1 className="title">UMC PlayList</h1>
        <div className="cart-icon-container">
          <CartIcon />
          <span className="total-items">{totalQuantity}</span>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => dispatch(clearCart())}>장바구니 초기화</button>
      </div>
      <div className="summary">
        <p>전체 수량: {totalQuantity}</p>
        <p>전체 금액: {totalPrice}원</p>
      </div>
      {content}
    </div>
  );
}

export default App;
