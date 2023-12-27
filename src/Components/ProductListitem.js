import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOverallPrice, setOverallQuantity } from "../redux/reducer/cart";

export default function ProductListitem(props) {
  const dispatch = useDispatch();

  const { price, count, discountPercentage } = props;

  const calculateSubtotal = () => {
    return price * count;
  };
  const calculateTotalAmount = () => {
    return price * count - (price * count * discountPercentage) / 100;
  };

  const cartItems = useSelector((state) => state.cart.list);

  const overallQuantity = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );
  dispatch(setOverallQuantity(overallQuantity));
  const overallAmount = cartItems.reduce(
    (total, item) => total + calculateTotalAmount(),
    0
  );
  console.log(overallAmount);
  dispatch(setOverallPrice(overallAmount));
  const [hasPrintedTotalSummary, setHasPrintedTotalSummary] = useState(false);

  return (
    <>
      <div>
        <div className=" m-4 d-flex align-items-center justify-content-center">
          <img
            src={props.thumbnail}
            height={150}
            width={180}
            alt={props.title}
            className="images me-5"
          />

          <h5 className="card-title">{props.title}</h5>
          <h6 className="mt-2 me-4">Price: {`₹${props.price}`}</h6>
          <h6 className="mt-2 me-4">Discount:{props.discountPercentage}%</h6>
          <h6 className="mt-2 me-4">Rating:{props.rating}</h6>

          <button className="btn btn-danger ms-3" onClick={props.incrementItem}>
            +
          </button>
          <span className="ms-3">Quantity{props.count}</span>
          <button className="btn btn-danger ms-3" onClick={props.decrementItem}>
            -
          </button>
          <button className="btn btn-danger ms-3" onClick={props.removeItem}>
            Remove
          </button>
        </div>
        <p>Subtotal: ₹{calculateSubtotal()}</p>
        <p>Total Quantity: {count}</p>
        <p>Total Amount: ₹{calculateTotalAmount()}</p>
      </div>

      {/* Update the state variable after rendering Total Summary */}
      {!hasPrintedTotalSummary && setHasPrintedTotalSummary(true)}
    </>
  );
}
