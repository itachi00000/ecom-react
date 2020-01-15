import React from 'react';
import { connect } from 'react-redux';

// comps.
import CollectionPreview from '../collection-preview/collection-preview.comp';

// reselect
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

//
const mapStateToProps = state => ({
  collectionsRx: selectCollectionForPreview(state)
});

function CollectionOverview({ collectionsRx }) {
  return (
    <div className="collection-overview">
      {collectionsRx.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
          routeName={routeName}
        />
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(CollectionOverview);
