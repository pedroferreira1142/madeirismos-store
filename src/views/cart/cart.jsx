import React from 'react';
import ReactLoading from 'react-loading';
import {CartItem} from 'components/cart/cartItem';
import {Layout} from 'components/layout/layout';
import {Card, Button, CardTitle, CardBody, Container, ListGroup} from 'reactstrap';
import Block from '../../components/block/block';
import {useCartHelper} from './cart.helper';

export const Cart = () => {
    const {clearCheckout, navbarEffect, checkout, goBackHandler, cartPending} = useCartHelper();

    React.useEffect(() => {
        navbarEffect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout navBackgroundColor={''} activeScrollTransperency={false}>
            <Block className="section">
                <Container>
                    <h2 className="title">Carrinho de compras</h2>
                    {checkout && checkout.lineItems.length > 0 ? (
                        <React.Fragment>
                            <ListGroup flush>
                                {Object.keys(checkout).length > 0 &&
                                    checkout.lineItems.map((item, index) => {
                                        return <CartItem product={item} key={index} />;
                                    })}
                            </ListGroup>
                            <Card>
                                <CardBody>
                                    <CardTitle
                                        tag="h5"
                                        style={{
                                            minHeight: 42,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            maxHeight: 42,
                                            minWidth: 200,
                                            maxWidth: 200,
                                        }}
                                    >
                                        {cartPending ? (
                                            <div style={{marginLeft: '1rem'}}>
                                                <ReactLoading
                                                    type={'spin'}
                                                    color={'grey'}
                                                    width="2.5rem"
                                                    height="2.5rem"
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <strong>Total:</strong> € {checkout.totalPrice}
                                            </>
                                        )}
                                    </CardTitle>
                                    <Block style={{display: 'flex', justifyContent: 'space-around'}}>
                                        <Button onClick={() => window.open(checkout.webUrl)} color="success">
                                            Fazer Checkout
                                        </Button>
                                        <Button onClick={clearCheckout}>Limpar Carrinho</Button>
                                    </Block>
                                </CardBody>
                            </Card>
                        </React.Fragment>
                    ) : (
                        <>
                            <h4>Não tem Produtos adicionados ao carrinho ainda</h4>
                            <p>Explore a nossa loja online, para ver o que lhe agrada</p>
                        </>
                    )}
                    <Button color="info" onClick={goBackHandler}>
                        {'<  Voltar à loja'}
                    </Button>
                </Container>
            </Block>
        </Layout>
    );
};
