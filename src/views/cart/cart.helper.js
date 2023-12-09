import React from 'react';
import {useSelector} from 'react-redux';
import {CartSelectors} from 'store/cart/selector';
import {useDispatch} from 'react-redux';
import {clearCheckoutRequest} from 'store/cart/actions';
import confirm from 'reactstrap-confirm';
import {useHistory} from 'react-router';

export const useCartHelper = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const checkout = useSelector(CartSelectors.getCheckout);
    const cartPending = useSelector(CartSelectors.getPending);

    const navbarEffect = () => {
        document.body.classList.add('profile-page');
        document.body.classList.add('sidebar-collapse');
        document.documentElement.classList.remove('nav-open');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove('profile-page');
            document.body.classList.remove('sidebar-collapse');
        };
    };

    /** Clear checkout toast and action */
    const clearCheckout = async () => {
        let confirmClearCheckout = await confirm({
            title: (
                <>
                    <p>
                        Vai remover todos os <strong>produtos</strong> do carrinho de compras.
                    </p>
                </>
            ),
            message: 'Tem a certeza? Vai ser reencaminhado para a loja online.',
            confirmText: 'Confirmar',
            cancelText: 'Cancelar',
            confirmColor: 'primary',
            cancelColor: 'link text-danger',
        });
        if (confirmClearCheckout)
            dispatch(
                clearCheckoutRequest({
                    checkoutId: checkout.id,
                    products: checkout.lineItems.map((product) => ({
                        id: product.id,
                        quantity: 0,
                    })),
                })
            );
        history.push('/shop');
    };

    /** Go back handler */
    const goBackHandler = () => {
        history.push('/shop');
    };
    return {clearCheckout, navbarEffect, checkout, goBackHandler, cartPending};
};
