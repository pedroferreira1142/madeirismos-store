export const UserActionsTypes = {
    USER_SIGNUP_REQUEST: '@USER_SIGNUP_REQUEST',
    USER_SIGNUP_SUCCESS: '@USER_SIGNUP_SUCCESS',
    USER_SIGNUP_FAILURE: '@USER_SIGNUP_FAILURE',

    // user login
    USER_LOGOUT_REQUEST: '@USER_LOGOUT_REQUEST',
    USER_LOGOUT_SUCCESS: '@USER_LOGOUT_SUCCESS',
    USER_LOGOUT_FAILURE: '@USER_LOGOUT_FAILURE',

    //
    USER_LOGIN_REQUEST: '@USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS: '@USER_LOGIN_SUCCESS',
    USER_LOGIN_FAILURE: '@USER_LOGIN_FAILURE',

    // setup user
    SET_USER: '@SET_USER',

    // set created account stata

    CREATED_ACCOUNT_STATE: '@CREATED_ACCOUNT_STATE',
};

/* user signup */
const userSignupRequest = (payload) => ({
    type: UserActionsTypes.USER_SIGNUP_REQUEST,
    payload,
});

const userSignupSucess = (payload) => ({
    type: UserActionsTypes.USER_SIGNUP_SUCCESS,
    payload,
});

const userSignupFailure = (payload) => ({
    type: UserActionsTypes.USER_SIGNUP_FAILURE,
    payload,
});

/* user login */
const userLoginRequest = (payload) => ({
    type: UserActionsTypes.USER_LOGIN_REQUEST,
    payload,
});

const userLoginSucess = (payload) => ({
    type: UserActionsTypes.USER_LOGIN_SUCCESS,
    payload,
});

const userLoginFailure = (payload) => ({
    type: UserActionsTypes.USER_LOGIN_FAILURE,
    payload,
});

/* user logout */
const userLogoutRequest = (payload) => ({
    type: UserActionsTypes.USER_LOGOUT_REQUEST,
    payload,
});

const userLogoutSucess = (payload) => ({
    type: UserActionsTypes.USER_LOGOUT_SUCCESS,
    payload,
});

const userLogoutFailure = (payload) => ({
    type: UserActionsTypes.USER_LOGOUT_FAILURE,
    payload,
});

const setUser = (payload) => ({
    type: UserActionsTypes.SET_USER,
    payload,
});

const setCreatedAccountState = (payload) => ({
    type: UserActionsTypes.CREATED_ACCOUNT_STATE,
    payload,
});

export const UserActions = {
    userSignupRequest,
    userSignupSucess,
    userSignupFailure,
    userLoginRequest,
    userLoginSucess,
    userLoginFailure,
    setUser,
    userLogoutRequest,
    userLogoutSucess,
    userLogoutFailure,
    setCreatedAccountState,
};
