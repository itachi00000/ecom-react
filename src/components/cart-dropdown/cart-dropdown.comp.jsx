import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.style.scss';

// comp
import CustomButton from '../custom-button/custom-button.comp';
import CartItem from '../cart-item/cart-item.comp';

// reselect
import { selectCartItems } from '../../redux/cart/car.selectors';

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(CartDropdown);
