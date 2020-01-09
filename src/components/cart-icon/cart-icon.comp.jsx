import React from 'react';
import { connect } from 'react-redux';

// style & img
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

// action
import { toggleCartHidden } from '../../redux/cart/cartAction';

const mapDispatchToProps = dispatch => ({
  toggleCartHiddenAct: () => dispatch(toggleCartHidden())
});

function CartIcon({ toggleCartHiddenAct }) {
  return (
    <div className="cart-icon" onClick={toggleCartHiddenAct}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(CartIcon);
