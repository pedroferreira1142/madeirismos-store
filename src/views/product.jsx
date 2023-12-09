import React from 'react';
import {useHistory} from 'react-router-dom';
import {Card, CardImg, CardText, CardBody, CardTitle, Button, Container, Row, Col} from 'reactstrap';
import {Layout} from 'components/layout/layout';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProductByIdRequest} from 'store/products/actions';
import {ProductCarousel} from '../components/shop/productCarousel';
import {addItemToCheckoutRequest} from 'store/cart/actions';
import {CartSelectors} from 'store/cart/selector';
import {UserSelectors} from 'store/user/selector';
import {getProductSelector} from 'store/products/selector';

export const Product = (props) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const isLoggedIn = useSelector(UserSelectors.getIsLoggedIn);
    const history = useHistory();

    React.useEffect(() => {
        if (!isLoggedIn) {
            history.push('/index');
        }
    }, [isLoggedIn]);

    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === product.images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? product.images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const search = props.location.search;
    const params = new URLSearchParams(search);
    const productId = params.get('id');
    const dispatch = useDispatch();
    const product = useSelector(getProductSelector);

    React.useEffect(() => {
        dispatch(fetchProductByIdRequest(productId));
    }, []);

    React.useEffect(() => {
        document.body.classList.add('profile-page');
        document.body.classList.add('sidebar-collapse');
        document.documentElement.classList.remove('nav-open');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove('profile-page');
            document.body.classList.remove('sidebar-collapse');
        };
    }, []);

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
    };

    return (
        <Layout navBackgroundColor={''} activeScrollTransperency={false}>
            {product ? (
                <React.Fragment>
                    <div className="section" id="carousel">
                        <Container>
                            <div className="title">
                                <h4>{product.title}</h4>
                            </div>
                            <Row className="justify-content-center">
                                <Col lg="8" md="12">
                                    {product.images && (
                                        <>
                                            <ProductCarousel
                                                activeIndex={activeIndex}
                                                next={next}
                                                previous={previous}
                                                product={product}
                                                onExiting={onExiting}
                                                onExited={onExited}
                                                goToIndex={goToIndex}
                                            />
                                        </>
                                    )}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Container>
                        <Card>
                            <CardImg />

                            <CardBody>
                                <CardTitle tag="h5">Preço: € {product.variants && product.variants[0].price}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <Button onClick={() => onClickAddItemHandler()}>Adicionar ao carrinho</Button>
                            </CardBody>
                        </Card>
                    </Container>
                </React.Fragment>
            ) : (
                <></>
            )}
        </Layout>
    );
};
