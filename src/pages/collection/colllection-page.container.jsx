import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from './collection-page.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionsPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionsPageContainer; 