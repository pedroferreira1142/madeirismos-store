import {UserActionsTypes, UserActions} from './actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {auth} from '../../config/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from 'firebase/auth';
import {toast} from 'react-toastify';

const callToast = (text) =>
    toast.info(text, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    });

const userSignup = async (email, password) => await createUserWithEmailAndPassword(auth, email, password);

const login = async (email, password) => await signInWithEmailAndPassword(auth, email, password);

const logout = async () => await signOut(auth);

const resetPassword = async (email) => await sendPasswordResetEmail(email);

const updateEmail = async (currentUser, email) => currentUser.updateEmail(email);

const updatePassword = (currentUser, password) => currentUser.updatePassword(password);

/**User signup */
function* userSignupSaga(action) {
    try {
        const response = yield call(userSignup, action.payload.email, action.payload.password);
        yield put(UserActions.userSignupSucess(response));
        callToast('Criou uma nova conta com sucesso!');
    } catch (e) {
        callToast(e.message);
    }
}

/**User login */
function* userLoginSaga(action) {
    try {
        const response = yield call(login, action.payload.email, action.payload.password);
        yield put(UserActions.userLoginSucess({user: response.user}));
        callToast(`Fez login com sucesso, com o utilizador ${response.user.email}!`);
    } catch (e) {
        callToast(e.message);
    }
}

/**User logout */
function* userLogoutSaga() {
    try {
        const response = yield call(logout);
        yield put(UserActions.userLogoutSucess(response));
        callToast('Terminou sessão!');
    } catch (e) {
        callToast(e.message);
    }
}

function* UserSaga() {
    yield takeLatest(UserActionsTypes.USER_SIGNUP_REQUEST, userSignupSaga);
    yield takeLatest(UserActionsTypes.USER_LOGIN_REQUEST, userLoginSaga);
    yield takeLatest(UserActionsTypes.USER_LOGOUT_REQUEST, userLogoutSaga);
}

export default UserSaga;
