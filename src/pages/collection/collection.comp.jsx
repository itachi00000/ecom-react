import React from 'react';
import { connect } from 'react-redux';

import './collection.style.scss';

// comps.
import CollectionItem from '../../components/collection-item/collection-item.comp';

// reselect
import { selectCollection } from '../../redux/shop/shop.selectors';

// it use currying, so it can use its own props?
// display collection based on params.collectionId
const mapStateToProps = (state, ownProps) => ({
  collectionRx: selectCollection(ownProps.match.params.collectionId)(state)
});

function CollectionPage({ collectionRx }) {
  const { title, items } = collectionRx;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(CollectionPage);
