import React from 'react';
import { connect } from 'react-redux';

// style & img
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

// redux-action,, reselect
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const mapStateToProps = state => ({
  itemCountRx: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHiddenRx: () => dispatch(toggleCartHidden())
});

function CartIcon({ toggleCartHiddenRx, itemCountRx }) {
  return (
    <div className="cart-icon" onClick={toggleCartHiddenRx}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCountRx}</span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
