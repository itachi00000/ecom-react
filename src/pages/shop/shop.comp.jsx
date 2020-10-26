import React from 'react';
import { Route } from 'react-router-dom';

// container
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {}

  render() {
    // display overview OR (ex. '/shop')
    // display specific collection based on params (ex. '/shop/hats')
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default ShopPage;

//
// routeProps = history, match, etc.
// does it includes comp-props??
