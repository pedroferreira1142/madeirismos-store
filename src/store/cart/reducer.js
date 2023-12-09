import * as actionTypes from './actions';

const initialState = {
    itemCount: 0,
    checkoutItems: [],
    checkout: {},
    isCartOpen: false,
    error: null,
    pending: true,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECKOUT_create_request:
            return {...state, pending: true};
        case actionTypes.CHECKOUT_create_sucess:
            localStorage.setItem('checkoutId', action.payload.checkout.id);
            return {
                ...state,
                pending: false,
                checkout: action.payload.checkout,
            };
        case actionTypes.CHECKOUT_create_failure:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };

        case actionTypes.CHECKOUT_fetch_request:
            return {...state, pending: true};
        case actionTypes.CHECKOUT_fetch_sucess:
            return {
                ...state,
                pending: false,
                checkout: action.payload.checkout,
                itemCount: action.payload.checkout.lineItems.length,
                isCartOpen: action.payload.checkout.lineItems.length > 0 && true,
            };
        case actionTypes.CHECKOUT_fetch_failure:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        case actionTypes.CHECKOUT_add_item_request:
            return {
                ...state,
                pending: true,
            };
        case actionTypes.CHECKOUT_add_item_sucess:
            return {
                ...state,
                pending: false,
                checkout: action.payload.checkout,
                itemCount: action.payload.checkout.lineItems.length,
                isCartOpen: true,
            };
        case actionTypes.CHECKOUT_add_item_failure:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        case actionTypes.CHECKOUT_remove_item_request:
            return {
                ...state,
                pending: true,
            };
        case actionTypes.CHECKOUT_remove_item_sucess:
            return {
                ...state,
                pending: false,
                checkout: action.payload.checkout,
                itemCount: action.payload.checkout.lineItems.length,
                isCartOpen: action.payload.checkout.lineItems.length > 0 && true,
            };
        case actionTypes.CHECKOUT_remove_item_failure:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        case actionTypes.CHECKOUT_update_item_quantity_request:
            return {
                ...state,
                pending: false,
            };
        case actionTypes.CHECKOUT_update_item_quantity_success:
            return {
                ...state,
                pending: false,
                checkout: action.payload.checkout,
                itemCount: action.payload.checkout.lineItems.length,
                isCartOpen: action.payload.checkout.lineItems.length > 0 && true,
            };
        case actionTypes.CHECKOUT_update_item_quantity_failure:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        case actionTypes.CHECKOUT_clear_all_request:
            return {
                ...state,
                pending: true,
            };
        case actionTypes.CHECKOUT_clear_all_sucess:
            return {
                ...state,
                pending: false,
                checkout: action.payload.checkout,
                itemCount: action.payload.checkout.lineItems.length,
                isCartOpen: action.payload.checkout.lineItems.length === 0 && false,
            };
        case actionTypes.CHECKOUT_clear_all_failure:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        default:
            return {...state};
    }
};

export default cartReducer;
