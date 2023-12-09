import {createSelector} from 'reselect';

const pending = (state) => state.checkout.pending;
const error = (state) => state.checkout.error;
const checkout = (state) => state.checkout.checkout;
const itemCount = (state) => state.checkout.itemCount;
const isCartOpen = (state) => state.checkout.isCartOpen;

const getError = createSelector(error, (error) => error);

const getPending = createSelector(pending, (pending) => pending);

const getCheckout = createSelector(checkout, (checkout) => checkout);

const getItemCount = createSelector(itemCount, (itemCount) => itemCount);

const getIsCartOpen = createSelector(isCartOpen, (isCartOpen) => isCartOpen);

export const CartSelectors = {
    getError,
    getPending,
    getCheckout,
    getItemCount,
    getIsCartOpen,
};
