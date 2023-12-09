import React from 'react';
import {Layout} from 'components/layout/layout';
import {useShopHelper} from './shop.helper';
import {ProductDisplay} from './shop.productDisplay';
import {CollectionsSelectors} from 'store/collections/selector';
import {useSelector} from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css';
import {Container} from 'reactstrap';
import {Loading} from './shop.loading';
import {UserSelectors} from 'store/user/selector';
import {useHistory} from 'react-router-dom';

const Shop = () => {
    const {products, collections, pills, tabsKeys, setPills, navbarEffect} = useShopHelper();
    const pendingCollections = useSelector(CollectionsSelectors.getPending);
    const isLoggedIn = useSelector(UserSelectors.getIsLoggedIn);
    const history = useHistory();

    React.useEffect(() => {
        if (!isLoggedIn) {
            history.push('/index');
        }
    }, [isLoggedIn]);

    React.useEffect(() => {
        navbarEffect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout activeScrollTransperency={false} navBackgroundColor="">
            <div className="wrapper">
                <div className="section">
                    <Container>
                        {pendingCollections ? (
                            <Loading />
                        ) : (
                            <ProductDisplay
                                pendingCollections={pendingCollections}
                                collections={collections}
                                pills={pills}
                                products={products}
                                setPills={setPills}
                                tabsKeys={tabsKeys}
                            />
                        )}
                    </Container>
                </div>
            </div>
        </Layout>
    );
};

export default Shop;
