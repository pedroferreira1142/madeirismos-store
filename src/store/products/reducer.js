import * as actionTypes from './actions';

const initialState = {
    products: [],
    pending: false,
    error: null,
    id: null,
    product: {},
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_REQUEST:
            return {...state, pending: true};
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload.products,
                error: null,
            };
        case actionTypes.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                pending: false,
                products: [],
                error: action.payload.error,
            };
        case actionTypes.FILTER_PRODUCT_BY_ID:
            return {
                ...state,
                product:
                    state.products.length > 0 && action.payload
                        ? state.products.reduce(
                              (acc, currProduct) => ({
                                  ...acc,
                                  ...(currProduct.id === action.payload && currProduct),
                              }),
                              {}
                          )
                        : {},
            };
        case actionTypes.FETCH_PRODUCT_BY_ID_REQUEST:
            return {...state, pending: true, id: action.payload};
        case actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                pending: false,
                product: action.payload.product,
                error: null,
            };
        case actionTypes.FETCH_PRODUCT_BY_ID_FAILURE:
            return {
                ...state,
                pending: false,
                product: {},
                error: action.payload.error,
            };
        default:
            return {...state};
    }
};

export default productsReducer;
