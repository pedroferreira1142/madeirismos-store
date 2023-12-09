import {call, put, takeLatest} from 'redux-saga/effects';
import client from 'store/shopifyAPI';
import {
    CHECKOUT_create_request,
    CHECKOUT_fetch_request,
    CHECKOUT_add_item_request,
    CHECKOUT_remove_item_request,
    createCheckoutFailure,
    createCheckoutSucess,
    fetchCheckoutFailure,
    fetchCheckoutSucess,
    addItemToCheckoutSucess,
    addItemToCheckoutFailure,
    removeItemFromCheckoutSucess,
    removeItemFromCheckoutFailure,
    updateItemQuantitySuccess,
    updateItemQuantityFailure,
    CHECKOUT_update_item_quantity_request,
    CHECKOUT_clear_all_request,
    clearCheckoutFailure,
    clearCheckoutSucess,
} from './actions';
import {toast} from 'react-toastify';

const createCheckout = async () => await client.checkout.create();

const fetchCheckout = async (checkoutId) => await client.checkout.fetch(checkoutId);

const addItemToCheckout = async (checkoutId, products) => await client.checkout.addLineItems(checkoutId, products);

const removeItemsfromCheckout = async (checkoutId, productsId) =>
    await client.checkout.removeLineItems(checkoutId, productsId);

const updateItemQuantity = async (checkoutId, products) => await client.checkout.updateLineItems(checkoutId, products);

const clearCheckout = async (checkoutId, products) => await client.checkout.updateLineItems(checkoutId, products);

/* clear checkout */
function* clearCheckoutSaga(action) {
    try {
        const response = yield call(clearCheckout, action.payload.checkoutId, action.payload.products);
        yield put(clearCheckoutSucess({checkout: response}));
        toast.warning('Todos os produtos foram removidos!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    } catch (e) {
        console.log(e.message);
        yield put(clearCheckoutFailure({error: e.message}));
        toast.info('Algo de errado aconteceu, a ação não foi realizada com sucesso', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }
}

/* Update item quantity */
function* updateItemQuantitySaga(action) {
    try {
        const response = yield call(updateItemQuantity, action.payload.checkoutId, action.payload.products);
        yield put(updateItemQuantitySuccess({checkout: response}));
    } catch (e) {
        console.log(e.message);
        yield put(updateItemQuantityFailure({error: e.message}));
        toast.info('Algo de errado aconteceu, a ação não foi realizada com sucesso', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }
}

/* remove item */
function* removeItemFromCheckoutSaga(action) {
    try {
        const response = yield call(removeItemsfromCheckout, action.payload.checkoutId, [...action.payload.productIds]);
        yield put(removeItemFromCheckoutSucess({checkout: response}));
        toast.info('Produto removido do carrinho!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    } catch (e) {
        console.log(e.message);
        yield put(removeItemFromCheckoutFailure({error: e.message}));
        toast.info('Algo de errado aconteceu, a ação não foi realizada com sucesso', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }
}

/* add item */
function* addItemToCheckoutSaga(action) {
    try {
        const response = yield call(addItemToCheckout, action.payload.checkoutId, [...action.payload.product]);
        yield put(addItemToCheckoutSucess({checkout: response}));
        toast.success('Produto adicionado ao carrinho!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    } catch (e) {
        console.log(e.message);
        yield put(addItemToCheckoutFailure({error: e.message}));
        toast.info('Algo de errado aconteceu, a ação não foi realizada com sucesso', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }
}

/* create checkout */
function* createCheckoutSaga() {
    try {
        const response = yield call(createCheckout);
        yield put(createCheckoutSucess({checkout: response}));
    } catch (e) {
        yield put(createCheckoutFailure({error: e.message}));
    }
}

/* fetch checkout */
function* fetchCheckoutSaga(action) {
    try {
        const response = yield call(fetchCheckout, action.payload);
        yield put(fetchCheckoutSucess({checkout: response}));
    } catch (e) {
        console.log(e.message);
        yield put(fetchCheckoutFailure({error: e.message}));
    }
}

function* checkoutSaga() {
    yield takeLatest(CHECKOUT_fetch_request, fetchCheckoutSaga);
    yield takeLatest(CHECKOUT_create_request, createCheckoutSaga);
    yield takeLatest(CHECKOUT_add_item_request, addItemToCheckoutSaga);
    yield takeLatest(CHECKOUT_remove_item_request, removeItemFromCheckoutSaga);
    yield takeLatest(CHECKOUT_clear_all_request, clearCheckoutSaga);
    yield takeLatest(CHECKOUT_update_item_quantity_request, updateItemQuantitySaga);
}

export default checkoutSaga;
