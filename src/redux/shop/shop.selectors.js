import { createSelector } from 'reselect';

// selectSample(state)
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// converting obj
export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => Object.values(collections)
  // OR Object.keys(collections).map(key => collections[key])
);

// currying function
// ** I use the Object.values as of now
// it uses obj['params_here'] to access the 'id'
// use object notation, accessing based on collectionId
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collectionsByCollection => collectionsByCollection[collectionUrlParam]
  );
