import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { SelectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-checkout-button.component";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span> Total: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use 4242 4242 4242 4242 Exp- 01/26 CVV - 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStatsToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: SelectCartTotal,
});
export default connect(mapStatsToProps)(CheckOutPage);
