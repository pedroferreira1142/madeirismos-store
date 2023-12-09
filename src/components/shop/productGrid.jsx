import React from 'react';
import {TabPane, Row, Col} from 'reactstrap';
import {ProductGridItem} from './productGridItem';
import {useHistory} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export const ProductGrid = ({collections, pendingCollections}) => {
    const history = useHistory();
    const onClickSeeProduct = (productId) => {
        history.push('/product?id=' + productId);
    };

    return (
        <React.Fragment>
            {collections &&
                Object.keys(collections).map((collectionName, collectionIndex) => (
                    <TabPane
                        tabId={'pills' + collectionIndex}
                        key={`TabPane:${collectionIndex}`}
                        className="ml-auto mr-auto"
                    >
                        <Col className="ml-auto mr-auto" md="10">
                            <Row className="collections" style={{justifyContent: 'center'}}>
                                {collections[collectionName].map((product, index) => (
                                    <Col
                                        md="6"
                                        style={{
                                            display: 'flex',
                                            flexFlow: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        className="img-container-raised"
                                        key={index}
                                    >
                                        {pendingCollections ? (
                                            <Skeleton count={1} width="27.75rem" height="41.625rem" />
                                        ) : (
                                            <ProductGridItem
                                                product={product}
                                                onClickSeeProduct={() => onClickSeeProduct(product.id)}
                                            />
                                        )}
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        ;
                    </TabPane>
                ))}
        </React.Fragment>
    );
};
