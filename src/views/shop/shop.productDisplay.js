import React from 'react';
import {TabContent, Row, Col} from 'reactstrap';
import {ProductGrid} from 'components/shop/productGrid';
import {TabSelector} from './shop.tabSelector';

export const ProductDisplay = ({products, collections, pills, tabsKeys, setPills, pendingCollections}) => {
    return (
        <Row>
            <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Os nossos produtos</h4>
                <TabSelector
                    pills={pills}
                    tabsKeys={tabsKeys}
                    setPills={setPills}
                    pendingCollections={pendingCollections}
                />
            </Col>
            <TabContent className="gallery" activeTab={'pills' + pills}>
                {collections && (
                    <ProductGrid
                        pendingCollections={pendingCollections}
                        collections={collections.reduce(
                            (acc, collection) => {
                                return {
                                    ...acc,
                                    [collection.title]: collection.products,
                                };
                            },
                            {Todos: products}
                        )}
                    />
                )}
            </TabContent>
        </Row>
    );
};
