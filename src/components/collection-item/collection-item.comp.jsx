import React from 'react';
import { connect } from 'react-redux';

// comp
import CustomButton from '../custom-button/custom-button.comp';

import './collection-item.style.scss';

// action
import { addItem } from '../../redux/cart/cart.action';

const mapDispatchToProps = dispatch => ({
  addItemAct: item => dispatch(addItem(item))
});

function CollectionItem({ item, addItemAct }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItemAct(item)}>Add to Cart</CustomButton>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(CollectionItem);
