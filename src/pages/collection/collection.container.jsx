import { connect } from 'react-redux';
import { compose } from 'redux';

// reselect
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// hoc
// this return new component either spinner-comp or wrapped-comp
import WithSpinner from '../../components/with-spinner/with-spinner.comp';

// comp-page
import CollectionPage from './collection.comp';

//
const mapStateToProps = state => ({
  isLoading: !selectIsCollectionsLoaded(state) // check for empty or object
});

//
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
