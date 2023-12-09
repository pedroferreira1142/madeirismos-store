import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UserActions} from 'store/user/actions';
import {UserSelectors} from 'store/user/selector';
import {useHistory} from 'react-router-dom';

export const useSignupHelper = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState('');
    const [errorPasswordConfirm, setErrorPasswordConfirm] = React.useState('');
    const createdAccountWithSucess = useSelector(UserSelectors.getCreatedAccountWithSucess);
    const history = useHistory();

    const requestLoginHandler = (e) => {
        e.preventDefault();
        const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && email;
        const isPasswordValid = password.length > 6 && password;
        const isPasswordConfirmValid = password.length > 6 && password && passwordConfirm === password;

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

        if (!isPasswordConfirmValid) {
            setErrorPasswordConfirm('Confirmação de Senha inválida');
        } else {
            setErrorPasswordConfirm('');
        }

        if (isEmailValid && isPasswordValid && isPasswordConfirmValid) {
            dispatch(UserActions.userSignupRequest({email, password}));
        }
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    };

    useEffect(() => {
        if (createdAccountWithSucess) {
            history.push('/login');
            dispatch(UserActions.setCreatedAccountState(false));
        }
    }, [createdAccountWithSucess]);

    return {
        password,
        email,
        passwordConfirm,
        errorEmail,
        errorPassword,
        errorPasswordConfirm,
        requestLoginHandler,
        setEmail,
        setPassword,
        onChangeEmail,
        onChangePassword,
        onChangePasswordConfirm,
    };
};
