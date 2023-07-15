import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-items/collection-items.component.jsx';
import { selectCollection } from '../../redux/shop/shop.selectors.js';

import './collection-page.styles.scss';
import { CollectionPageStyles, TitleText, ItemsContainer, CollectionItemContainer } from './collection-page.styles.jsx'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <CollectionPageStyles>
            <TitleText>{title}</TitleText>
            <ItemsContainer >
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </ItemsContainer >
        </CollectionPageStyles >
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);