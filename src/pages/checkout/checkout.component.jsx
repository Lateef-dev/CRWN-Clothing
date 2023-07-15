import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-items/checkout-items.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';
import { CheckoutPageStyles, CheckoutHeaderStyles, HeaderBlockStyles, TotalContainer, TestWarningContainer } from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageStyles>
    <CheckoutHeaderStyles>
      <HeaderBlockStyles>
        <span>Product</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Description</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Quantity</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Price</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Remove</span>
      </HeaderBlockStyles>
    </CheckoutHeaderStyles>
    {
      cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
    }
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*<br />
      4242 4242 4242 4242 - Exp: 01/24 - CVV: 123

    </TestWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageStyles >
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);  