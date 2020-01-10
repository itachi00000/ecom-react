import React from 'react';
import { connect } from 'react-redux';

import './checkout.style.scss';

// comp
import CheckoutItem from '../../components/checkout-item/checkout-item.comp';

// reselect
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

const mapStateToProps = state => ({
  cartItemsRx: selectCartItems(state),
  totalPriceRx: selectCartTotal(state)
});

function CheckoutPage({ cartItemsRx, totalPriceRx }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desc.</span>
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
      {cartItemsRx.map(cItem => (
        <CheckoutItem key={cItem.id} cartItem={cItem} />
      ))}
      <div className="total">
        <span>Total: ${totalPriceRx}</span>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(CheckoutPage);
