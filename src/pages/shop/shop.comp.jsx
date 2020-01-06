import React from 'react';

import SHOP_DATA from '../../shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.comp';

export default class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: Object.values(SHOP_DATA)
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, title, routeName, items }) => (
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
}
