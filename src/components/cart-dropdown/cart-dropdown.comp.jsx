import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.style.scss';

// comp
import CustomButton from '../custom-button/custom-button.comp';
import CartItem from '../cart-item/cart-item.comp';

// action, reselect
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const mapStateToProps = state => ({
  cartItemsRx: selectCartItems(state)
});

function CartDropdown({ cartItemsRx, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      {cartItemsRx.length > 0 ? (
        cartItemsRx.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}

      <div className="cart-items">
        <CustomButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
        >
          CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
}
export default withRouter(connect(mapStateToProps)(CartDropdown));
