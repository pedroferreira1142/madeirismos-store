import {createSelector} from 'reselect';

const getPending = (state) => state.products.pending;
const getError = (state) => state.products.error;
const getProducts = (state) => state.products.products;
const getProduct = (state) => state.products.product;

export const getErrorSelector = createSelector(getError, (error) => error);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getProductsSelector = createSelector(getProducts, (products) => products);

export const getProductSelector = createSelector(getProduct, (product) => product);
