import {ListGroupItem, Button, Input, FormGroup, Label, Form} from 'reactstrap';
import Block from './../block/block';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCheckoutRequest, updateItemQuantityRequest} from 'store/cart/actions';
import {CartSelectors} from 'store/cart/selector';
import {useState, useEffect} from 'react';

export const CartItem = ({product}) => {
    const dispatch = useDispatch();
    const checkout = useSelector(CartSelectors.getCheckout);
    const [quantityInput, setquantityInput] = useState(product.quantity);

    useEffect(() => {
        dispatch(
            updateItemQuantityRequest({
                checkoutId: checkout.id,
                products: [
                    {
                        id: product.id,
                        quantity: quantityInput,
                    },
                ],
            })
        );
    }, [quantityInput, checkout.id, dispatch, product.id]);

    const onClickRemoveProductFromCheckout = () => {
        dispatch(
            removeItemFromCheckoutRequest({
                checkoutId: checkout.id,
                productIds: [product.id],
            })
        );
    };

    return (
        <ListGroupItem>
            <Block
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Block style={{display: 'flex', alignItems: 'center'}}>
                    <Button
                        className="btn-icon btn-round"
                        color="danger"
                        type="button"
                        size="sm"
                        style={{marginRight: 10}}
                        onClick={() => onClickRemoveProductFromCheckout()}
                    >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </Button>
                    <Block>
                        <img style={{height: 100, width: 100}} src={product.variant.image.src} alt="" />
                    </Block>
                    <Block>
                        <Block>
                            <span style={{marginLeft: 10}}>{product.title}</span>
                        </Block>
                        <Block>
                            <span style={{marginLeft: 10}}>
                                <strong>€ {product.variant.price}</strong>
                            </span>
                        </Block>
                    </Block>
                </Block>

                <Block
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span style={{margin: 'auto'}}>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">
                                    Quant:
                                </Label>
                                <Input
                                    type="number"
                                    value={quantityInput}
                                    onChange={(e) => setquantityInput(parseInt(e.target.value))}
                                    style={{width: 50, padding: 5}}
                                    min="1"
                                />
                            </FormGroup>
                        </Form>
                    </span>
                    <Block style={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            className="btn-icon btn-round"
                            type="button"
                            size="sm"
                            onClick={() => setquantityInput(quantityInput + 1)}
                        >
                            <i className="now-ui-icons ui-1_simple-add"></i>
                        </Button>
                        <Button
                            className="btn-icon btn-round"
                            type="button"
                            size="sm"
                            onClick={() => quantityInput > 1 && setquantityInput(quantityInput - 1)}
                        >
                            <i className="now-ui-icons ui-1_simple-delete"></i>
                        </Button>
                    </Block>
                </Block>
            </Block>
        </ListGroupItem>
    );
};
