import {UserActionsTypes} from './actions';

const initialState = {
    user: {},
    error: null,
    pending: true,
    isLoggedIn: false,
    createdAccountWithSucess: false,
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionsTypes.USER_SIGNUP_REQUEST:
            return {...state, pending: true};
        case UserActionsTypes.USER_SIGNUP_SUCCESS:
            return {...state, pending: false, createdAccountWithSucess: true};
        case UserActionsTypes.USER_SIGNUP_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.paylaod.error,
            };
        case UserActionsTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case UserActionsTypes.CREATED_ACCOUNT_STATE:
            return {
                ...state,
                createdAccountWithSucess: action.payload,
            };
        case UserActionsTypes.USER_LOGIN_REQUEST:
            return {...state, pending: true};
        case UserActionsTypes.USER_LOGIN_SUCCESS:
            return {...state, pending: false, user: action.payload.user, isLoggedIn: true};
        case UserActionsTypes.USER_LOGIN_FAILURE:
            return {...state, pending: false, error: action.payload.error};
        case UserActionsTypes.USER_LOGOUT_REQUEST:
            return {...state, pending: true};
        case UserActionsTypes.USER_LOGOUT_SUCCESS:
            return {...state, pending: false, user: {}, isLoggedIn: false};
        case UserActionsTypes.USER_LOGOUT_FAILURE:
            return {...state, pending: false, error: action.payload.error};
        default:
            return {...state};
    }
};

export default UserReducer;
