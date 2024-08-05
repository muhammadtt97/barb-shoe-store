import React, { useContext, useEffect, useCallback } from "react";
import "../../App.css";
import { CartContext } from "../../CartContext";

function PlaceOrder() {
  const [, setCart] = useContext(CartContext);

  const clearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="placeOrder-container">
      <h2 className="thankyou">Thank you for your order</h2>
      <p>
        Your order number is <strong>#2001539</strong>. We have emailed your
        order confirmation, and will send you an update when your order has
        shipped.
      </p>
      <br />
    </div>
  );
}

export default PlaceOrder;
