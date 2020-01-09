import React from 'react';
import { connect } from 'react-redux';

// style & img
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

// action
import { toggleCartHidden } from '../../redux/cart/cart.action';

const mapStateToProps = ({ cart: { cartItems } }) => ({
  totalCartItemRx: cartItems.reduce(
    (totalItem, cItem) => totalItem + cItem.quantity,
    0
  )
});

const mapDispatchToProps = dispatch => ({
  toggleCartHiddenAct: () => dispatch(toggleCartHidden())
});

function CartIcon({ toggleCartHiddenAct, totalCartItemRx }) {
  return (
    <div className="cart-icon" onClick={toggleCartHiddenAct}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCartItemRx}</span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
