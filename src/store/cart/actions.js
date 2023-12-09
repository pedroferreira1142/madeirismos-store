export const CHECKOUT_create_request = '@CHECKOUT/create_request';
export const CHECKOUT_create_sucess = '@CHECKOUT/create_sucess';
export const CHECKOUT_create_failure = '@CHECKOUT/create_failure';

export const CHECKOUT_fetch_request = '@CHECKOUT/fetch_request';
export const CHECKOUT_fetch_sucess = '@CHECKOUT/fetch_sucess';
export const CHECKOUT_fetch_failure = '@CHECKOUT/fetch_failure';

export const CHECKOUT_add_item_request = '@CHECKOUT/add_item_request';
export const CHECKOUT_add_item_sucess = '@CHECKOUT/add_item_sucess';
export const CHECKOUT_add_item_failure = '@CHECKOUT/add_item_failure';

export const CHECKOUT_remove_item_request = '@CHECKOUT/remove_item_request';
export const CHECKOUT_remove_item_sucess = '@CHECKOUT/remove_item_sucess';
export const CHECKOUT_remove_item_failure = '@CHECKOUT/remove_item_failure';

export const CHECKOUT_item_count_request = '@CHECKOUT/item__count_request';
export const CHECKOUT_item_count_sucess = '@CHECKOUT/item__count_sucess';
export const CHECKOUT_item_count_failure = '@CHECKOUT/item__count_failure';

export const CHECKOUT_update_item_quantity_request = '@CHECKOUT/update_item_quantity_request';
export const CHECKOUT_update_item_quantity_success = '@CHECKOUT/update_item_quantity_success';
export const CHECKOUT_update_item_quantity_failure = '@CHECKOUT/update_item_quantity_failure';

export const CHECKOUT_clear_all_request = '@CHECKOUT/clear_all_request';
export const CHECKOUT_clear_all_sucess = '@CHECKOUT/clear_all_sucess';
export const CHECKOUT_clear_all_failure = '@CHECKOUT/clear_all_failure';

export const CHECKOUT_set_cart_visibilty = '@CHECKOUT/set_cart_visibility';

/* clear checkout */
export const clearCheckoutRequest = (payload) => ({
    type: CHECKOUT_clear_all_request,
    payload,
});

export const clearCheckoutSucess = (payload) => ({
    type: CHECKOUT_clear_all_sucess,
    payload,
});

export const clearCheckoutFailure = (payload) => ({
    type: CHECKOUT_clear_all_failure,
    payload,
});

/* create checkout */
export const createCheckoutRequest = () => ({
    type: CHECKOUT_create_request,
});

export const createCheckoutSucess = (payload) => ({
    type: CHECKOUT_create_sucess,
    payload,
});

export const createCheckoutFailure = (payload) => ({
    type: CHECKOUT_create_failure,
    payload,
});

/* fetch checkout */
export const fetchCheckoutRequest = (payload) => ({
    type: CHECKOUT_fetch_request,
    payload,
});

export const fetchCheckoutSucess = (payload) => ({
    type: CHECKOUT_fetch_sucess,
    payload,
});

export const fetchCheckoutFailure = (payload) => ({
    type: CHECKOUT_fetch_failure,
    payload,
});

/* add item to checkout */
export const addItemToCheckoutRequest = (payload) => ({
    type: CHECKOUT_add_item_request,
    payload,
});

export const addItemToCheckoutSucess = (payload) => ({
    type: CHECKOUT_add_item_sucess,
    payload,
});

export const addItemToCheckoutFailure = (payload) => ({
    type: CHECKOUT_add_item_failure,
    payload,
});

/* remove item */
/* checkoutId: string | number, lineItemIds: string[] */
export const removeItemFromCheckoutRequest = (payload) => ({
    type: CHECKOUT_remove_item_request,
    payload,
});

export const removeItemFromCheckoutSucess = (payload) => ({
    type: CHECKOUT_remove_item_sucess,
    payload,
});

export const removeItemFromCheckoutFailure = (payload) => ({
    type: CHECKOUT_remove_item_failure,
    payload,
});

/* item count */

export const itemCountRequest = (payload) => ({
    type: CHECKOUT_item_count_request,
    payload,
});

export const itemCountSucess = (payload) => ({
    type: CHECKOUT_item_count_sucess,
    payload,
});

export const itemCountFailure = (payload) => ({
    type: CHECKOUT_item_count_failure,
    payload,
});

export const updateItemQuantityRequest = (payload) => ({
    type: CHECKOUT_update_item_quantity_request,
    payload,
});

export const updateItemQuantitySuccess = (payload) => ({
    type: CHECKOUT_update_item_quantity_success,
    payload,
});

export const updateItemQuantityFailure = (payload) => ({
    type: CHECKOUT_update_item_quantity_failure,
    payload,
});

/* set cart visibility */
export const setCartVisibility = () => ({
    type: CHECKOUT_set_cart_visibilty,
});
