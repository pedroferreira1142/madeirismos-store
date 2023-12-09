import React, {useContext} from 'react';
import ReactLoading from 'react-loading';
import {Button} from 'reactstrap';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';
import {CartContext} from 'context/cartContext';
import {useSelector} from 'react-redux';
import {CartSelectors} from 'store/cart/selector';

const ButtonCartIcon = styled(Button)`
    background-color: #2ca8ff;
    position: fixed;
    right: 25px;
    top: 60px;
    color: white;
    border-radius: 50px;
    width: 60px;
    height: 60px;
    padding: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 14px;
    z-index: 1000;
    &:hover {
        background-color: #56b9ff;
        color: white !important;
    }
`;

export const CartIcon = () => {
    const history = useHistory();
    const {itemCount, isCartOpen} = useContext(CartContext);
    const cartPending = useSelector(CartSelectors.getPending);

    return (
        <ButtonCartIcon onClick={() => history.push('/cart')} style={{visibility: isCartOpen ? 'visible' : 'hidden'}}>
            {cartPending ? (
                <ReactLoading type={'spin'} color={'white'} width="1.5rem" height="1.5rem" />
            ) : (
                <>
                    <HiOutlineShoppingCart size="2em" />
                    {itemCount > 0 && itemCount}
                </>
            )}
        </ButtonCartIcon>
    );
};
