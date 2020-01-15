import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => Object.values(collections)
);

// currying function
// ** I use the Object.values as of now
// it uses obj['params_here'] to access the 'id'
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );
