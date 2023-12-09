import {call, put, takeLatest} from 'redux-saga/effects';
import client from 'store/shopifyAPI';
import {
    fetchAllProductsSucess,
    fetchAllProductsFailure,
    FETCH_PRODUCT_REQUEST,
    fetchProductByIdSucess,
    fetchProductByIdFailure,
    FETCH_PRODUCT_BY_ID_REQUEST,
} from './actions';

const fetchAllProductsShopify = async () => await client.product.fetchAll();
const fetchProductWithIdShopify = async (id) => await client.product.fetch(id);

function* fecthProductsSaga() {
    try {
        const response = yield call(fetchAllProductsShopify);
        yield put(fetchAllProductsSucess({products: response}));
    } catch (e) {
        yield put(fetchAllProductsFailure({error: e.message}));
    }
}

function* fetchProductsById(action) {
    try {
        const response = yield call(fetchProductWithIdShopify, action.payload);
        yield put(fetchProductByIdSucess({product: response}));
    } catch (e) {
        yield put(fetchProductByIdFailure({error: e.message}));
    }
}

function* productSaga() {
    yield takeLatest(FETCH_PRODUCT_REQUEST, fecthProductsSaga);
    yield takeLatest(FETCH_PRODUCT_BY_ID_REQUEST, fetchProductsById);
}

export default productSaga;
