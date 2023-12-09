import * as actionTypes from './actions';

const initialState = {
    collections: [],
    pending: false,
    error: null,
};

const collectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COLLECTIONS_REQUEST:
            return {...state, pending: true};
        case actionTypes.FETCH_COLLECTIONS_SUCESS:
            return {
                ...state,
                pending: false,
                collections: action.payload.collections,
            };
        case actionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                pending: false,
                collections: [],
                error: action.payload.error,
            };
        default:
            return {...state};
    }
};

export default collectionsReducer;
