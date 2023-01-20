import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51MS4ghI0f92p2AfF2iAXSXtCXhPPwHJfZzC1FXqn8J5wHgqckTXnKdHS5SMHYA8ji6DsJvUlJ7Cw3GX3O8sHNfoU00RTrd1DMe";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Done");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLothing Payment"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
      allowRememberMe
    />
  );
};
export default StripeCheckoutButton;
