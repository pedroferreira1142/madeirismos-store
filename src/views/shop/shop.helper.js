import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllProductsRequest} from 'store/products/actions';
import {fetchAllCollectionsRequest} from 'store/collections/actions';
import {CollectionsSelectors} from 'store/collections/selector';
import {getProductsSelector} from 'store/products/selector';

export const useShopHelper = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProductsSelector);
    const collections = useSelector(CollectionsSelectors.getCollections);
    const pending = useSelector(CollectionsSelectors.getPending);

    const [pills, setPills] = React.useState(0);
    const [tabs, setTabs] = React.useState({});
    const [tabsKeys, setTabsKeys] = React.useState([]);

    //  Navbar scroll effect
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

    // service dispatch
    React.useEffect(() => {
        dispatch(fetchAllProductsRequest());
        dispatch(fetchAllCollectionsRequest());
        return () => {
            // cleanup
        };
    }, []);

    React.useEffect(() => {
        collections &&
            setTabs(
                collections.reduce(
                    (acc, collection) => {
                        return {...acc, [collection.title]: collection.products};
                    },
                    {Todos: products}
                )
            );
        setTabsKeys(Object.keys(tabs));
    }, []);

    return {products, collections, pending, pills, tabs, tabsKeys, setPills, navbarEffect};
};
