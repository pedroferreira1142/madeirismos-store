import {applyMiddleware, createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import productsReducer from './products/reducer';
import productSaga from './products/saga';
import collectionsReducer from './collections/reducer';
import collectionSaga from './collections/saga';
import cartReducer from './cart/reducer';
import checkoutSaga from './cart/saga';
import UserReducer from './user/reducer';
import UserSaga from './user/saga';

const RootReducer = combineReducers({
    products: productsReducer,
    collections: collectionsReducer,
    checkout: cartReducer,
    user: UserReducer,
});

function* rootSaga() {
    yield fork(productSaga);
    yield all([fork(collectionSaga)]);
    yield fork(checkoutSaga);
    yield fork(UserSaga);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
//rootSaga is a combination of all sagas present in your app.
