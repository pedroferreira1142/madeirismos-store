import {Button, CardImg, Card, CardTitle, CardFooter, CardBody} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCheckoutRequest} from 'store/cart/actions';
import {CartSelectors} from 'store/cart/selector';

export const ProductGridItem = ({product, onClickSeeProduct}) => {
    const dispatch = useDispatch();
    const checkout = useSelector(CartSelectors.getCheckout);
    const onClickAddItemHandler = () => {
        dispatch(
            addItemToCheckoutRequest({
                checkoutId: checkout.id,
                product: [
                    {
                        variantId: product.variants[0].id,
                        quantity: parseInt(1, 10),
                    },
                ],
            })
        );
        console.log(product.variants[0].id);
    };
    return (
        <Card>
            <CardImg top width="100%" src={product.images[0].src} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardFooter className="text-muted">€ {product.variants[0].price}</CardFooter>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button onClick={onClickSeeProduct}>Ver produto</Button>
                    <Button onClick={() => onClickAddItemHandler()}>Adicionar ao carrinho</Button>
                </div>
            </CardBody>
        </Card>
    );
};
