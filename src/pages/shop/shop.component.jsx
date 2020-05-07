import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`/crown-clothing/${match.path}`} component={CollectionsOverview} />
    <Route path={`/crown-clothing/${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;