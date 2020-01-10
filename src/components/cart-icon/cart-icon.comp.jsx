import React from 'react';
import { connect } from 'react-redux';

// style & img
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

// redux-action,, reselect
import { selectCartItemsCount } from '../../redux/cart/car.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const mapStateToProps = state => ({
  itemCountRx: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHiddenAct: () => dispatch(toggleCartHidden())
});

function CartIcon({ toggleCartHiddenAct, itemCountRx }) {
  return (
    <div className="cart-icon" onClick={toggleCartHiddenAct}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCountRx}</span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
