import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.comonent";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem}></CartItem>
      ))}
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStatsToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStatsToProps)(CartDropDown);
