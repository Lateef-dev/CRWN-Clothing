import { legacy_createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
middlewares.push(logger);  
}

export const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

const persistStorage = {store, persistor}

export default persistStorage;

// export default store;