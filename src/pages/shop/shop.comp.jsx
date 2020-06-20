import React from 'react';
import { Route } from 'react-router-dom';

// pages
import CollectionPage from '../collection/collection.comp';

// comps.
import CollectionOverview from '../../components/collection-overview/collection-overview.comp';

function ShopPage({ match }) {
  // display overview OR (ex. '/shop')
  // display specific collection based on params (ex. '/shop/hats')
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
