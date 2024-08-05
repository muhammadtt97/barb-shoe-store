import React, { useContext } from "react";
import { ShippingContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { selectTotalAmount, selectProducts } from "../../store";

function OrderSummary() {
  const products = useSelector(selectProducts);
  const cartProducts = products.filter((product) => product.added);
  let totalAmount = useSelector(selectTotalAmount);

  const [ShippingState] = useContext(ShippingContext);
  const { first_name, last_name, address, city, state, country, zip_code } =
    ShippingState;

  return (
    <div className="place-order-parent">
      <div className="place-order-container">
        <h1>Order Summary</h1>
        <br />

        <section className="items-list">
          {cartProducts.map((product, index) => {
            const { id, title: name, price, quantity } = product;
            return (
              <div key={id} className="items-container">
                <p className="left">
                  {index + 1}.&nbsp; {name}(
                  <span className="item-quantity">{quantity}</span>)
                </p>
                <p className="right">
                  <strong>${price.toFixed(2)}</strong>
                </p>
                <br />
                <br />
              </div>
            );
          })}
        </section>

        <section className="order-totals">
          <div>
            <br />
            <br />
            <p className="left">Delivery</p>
            <p className="right">
              <strong>Free</strong>
            </p>
            <br />
            <br />
          </div>

          <div>
            <p className="left">Total</p>
            <p className="right">
              <strong>${totalAmount.toFixed(2)}</strong>
            </p>
            <br />
            <br />
          </div>
        </section>

        <section className="shipping-container">
          <h2>( Shipping Details )</h2>
          <br />
          <p>
            {first_name} {last_name}
          </p>
          <br />
          <p>
            {address}, {city}, {state}, {zip_code}, {country}
          </p>
          <br />
          <p>Payment: "Cash On Delivery"</p>
          <br />
        </section>

        <section className="action-buttons">
          <br />
          <br />
          <Link to="/checkout">
            <Button
              variant="contained"
              className="checkout-btn"
              type="button"
              color="primary"
            >
              Back
            </Button>
          </Link>
          <Link to="/placeorder">
            <Button
              variant="contained"
              className="checkout-btn"
              type="button"
              color="primary"
            >
              Place Order
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default OrderSummary;
