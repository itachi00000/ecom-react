import React from 'react';

import './checkout-item.style.scss';

function CheckoutItem({ cartItem: { id, imageUrl, name, quantity, price } }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`item${id}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
}

export default CheckoutItem;
