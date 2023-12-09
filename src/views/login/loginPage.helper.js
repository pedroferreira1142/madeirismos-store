import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UserActions} from 'store/user/actions';
import {UserSelectors} from 'store/user/selector';
import {useHistory} from 'react-router-dom';

export const useLoginPageHelper = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState('');
    const isLoggedIn = useSelector(UserSelectors.getIsLoggedIn);
    const history = useHistory();

    const requestLoginHandler = (e) => {
        e.preventDefault();
        const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && email;
        const isPasswordValid = password.length > 6 && password;

        if (!isEmailValid) {
            setErrorEmail('E-mail inválido');
        } else {
            setErrorEmail('');
        }
        if (!isPasswordValid) {
            setErrorPassword('Senha inválida');
        } else {
            setErrorPassword('');
        }

        if (isEmailValid && isPasswordValid) {
            dispatch(UserActions.userLoginRequest({email, password}));
        }
        setEmail('');
        setPassword('');
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/index');
        }
    }, [isLoggedIn]);

    //  Navbar scroll effect
    const navbarEffect = () => {
        document.body.classList.add('login-page');
        document.body.classList.add('sidebar-collapse');
        document.documentElement.classList.remove('nav-open');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove('login-page');
            document.body.classList.remove('sidebar-collapse');
        };
    };

    return {
        password,
        email,
        errorEmail,
        errorPassword,
        history,
        navbarEffect,
        requestLoginHandler,
        setEmail,
        setPassword,
        onChangeEmail,
        onChangePassword,
    };
};
