import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action.js';

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container.jsx";
import CollectionsPageContainer from '../collection/colllection-page.container.jsx';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapShot => {
            convertCollectionsSnapshotToMap(snapShot)
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}
                />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);














































