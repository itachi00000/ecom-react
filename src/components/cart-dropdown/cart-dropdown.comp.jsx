import React from 'react';

import CustomButton from '../custom-button/custom-button.comp';

import './cart-dropdown.style.scss';

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
}
