export const FETCH_PRODUCT_REQUEST = "FECTH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const FILTER_PRODUCT_BY_ID = "FILTER_PRODUCT_BY_ID";
export const FETCH_PRODUCT_BY_ID_REQUEST = "FETCH_PRODUCT_BY_ID_REQUEST";
export const FETCH_PRODUCT_BY_ID_SUCCESS = "FETCH_PRODUCT_BY_ID_SUCCESS";
export const FETCH_PRODUCT_BY_ID_FAILURE = "FETCH_PRODUCT_BY_ID_FAILURE";

export const fetchAllProductsRequest = () => ({ type: FETCH_PRODUCT_REQUEST });

export const fetchAllProductsSucess = (payload) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload,
});

export const fetchAllProductsFailure = (payload) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload,
});

export const filterProductById = (payload) => ({
  type: FILTER_PRODUCT_BY_ID,
  payload,
});

export const fetchProductByIdRequest = (payload) => ({
  type: FETCH_PRODUCT_BY_ID_REQUEST,
  payload,
});

export const fetchProductByIdSucess = (payload) => ({
  type: FETCH_PRODUCT_BY_ID_SUCCESS,
  payload,
});

export const fetchProductByIdFailure = (payload) => ({
  type: FETCH_PRODUCT_BY_ID_FAILURE,
  payload,
});
