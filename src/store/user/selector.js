import {createSelector} from 'reselect';

const pending = (state) => state.user.pending;
const error = (state) => state.user.error;
const user = (state) => state.user.user;
const isLoggedIn = (state) => state.user.isLoggedIn;
const accountCreatedWithSuccess = (state) => state.user.createdAccountWithSucess;

const getError = createSelector(error, (error) => error);

const getPending = createSelector(pending, (pending) => pending);

const getUser = createSelector(user, (user) => user);

const getIsLoggedIn = createSelector(isLoggedIn, (isLoggedIn) => isLoggedIn);

const getCreatedAccountWithSucess = createSelector(
    accountCreatedWithSuccess,
    (createdAccountWithSucess) => createdAccountWithSucess
);

export const UserSelectors = {
    getError,
    getPending,
    getUser,
    getIsLoggedIn,
    getCreatedAccountWithSucess,
};
