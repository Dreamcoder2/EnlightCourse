import { useDispatch, useSelector } from "react-redux";
import ProductListitem from "../Components/ProductListitem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
import { useNavigate } from "react-router-dom";
import React from "react";
import Overallprice from "../Components/Overallprice";

export default function Cart() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListitem
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <Overallprice />
          <button
            className="btn btn-success"
            onClick={() => navigate("/checkout")}
          >
            Go to Checkout
          </button>
        </>
      ) : (
        <h3>No Items in the cart</h3>
      )}
    </div>
  );
}
