import React, {createContext} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {createCheckoutRequest} from 'store/cart/actions';
import {fetchCheckoutRequest} from 'store/cart/actions';
import {CartSelectors} from 'store/cart/selector';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const dispatch = useDispatch();
    const itemCount = useSelector(CartSelectors.getItemCount);
    const isCartOpen = useSelector(CartSelectors.getIsCartOpen);

    React.useEffect(() => {
        localStorage.checkoutId
            ? dispatch(fetchCheckoutRequest(localStorage.checkoutId))
            : dispatch(createCheckoutRequest());
    }, []);
    return (
        <CartContext.Provider
            value={{
                itemCount: itemCount,
                isCartOpen: isCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
