import useEffect, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../config/firebase';
import {UserActions} from '../store/user/actions';
import {UserSelectors} from 'store/user/selector';

export const UserAuth = () => {
    const [currentUser, setCurrentUser] = useState();
    const dispatch = useDispatch();

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);

    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

    const logout = () => auth.signOut();

    const resetPassword = (email) => auth.sendPasswordResetEmail(email);

    const updateEmail = (email) => currentUser.updateEmail(email);

    const updatePassword = (password) => currentUser.updatePassword(password);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            dispatch(UserActions.setUser({user: user.email, userId: user.uid}));
            setCurrentUser(user);
        });
    }, []);

    return {login, signup, logout, resetPassword, updateEmail, updatePassword};
};
