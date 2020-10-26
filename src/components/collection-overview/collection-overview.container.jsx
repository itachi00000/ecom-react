import { connect } from 'react-redux';
import { compose } from 'redux';

// reselect
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

// hoc
import WithSpinner from '../with-spinner/with-spinner.comp';

// comp
import CollectionOverview from './collection-overview.comp';

//
const mapStateToProps = state => ({
  isLoading: selectIsCollectionFetching(state)
});

//
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// const CollectionOverviewContainer = connect(
//   mapStateToProps(WithSpinner(CollectionOverview))
// );

export default CollectionOverviewContainer;
