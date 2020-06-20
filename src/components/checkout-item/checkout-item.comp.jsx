/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.style.scss';

// action
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
  removeItemRx: item => dispatch(removeItem(item)),
  addItemRx: item => dispatch(addItem(item)),
  clearItemRx: item => dispatch(clearItem(item))
});

function CheckoutItem({ cartItem, removeItemRx, addItemRx, clearItemRx }) {
  const { id, imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`item${id}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItemRx(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItemRx(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span onClick={() => clearItemRx(cartItem)} className="remove-button">
        &#10005;
      </span>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
