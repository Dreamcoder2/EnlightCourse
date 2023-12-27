import React from "react";
import { useSelector } from "react-redux";

const Overallprice = () => {
  const overallAmount = useSelector((state) => state.cart.overallamount);
  const overallQuantity = useSelector((state) => state.cart.overallquantity);

  return (
    <>
      <div>
        <h2>Total Summary</h2>
        <p>Total Quantity: {overallQuantity}</p>
        <p>Total Amount: ₹{overallAmount}</p>
      </div>
    </>
  );
};

export default Overallprice;
